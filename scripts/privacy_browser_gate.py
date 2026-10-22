"""Browser acceptance checks for the public privacy and deletion documents."""
import json
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / 'artifacts/privacy-implementation'

def main():
    checks = []
    with sync_playwright() as pw:
        browser = pw.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width':390,'height':844})
        page = context.new_page()
        errors = []
        page.on('pageerror',lambda error: errors.append(str(error)))
        for name in ['privacy.html','delete-account.html']:
            for width in [320,390,768,1440]:
                page.set_viewport_size({'width':width,'height':900})
                for lang in ['ko','en']:
                    page.goto((ROOT/name).as_uri()+'?lang='+lang,wait_until='load')
                    assert page.locator('html').get_attribute('lang') == lang
                    assert page.locator('h1').inner_text().strip()
                    assert page.evaluate('document.documentElement.scrollWidth <= innerWidth + 1')
                    assert page.locator('a[href="privacy.html"]').count() > 0
                    assert page.locator('a[href="delete-account.html"]').count() > 0
                    if name == 'delete-account.html':
                        assert page.locator('a[href^="mailto:"]').count() >= 2
                    if width == 390:
                        page.screenshot(path=str(OUTPUT/f'{name}-{lang}.png'),full_page=True)
                        page.screenshot(path=str(OUTPUT/f'{name}-{lang}-viewport.png'))
                    checks.append({'page':name,'width':width,'language':lang})
            page.get_by_role('button',name='KO',exact=True).click()
            assert page.locator('html').get_attribute('lang') == 'ko'
            page.get_by_role('button',name='EN',exact=True).click()
            assert page.locator('html').get_attribute('lang') == 'en'
        page.goto((ROOT/'privacy.html').as_uri()+'?lang=en')
        page.locator('a[href="delete-account.html"]').first.click()
        assert page.locator('html').get_attribute('lang') == 'en'
        page.goto((ROOT/'privacy.html').as_uri()+'#retention')
        assert page.locator('#retention').is_visible()
        assert not errors, errors
        browser.close()
    (OUTPUT/'browser-verification.json').write_text(json.dumps({'checks':checks,'errors':errors},indent=2),encoding='utf-8')
    print(f'PASS: {len(checks)} privacy/deletion page viewports, language persistence, anchors and email links.')

if __name__ == '__main__': main()
