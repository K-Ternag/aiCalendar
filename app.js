/* All translations and interactions run locally. No analytics or AI requests. */
(() => {
  "use strict";
  const english = {
    previousImage:"Previous image",nextImage:"Next image",swipeHint:"Swipe left or right, or use the arrow keys",contactTitle:"Contact",contactBody:"For app suggestions, collaboration, or help if you have difficulty deleting your account in the app, please email us.",
    navAi:"Service AI",
    navShare:"Share to add",
    shareEyebrow:"From the screen you're already on",
    shareTitle:"A message or a photo.<br><em>It starts with Share.</em>",
    shareDescription:"No need to memorize and retype the date.<br>Choose Kids Calendar from the share sheet<br>to go straight to event entry.",
    shareStep1:"Tap Share on a message or photo",
    shareStep2:"Choose Kids Calendar",
    shareStep3:"Review the events and save",
    shareTextTitle:"Right from your messages",
    shareTextBody:"Choose Kids Calendar from Share to bring in the original message. Basic text analysis fills event details without AI sign-in.",
    shareTextAlt:"Actual Android text share sheet showing Kids Calendar",
    shareImageTitle:"Share a notice photo, too",
    shareImageBody:"Share a photo from your gallery or a notice image you received. Reading events from images requires membership, consent and a valid AI entitlement.",
    shareImageAlt:"Actual Android image share sheet showing Kids Calendar",
    shareReviewTitle:"Review several events together",
    shareReviewBody:"Compare filled titles and dates with the original. Edit the details, choose the events you need and save.",
    shareReviewAlt:"Reviewing book discussion and book exchange drafts from shared text",
    shareNotice:"Share menus vary by app. If Share isn't available, copy the text and use Paste text in Kids Calendar.",
    quickPasteTitle:"Already copied? Paste it",
    quickPasteBody:"Open Paste text, insert your copied message and tap Fill events.",
    quickSelectTitle:"Select just the text you need",
    quickSelectBody:"Use Create event with Kids Calendar from the text selection menu in supported apps.",
    quickShortcutTitle:"Start from the app icon",
    quickShortcutBody:"Long-press the app icon on your home screen and choose Paste text.",
    filterShare:"Sharing & quick entry",
    faqShareQuestion:"How do I add an event from a message?",
    faqShareAnswer:"Tap Share on a message or image and choose Kids Calendar. Review and edit the filled event drafts, then save. If the source app has no Share option, copy the text and use Paste text in Kids Calendar. Photo analysis requires membership, consent and a valid AI entitlement.",
    faqSchoolQuestion:"What kinds of children's plans can I manage?",
    faqSchoolAnswer:"Use it to organize school notices for events such as sports days, school trips and parent-teacher meetings. Bring in a notice photo or a teacher or parent message, then review and save the events you need. Notices vary, so the parent checks the dates, times and things to bring.",
    skip:"Skip to content",brand:"Kids Calendar",homeLabel:"Kids Calendar home",navLabel:"Main navigation",menuLabel:"Toggle navigation",navFeatures:"Features",navWorkflow:"How it works",navGuide:"Explore the app ↗",
    heroEyebrow:"An Android app for your child's school days",heroTitle:"Share a notice.<br><em>Start a plan.</em>",heroDescription:"Texts, KakaoTalk messages and notice photos.<br><strong>Tap Share and choose Kids Calendar.</strong><br>Spend less time retyping dates.<br>Keep the plans you review and things to bring together.",heroPrimary:"See how sharing works",heroSecondary:"Explore the app",heroNote:"Text entry without AI · Photo analysis with service AI",
    sourceLabel:"Texts · KakaoTalk · Notice photos",sourceTitle:"Share → Kids Calendar",sourceDetail:"Start an event from the screen you're on",savedTitle:"Less retyping. Review and save.",savedDetail:"Choose just the events you need.",heroCaption:"Actual app screen · Illustrative events",heroImage:"The current Kids Calendar monthly view with illustrative events",principlesLabel:"Key app principles",principle1:"Start with Share",principle2:"Fill text events without AI",principle3:"Choose drafts, then save",principle4:"Plans and supplies together",
    workflowEyebrow:"Less time copying details",workflowTitle:"Easy to bring in.<br><em>Ready for your review.</em>",workflowDescription:"Use basic analysis for text, service AI for photos.<br>Review filled titles and dates, edit the details,<br>then save your children's plans.",step1Title:"Share or paste",step1Body:"Choose Kids Calendar from a message or photo's Share menu. You can also paste copied text or choose an original from your inbox.",step2Title:"Fill event details",step2Body:"Basic text analysis fills titles and dates without AI sign-in or a model download. Photo analysis requires service AI access.",step3Title:"Compare and edit",step3Body:"Compare each draft with the original and check dates and supplies. Expand details or edit individual drafts.",step4Title:"Save the plans you need",step4Body:"Select and save the drafts you need, even when a message contains several events. Review your calendar and briefings, and check off supplies.",
    gptTitle:"Service AI.<br><em>For school notices.</em>",gptLead:"A school notice. A message from a teacher.<br>Turn event details and things to bring<br>into a plan you can review before school.",gptDescription:"Analyze selected school notice photos and messages with the OpenAI API to prepare event drafts. Start after checking membership, privacy consent, a valid AI entitlement and remaining uses.",gptBenefit1:"Check membership, entitlement and remaining AI uses",gptBenefit2:"Event details and stated supplies from school notices",gptBenefit3:"Extra school-event preparation ideas, only when you ask",gptDocs:"AI data handling information",gptFlowLabel:"Using AI in the app",gptStatus:"Service AI preview",gptConnectionTitle:"Check membership, consent and entitlement",gptConnectionBody:"Review data collection and overseas transfer consent,<br>then check readiness and remaining uses.",gptExample:"“School trip on Friday at 9 am.<br>Please bring a packed lunch and a water bottle.”",gptAnalysis:"Organize details from the selected school notice",fieldTitle:"Event",fieldTitleValue:"School trip",fieldTime:"Time",fieldTimeValue:"9 am",fieldSupplies:"Bring",fieldSuppliesValue:"Packed lunch · Water bottle",gptExampleLabel:"Illustrative workflow · Not an actual AI response",gptReviewTitle:"Review, edit, then save.",gptReviewBody:"AI prepares the draft. You review and save.",gptNotice:"AI results, membership and shared-calendar states are illustrative examples. Live AI calls, Google Play billing, invitation delivery and physical-device behavior remain unverified. Each analysis uses one AI credit, even for multiple events in one request. Reviewing and saving use no additional credits.",
    featuresEyebrow:"For the little things around school life",featuresTitle:"School-day plans.<br><em>A little easier to manage.</em>",featuresTabLabel:"Explore app features",feature1Title:"Several events in one message",feature1Body:"Expand and edit each draft.<br>Save only the events your child needs.",feature2Title:"Check what to bring to school",feature2Body:"A packed lunch for a trip. Supplies for art class.<br>Check them off and share the event as a card.",feature3Title:"Your children's week at a glance",feature3Body:"Review daily and weekly plans.<br>Share a selected day or week's events.",feature4Title:"An inbox for school messages",feature4Body:"Collect KakaoTalk notification originals matching your filters.<br>Choose a school-related message to start reviewing an event.",stageLabel:"An actual app preview",enlargeImage:"Enlarge the app screenshot",stageCaption:"Illustrative data · Tap to enlarge",featureImage:"Reviewing multiple event drafts filled from shared text",galleryDescription:"Explore shared input, service AI, membership, subscriptions and family calendars in current app screens.",galleryLink:"Explore all 44 screens",
    choiceEyebrow:"A way that works for parents",choiceTitle:"Start with text.<br><em>Use service AI for photos.</em>",choiceBody:"Start with basic text analysis.<br>Check AI access when you need analysis.",choiceGptTitle:"Service AI analysis",choiceGptBody:"Prepare event drafts from photos, images and selected text. Check membership, consent, a valid entitlement, analysis readiness and remaining uses.",choiceGptTag:"Check AI access",choiceManualTitle:"Basic text analysis",choiceManualBody:"Fill event details from shared or pasted text without AI sign-in or a model download. Compare with the original, edit and save. Manual entry is also available.",choiceManualTag:"No sign-in needed",
    dataEyebrow:"Parents stay in charge of school-day plans",dataTitle:"Which notice to send.<br><em>Which plan to save.</em>",dataLink:"Read the data handling information",data1Title:"Analysis that you initiate",data1Body:"Selected photos and text are sent through the service server to OpenAI when you start AI analysis. Review data collection and overseas transfer consent first.",data2Title:"Personal and family calendars",data2Body:"Choose a calendar for events and supplies. Shared calendars distinguish editing and read-only member access. Sharing and membership states are illustrative examples.",data3Title:"Collection and analysis are separate",data3Body:"KakaoTalk notification collection and filtering do not invoke AI. The parent selects a school-related original, reviews the draft and saves it.",
    faqEyebrow:"A few more things to know",faqTitle:"Frequently asked questions",faq1Question:"Can I use the app on this website?",faq1Answer:"Kids Calendar is a native Android app. This website introduces the product and its integration: it does not provide web sign-in, AI analysis or event storage. The app is in development and a public download link is not yet available.",faq2Question:"Can I manage my children's plans without AI?",faq2Answer:"Yes. Basic text analysis fills event details from shared or pasted messages, without AI sign-in or a model download. Manual entry is also available. Photo and image analysis requires membership, consent and a valid AI entitlement.",faq3Question:"What do I need for photo analysis?",faq3Answer:"Photo analysis requires membership, data collection and overseas transfer consent, and a valid AI entitlement. Check readiness and remaining daily uses. Each analysis uses one credit; reviewing and saving use no additional credits. Counts and entitlements shown are examples; live billing remains unverified.",faq4Question:"Are school notices saved as events automatically?",faq4Answer:"Analysis produces editable drafts. The parent checks which events the child needs, reviews the date, time, place and supplies, then taps Save. You can select among multiple drafts; unclear details require review.",faq5Question:"Does it read the whole parent chat group?",faq5Answer:"With your permission, Android notification access collects new notification originals matching the chat room or sender name filters you set. It does not read your full conversation history. Collection and filtering neither send message contents to OpenAI nor invoke AI.",faq6Question:"Are the names and events real children's information?",faq6Answer:"All names, events and messages are synthetic. Actual app screens were captured in an emulator with illustrative AI results, membership and shared-calendar states. Live AI calls, billing, invitation delivery and physical-device behavior remain unverified.",
    closingEyebrow:"Read the notice. Then tap Share.",closingTitle:"Start with Share.<br><em>Keep the plan.</em>",closingCta:"Take a look inside",closingNote:"Android app · In development · AI, billing and sharing verification pending",footerTagline:"A little help for your child's school days.",footerData:"Data handling",footerFaq:"FAQ",footerDisclaimer:"An independently developed app. Not an official OpenAI product.",backTop:"Back to top ↑",closeLabel:"Close image",dialogCaption:"Product documentation image · Synthetic example data",
    guideBack:"← Back to the introduction",guideEyebrow:"Explore the school-day planning flow",guideTitle:"School days.<br><em>One plan at a time.</em>",guideBody:"Explore 44 current screens, from sharing messages and photos to service AI access, membership, subscriptions and family calendars. Filter, search or tap an image to enlarge it.",guideNotice:"All names, events and messages are synthetic. These are actual Android app captures with illustrative AI results, membership and shared-calendar states. Live AI calls, Google Play billing, invitation delivery and physical-device behavior remain unverified. Share menus and shortcuts vary by app and device.",searchLabel:"Search app images",searchPlaceholder:"Search calendars, checklists, events…",filterAll:"All",filterCalendar:"Calendar",filterEntry:"Event entry",filterAi:"Entry options & service AI",filterDaily:"Everyday",guideNoResults:"No images match. Try a different search or category.",guideFooter:"44 screens · Updated October 13, 2026 · Illustrative data",returnHome:"Product introduction",dataPageEyebrow:"Data handling information",dataPageTitle:"Your calendar.<br><em>In your hands.</em>",dataPageIntro:"Data handling for selected school notices and messages, personal and shared calendars, and service AI, based on the current app screens.",dataLocalTitle:"01 · Events and checklists",dataLocalBody:"Events require review and explicit saving. Screens show personal and shared calendar selection and editing or read-only member access. Shared states are illustrative; invitation delivery and physical-device behavior remain unverified.",dataAiTitle:"02 · Optional service AI analysis",dataAiBody:"When you start AI analysis, selected text and photos are sent through the service server to OpenAI. Names, contact details and other personal data in the input may also be transmitted; remove or cover unnecessary information. Both data collection and overseas transfer consent are required.",dataAiBody2:"The consent screen states that the service server does not retain input text or photos and that analysis results are available for 24 hours. Extra supply suggestions also send the selected event details. This describes the current app notice; live AI calls remain unverified.",dataAuthTitle:"03 · Membership, subscription and entitlement",dataAuthBody:"Screens show a member nickname, login state, trial or subscription entitlement and remaining AI uses, with subscription, restore, logout and account deletion options. Membership and entitlement states are examples; live Google Play billing remains unverified.",dataKakaoTitle:"04 · KakaoTalk notification originals",dataKakaoBody:"You can grant Android notification access and configure chat room or sender name filters. Matching notification originals are kept in the app. Collection and filtering do not invoke AI or send originals to OpenAI. Analysis starts when you select an original for event review. It is not access to your entire chat history.",dataManualTitle:"05 · Sharing, pasting and basic text analysis",dataManualBody:"By default, shared or pasted text fills event details using on-device rules. This requires no AI connection or model download and does not send the text to OpenAI. Clipboard content is read only when you paste; it is not monitored in the background. SMS notifications are not automatically collected, and events require review and explicit saving. Photo analysis requires membership, consent and a valid AI entitlement.",dataWebsiteTitle:"06 · This introduction website",dataWebsiteBody:"This is a static introduction website. It has no login, AI inference, contact form or calendar database. It uses no analytics scripts or third-party embedded content. Your language preference is saved in this browser’s local storage; it is not submitted to the app developer. GitHub Pages, when used for hosting, processes requests under its own policies.",dataStatusTitle:"07 · Service status",dataStatusBody:"The app is in development. AI results, membership and shared-calendar states are illustrative. Live AI calls, Google Play billing, invitation delivery and physical-device behavior remain unverified. Check membership, consent, entitlement, readiness and remaining uses before photo analysis.",dataPolicyNote:"This page describes current implementation behavior; it is not a complete operational privacy policy. The operator’s details, public contact information and complete retention and deletion procedures must be finalized before public service launch.",dataSourcesTitle:"Official references",dataSourceGpt:"AI access and consent screens",dataSourcePermissions:"Membership and shared-calendar screens",dataSourceGithub:"GitHub privacy statement"
  };
  const korean = {};
  document.querySelectorAll("[data-i18n]").forEach(el => { if (!(el.dataset.i18n in korean)) korean[el.dataset.i18n] = el.innerHTML; });
  const attributes = [["data-i18n-aria","aria-label"],["data-i18n-alt","alt"],["data-i18n-placeholder","placeholder"]];
  for (const [source,target] of attributes) document.querySelectorAll(`[${source}]`).forEach(el => { korean[el.getAttribute(source)] = el.getAttribute(target); });
  const titles = {home:{ko:"키즈캘린더 — 받은 알림을, 바로 일정으로",en:"Kids Calendar — Share a notice, start a plan"},guide:{ko:"화면 둘러보기 — 키즈캘린더",en:"Explore the app — Kids Calendar"},data:{ko:"데이터 처리 안내 — 키즈캘린더",en:"Data handling — Kids Calendar"}};
  const descriptions = {"ko": "문자·카톡·안내문 사진에서 공유하기 → 키즈캘린더. 내용을 확인하고 아이들 일정으로 저장하세요. 문자는 AI 연결 없이, 사진은 서비스 AI로 분석합니다.", "en": "Share texts, KakaoTalk messages and notice photos to Kids Calendar. Review the drafts and save your children's plans. Text entry works without AI; photos require service AI access."};
  let stored; try { stored = localStorage.getItem("kids-calendar-language") || localStorage.getItem("calendar-assistant-language"); } catch (_) { /* Storage can be unavailable for local files. */ }
  const params = new URLSearchParams(location.search);
  const supported = value => value === "ko" || value === "en";
  let language = supported(params.get("lang")) ? params.get("lang") : supported(stored) ? stored : navigator.language.startsWith("en") ? "en" : "ko";
  const pageName = document.body.dataset.page || "home";
  const t = key => language === "en" ? english[key] ?? korean[key] ?? key : korean[key] ?? english[key] ?? key;
  const features = {
    candidates:{file:"35-shared-text-review.png",ko:"여러 일정 선택·검토",en:"Select and review multiple events"},
    checklist:{file:"09-checklist.png",ko:"준비물 체크리스트",en:"Things-to-bring checklist"},
    briefing:{file:"03-briefing.png",ko:"오늘 브리핑",en:"Today’s briefing"},
    inbox:{file:"02-inbox.png",ko:"카카오톡 수집함",en:"KakaoTalk notification inbox"}
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
  function imageTitle(item) { return item.key ? t(item.key) : item[language] || item.title || ""; }
  let imageSequence = [];
  let imageIndex = 0;
  function showImage() {
    const {src,item} = imageSequence[imageIndex];
    activeImage = item;
    dialogTitle.textContent = imageTitle(item); dialogImage.src = src; dialogImage.alt = imageTitle(item);
    dialog.querySelector(".dialog-count").textContent = `${imageIndex + 1} / ${imageSequence.length}`;
  }
  function moveImage(direction) {
    if (!dialog?.open || imageSequence.length < 2) return;
    imageIndex = (imageIndex + direction + imageSequence.length) % imageSequence.length;
    showImage();
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
      dialogImage.animate([{transform:`translateX(${direction * 60}px)`,opacity:.5},{transform:"translateX(0)",opacity:1}],{duration:220,easing:"ease-out"});
    }
  }
  function openImage(src,item,sequence) {
    if (!dialog) return;
    imageSequence = sequence || [...document.querySelectorAll("[data-image]")].map(button => ({src:button.dataset.image,item:button.classList.contains("feature-phone") ? features[activeFeature] : {title:button.dataset.imageTitle,key:button.dataset.imageKey}}));
    imageIndex = imageSequence.findIndex(image => image.src === src);
    if (imageIndex < 0) { imageSequence = [{src,item}]; imageIndex = 0; }
    showImage();
    dialog.showModal(); document.body.classList.add("modal-open");
  }
  dialog?.addEventListener("keydown",event => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault(); moveImage(event.key === "ArrowLeft" ? -1 : 1);
  });
  let dragStart = null;
  const imageWrap = dialog?.querySelector(".dialog-image-wrap");
  function resetDrag() {
    dragStart = null;
    if (dialogImage) dialogImage.style.transform = "";
    imageWrap?.classList.remove("is-dragging");
  }
  imageWrap?.addEventListener("dragstart",event => event.preventDefault());
  imageWrap?.addEventListener("pointerdown",event => {
    if (!event.isPrimary) { resetDrag(); return; }
    if (event.button !== 0 || imageSequence.length < 2) return;
    dialogImage.getAnimations().forEach(animation => animation.cancel());
    dragStart = {x:event.clientX,y:event.clientY,id:event.pointerId};
    imageWrap.setPointerCapture(event.pointerId);
  });
  imageWrap?.addEventListener("pointermove",event => {
    if (!dragStart || event.pointerId !== dragStart.id) return;
    const dx = event.clientX - dragStart.x;
    const dy = event.clientY - dragStart.y;
    if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 10) { resetDrag(); return; }
    imageWrap.classList.add("is-dragging");
    dialogImage.style.transform = `translateX(${dx * .65}px)`;
  });
  imageWrap?.addEventListener("pointerup",event => {
    if (!dragStart || event.pointerId !== dragStart.id) return;
    const dx = event.clientX - dragStart.x;
    const dy = event.clientY - dragStart.y;
    resetDrag();
    if (Math.abs(dx) >= 45 && Math.abs(dx) > Math.abs(dy) * 1.5) moveImage(dx < 0 ? 1 : -1);
  });
  imageWrap?.addEventListener("pointercancel",resetDrag);
  imageWrap?.addEventListener("lostpointercapture",resetDrag);
  document.addEventListener("click",event => {
    const button = event.target.closest("[data-image]"); if (!button) return;
    const current = button.classList.contains("feature-phone") ? features[activeFeature] : {title:button.dataset.imageTitle,key:button.dataset.imageKey};
    openImage(button.dataset.image,current);
  });
  dialog?.querySelector(".dialog-close").addEventListener("click",() => dialog.close());
  dialog?.addEventListener("click",event => { if (event.target !== dialog) return; const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); });
  dialog?.addEventListener("close",() => { resetDrag(); document.body.classList.remove("modal-open"); activeImage = null; dialogImage.removeAttribute("src"); });
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
      button.append(img); button.addEventListener("click",() => openImage(img.getAttribute("src"),item,results.map(result => ({src:`assets/images/${result.file}`,item:result}))));
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
