from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]

with sync_playwright() as pw:
    browser = pw.chromium.launch()
    page = browser.new_page(viewport={'width':390,'height':844}, has_touch=True)
    errors = []
    page.on('pageerror', lambda error: errors.append(str(error)))
    def swipe():
        page.mouse.move(280, 380)
        page.mouse.down()
        page.mouse.move(100, 380, steps=8)
        page.mouse.up()
    for lang in ('ko', 'en'):
        page.goto((ROOT / 'guide.html').as_uri() + '?lang=' + lang)
        page.locator('.gallery-card button').first.click()
        assert page.locator('.dialog-count').inner_text() == '1 / 44'
        first = page.locator('#dialog-image').get_attribute('src')
        swipe()
        assert page.locator('.dialog-count').inner_text() == '2 / 44'
        assert page.locator('#dialog-image').get_attribute('src') != first
        page.keyboard.press('ArrowLeft')
        assert page.locator('#dialog-image').get_attribute('src') == first
        page.keyboard.press('ArrowLeft')
        assert page.locator('.dialog-count').inner_text() == '44 / 44'
        cdp = page.context.new_cdp_session(page)
        cdp.send('Input.dispatchTouchEvent', {'type':'touchStart','touchPoints':[{'x':280,'y':380}]})
        cdp.send('Input.dispatchTouchEvent', {'type':'touchMove','touchPoints':[{'x':100,'y':380}]})
        cdp.send('Input.dispatchTouchEvent', {'type':'touchEnd','touchPoints':[]})
        cdp.detach()
        assert page.locator('.dialog-count').inner_text() == '1 / 44'
        assert page.locator('.dialog-previous, .dialog-next, .dialog-hint').count() == 0
        bounds = page.locator('#image-dialog').bounding_box()
        assert bounds['width'] == 390 and bounds['height'] == 844
        page.keyboard.press('Escape')
        page.locator('[data-filter="ai"]').click()
        page.locator('.gallery-card button').first.click()
        assert page.locator('.dialog-count').inner_text() == '1 / 4'
        swipe()
        assert page.locator('.dialog-count').inner_text() == '2 / 4'
        page.keyboard.press('Escape')
        page.locator('#gallery-search').fill('zzzz-no-match')
        assert page.locator('.no-results').count() == 1
    for name in ('index.html', 'guide.html', 'data.html'):
        page.goto((ROOT / name).as_uri() + '?lang=ko')
        assert page.locator('.contact-section a').get_attribute('href') == 'mailto:greatryuhg@gmail.com'
        assert '회원 탈퇴가 어려운 경우' in page.locator('.contact-section').inner_text()
        assert page.evaluate('document.documentElement.scrollWidth <= innerWidth + 1')
    assert not errors, errors
    for width, height in ((390,844),(1440,1000)):
        page.set_viewport_size({'width':width,'height':height})
        page.goto((ROOT / 'guide.html').as_uri() + '?lang=ko')
        page.locator('.gallery-card button').first.click()
        page.locator('#dialog-image').evaluate('img => img.decode()')
        (ROOT / 'artifacts').mkdir(exist_ok=True)
        page.screenshot(path=str(ROOT / 'artifacts' / f'fullscreen-gallery-{width}.png'))
    browser.close()
print('PASS: fullscreen viewer, mouse drag, touch swipe, keyboard, wraparound, filtered gallery, contact and mobile layout in Korean and English')
