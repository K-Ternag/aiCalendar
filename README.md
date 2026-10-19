# 키즈캘 소개 사이트

## 2026년 10월 19일 반영 내용

- 앱 표시 이름을 현재의 **키즈캘**로 맞추고 카카오 가입·로그인 → 별명 → AI 사용 선택 안내를 반영했습니다. AI 없는 문자 분석에도 앱 회원 설정이 필요합니다. 근거: `D:\personalApp\docs\member-first-entry.md`.
- 최신 전달본의 PNG 원본 49장을 SHA-256으로 확인해 반영했습니다. 구글 일정 가져오기 화면을 추가하고 이미지·스크립트·스타일 캐시 버전을 갱신했습니다.
- 첫 화면 바로가기와 구글 일정 가져오기 전용 섹션, FAQ, 데이터 처리 안내를 한·영으로 추가했습니다. `index.html#google-calendar`에서 소개를, `data.html#google-import`에서 처리 범위를 확인할 수 있습니다. 갤러리의 캘린더 분류에서도 새 화면을 찾을 수 있습니다.
- 기기에 동기화된 구글 일정만 개인·공유 캘린더로 복사합니다. 원본은 보존하며 이후 변경은 자동 반영하지 않습니다. 읽기 권한, 회원 설정·이용권·네트워크 조건, 반복 회차 복사, 알림·참석자·첨부파일 제외를 안내합니다.
- 카톡 수집의 확인 필요·일정 등록·건너뜀과 최대 5개 원문 확인, 일별·주별 브리핑, 후보 확인·수정과 준비물 편집, 원문 펼침 유지, AI 백그라운드 분석·사용자 선택형 이어 분석을 소개에 반영했습니다. 이어 분석은 미완료 결과에서 제공될 때 사용자가 선택하며 AI 1회를 추가 사용합니다.
- 근거는 `D:\personalApp\docs\google-calendar-import.md`, `ai-paged-extraction.md`, `registration-clean-flow.md`, `inbox-tabs.md`, `briefing-share.md`, 앱의 구글 가져오기 구현과 전달본입니다. 구글 가져오기는 합성 데이터 검증 기록을 확인했으며 실제 구글 계정·실기기 흐름을 이번 홈페이지 작업에서 검증하지 않았습니다. AI 이어 분석은 앱·서버 구현과 로컬 검사 기준이며 해당 문서는 운영 배포·실계정 검증 완료를 뜻하지 않습니다.

기존 GitHub Pages 프로젝트의 로컬 소스·`dist/`·배포 ZIP을 갱신합니다. 원격 push와 실제 사이트 게시 여부는 별도로 확인해야 합니다.

Soft Minimalism 스타일의 한·영 서비스 소개 사이트입니다. GitHub Pages의 사용자 사이트와 `/저장소이름/` 프로젝트 사이트 모두 상대 경로로 동작합니다. npm 설치, API 키, 서버, 빌드 프레임워크가 필요하지 않습니다.

서비스 소개는 보호자가 가정통신문·학교 알림·학부모 메시지를 아이들 일정과 준비물로 정리하는 사용 흐름을 중심으로 구성했습니다. 현장체험학습, 학부모 상담, 등교 준비물을 한·영 기능 설명과 서비스 AI 예시에 사용합니다. 문자·카톡·이미지의 공유하기에서 키즈캘로 바로 일정 등록을 시작하는 흐름을 첫 화면과 전용 섹션에서 소개합니다. 기본 텍스트 분석은 AI 연결·모델 다운로드 없이 사용할 수 있으며 사진 분석에는 회원·개인정보 처리 동의·유효한 AI 이용권과 분석 준비 상태·남은 횟수 확인이 필요합니다.

## 바로 보기

`index.html`을 브라우저로 엽니다. 상단의 **KO / EN**으로 언어를 바꿀 수 있습니다. 선택한 언어는 브라우저에 저장되며 페이지 이동에도 유지됩니다.

- `index.html`: 서비스 소개, 공유 등록 3단계, 붙여넣기·텍스트 선택·홈 화면 바로가기, 사용 흐름, 기본 텍스트 분석·서비스 AI, 주요 기능, FAQ.
- `guide.html`: 현재 소개에 맞는 앱 이미지 49개. 한·영 설명, 검색, 분류, 이미지 확대.
- `data.html`: 최신 화면을 기준으로 한 개인·공유 캘린더와 서비스 AI의 데이터 처리 안내.
- `assets/images/`: 2026년 10월 19일 전달본의 PNG 원본 49개. 구글 일정 가져오기·서비스 AI·개인정보 동의·회원·구독·가족 공유 캘린더·멤버·초대 화면을 포함합니다.
- `assets/app-icon.png`, `assets/favicon-32.png`, `assets/favicon-48.png`, `assets/apple-touch-icon.png`: 제공한 민트색 달력 아이콘을 로고·브라우저 탭·홈 화면 아이콘에 적용했습니다.
- `신청서_영문소개.txt`: 이전 Sign in with ChatGPT 구상 당시의 참고 문서. 10월 14일 서비스 AI 화면을 설명하는 최신 신청 자료가 아닙니다.

검토자에게 영어 화면을 바로 보여주려면 게시 주소 뒤에 `?lang=en`을 붙이세요. 서비스 AI 설명부터 보여주려면 `?lang=en#chatgpt`를 사용합니다. 이미지 속 앱 UI는 제공된 한국어 원본이며, 사이트와 이미지 제목·설명은 영어로 전환됩니다.

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

한국어는 각 HTML 파일의 `data-i18n` 항목에서, 영어는 `app.js`의 `english` 객체에서 수정합니다. 한국어 기본 문구를 페이지에서 읽어 두므로 두 언어를 왕복 전환해도 원래 한국어 문구로 돌아옵니다. 이미지의 한·영 캡션은 `scripts/prepare_gallery.py`에 있으며 수정 후 `python scripts\prepare_gallery.py`를 실행하면 `assets/gallery-data.js`를 갱신합니다.

최신 이미지 전달본은 아래 명령으로 반영합니다. 매니페스트의 원본 SHA-256을 확인하고 이전 전달본에서 빠진 이미지를 정리합니다. 새 화면 ID가 추가되면 먼저 `scripts/prepare_gallery.py`의 캡션을 추가하세요. 이미지 장수·소개 문구도 전달본에 맞춰 함께 갱신합니다.

```powershell
python scripts\prepare_gallery.py --source-dir D:\personalApp\deliverables\homepage-menu-images-20261004
```

색상, 여백과 화면 크기별 배치는 `styles.css`에 있습니다. 외부 폰트·추적 스크립트·분석 API를 요청하지 않으며, 시스템에 설치된 한글 글꼴을 사용합니다.

## 현재 서비스 설명

2026년 10월 19일 전달본은 OpenAI API를 사용하는 서비스 AI와 구글 일정 가져오기를 안내합니다. 사진 분석에는 회원·개인정보 수집·이용 및 국외 이전 동의·유효한 AI 이용권이 필요하며, 분석 준비 상태와 남은 횟수를 확인합니다. 분석 1건당 AI 1회가 차감되고 확인·저장에는 추가 차감이 없습니다. 이어 분석을 선택하면 AI 1회를 추가 사용합니다. 회원·구독과 개인·가족 공유 캘린더, 멤버 권한·초대 메뉴도 소개합니다.

모든 일정·이름·메시지는 합성 예시입니다. 실제 Android 앱 캡처에 AI 결과와 회원·공유 상태를 설명용 예시로 주입했습니다. 실제 AI 호출·Google Play 결제·초대 발송·실기기 동작은 미검증입니다. 데이터 처리 안내는 현재 앱의 동의 화면과 제공된 사용 안내를 기준으로 작성했습니다.

홈페이지는 정적 Android 앱 소개 사이트입니다. 공개 다운로드 주소는 제공되지 않았으며 기존 문의 이메일을 유지합니다. `data.html`은 기능 기준 데이터 처리 설명이며 전체 운영 개인정보 처리방침과는 구분합니다.

## 로컬 검사

```powershell
python scripts\check_site.py
node --check app.js
node --check assets\gallery-data.js
python scripts\package_site.py
python scripts\create_release.py
```

원본 49개 이미지의 SHA-256, 로컬 링크와 페이지 앵커, 영어 번역 누락 및 JavaScript 문법을 검사합니다.

Chromium 브라우저 검사 스크립트는 320·390·768·1024·1440px의 한·영 홈페이지에서 이미지 비율과 가로 넘침을 확인하고, 구글 가져오기 바로가기·이미지 확대·데이터 안내 이동, 공유 화면 확대·갤러리 49개 이미지·검색·분류·키보드 탭 조작·언어 유지·모바일 메뉴·로컬 파일 열기를 검사합니다. 결과와 화면 캡처는 `artifacts/`에 저장되며 배포 ZIP에는 포함하지 않습니다.

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
