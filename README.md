# 키즈캘린더 소개 사이트

Soft Minimalism 스타일의 한·영 서비스 소개 사이트입니다. GitHub Pages의 사용자 사이트와 `/저장소이름/` 프로젝트 사이트 모두 상대 경로로 동작합니다. npm 설치, API 키, 서버, 빌드 프레임워크가 필요하지 않습니다.

서비스 소개는 보호자가 가정통신문·학교 알림·학부모 메시지를 아이들 일정과 준비물로 정리하는 사용 흐름을 중심으로 구성했습니다. 현장체험학습, 학부모 상담, 등교 준비물을 한·영 기능 설명과 ChatGPT 연동 예시에 사용합니다. 내부 AI 모델은 약 400MB를 한 번 다운로드한 뒤 ChatGPT 연결·구독 없이 기기에서 분석하는 방식으로 소개합니다. 원문 일정·준비물 추출과 ChatGPT의 선택적 추가 추천을 구분합니다.

## 바로 보기

`index.html`을 브라우저로 엽니다. 상단의 **KO / EN**으로 언어를 바꿀 수 있습니다. 선택한 언어는 브라우저에 저장되며 페이지 이동에도 유지됩니다.

- `index.html`: 서비스 소개, 사용 흐름, 내부 AI 모델·ChatGPT 연결·직접 입력 선택, 주요 기능, FAQ.
- `guide.html`: 현재 소개에 맞는 앱 이미지 30개. 한·영 설명, 검색, 분류, 이미지 확대.
- `data.html`: 현재 구현을 기준으로 한 로컬 저장, 내부 AI 모델과 선택적 ChatGPT 분석의 데이터 처리 안내.
- `assets/images/`: 현재 소개에 사용하는 PNG 원본 30개. 원본을 수정하지 않았습니다.
- `assets/app-icon.png`, `assets/favicon-32.png`, `assets/favicon-48.png`, `assets/apple-touch-icon.png`: 제공한 민트색 달력 아이콘을 로고·브라우저 탭·홈 화면 아이콘에 적용했습니다.
- `신청서_영문소개.txt`: Sign in with ChatGPT 신청서에 사용할 영문 설명.

검토자에게 영어 화면을 바로 보여주려면 게시 주소 뒤에 `?lang=en`을 붙이세요. ChatGPT 설명부터 보여주려면 `?lang=en#chatgpt`를 사용합니다. 이미지 속 앱 UI는 제공된 한국어 원본이며, 사이트와 이미지 제목·설명은 영어로 전환됩니다.

## GitHub Pages 배포

GitHub 저장소는 [K-Ternag/aiCalendar](https://github.com/K-Ternag/aiCalendar)입니다. GitHub Pages 배포가 완료되면 기본 주소는 `https://k-ternag.github.io/aiCalendar/`입니다. `kids-calendar-homepage.zip`은 홈페이지 소스와 배포 설정을 담은 ZIP입니다.

자동 push가 제한되는 환경에서는 일반 PowerShell에서 아래 스크립트를 실행하면 이 폴더의 사이트 파일만 커밋하고 `main`에 push합니다. GitHub 인증이 필요할 수 있습니다. 원격에 다른 커밋이 있으면 확인 없이 덮어쓰지 않고 중단합니다.

```powershell
powershell -ExecutionPolicy Bypass -File D:\personalAppHome\scripts\push_github.ps1
```

### 가장 간단한 방식: 브랜치에서 게시

1. [K-Ternag/aiCalendar](https://github.com/K-Ternag/aiCalendar) 저장소를 엽니다. 별도 저장소를 사용하려면 홈페이지용 저장소를 만듭니다.
2. 이 폴더의 홈페이지 파일을 저장소 루트에 올립니다. `index.html`, `guide.html`, `data.html`, `styles.css`, `app.js`, `.nojekyll`과 `assets/`를 포함해야 합니다. `artifacts/`와 ZIP 파일은 업로드하지 않습니다. 이 방식만 사용할 경우 `.github/`는 업로드하지 않아도 됩니다.
3. 저장소의 **Settings → Pages → Build and deployment → Source → Deploy from a branch**를 선택합니다.
4. **Branch: main**, **Folder: / (root)**를 선택하고 저장합니다.
5. 배포 완료 후 Settings → Pages의 **Visit site**에서 실제 주소를 확인합니다. 프로젝트 사이트는 보통 `https://계정이름.github.io/저장소이름/` 형태입니다.

### 자동 배포 방식: GitHub Actions

소스 전체와 `.github/workflows/deploy-pages.yml`, `scripts/`를 저장소에 올린 뒤 **Settings → Pages → Source → GitHub Actions**를 선택합니다. `main` 브랜치에 변경 사항을 올리면 원본 이미지·링크·영어 번역을 검사하고 공개 파일만 `dist/`에 담아 배포합니다. Actions 탭에서 **Deploy website to GitHub Pages → Run workflow**로 처음 배포를 실행할 수도 있습니다.

`dist/`에는 사이트만 복사되며 README, 검사 스크립트, ZIP과 로컬 검증 자료는 배포 아티팩트에 포함하지 않습니다. GitHub Pages 기본 게시 설정은 [GitHub 공식 문서](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site), 워크플로 설정은 [공식 Actions 안내](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)를 기준으로 작성했습니다.

## 문구와 스타일 수정

한국어는 각 HTML 파일의 `data-i18n` 항목에서, 영어는 `app.js`의 `english` 객체에서 수정합니다. 한국어 기본 문구를 페이지에서 읽어 두므로 두 언어를 왕복 전환해도 원래 한국어 문구로 돌아옵니다. 이미지 설명의 영어 번역은 `scripts/prepare_gallery.py`에 있으며 수정 후 `python scripts\prepare_gallery.py`를 실행하면 `assets/gallery-data.js`를 갱신합니다.

색상, 여백과 화면 크기별 배치는 `styles.css`에 있습니다. 외부 폰트·추적 스크립트·분석 API를 요청하지 않으며, 시스템에 설치된 한글 글꼴을 사용합니다.

## ChatGPT 연동 신청에 사용할 정보

홈페이지는 **Android 앱 소개 URL**입니다. 웹 로그인 화면이나 OAuth callback 주소가 아닙니다. 신청서에는 게시된 실제 주소를 사용하고, 인증 구성 정보는 승인받을 Android 앱의 실제 설정에 맞춰 따로 작성합니다.

연동 소개는 보호자가 선택한 학교 안내문 사진·메시지로 아이들 일정 초안을 채우고, 선택적으로 준비물을 추천하는 경험을 설명합니다. 현재 상태를 **개발 중 / OpenAI 연동 승인 및 실계정·실기기 검증 준비**로 표시합니다. 계정 로그인과 ChatGPT 플랜 기반 AI 이용 권한은 구분하며 승인 완료, 무료 계정 지원, 무제한 사용이나 실계정 검증 완료를 주장하지 않습니다. [OpenAI 연동 개요](https://developers.openai.com/siwc), [신청 안내](https://developers.openai.com/siwc/request-client-id), [계정 인증과 플랜 권한](https://developers.openai.com/siwc/quickstart).

실제 문의 이메일, 운영자 정보와 앱 배포 주소가 제공되지 않아 임의의 값이나 작동하지 않는 다운로드 버튼을 넣지 않았습니다. `data.html`은 기능 기준의 데이터 처리 설명이며 전체 운영 개인정보 처리방침과는 구분합니다.

## 로컬 검사

```powershell
python scripts\check_site.py
node --check app.js
node --check assets\gallery-data.js
python scripts\package_site.py
```

원본 30개 이미지의 SHA-256, 로컬 링크와 페이지 앵커, 영어 번역 누락 및 JavaScript 문법을 검사했습니다. HTTP 서버의 홈페이지 응답도 확인했습니다.

실제 Chromium 브라우저에서도 검사를 완료했습니다. 320·390·768·1024·1440px의 한·영 홈페이지에서 이미지 비율과 가로 넘침을 확인했고, 갤러리 30개 이미지·확대 화면·검색·분류·키보드 탭 조작·언어 유지·모바일 메뉴·로컬 파일 열기 검사도 통과했습니다. 브라우저 오류는 없었습니다. 결과와 화면 캡처는 `artifacts/`에 있으며 배포 ZIP에는 포함하지 않습니다.

아래 검사는 Playwright를 이미 사용할 수 있는 환경에서 선택적으로 재실행할 수 있습니다. 웹사이트 실행에는 Playwright가 필요하지 않습니다.

```powershell
# 터미널 1
python -m http.server 3210 --bind 127.0.0.1
# 터미널 2
python scripts\browser_gate.py
# HTTP 서버 없이 현재 폴더의 파일을 검사할 수도 있습니다.
python scripts\browser_gate.py --base-url file:///D:/personalAppHome
```

이 검사는 320·390·768·1024·1440px 화면, 이미지 원본 비율 유지, 한·영 전환 유지, 기능 탭의 키보드 조작, 이미지 확대, 검색·분류와 모바일 메뉴를 확인합니다. 성공하면 `artifacts/`에 검사 결과와 캡처를 저장합니다.
