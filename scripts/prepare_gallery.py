"""Import supplied, unchanged screenshots and build the bilingual gallery."""
import argparse
import hashlib
import json
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CAPTIONS = {
    "01-calendar": ("아이들 일정과 가족 약속을 날짜별로 확인해요.", "See school events and family plans by date."),
    "02-inbox": ("조건에 맞춰 모은 카카오톡 원문에서 등록할 일정을 골라요.", "Choose a collected KakaoTalk message to start reviewing an event."),
    "03-briefing": ("오늘과 이번 주 일정을 살펴보고 선택한 기간을 공유해요.", "Review daily and weekly plans and share the selected period."),
    "04-add-menu": ("문자 붙여넣기, 직접 입력, 사진 등록 중 편한 방법을 골라요.", "Choose pasted text, manual entry or photo entry."),
    "05-manual-entry": ("제목과 날짜를 직접 입력하고 필요한 세부 항목을 더해요.", "Enter a title and date, then add the details you need."),
    "06-photo-import": ("ChatGPT 사진 등록의 검토 화면이에요. 예시 상태로 구성했습니다.", "Review drafts in the ChatGPT photo-entry flow, shown with example data."),
    "07-candidate-review": ("여러 일정 후보에서 필요한 항목을 고르고 확인 후 저장해요.", "Choose the event drafts you need, review them and save."),
    "08-event-detail": ("날짜, 시간, 장소와 준비물을 한 화면에서 확인해요.", "Review dates, times, places and things to bring together."),
    "09-checklist": ("챙긴 준비물은 체크하고 가족에게 일정을 공유해요.", "Check off packed supplies and share the event with family."),
    "10-share": ("저장한 일정을 텍스트나 이미지 카드로 전달해요.", "Send a saved event as text or an image card."),
    "11-settings": ("일정 입력, 카카오톡 수집, 알림과 화면 디자인을 설정해요.", "Manage event entry, KakaoTalk collection, reminders and appearance."),
    "12-ai-settings": ("AI 사용 여부와 선택적 ChatGPT 연결을 설정해요.", "Choose whether to use AI and manage the optional ChatGPT connection."),
    "13-chatgpt-sign-in": ("앱 안에서 내 ChatGPT 연결을 시작하는 화면이에요.", "Start connecting your ChatGPT account from inside the app."),
    "14-chatgpt-consent": ("연결 전에 선택한 원문·사진의 전송과 구독 사용량 안내를 확인해요.", "Review selected text and photo transfer and plan usage before connecting."),
    "15-basic-text-analysis": ("AI 연결이나 모델 다운로드 없이 문자 속 일정을 기본 분석으로 채워요.", "Fill event drafts from text without an AI connection or model download."),
    "16-kakao-settings": ("카카오톡 알림 접근 권한과 수집 설정을 관리해요.", "Manage notification access and KakaoTalk collection settings."),
    "17-kakao-filter": ("채팅방이나 발신자 조건으로 필요한 카카오톡 알림을 모아요.", "Collect relevant KakaoTalk notifications by chat room or sender."),
    "18-reminders": ("일정 전에 받을 기본 알림을 설정해요.", "Set default reminders for upcoming events."),
    "19-design-picker": ("세 가지 화면 디자인 중 마음에 드는 스타일을 골라요.", "Choose your preferred style from three screen designs."),
    "20-holidays": ("캘린더의 공휴일 표시를 설정해요.", "Configure public holidays shown on the calendar."),
    "21-message-storage": ("보관한 메시지와 보관 설정을 관리해요.", "Manage stored messages and retention settings."),
    "22-text-entry": ("복사한 문자를 붙여넣고 일정 채우기를 눌러 시작해요.", "Paste copied text and tap Fill events to get started."),
    "23-text-review": ("문자로 채운 제목과 날짜를 확인하고 필요한 내용을 고쳐요.", "Review and edit titles and dates filled from your text."),
    "24-source-edit": ("가져온 원문을 고쳐 다시 일정 채우기를 진행해요.", "Edit the source text and fill the event details again."),
    "25-reminder-permissions": ("일정 알림에 필요한 기기 권한을 확인해요.", "Check the device permissions needed for event reminders."),
    "26-text-replace-confirmation": ("새 문자가 들어와도 계속 작성할지 직접 선택해요.", "Choose whether to keep your current draft when new text arrives."),
    "27-photo-gpt-required": ("사진·이미지 분석에는 ChatGPT 연결과 사용 권한이 필요해요.", "Photo and image analysis requires a ChatGPT connection and access."),
    "28-discard-confirmation": ("저장하지 않고 닫기 전에 작성 중인 내용을 확인해요.", "Confirm before closing without saving your draft."),
    "29-text-original": ("일정 확인 중 가져온 원문을 열어 내용을 비교해요.", "Open the original text to compare it with the draft."),
    "30-launcher-shortcut": ("홈 화면에서 앱 아이콘을 길게 눌러 문자 붙여넣기를 바로 열어요.", "Long-press the app icon to open the Paste text shortcut."),
    "31-candidate-details": ("후보의 상세 보기를 펼쳐 장소, 메모와 준비물을 확인해요.", "Expand a draft to review its place, notes and supplies."),
    "32-candidate-edit": ("후보의 수정 버튼으로 날짜와 세부 항목을 고쳐요.", "Use Edit to change a draft's date and other details."),
    "33-share-text": ("문자·카톡의 공유에서 키즈캘린더를 선택해요. Android 공유 목록 예시입니다.", "Choose Kids Calendar when sharing a message. Shown in the Android share sheet."),
    "34-share-image": ("사진의 공유에서도 키즈캘린더를 선택해요. 사진 분석은 ChatGPT 연결이 필요합니다.", "Choose Kids Calendar when sharing a photo. Image analysis requires ChatGPT."),
    "35-shared-text-review": ("공유한 문자에서 채운 일정을 확인하고 원하는 후보만 저장해요.", "Review events filled from shared text and save only the drafts you choose."),
}
GROUPS = {
    "main": ("캘린더·모아보기", "Calendar & overviews", "calendar"),
    "registration": ("일정 등록", "Event entry", "entry"),
    "events": ("일정·준비물·공유", "Events, checklists & sharing", "daily"),
    "settings": ("설정", "Settings", "daily"),
    "ai": ("입력 방식·ChatGPT", "Entry options & ChatGPT", "ai"),
}


def import_images(source_dir):
    supplied = json.loads((source_dir / "manifest.json").read_text(encoding="utf-8-sig"))
    destination = ROOT / "assets/images"
    manifest_path = ROOT / "assets/source-manifest.json"
    previous = json.loads(manifest_path.read_text(encoding="utf-8-sig"))
    pending = []
    for item in supplied["images"]:
        if item["id"] not in CAPTIONS:
            raise ValueError(f"Add captions for new screenshot: {item['id']}")
        path = (source_dir / item["png"]).resolve()
        if not path.is_relative_to(source_dir.resolve()):
            raise ValueError(f"Image is outside the supplied folder: {path}")
        if hashlib.sha256(path.read_bytes()).hexdigest() != item["sha256"]:
            raise ValueError(f"Source image hash differs: {path.name}")
        pending.append((item, path))
    assert len(pending) == supplied["screenshot_count"]
    # Validate every source before replacing any existing asset.
    manifest = {key: value for key, value in supplied.items() if key not in ("images", "overview", "overview_count")}
    manifest.update(source_package=source_dir.name, updated=supplied["created"], png_count=len(pending), images=[])
    for item, path in pending:
        shutil.copy2(path, destination / path.name)
        manifest["images"].append({**item, "file": f"images/{path.name}"})
    current = {item["file"] for item in manifest["images"]}
    for item in previous["images"]:
        if item["file"] not in current:
            obsolete = (ROOT / "assets" / item["file"]).resolve()
            if obsolete.parent != destination.resolve():
                raise ValueError(f"Refusing to remove image outside {destination}")
            obsolete.unlink(missing_ok=True)
    manifest_path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--source-dir", type=Path, help="Folder containing the supplied manifest.json and png directory")
    args = parser.parse_args()
    if args.source_dir:
        import_images(args.source_dir)
    manifest = json.loads((ROOT / "assets/source-manifest.json").read_text(encoding="utf-8-sig"))
    gallery = []
    for source in manifest["images"]:
        caption_ko, caption_en = CAPTIONS[source["id"]]
        group_ko, group_en, category = GROUPS[source["group"]]
        if source["id"] in ("22-text-entry", "23-text-review", "24-source-edit", "29-text-original", "30-launcher-shortcut", "33-share-text", "34-share-image", "35-shared-text-review"):
            category = "share"
        gallery.append({"file": Path(source["file"]).name, "ko": source["title"]["ko"], "en": source["title"]["en"], "captionKo": caption_ko, "captionEn": caption_en, "groupKo": group_ko, "groupEn": group_en, "category": category, "width": source["width"], "height": source["height"]})
    (ROOT / "assets/gallery-data.js").write_text("/* Supplied app images; synthetic example data only. */\nwindow.CALENDAR_GALLERY = " + json.dumps(gallery, ensure_ascii=False, indent=2) + ";\n", encoding="utf-8")
    print(f"Prepared {len(gallery)} bilingual gallery entries.")


if __name__ == "__main__":
    main()
