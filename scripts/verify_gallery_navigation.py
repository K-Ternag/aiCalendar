from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]

with sync_playwright() as pw:
    browser = pw.chromium.launch()
    page = browser.new_page(viewport={'width':390,'height':844}, has_touch=True)
    errors = []
    page.on('pageerror', lambda error: errors.append(str(error)))
    for lang in ('ko', 'en'):
        page.goto((ROOT / 'guide.html').as_uri() + '?lang=' + lang)
        page.locator('.gallery-card button').first.click()
        assert page.locator('.dialog-count').inner_text() == '1 / 44'
        first = page.locator('#dialog-image').get_attribute('src')
        page.locator('.dialog-next').click()
        assert page.locator('.dialog-count').inner_text() == '2 / 44'
        assert page.locator('#dialog-image').get_attribute('src') != first
        page.keyboard.press('ArrowLeft')
        assert page.locator('#dialog-image').get_attribute('src') == first
        page.locator('.dialog-previous').click()
        assert page.locator('.dialog-count').inner_text() == '44 / 44'
        page.locator('.dialog-image-wrap').evaluate("""el => {
          const fire = (type,x,y) => el.dispatchEvent(new TouchEvent(type,{bubbles:true,touches:type==='touchstart'?[new Touch({identifier:1,target:el,clientX:x,clientY:y})]:[],changedTouches:[new Touch({identifier:1,target:el,clientX:x,clientY:y})]}));
          fire('touchstart',260,200); fire('touchend',100,205);
        }""")
        assert page.locator('.dialog-count').inner_text() == '1 / 44'
        page.keyboard.press('Escape')
        page.locator('[data-filter="ai"]').click()
        page.locator('.gallery-card button').first.click()
        assert page.locator('.dialog-count').inner_text() == '1 / 4'
        page.locator('.dialog-next').click()
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
    browser.close()
print('PASS: buttons, keyboard, swipe, wraparound, filtered gallery, contact and mobile layout in Korean and English')
