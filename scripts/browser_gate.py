"""Optional real-browser checks; requires an existing Python Playwright install."""
import argparse
import json
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "artifacts"

def assert_image_proportions(page, selector):
    """Measure rendered CSS sizes, before rotation, against each decoded image."""
    for image in page.locator(selector).all():
        image.scroll_into_view_if_needed()
        image.evaluate("img => img.decode()")
        sizes = image.evaluate("img => { const css = getComputedStyle(img); return { src:img.getAttribute('src'),width:parseFloat(css.width),height:parseFloat(css.height),naturalWidth:img.naturalWidth,naturalHeight:img.naturalHeight }; }")
        expected = sizes["naturalWidth"] / sizes["naturalHeight"]
        actual = sizes["width"] / sizes["height"]
        assert abs(actual / expected - 1) < 0.01, f"Stretched image: {sizes}"

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--base-url", default="http://127.0.0.1:3210")
    args = parser.parse_args()
    OUTPUT.mkdir(exist_ok=True)
    checks, errors = [], []
    manifest = json.loads((ROOT / "assets/source-manifest.json").read_text(encoding="utf-8-sig"))
    image_count = len(manifest["images"])
    with sync_playwright() as pw:
        browser = pw.chromium.launch(headless=True)
        context = browser.new_context(locale="ko-KR", viewport={"width":1440,"height":1000})
        page = context.new_page()
        page.on("pageerror", lambda error: errors.append(str(error)))
        page.on("requestfailed", lambda request: errors.append(f"Request failed: {request.url}"))
        for width in (1440, 1024, 768, 390, 320):
            for language in ("ko", "en"):
                page.set_viewport_size({"width":width,"height":1000 if width > 650 else 844})
                page.goto(f"{args.base_url}/index.html?lang={language}", wait_until="networkidle")
                assert page.locator("html").get_attribute("lang") == language
                page.locator(".hero-phone img").wait_for()
                overflow = page.evaluate("({width:innerWidth,scroll:document.documentElement.scrollWidth,items:[...document.querySelectorAll('body *')].filter(e=>{const r=e.getBoundingClientRect();return r.width>0&&(r.right>innerWidth+1||r.left < -1)}).slice(0,12).map(e=>({tag:e.tagName,class:e.className,text:e.textContent.slice(0,45)}))})")
                assert overflow["scroll"] <= width + 1, f"Horizontal overflow at {width}px, {language}: {overflow}"
                assert page.locator("h1").inner_text().strip()
                assert_image_proportions(page, ".phone-shell img, .share-screen img, .feature-phone img")
                if width in (1440,390):
                    page.evaluate("scrollTo({top:0,behavior:'instant'})")
                    page.screenshot(path=str(OUTPUT / f"homepage-{language}-{width}.png"),full_page=True)
                    page.screenshot(path=str(OUTPUT / f"hero-{language}-{width}.png"))
                    page.locator("#share").screenshot(path=str(OUTPUT / f"sharing-{language}-{width}.png"), style=".site-header,.skip-link{visibility:hidden!important}")
                checks.append(f"Homepage {language}, {width}px: no horizontal overflow; original image proportions")
        page.set_viewport_size({"width":1440,"height":1000})
        page.goto(f"{args.base_url}/index.html?lang=ko",wait_until="networkidle")
        page.locator(".hero-buttons a[href='#share']").click()
        assert page.url.endswith("#share")
        for language in ("ko", "en"):
            page.locator(f"[data-language='{language}']").click()
            for button in page.locator(".share-screen").all():
                expected_title = button.locator("xpath=..").locator("h3").inner_text()
                button.click()
                assert page.locator("#image-dialog").evaluate("e=>e.open")
                assert page.locator("#dialog-title").inner_text() == expected_title
                assert_image_proportions(page, "#dialog-image")
                page.keyboard.press("Escape")
                page.wait_for_function("!document.body.classList.contains('modal-open')")
        page.locator("[data-language='ko']").click()
        checks.append("Sharing section: primary link and all three screenshots enlarge with Korean and English titles")
        page.locator("[data-feature='checklist']").click()
        assert page.locator("#feature-image").get_attribute("src").endswith("09-checklist.png")
        assert_image_proportions(page, "#feature-image")
        page.locator(".feature-phone").click()
        assert page.locator("#image-dialog").evaluate("e=>e.open")
        assert_image_proportions(page, "#dialog-image")
        page.keyboard.press("Escape")
        assert not page.locator("#image-dialog").evaluate("e=>e.open")
        page.wait_for_function("!document.body.classList.contains('modal-open')")
        page.locator("[data-feature='checklist']").focus()
        page.keyboard.press("End")
        assert page.locator("[data-feature='inbox']").get_attribute("aria-selected") == "true"
        page.keyboard.press("ArrowRight")
        assert page.locator("[data-feature='candidates']").get_attribute("aria-selected") == "true"
        checks.append("Feature tabs: click, keyboard navigation and image enlargement")
        page.locator(".faq-list summary").first.click()
        assert page.locator(".faq-list details").first.evaluate("e=>e.open")
        page.locator("[data-language='en']").click()
        page.reload(wait_until="networkidle")
        assert page.locator("html").get_attribute("lang") == "en"
        page.goto(f"{args.base_url}/index.html",wait_until="networkidle")
        assert page.locator("html").get_attribute("lang") == "en"
        assert "lang=en" in page.locator(".main-nav a[href*='guide.html']").get_attribute("href")
        checks.append("English preference survives reload and propagates to internal links")
        page.goto(f"{args.base_url}/guide.html?lang=en",wait_until="networkidle")
        assert page.locator(".gallery-card").count() == image_count
        page.locator("[data-filter='ai']").click()
        assert page.locator(".gallery-card").count() == 4
        page.locator("[data-filter='share']").click()
        assert page.locator(".gallery-card").count() == 8
        page.locator("#gallery-search").fill("Share a photo")
        assert page.locator(".gallery-card").count() == 1
        page.locator("#gallery-search").fill("")
        page.locator("[data-filter='all']").click()
        page.locator("#gallery-search").fill("checklist")
        assert 0 < page.locator(".gallery-card").count() < image_count
        page.locator(".gallery-card button").first.click()
        assert page.locator("#image-dialog").evaluate("e=>e.open")
        page.locator(".dialog-close").click()
        page.locator("#gallery-search").fill("zzzz-no-matching-screen")
        assert page.locator(".no-results").count() == 1
        page.locator("#gallery-search").fill("")
        page.locator("[data-language='ko']").click()
        assert page.locator(".gallery-card h2").first.inner_text() == "캘린더"
        checks.append(f"Gallery: all {image_count} current entries, filters, search, empty state, enlargement, Korean and English")
        for document in ("guide", "data"):
            for language in ("ko", "en"):
                for width in (1440, 390, 320):
                    page.set_viewport_size({"width":width,"height":844})
                    page.goto(f"{args.base_url}/{document}.html?lang={language}",wait_until="networkidle")
                    assert page.evaluate("document.documentElement.scrollWidth <= innerWidth+1"), f"{document}, {language}, {width}: overflow"
                    if document == "guide":
                        assert_image_proportions(page, ".gallery-card img")
                if document == "guide":
                    page.set_viewport_size({"width":1440,"height":1000})
                    page.screenshot(path=str(OUTPUT / f"gallery-{language}.png"))
            checks.append(f"{document}: Korean and English layouts at 1440px, 390px and 320px")
        page.set_viewport_size({"width":390,"height":844})
        page.goto(f"{args.base_url}/index.html?lang=ko",wait_until="networkidle")
        page.locator(".menu-toggle").click()
        assert page.locator(".menu-toggle").get_attribute("aria-expanded") == "true"
        page.locator(".main-nav a[href='#share']").click()
        assert page.locator(".menu-toggle").get_attribute("aria-expanded") == "false"
        checks.append("Mobile navigation opens and closes after selecting a section")
        page.goto((ROOT / "guide.html").as_uri()+"?lang=en",wait_until="networkidle")
        assert page.locator(".gallery-card").count() == image_count
        assert page.locator("html").get_attribute("lang") == "en"
        checks.append("Local file preview works without an HTTP server")
        assert not errors, errors
        browser.close()
    result = {"status":"passed", "checks":checks, "browser_errors":errors}
    (OUTPUT / "browser-audit.json").write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding="utf-8")
    print(json.dumps(result,ensure_ascii=False,indent=2))

if __name__ == "__main__":
    main()
