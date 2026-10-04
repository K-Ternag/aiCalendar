"""Create a reviewable ZIP containing only the website source and guidance."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
import json

ROOT = Path(__file__).resolve().parents[1]

def main():
    files = [ROOT / name for name in ("index.html", "guide.html", "data.html", "styles.css", "app.js", ".nojekyll", ".gitignore", "README.md", "신청서_영문소개.txt")]
    for directory in ("assets", "scripts", ".github"):
        files.extend(path for path in (ROOT / directory).rglob("*") if path.is_file() and "__pycache__" not in path.parts)
    output = ROOT / "kids-calendar-homepage.zip"
    with ZipFile(output,"w",compression=ZIP_DEFLATED,compresslevel=9) as archive:
        for path in sorted(files):
            archive.write(path,path.relative_to(ROOT).as_posix())
    with ZipFile(output) as archive:
        assert archive.testzip() is None, "Archive integrity check failed"
        assert "index.html" in archive.namelist()
        assert ".github/workflows/deploy-pages.yml" in archive.namelist()
        manifest = json.loads((ROOT / "assets/source-manifest.json").read_text(encoding="utf-8-sig"))
        assert len([name for name in archive.namelist() if name.startswith("assets/images/") and name.endswith(".png")]) == len(manifest["images"])
    print(f"Release ZIP: {output} ({output.stat().st_size:,} bytes, {len(files)} files)")

if __name__ == "__main__":
    main()
