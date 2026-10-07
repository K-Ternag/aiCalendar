"""Check public links, image provenance and English translation coverage."""
import hashlib
import json
import re
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote

ROOT = Path(__file__).resolve().parents[1]

class Page(HTMLParser):
    def __init__(self, file):
        super().__init__()
        self.file = file
        self.links = []
        self.ids = set()
        self.translation_keys = set()
        self.errors = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if "id" in attrs:
            if attrs["id"] in self.ids:
                self.errors.append(f"Duplicate id: {attrs['id']}")
            self.ids.add(attrs["id"])
        for attr in ("href", "src", "data-image"):
            if attrs.get(attr):
                self.links.append(attrs[attr])
        for attr in ("data-i18n", "data-i18n-aria", "data-i18n-alt", "data-i18n-placeholder"):
            if attrs.get(attr):
                self.translation_keys.add(attrs[attr])
        if tag == "img" and "alt" not in attrs:
            self.errors.append("Image has no alternative text attribute")

def main():
    pages = {}
    for file in ROOT.glob("*.html"):
        parsed = Page(file)
        parsed.feed(file.read_text(encoding="utf-8"))
        pages[file.name] = parsed
    errors = []
    for name, page in pages.items():
        errors.extend(f"{name}: {error}" for error in page.errors)
        for raw in page.links:
            url = urlsplit(raw)
            if url.scheme or url.netloc:
                continue
            if url.path.startswith("/"):
                errors.append(f"{name}: root-relative URL breaks project Pages: {raw}")
                continue
            target = ROOT / unquote(url.path) if url.path else page.file
            if not target.is_file():
                errors.append(f"{name}: missing local target: {raw}")
            elif url.fragment and target.name in pages and url.fragment not in pages[target.name].ids:
                errors.append(f"{name}: missing fragment: {raw}")
    js = (ROOT / "app.js").read_text(encoding="utf-8")
    english = js.split("const english = {", 1)[1].split("\n  };", 1)[0]
    keys = set(re.findall(r'(?:^|[,\n])\s*([A-Za-z][A-Za-z0-9]*)\s*:', english))
    for name, page in pages.items():
        for key in page.translation_keys - keys:
            errors.append(f"{name}: missing English translation: {key}")
    manifest = json.loads((ROOT / "assets/source-manifest.json").read_text(encoding="utf-8-sig"))
    for item in manifest["images"]:
        file = ROOT / "assets" / item["file"]
        if not file.is_file() or hashlib.sha256(file.read_bytes()).hexdigest() != item["sha256"]:
            errors.append(f"Original image missing or changed: {file.name}")
    if not manifest["images"] or len(manifest["images"]) != manifest["png_count"]:
        errors.append("Published image count must match the selected image manifest")
    expected_images = {item["file"] for item in manifest["images"]}
    actual_images = {path.relative_to(ROOT / "assets").as_posix() for path in (ROOT / "assets/images").glob("*.png")}
    if actual_images != expected_images:
        errors.append("Published images differ from manifest; check for missing or obsolete screens")
    gallery_js = (ROOT / "assets/gallery-data.js").read_text(encoding="utf-8")
    gallery = json.loads(gallery_js.split("window.CALENDAR_GALLERY = ", 1)[1].strip().removesuffix(";"))
    if {"images/" + item["file"] for item in gallery} != expected_images or len(gallery) != len(expected_images):
        errors.append("Gallery must include every current screenshot exactly once")
    for filename in re.findall(r'file:"([^"]+)"', js):
        if "images/" + filename not in expected_images:
            errors.append(f"Feature tab references an obsolete screenshot: {filename}")
    if errors:
        raise SystemExit("\n".join(errors))
    print(f"PASS: {len(pages)} pages, local links and fragments, English translations, and {len(manifest['images'])} original image hashes.")

if __name__ == "__main__":
    main()
