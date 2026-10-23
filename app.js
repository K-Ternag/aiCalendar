/* All translations and interactions run locally. No analytics or AI requests. */
(() => {
  "use strict";
  const english = {
    navPrivacy:"Privacy policy",
    navDeletion:"Account deletion",
    policyEffective:"Effective date · October 23, 2026",
    privacyTitle:"Privacy policy",
    privacyIntro:"How Kids Calendar handles personal data, retention, deletion and your rights.",
    privacySection1:"<h2>01 · Operator and scope</h2><p>YunaTech operates Kids Calendar. Contact <a href=\"mailto:greatryuhg@gmail.com\">greatryuhg@gmail.com</a> for privacy questions, access, correction, deletion, restriction or withdrawal requests. This policy covers membership, personal and shared calendars, subscriptions, optional AI features and this introduction website.</p>",
    privacySection2:"<h2>02 · Data and purposes</h2><ul><li><strong>Membership:</strong> Kakao login identifiers, service member ID, entered nickname, timezone and account status support registration and authentication. The login implementation requests no additional email or profile-photo scope.</li><li><strong>Calendars:</strong> Calendar names, members, permissions and invitations; event titles, dates, times, locations, notes, supplies, repetition, checks, reminders and source identifiers support storage, synchronization and sharing. Personal calendars also synchronize to the service server.</li><li><strong>Subscriptions:</strong> Product and verification information, purchase tokens and hashes, entitlement, expiry and renewal status support billing verification. Tokens are encrypted on the server. We do not directly receive card numbers or payment passwords.</li><li><strong>AI and operations:</strong> Selected inputs, results, request status, usage counts, consent choices, document versions, timestamps, error codes and minimal operational records support requested features, duplicate prevention and security.</li><li><strong>Support:</strong> Sender email, message, necessary account-verification information and handling history support your request.</li></ul>",
    privacySection3:"<h2>03 · Permissions and optional features</h2><p>App use requires membership and a nickname; AI is optional. Notification access, calendar read access, selected photos, notifications and exact alarms serve their respective optional features. Denying or withdrawing a permission in Android settings restricts that feature.</p><p>Kakao capture encrypts matching new notification text, sender, chat-room metadata and reception time on the device. It does not collect full chat history or automatically capture SMS notifications. Filtering alone sends nothing to AI. Clipboard access occurs only when you paste; basic text analysis runs on the device.</p>",
    privacySection4:"<h2>04 · Google Calendar import</h2><p>Calendar read permission reads Google calendars synchronized to the device. No separate Google OAuth or calendar write permission is requested; originals remain unchanged. After confirmation, selected event titles, periods, timezone, all-day status, locations, notes and duplicate-detection source keys are copied to the service. Unselected event content and Google account addresses are not sent to the server. Original reminders, attendees and attachments are excluded; later source changes are not automatically synchronized.</p>",
    privacySection5:"<h2>05 · Optional AI and consent</h2><p>Requested AI analysis sends selected text or photos, reference dates, timezone and necessary context through Supabase to the OpenAI API. Supply suggestions also send selected event details. Inputs can contain children’s, teachers’ or other guardians’ names and contact details. Select only what is necessary and remove or obscure unnecessary personal data yourself. Selecting an image reference area may still transmit the original image.</p><p>Collection/use and overseas transfer require separate affirmative consent. Withdraw through the AI privacy information in settings to stop subsequent AI transfers. Manual entry and on-device basic text analysis remain available. Withdrawal does not retroactively undo completed transfers. Review and explicitly save results to create events.</p>",
    privacySection6:"<h2>06 · Providers, sharing and overseas processing</h2><ul><li><strong>Supabase Pte. Ltd.:</strong> Authentication, calendar storage/sync, consent and usage management, AI forwarding and result retrieval. Contact privacy@supabase.io.</li><li><strong>OpenAI OpCo, LLC:</strong> Requested event/supply analysis and security/abuse prevention. Contact privacy@openai.com. Processing can occur in the US and published subprocessor/affiliate locations.</li><li><strong>Kakao and Google Play:</strong> Login and payment services; their own policies also govern their processing.</li><li><strong>Shared members:</strong> Members of calendars you select can access events, notes and supplies within their permissions. Exports you share outside the app are processed by recipients you choose.</li></ul><p>Overseas transfers use HTTPS during membership services or consented AI requests. Published Supabase execution regions and OpenAI processing locations cover multiple countries; this does not mean every request reaches every country. See the app’s overseas-transfer disclosure and official references for countries, purposes, data, timing, retention and refusal options.</p><p><a href=\"https://supabase.com/legal/customer-resources/data-processing-addendum\">Supabase DPA</a> · <a href=\"https://supabase.com/legal/customer-resources/subprocessor-list\">Supabase subprocessors</a> · <a href=\"https://supabase.com/docs/guides/functions/regional-invocation\">Execution regions</a> · <a href=\"https://developers.openai.com/api/docs/guides/your-data\">OpenAI data controls</a> · <a href=\"https://openai.com/policies/sub-processor-list/\">OpenAI subprocessors/affiliates</a></p><p>Published Supabase Edge execution locations include South Korea, Japan, India, Singapore, Australia, Canada, the US, Germany, Switzerland, Ireland, the UK, France and Brazil. OpenAI disclosures can also involve subprocessors/affiliates in South Korea, Japan, Singapore, India, Indonesia, Malaysia, Australia, Canada, Brazil, Mexico, Ireland, the UK, France, Germany, Italy, the Netherlands, Norway, Poland, Spain, Sweden, Switzerland, Finland, the UAE, South Africa and the Philippines, in addition to the US. Corporate domicile and processing location can differ. The membership/calendar database is stored in Tokyo, Japan (ap-northeast-1). Database storage and Edge request execution locations may differ.</p>",
    privacySection7:"<h2>07 · Retention periods</h2><ul><li>Membership and personal events: during use; deleted on account deletion.</li><li>Active shared events: while the shared calendar exists; author-account links are removed on account deletion. Request removal of personal details in the content separately.</li><li>Device notification/pasted originals and duplicate records: expire after seven days and are removed when cleanup runs. A powered-off device cleans up when processing resumes. Saved events are separate.</li><li>Service AI text/photos: request processing only, without storing originals in the service database. Results are retrievable for 24 hours, then periodically cleared.</li><li>General error, request and usage metadata: 90 days from occurrence; account-scoped records scheduled for deletion are removed earlier on account deletion. Minimal provenance identifiers needed to edit saved events and prevent duplicates remain with those events; results, input hashes and detailed model usage are removed.</li><li>Applicable contract, payment and supply evidence: five years; general privacy-support cases: 90 days after closure; complaint/dispute records: three years after closure. Only necessary fields are stored separately for those purposes.</li><li>Personal-data access/action records in the service administrator tool: one year, or two where legally required. No event or analysis originals are logged.</li></ul><p>OpenAI requests use store=false. Separately, abuse-monitoring logs may contain inputs/outputs for up to 30 days by default, subject to legal/safety exceptions and account settings. </p><p>The Supabase Free plan retains API and database hosting logs for one day, separately from the service-database operational records listed above. The current plan does not include automatic backups or point-in-time recovery (PITR) available to the operator for restoration. Provider-internal security and infrastructure processing is governed by the Supabase DPA; this does not mean all provider copies are immediately erased. <a href=\"https://supabase.com/pricing\">Plan-specific logs and backups</a> · <a href=\"https://supabase.com/docs/guides/platform/backups\">Backup information</a></p>",
    privacySection8:"<h2>08 · Deletion and shared events</h2><p>Account deletion removes account/personal-calendar data, consent and AI-use records designated for deletion and blocks access. Transfer owned shared calendars first or explicitly choose closure. Closure deletes their server events for all members. Events in another owner’s or transferred shared calendar remain, with author/checker account links removed. This does not automatically anonymize names in content.</p><p>Electronic records are deleted to prevent recovery. Minimal records retained for a stated purpose are separated and removed on expiry; failed cleanup is retried. Account data and reminders on the current device are cleared; other devices clear local data on their next connection that can confirm deletion. Exported copies, independently retained recipient copies and Google originals cannot be remotely erased by this action.</p><p><a href=\"delete-account.html\">Request account or personal-data deletion</a>. Uninstalling, signing out and withdrawing AI consent do not delete membership. Cancel Google Play subscriptions separately.</p>",
    privacySection9:"<h2>09 · Your rights and representatives</h2><p>Request access, correction, deletion, restriction, consent withdrawal or removal of your/your child’s personal details from shared content. We verify identity or lawful representation as necessary, and explain results and any restrictions. A member ID helps locate an account but does not alone prove identity. Never send passwords, one-time codes or authentication tokens.</p><p>Kids Calendar supports parents and guardians. It is not offered on the premise of direct registration by children under 14. Guardian-submitted notices can still contain children’s or other people’s data; include only what is needed. AI output does not independently make consequential decisions; users review and save it.</p>",
    privacySection10:"<h2>10 · Safeguards</h2><p>Membership/AI traffic uses HTTPS and account/calendar authorization checks. Device originals, credentials and pending payloads, and server purchase tokens use purpose-specific encryption. The service does not offer end-to-end encryption for the entire event database. Android automatic app backup is disabled. Operational secret keys are excluded from public website/app code and access is restricted.</p>",
    privacySection11:"<h2>11 · Introduction website</h2><p>This static site has no login, inference, contact form or calendar database, and uses no tracking scripts or third-party embeds. Only language preference is stored in browser local storage. Messages you send via email links pass through email services. Website requests and hosting records on GitHub Pages are subject to <a href=\"https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement\">GitHub’s policy</a>.</p>",
    privacySection12:"<h2>12 · Effective date and updates</h2><p>This policy takes effect on October 23, 2026. Changes to purposes, data, recipients or retention will be reflected here and in relevant app notices, with fresh consent where required.</p>",
    deletionTitle:"Account and personal-data deletion",
    deletionIntro:"Request deletion by email without reinstalling the app.",
    deletionSection1:"<h2>01 · Request account deletion</h2><p>Email YunaTech to request deletion of your Kids Calendar account and associated personal data. You do not need to reinstall the app.</p><p><a class=\"text-link\" href=\"mailto:greatryuhg@gmail.com?subject=Kids%20Calendar%20account%20deletion%20request\">Send a deletion request to greatryuhg@gmail.com</a></p><ol><li>Use “Kids Calendar account deletion request” as the subject and specify whole-account or specific-data deletion.</li><li>Include your member ID if known; otherwise say you do not know it. Mention any shared-calendar ownership transfer/closure or specific personal details you want removed.</li><li>The operator will explain necessary identity/representation checks, process deletion after verification and reply with the result. Member ID and nickname alone do not authorize deletion.</li></ol><p>Do not send passwords, one-time codes, authentication tokens, card numbers or ID-document copies. Any additional verification procedure will be explained first.</p>",
    deletionSection2:"<h2>02 · Delete in the app</h2><p>Calendar ⋮ → Settings → Membership &amp; subscription → Account management → Delete account. Transfer owned shared calendars or explicitly choose closure first. Separately cancel recurring payments in <a href=\"https://play.google.com/store/account/subscriptions\">Google Play subscription management</a>.</p>",
    deletionSection3:"<h2>03 · Deletion scope and retained records</h2><p>Data designated for deletion includes membership, personal events, related consents and AI-use records. Active shared events remain with author links removed; request deletion of personal details in their content separately. Closed shared calendars have their server events deleted. Applicable transaction evidence is retained for five years, complaint/dispute records for three years after closure, general operational records for 90 days, and administrator access records for the applicable legal period, using only necessary fields.</p><p>The current device clears account data/reminders; other devices clear them on their next connection that can confirm deletion. Google originals and previously exported copies are separate. See <a href=\"privacy.html#retention\">privacy-policy retention periods</a> for full details and external-provider conditions.</p>",
    onboardingBody:"Complete Kakao sign-up or sign-in, set a nickname and choose whether to use AI. The app then guides you on the calendar itself. Choose Start without AI to use basic text analysis and manual entry. Shared input resumes after membership setup.",
    onboardingTitle:"Start with Kakao sign-in",
    navGoogle:"Google Calendar import",
    googleEyebrow:"From Google Calendar to Kids Calendar",
    googleTitle:"Plans you already have.<br><em>In your family calendar.</em>",
    googleLead:"Choose Google events synced to your device<br>and copy them into a personal or shared calendar.<br>Keep school plans and family appointments together.",
    googleStep1Title:"Choose a calendar and date range",
    googleStep1Body:"Open Settings → My calendars & sharing → Import Google events. Allow calendar read access, then choose the source, date range and destination.",
    googleStep2Title:"Review the events to import",
    googleStep2Body:"Select the events you need. Titles, dates, times, places and notes are copied. Repeating events become individual occurrences within your chosen range.",
    googleStep3Title:"Save to a personal or family calendar",
    googleStep3Body:"Confirm the destination and tap Import. Events saved to a shared calendar are visible to its members. Membership setup, an eligible entitlement and a network connection are required.",
    googleScope:"Only events synced to this device can be imported. Google originals stay unchanged; later changes and deletions are not synced. Google reminders, attendees and attachments are not copied.",
    googleImageTitle:"Import Google Calendar events",
    googleImageAlt:"Selecting three device-synced Google events to import into a family calendar",
    googleCaption:"Actual app screen · Synthetic events · Tap to enlarge",
    googleDataLink:"See imported data and permissions",
    faqGoogleQuestion:"Does Google Calendar stay in sync?",
    faqGoogleAnswer:"The current feature copies selected Google events already synced to your device. Events that exist only in your Google account cannot be imported until they are synced to this device. Originals stay unchanged; later edits, deletions and repetitions outside the chosen range are not applied automatically. Reminders are not copied, so set any reminders you need on imported events.",
    aiBackgroundTitle:"Analysis continues while you use other apps",
    aiBackgroundBody:"AI analysis continues when you switch apps or lock the screen. Return to your draft from the progress notification. Closing the app may interrupt analysis; review and save the results yourself.",
    aiContinueTitle:"Choose whether to analyze the rest",
    aiContinueBody:"When an incomplete result offers continuation, finish with the current results or choose to analyze the remaining events. Continuing uses one additional AI credit and keeps existing drafts and edits. No extra analysis or charge starts automatically.",
    dataGoogleTitle:"06 · Google Calendar import",
    dataGoogleBody:"Calendar read access is used to view Google calendars synced to this Android device. No separate Google sign-in or calendar write permission is requested, and originals are not modified. After selection and explicit confirmation, titles, time ranges, time zones, all-day status, places and notes are copied into the member’s personal or shared calendar. Members of the destination shared calendar can see imported events.",
    dataGoogleBody2:"Unselected event contents and Google account addresses are not sent to the server. Preview duplicate checks use anonymized source keys. Original reminders, attendees, attachments, meeting responses and colors are not copied; imported events have no reminders. Repetitions are saved as individual occurrences in the chosen range, with no later Google updates applied automatically. Duplicate detection depends on stable source identifiers within the same installation; it is not guaranteed after reinstallation or on another device.",
    dataGoogleStatus:"The screen uses synthetic events. App records document device-calendar, UI and storage checks with synthetic data. The full import flow with a real Google account on a physical device still requires verification.",
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
    workflowEyebrow:"Less time copying details",workflowTitle:"Easy to bring in.<br><em>Ready for your review.</em>",workflowDescription:"Use basic analysis for text, service AI for photos.<br>Review filled titles and dates, edit the details,<br>then save your children's plans.",step1Title:"Share or paste",step1Body:"Choose Kids Calendar from a message or photo's Share menu. You can also paste copied text or choose an original from your inbox.",step2Title:"Fill event details",step2Body:"Basic text analysis fills titles and dates without AI sign-in or a model download. Photo analysis requires service AI access.",step3Title:"Compare and edit",step3Body:"Compare dates and supplies with the original. Edit each draft; expanded source text stays open during the same entry session.",step4Title:"Save the plans you need",step4Body:"Select and save the drafts you need, even when a message contains several events. Review your calendar and briefings, and check off supplies.",
    gptTitle:"Service AI.<br><em>For school notices.</em>",gptLead:"A school notice. A message from a teacher.<br>Turn event details and things to bring<br>into a plan you can review before school.",gptDescription:"Analyze selected school notice photos and messages with the OpenAI API to prepare event drafts. Start after checking membership, privacy consent, a valid AI entitlement and remaining uses.",gptBenefit1:"Check membership, entitlement and remaining AI uses",gptBenefit2:"Event details and stated supplies from school notices",gptBenefit3:"Extra school-event preparation ideas, only when you ask",gptDocs:"AI data handling information",gptFlowLabel:"Using AI in the app",gptStatus:"Service AI preview",gptConnectionTitle:"Check membership, consent and entitlement",gptConnectionBody:"Review data collection and overseas transfer consent,<br>then check readiness and remaining uses.",gptExample:"“School trip on Friday at 9 am.<br>Please bring a packed lunch and a water bottle.”",gptAnalysis:"Organize details from the selected school notice",fieldTitle:"Event",fieldTitleValue:"School trip",fieldTime:"Time",fieldTimeValue:"9 am",fieldSupplies:"Bring",fieldSuppliesValue:"Packed lunch · Water bottle",gptExampleLabel:"Illustrative workflow · Not an actual AI response",gptReviewTitle:"Review, edit, then save.",gptReviewBody:"AI prepares the draft. You review and save.",gptNotice:"AI results, membership and shared-calendar states are illustrative examples. Live AI calls, Google Play billing, invitation delivery and physical-device behavior remain unverified. Each analysis uses one AI credit, even for multiple events in one request. Reviewing and saving use no additional credits.",
    featuresEyebrow:"For the little things around school life",featuresTitle:"School-day plans.<br><em>A little easier to manage.</em>",featuresTabLabel:"Explore app features",feature1Title:"Several events in one message",feature1Body:"Review dates and supplies in each draft.<br>Compare with the original and save the events you need.",feature2Title:"Check what to bring to school",feature2Body:"A packed lunch for a trip. Supplies for art class.<br>Check them off and share the event as a card.",feature3Title:"Your children's week at a glance",feature3Body:"See daily or weekly plans and event counts.<br>Move between dates or share the selected period.",feature4Title:"An inbox for school messages",feature4Body:"Manage originals in Needs review, Registered and Skipped.<br>Review up to five messages at a time.",stageLabel:"An actual app preview",enlargeImage:"Enlarge the app screenshot",stageCaption:"Illustrative data · Tap to enlarge",featureImage:"Reviewing multiple event drafts filled from shared text",galleryDescription:"Explore Google Calendar import, service AI, membership, subscriptions and family calendars in current app screens.",galleryLink:"Explore all 49 screens",
    choiceEyebrow:"A way that works for parents",choiceTitle:"Start with text.<br><em>Use service AI for photos.</em>",choiceBody:"Start with basic text analysis.<br>Check AI access when you need analysis.",choiceGptTitle:"Service AI analysis",choiceGptBody:"Prepare event drafts from photos, images and selected text. Check membership, consent, a valid entitlement, analysis readiness and remaining uses.",choiceGptTag:"Check AI access",choiceManualTitle:"Basic text analysis",choiceManualBody:"With Start without AI, basic analysis fills event details from shared or pasted text. Compare with the original, edit and save, or enter events manually. Membership setup is required to use the app.",choiceManualTag:"No AI connection needed",
    dataEyebrow:"Parents stay in charge of school-day plans",dataTitle:"Which notice to send.<br><em>Which plan to save.</em>",dataLink:"Read the data handling information",data1Title:"Analysis that you initiate",data1Body:"Selected photos and text are sent through the service server to OpenAI when you start AI analysis. Review data collection and overseas transfer consent first.",data2Title:"Personal and family calendars",data2Body:"Choose a calendar for events and supplies. Shared calendars distinguish editing and read-only member access. Sharing and membership states are illustrative examples.",data3Title:"Collection and analysis are separate",data3Body:"KakaoTalk notification collection and filtering do not invoke AI. The parent selects a school-related original, reviews the draft and saves it.",
    faqEyebrow:"A few more things to know",faqTitle:"Frequently asked questions",faq1Question:"Can I use the app on this website?",faq1Answer:"Kids Calendar is a native Android app. This website introduces the product and its integration: it does not provide web sign-in, AI analysis or event storage. The app is in development and a public download link is not yet available.",faq2Question:"Can I manage my children's plans without AI?",faq2Answer:"Yes. Kakao sign-up or sign-in and initial setup are required, but you can choose Start without AI. Use basic text analysis for shared or pasted messages, or enter events manually. Basic analysis needs no AI connection or model download; photo analysis requires consent and a valid AI entitlement.",faq3Question:"What do I need for photo analysis?",faq3Answer:"Photo analysis requires membership, data collection and overseas transfer consent, and a valid AI entitlement. Check readiness and remaining daily uses. Each analysis uses one credit; reviewing and saving use no additional credits. Counts and entitlements shown are examples; live billing remains unverified.",faq4Question:"Are school notices saved as events automatically?",faq4Answer:"Analysis produces editable drafts. The parent checks which events the child needs, reviews the date, time, place and supplies, then taps Save. You can select among multiple drafts; unclear details require review.",faq5Question:"Does it read the whole parent chat group?",faq5Answer:"With your permission, Android notification access collects new notification originals matching the chat room or sender name filters you set. It does not read your full conversation history. Collection and filtering neither send message contents to OpenAI nor invoke AI.",faq6Question:"Are the names and events real children's information?",faq6Answer:"All names, events and messages are synthetic. Actual app screens were captured in an emulator with illustrative AI results, membership and shared-calendar states. Live AI calls, billing, invitation delivery and physical-device behavior remain unverified.",
    closingEyebrow:"Read the notice. Then tap Share.",closingTitle:"Start with Share.<br><em>Keep the plan.</em>",closingCta:"Take a look inside",closingNote:"Android app · In development · AI, billing and sharing verification pending",footerTagline:"A little help for your child's school days.",footerData:"Data handling",footerFaq:"FAQ",footerDisclaimer:"An independently developed app. Not an official OpenAI product.",backTop:"Back to top ↑",closeLabel:"Close image",dialogCaption:"Product documentation image · Synthetic example data",
    guideBack:"← Back to the introduction",guideEyebrow:"Explore the school-day planning flow",guideTitle:"School days.<br><em>One plan at a time.</em>",guideBody:"Explore 49 current screens, from Google Calendar import to text and photo entry, service AI, membership, subscriptions and family calendars. Filter, search or tap an image to enlarge it.",guideNotice:"All names, events and messages are synthetic. These are actual Android app captures with illustrative AI results, membership and shared-calendar states. Live AI calls, Google Play billing, invitation delivery and physical-device behavior remain unverified. Share menus and shortcuts vary by app and device.",searchLabel:"Search app images",searchPlaceholder:"Search calendars, checklists, events…",filterAll:"All",filterCalendar:"Calendar",filterEntry:"Event entry",filterAi:"Entry options & service AI",filterDaily:"Everyday",guideNoResults:"No images match. Try a different search or category.",guideFooter:"49 screens · Updated October 19, 2026 · Illustrative data",returnHome:"Product introduction",dataPageEyebrow:"Data handling information",dataPageTitle:"Your calendar.<br><em>In your hands.</em>",dataPageIntro:"Data handling for selected notices and messages, personal and shared calendars, Google Calendar import and service AI, based on the current app implementation and screens.",dataLocalTitle:"01 · Events and checklists",dataLocalBody:"Events require review and explicit saving. Screens show personal and shared calendar selection and editing or read-only member access. Shared states are illustrative; invitation delivery and physical-device behavior remain unverified.",dataAiTitle:"02 · Optional service AI analysis",dataAiBody:"When you start AI analysis, selected text and photos are sent through the service server to OpenAI. Names, contact details and other personal data in the input may also be transmitted; remove or cover unnecessary information. Both data collection and overseas transfer consent are required.",dataAiBody2:"The consent screen states that the service server does not retain input text or photos and that analysis results are available for 24 hours. Extra supply suggestions also send the selected event details. This describes the current app notice; live AI calls remain unverified.",dataAuthTitle:"03 · Membership, subscription and entitlement",dataAuthBody:"Kakao sign-up or sign-in, a nickname and an AI-use choice are required before using the app. Start without AI is available. Membership screens show trial or subscription entitlements, remaining AI uses, a copyable support member ID, subscription and restore options, logout and account deletion. Displayed states are illustrative; the full live Kakao sign-in and Google Play billing flows require separate verification.",dataKakaoTitle:"04 · KakaoTalk notification originals",dataKakaoBody:"You can grant Android notification access and configure chat room or sender name filters. Matching notification originals are kept in the app. Collection and filtering do not invoke AI or send originals to OpenAI. Analysis starts when you select an original for event review. It is not access to your entire chat history.",dataManualTitle:"05 · Sharing, pasting and basic text analysis",dataManualBody:"With Start without AI or AI use turned off, shared or pasted text fills event details using on-device rules. This requires no AI connection or model download and does not send the text to OpenAI. Clipboard content is read only when you paste; it is not monitored in the background. SMS notifications are not automatically collected, and events require review and explicit saving. Photo analysis requires membership, consent and a valid AI entitlement.",dataWebsiteTitle:"07 · This introduction website",dataWebsiteBody:"This is a static introduction website. It has no login, AI inference, contact form or calendar database. It uses no analytics scripts or third-party embedded content. Your language preference is saved in this browser’s local storage; it is not submitted to the app developer. GitHub Pages, when used for hosting, processes requests under its own policies.",dataStatusTitle:"08 · Service status",dataStatusBody:"The app is in development. AI results, membership and shared-calendar states are illustrative. Live AI calls, Google Play billing, invitation delivery and physical-device behavior remain unverified. Check membership, consent, entitlement, readiness and remaining uses before photo analysis.",dataPolicyNote:"This page describes feature-level data handling. See the separate <a href=\"privacy.html\">privacy policy</a> and <a href=\"delete-account.html\">deletion request instructions</a>. The privacy policy takes effect on October 23, 2026.",dataSourcesTitle:"Official references",dataSourceGpt:"AI access and consent screens",dataSourcePermissions:"Membership and shared-calendar screens",dataSourceGithub:"GitHub privacy statement"
  };
  const korean = {};
  document.querySelectorAll("[data-i18n]").forEach(el => { if (!(el.dataset.i18n in korean)) korean[el.dataset.i18n] = el.innerHTML; });
  const attributes = [["data-i18n-aria","aria-label"],["data-i18n-alt","alt"],["data-i18n-placeholder","placeholder"]];
  for (const [source,target] of attributes) document.querySelectorAll(`[${source}]`).forEach(el => { korean[el.getAttribute(source)] = el.getAttribute(target); });
  const titles = {privacy:{ko:"개인정보처리방침 — 키즈캘",en:"Privacy policy — Kids Calendar"},deletion:{ko:"계정 삭제 요청 — 키즈캘",en:"Account deletion — Kids Calendar"},home:{ko:"키즈캘 — 받은 알림을, 바로 일정으로",en:"Kids Calendar — Share a notice, start a plan"},guide:{ko:"화면 둘러보기 — 키즈캘",en:"Explore the app — Kids Calendar"},data:{ko:"데이터 처리 안내 — 키즈캘",en:"Data handling — Kids Calendar"}};
  const descriptions = {"ko": "문자·카톡·안내문 사진을 공유해 아이들 일정으로 정리하세요. 기기에 동기화된 구글 일정도 개인·가족 공유 캘린더로 가져올 수 있습니다.", "en": "Share messages and notice photos to plan your child's school days. Import Google events synced to your device into personal or family calendars."};
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
  const imageSource = file => `assets/images/${file}?v=20261019`;
  let activeFeature = "candidates";
  const featureImage = document.getElementById("feature-image");
  function updateFeature(key) {
    activeFeature = key;
    const feature = features[key];
    if (!featureImage || !feature) return;
    const src = imageSource(feature.file);
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
    const description = ["privacy","deletion"].includes(pageName) ? t(pageName+"Intro") : descriptions[next];
    document.querySelector('meta[name="description"]')?.setAttribute("content",description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content",document.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content",description);
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
      const img = document.createElement("img"); img.src = imageSource(item.file); img.alt = item[language]; img.width = item.width; img.height = item.height; img.loading = "lazy";
      button.append(img); button.addEventListener("click",() => openImage(img.getAttribute("src"),item,results.map(result => ({src:imageSource(result.file),item:result}))));
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
