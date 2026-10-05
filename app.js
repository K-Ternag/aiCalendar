/* All translations and interactions run locally. No analytics or AI requests. */
(() => {
  "use strict";
  const english = {
    choiceLocalTitle:"Internal AI model",
    choiceLocalBody:"Download the approximately 400MB model once to analyze school notices on your device without internet access. Prepare events and stated supplies without a ChatGPT connection or subscription.",
    choiceLocalTag:"On-device analysis",
    faqLocalQuestion:"How do the internal AI model and ChatGPT differ?",
    faqLocalAnswer:"The internal AI model needs a one-time download of approximately 400MB, then analyzes on your device without internet access. It reads text from photos on your device and extracts only events and supplies stated in the original, without extra preparation suggestions. ChatGPT sends selected images or text to OpenAI for analysis and can suggest extra things to bring when you tap the separate action. Both methods require your review and explicit saving.",
    dataInternalTitle:"02 · Internal AI model analysis",
    dataInternalBody:"The internal AI model runs on your device after a one-time download of approximately 400MB. The initial download requires internet access; subsequent analysis works without internet access, a ChatGPT connection or a subscription. Selected text and text read from photos are processed on your device, without sending the original analysis input to an external server.",
    dataInternalBody2:"Photos are read as text on your device before the internal AI model analyzes them. It extracts only events and supplies stated in the original and does not suggest extra things to bring. Review, edit and explicitly save the results to register events. You can turn AI off or delete the model file in Settings; saved events remain.",
    faqSchoolQuestion:"What kinds of children's plans can I manage?",
    faqSchoolAnswer:"Use it to organize school notices for events such as sports days, school trips and parent-teacher meetings. Bring in a notice photo or a teacher or parent message, then review and save the events you need. Notices vary, so the parent checks the dates, times and things to bring.",
    skip:"Skip to content",brand:"Kids Calendar",homeLabel:"Kids Calendar home",navLabel:"Main navigation",menuLabel:"Toggle navigation",navFeatures:"Features",navWorkflow:"How it works",navGuide:"Explore the app ↗",
    heroEyebrow:"An Android app for your child's school days",heroTitle:"School notices.<br><em>Your child's day.</em>",heroDescription:"School notices, parent messages and event reminders.<br>Keep your children's plans and things to bring together.<br>Give busy mornings a little more breathing room.",heroPrimary:"See how it works",heroSecondary:"With your ChatGPT",heroNote:"School-day plans in one place. Reviewed and saved by you.",
    sourceLabel:"A notice from school",sourceTitle:"Friday school trip",sourceDetail:"9 am · Packed lunch · Water bottle",savedTitle:"A little less to remember before school.",savedDetail:"Keep plans and things to bring together.",heroCaption:"Actual app screen · Illustrative events",heroImage:"Kids Calendar’s monthly calendar in Soft Minimalism, with illustrative events",principlesLabel:"Key app principles",principle1:"Plans from school notices",principle2:"Your choice of AI",principle3:"Review, then save",principle4:"Your children's plans, on-device",
    workflowEyebrow:"A little less busywork for parents",workflowTitle:"Bring in the notice.<br><em>Check your child's plan.</em>",workflowDescription:"Event dates, meeting times and things to bring.<br>Spend less time copying school notices.<br>Review the details, then save the plan.",step1Title:"Bring in a school notice",step1Body:"Choose a photo of a school notice, paste or share a teacher or parent message, or select an original from your KakaoTalk inbox.",step2Title:"Organize plans and supplies",step2Body:"Use the internal AI model or your ChatGPT to prepare the event title, date, time, place and supplies stated in the notice. Multiple school events become separate drafts.",step3Title:"Review your child's plans",step3Body:"Check which events your child will attend, review the dates and times, edit details and select only the drafts you need.",step4Title:"Save and get ready for school",step4Body:"Tap Save to add events to your calendar. Check off today's supplies and see your children's plans for the week.",
    gptTitle:"Your ChatGPT.<br><em>For school days.</em>",gptLead:"A school notice. A message from a teacher.<br>Turn event details and things to bring<br>into a plan you can review before school.",gptDescription:"We're preparing an in-app experience that connects the parent's own ChatGPT account and creates event drafts from school notice photos and messages they select. Photos are sent as images; text is sent as the original input.",gptBenefit1:"Familiar sign-in with the parent's own account",gptBenefit2:"Event details and stated supplies from school notices",gptBenefit3:"Extra school-event preparation ideas, only when you ask",gptDocs:"Official Sign in with ChatGPT guide",gptFlowLabel:"The in-app connection experience",gptStatus:"Integration in development",gptConnectionTitle:"Connect your ChatGPT",gptConnectionBody:"Sign in through the system browser<br>and review the app’s permissions.",gptExample:"“School trip on Friday at 9 am.<br>Please bring a packed lunch and a water bottle.”",gptAnalysis:"Organize details from the selected school notice",fieldTitle:"Event",fieldTitleValue:"School trip",fieldTime:"Time",fieldTimeValue:"9 am",fieldSupplies:"Bring",fieldSuppliesValue:"Packed lunch · Water bottle",gptExampleLabel:"Illustrative workflow · Not an actual AI response",gptReviewTitle:"Review, edit, then save.",gptReviewBody:"AI prepares the draft. You review and save.",gptNotice:"The app is in development. OpenAI integration approval and real-account and physical-device verification are pending. Account sign-in and ChatGPT plan usage require their respective permissions. Eligible subscriptions, app authorization and usage limits apply; requests may count toward your plan usage.",
    featuresEyebrow:"For the little things around school life",featuresTitle:"School-day plans.<br><em>A little easier to manage.</em>",featuresTabLabel:"Explore app features",feature1Title:"School events, one at a time",feature1Body:"Several dates in one school notice?<br>Choose, review and save the events your child needs.",feature2Title:"Check what to bring to school",feature2Body:"A packed lunch for a trip. Supplies for art class.<br>Check them off and share the event as a card.",feature3Title:"Your children's week at a glance",feature3Body:"Review school events and parent-teacher meetings.<br>Keep saved plans closer with home screen widgets.",feature4Title:"An inbox for school messages",feature4Body:"Collect KakaoTalk notification originals matching your filters.<br>Choose a school-related message to start reviewing an event.",stageLabel:"An actual app preview",enlargeImage:"Enlarge the app screenshot",stageCaption:"Illustrative data · Tap to enlarge",featureImage:"Actual app screen for selecting and reviewing multiple event drafts",galleryDescription:"Explore the calendar, checklists, sharing cards and widgets you can use to keep school-day plans in order.",galleryLink:"Explore all 30 screens",
    choiceEyebrow:"A way that works for parents",choiceTitle:"Your AI.<br><em>Your choice.</em>",choiceBody:"The internal AI model on your device,<br>your ChatGPT connection, or manual entry.<br>Choose a way that feels familiar.",choiceGptTitle:"Connect your ChatGPT",choiceGptBody:"Send selected school notice photos and messages to OpenAI to prepare event drafts. Request extra preparation ideas when needed. An eligible account and app authorization are required.",choiceGptTag:"In development",choiceManualTitle:"Use without AI",choiceManualBody:"Manage your children's events with manual entry and basic autofill. Your calendar works without an AI connection or model download.",choiceManualTag:"Manual entry",
    dataEyebrow:"Parents stay in charge of school-day plans",dataTitle:"Which notice to send.<br><em>Which plan to save.</em>",dataLink:"Read the data handling information",data1Title:"Analysis that you initiate",data1Body:"The internal AI model analyzes selected notices on your device without sending the original input to a server. With ChatGPT, selected photos and text are sent to OpenAI. Data transfer and usage are explained before the first connection.",data2Title:"Your children's plans, stored on-device",data2Body:"Your children's events and supplies checklists are managed in local app storage. Disconnecting ChatGPT deletes the connection tokens.",data3Title:"Collection and analysis are separate",data3Body:"KakaoTalk notification collection and filtering do not invoke AI. The parent selects a school-related original, reviews the draft and saves it.",
    faqEyebrow:"A few more things to know",faqTitle:"Frequently asked questions",faq1Question:"Can I use the app on this website?",faq1Answer:"Kids Calendar is a native Android app. This website introduces the product and its integration: it does not provide web sign-in, AI analysis or event storage. The app is in development and a public download link is not yet available.",faq2Question:"Can I manage my children's plans without ChatGPT?",faq2Answer:"Yes. Download the internal AI model to prepare event drafts on your device without a ChatGPT connection or subscription. You can also use manual entry and basic autofill without AI.",faq3Question:"Can I use a free ChatGPT account?",faq3Answer:"The integration requires an eligible subscription and approved app permissions. Current official guidance describes plan usage for eligible Plus and Pro users; free-account access is not guaranteed. Availability and limits depend on OpenAI policy and your account. This app’s integration approval and verification are pending.",faq4Question:"Are school notices saved as events automatically?",faq4Answer:"Analysis produces editable drafts. The parent checks which events the child needs, reviews the date, time, place and supplies, then taps Save. You can select among multiple drafts; unclear details require review.",faq5Question:"Does it read the whole parent chat group?",faq5Answer:"With your permission, Android notification access collects new notification originals matching the chat room or sender name filters you set. It does not read your full conversation history. Collection and filtering neither send message contents to OpenAI nor invoke AI.",faq6Question:"Are the names and events real children's information?",faq6Answer:"All data is illustrative. The screens demonstrate flows you can use for school-day planning and also contain general example events. App screens were captured in an emulator and do not prove successful ChatGPT authentication or image analysis. Sharing cards and widgets use the app's actual rendering code.",
    closingEyebrow:"A little less to remember before school",closingTitle:"Plans for school.<br><em>Calmer mornings.</em>",closingCta:"Take a look inside",closingNote:"Android app · In development · ChatGPT approval and verification pending",footerTagline:"A little help for your child's school days.",footerData:"Data handling",footerFaq:"FAQ",footerDisclaimer:"An independently developed app. Not an official OpenAI product.",backTop:"Back to top ↑",closeLabel:"Close image",dialogCaption:"Product documentation image · Synthetic example data",
    guideBack:"← Back to the introduction",guideEyebrow:"Explore the school-day planning flow",guideTitle:"School days.<br><em>One plan at a time.</em>",guideBody:"Explore 30 images showing features you can use for school events, supplies checklists, sharing and widgets. Screens also include general example events to demonstrate the flow. Choose a category or search, then tap an image to enlarge it.",guideNotice:"All names, events and messages are synthetic examples. Screens were captured in an Android emulator. AI and candidate screens use example states and do not verify live ChatGPT sign-in or analysis. Widgets and sharing cards are rendered images; the sample notice is illustrative source material.",searchLabel:"Search app images",searchPlaceholder:"Search calendars, checklists, events…",filterAll:"All",filterCalendar:"Calendar",filterEntry:"Event entry",filterAi:"AI",filterDaily:"Everyday",guideNoResults:"No images match. Try a different search or category.",guideFooter:"30 images · Captured October 4, 2026 · Illustrative data",returnHome:"Product introduction",dataPageEyebrow:"Data handling information",dataPageTitle:"Your calendar.<br><em>In your hands.</em>",dataPageIntro:"How the current Android implementation handles school notices and messages brought in by parents, their children's events, the internal AI model and the optional ChatGPT connection.",dataLocalTitle:"01 · Events and checklists",dataLocalBody:"Calendar entries and checklists are managed in the Android app’s local storage. Every event requires explicit saving after review. External calendar synchronization and background automatic event registration are not currently provided.",dataAiTitle:"03 · Optional ChatGPT analysis",dataAiBody:"When you initiate analysis using ChatGPT, the selected original text or photo is sent to OpenAI. Before the first connection, the app explains this transfer and possible ChatGPT plan usage. Connecting an account does not mean that all saved events or notification originals are sent for analysis.",dataAiBody2:"GPT photo analysis sends the image itself, rather than an OCR transcript. Stated supplies are included in event extraction. Additional preparation suggestions are requested only when you tap the corresponding action, and are labeled as AI suggestions.",dataAuthTitle:"04 · Account connection and disconnection",dataAuthBody:"Sign-in takes place in the system browser. The app does not ask for your ChatGPT password or an API key. Connection credentials are encrypted using Android Keystore and stored in app-private storage. Disconnecting deletes the connection tokens; stored calendar entries remain.",dataKakaoTitle:"05 · KakaoTalk notification originals",dataKakaoBody:"You can grant Android notification access and configure chat room or sender name filters. Matching notification originals are kept in the app. Collection and filtering do not invoke AI or send originals to OpenAI. Analysis starts when you select an original for event review. It is not access to your entire chat history.",dataManualTitle:"06 · Manual entry without AI",dataManualBody:"You can manage events with manual entry and basic autofill without connecting ChatGPT or downloading the internal AI model. Using the app without AI does not run AI analysis or recommendations. Events you review and explicitly save are managed in local app storage.",dataWebsiteTitle:"07 · This introduction website",dataWebsiteBody:"This is a static introduction website. It has no login, AI inference, contact form or calendar database. It uses no analytics scripts or third-party embedded content. Your language preference is saved in this browser’s local storage; it is not submitted to the app developer. GitHub Pages, when used for hosting, processes requests under its own policies.",dataStatusTitle:"08 · Service status",dataStatusBody:"The app is in development. OpenAI integration approval and real-account and physical-device verification remain pending. Authentication permission does not by itself grant ChatGPT plan inference permission. Approved integration scope, account eligibility and usage limits will apply.",dataPolicyNote:"This page describes current implementation behavior; it is not a complete operational privacy policy. The operator’s details, public contact information and complete retention and deletion procedures must be finalized before public service launch.",dataSourcesTitle:"Official references",dataSourceGpt:"Sign in with ChatGPT overview",dataSourcePermissions:"ChatGPT sign-in and plan permissions",dataSourceGithub:"GitHub privacy statement"
  };
  const korean = {};
  document.querySelectorAll("[data-i18n]").forEach(el => { if (!(el.dataset.i18n in korean)) korean[el.dataset.i18n] = el.innerHTML; });
  const attributes = [["data-i18n-aria","aria-label"],["data-i18n-alt","alt"],["data-i18n-placeholder","placeholder"]];
  for (const [source,target] of attributes) document.querySelectorAll(`[${source}]`).forEach(el => { korean[el.getAttribute(source)] = el.getAttribute(target); });
  const titles = {home:{ko:"키즈캘린더 — 학교 알림을, 아이 일정으로",en:"Kids Calendar — School notices, your child's plans"},guide:{ko:"화면 둘러보기 — 키즈캘린더",en:"Explore the app — Kids Calendar"},data:{ko:"데이터 처리 안내 — 키즈캘린더",en:"Data handling — Kids Calendar"}};
  const descriptions = {ko:"키즈캘린더는 가정통신문·학교 알림·학부모 메시지를 아이들 일정과 준비물로 정리하는 Android 앱입니다. 보호자가 확인하고 저장합니다.",en:"Kids Calendar helps parents organize their children's school events, notices and things to bring. Review drafts from selected photos and messages, then save the plans you need."};
  let stored; try { stored = localStorage.getItem("kids-calendar-language") || localStorage.getItem("calendar-assistant-language"); } catch (_) { /* Storage can be unavailable for local files. */ }
  const params = new URLSearchParams(location.search);
  const supported = value => value === "ko" || value === "en";
  let language = supported(params.get("lang")) ? params.get("lang") : supported(stored) ? stored : navigator.language.startsWith("en") ? "en" : "ko";
  const pageName = document.body.dataset.page || "home";
  const t = key => language === "en" ? english[key] ?? korean[key] ?? key : korean[key] ?? english[key] ?? key;
  const features = {
    candidates:{file:"28-multiple-candidates.png",ko:"여러 일정 선택·검토",en:"Select and review multiple events"},
    checklist:{file:"07-checklist.png",ko:"준비물 체크리스트",en:"Things-to-bring checklist"},
    briefing:{file:"17-today-briefing.png",ko:"오늘 브리핑",en:"Today’s briefing"},
    inbox:{file:"12-inbox.png",ko:"카카오톡 수집함",en:"KakaoTalk notification inbox"}
  };
  let activeFeature = "candidates";
  const featureImage = document.getElementById("feature-image");
  function updateFeature(key) {
    activeFeature = key;
    const feature = features[key];
    if (!featureImage || !feature) return;
    const src = `assets/images/${feature.file}`;
    featureImage.src = src;
    featureImage.alt = feature[language];
    const imageButton = featureImage.closest("button");
    imageButton.dataset.image = src;
    imageButton.dataset.imageTitle = feature[language];
    document.querySelectorAll("[data-feature]").forEach(button => { const active = button.dataset.feature === key; button.setAttribute("aria-selected",String(active)); button.tabIndex = active ? 0 : -1; });
    document.getElementById("feature-panel").setAttribute("aria-labelledby",`tab-${key}`);
  }
  document.querySelectorAll("[data-feature]").forEach(button => {
    button.addEventListener("click",() => updateFeature(button.dataset.feature));
    button.addEventListener("keydown",event => {
      const keys = Object.keys(features); let index = keys.indexOf(activeFeature);
      if (["ArrowDown","ArrowRight"].includes(event.key)) index = (index + 1) % keys.length;
      else if (["ArrowUp","ArrowLeft"].includes(event.key)) index = (index + keys.length - 1) % keys.length;
      else if (event.key === "Home") index = 0;
      else if (event.key === "End") index = keys.length - 1;
      else return;
      event.preventDefault(); updateFeature(keys[index]); document.querySelector(`[data-feature="${keys[index]}"]`).focus();
    });
  });
  function setLanguage(next, persist = false) {
    language = next; document.documentElement.lang = next;
    document.querySelectorAll("[data-i18n]").forEach(el => { el.innerHTML = t(el.dataset.i18n); });
    for (const [source,target] of attributes) document.querySelectorAll(`[${source}]`).forEach(el => { el.setAttribute(target,t(el.getAttribute(source))); });
    document.querySelectorAll("[data-language]").forEach(button => button.setAttribute("aria-pressed",String(button.dataset.language === next)));
    document.title = titles[pageName][next];
    document.querySelector('meta[name="description"]')?.setAttribute("content",descriptions[next]);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content",document.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content",descriptions[next]);
    document.querySelector('meta[property="og:locale"]')?.setAttribute("content",next === "ko" ? "ko_KR" : "en_US");
    document.querySelector('meta[property="og:locale:alternate"]')?.setAttribute("content",next === "ko" ? "en_US" : "ko_KR");
    document.querySelectorAll('a[href]').forEach(anchor => {
      const raw = anchor.getAttribute("href");
      if (!/^(index|guide|data)\.html(?:[?#]|$)/.test(raw)) return;
      const url = new URL(raw,location.href); url.searchParams.set("lang",next);
      anchor.setAttribute("href",url.pathname.split("/").pop()+url.search+url.hash);
    });
    if (persist) { try { localStorage.setItem("kids-calendar-language",next); } catch (_) {} }
    try { const url = new URL(location.href); url.searchParams.set("lang",next); history.replaceState(null,"",url); } catch (_) {}
    updateFeature(activeFeature);
    if (typeof renderGallery === "function") renderGallery();
    if (dialog?.open && activeImage) { dialogTitle.textContent = imageTitle(activeImage); dialogImage.alt = imageTitle(activeImage); }
  }
  document.querySelectorAll("[data-language]").forEach(button => button.addEventListener("click",() => setLanguage(button.dataset.language,true)));
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("main-nav");
  function closeMenu() { nav?.classList.remove("is-open"); menuToggle?.setAttribute("aria-expanded","false"); }
  menuToggle?.addEventListener("click",() => { const open = menuToggle.getAttribute("aria-expanded") !== "true"; menuToggle.setAttribute("aria-expanded",String(open)); nav?.classList.toggle("is-open",open); });
  nav?.querySelectorAll("a").forEach(anchor => anchor.addEventListener("click",closeMenu));
  document.addEventListener("keydown",event => { if (event.key === "Escape") closeMenu(); });
  const dialog = document.getElementById("image-dialog");
  const dialogTitle = document.getElementById("dialog-title");
  const dialogImage = document.getElementById("dialog-image");
  let activeImage = null;
  function imageTitle(item) { return item[language] || item.title || ""; }
  function openImage(src,item) {
    if (!dialog) return;
    activeImage = item;
    dialogTitle.textContent = imageTitle(item); dialogImage.src = src; dialogImage.alt = imageTitle(item);
    dialog.showModal(); document.body.classList.add("modal-open");
  }
  document.addEventListener("click",event => {
    const button = event.target.closest("[data-image]"); if (!button) return;
    const current = button.classList.contains("feature-phone") ? features[activeFeature] : {title:button.dataset.imageTitle};
    openImage(button.dataset.image,current);
  });
  dialog?.querySelector(".dialog-close").addEventListener("click",() => dialog.close());
  dialog?.addEventListener("click",event => { if (event.target !== dialog) return; const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); });
  dialog?.addEventListener("close",() => { document.body.classList.remove("modal-open"); activeImage = null; dialogImage.removeAttribute("src"); });
  const gallery = document.getElementById("gallery-grid");
  const search = document.getElementById("gallery-search");
  let filter = "all";
  function renderGallery() {
    if (!gallery || !window.CALENDAR_GALLERY) return;
    const term = (search?.value || "").trim().toLocaleLowerCase();
    const results = window.CALENDAR_GALLERY.filter(item => (filter === "all" || item.category === filter) && [item.ko,item.en,item.captionKo,item.captionEn,item.groupKo,item.groupEn].join(" ").toLocaleLowerCase().includes(term));
    gallery.replaceChildren();
    for (const item of results) {
      const card = document.createElement("article"); card.className = "gallery-card";
      const button = document.createElement("button"); button.type = "button"; button.className = "screenshot-button";
      button.setAttribute("aria-label",`${t("enlargeImage")}: ${item[language]}`);
      const img = document.createElement("img"); img.src = `assets/images/${item.file}`; img.alt = item[language]; img.width = item.width; img.height = item.height; img.loading = "lazy";
      button.append(img); button.addEventListener("click",() => openImage(img.getAttribute("src"),item));
      const group = document.createElement("span"); group.className = "gallery-group"; group.textContent = item[language === "en" ? "groupEn" : "groupKo"];
      const title = document.createElement("h2"); title.textContent = item[language];
      const caption = document.createElement("p"); caption.textContent = item[language === "en" ? "captionEn" : "captionKo"];
      card.append(button,group,title,caption); gallery.append(card);
    }
    if (!results.length) { const p = document.createElement("p"); p.className = "no-results"; p.textContent = t("guideNoResults"); gallery.append(p); }
    const total = window.CALENDAR_GALLERY.length;
    const count = document.getElementById("result-count"); if (count) count.textContent = language === "ko" ? `전체 ${total}개 중 ${results.length}개 화면` : `${results.length} of ${total} images`;
  }
  search?.addEventListener("input",renderGallery);
  document.querySelectorAll("[data-filter]").forEach(button => button.addEventListener("click",() => {
    filter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach(el => el.setAttribute("aria-pressed",String(el === button)));
    renderGallery();
  }));
  setLanguage(language);
})();
