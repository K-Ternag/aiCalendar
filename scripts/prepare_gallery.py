"""Regenerate browser-local gallery data from the supplied image manifest."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
EN = [
    ("Monthly calendar", "See events by date, with personal, family and work categories."),
    ("Add an event", "Use the + menu to add a photo, enter an event or paste text."),
    ("Choose AI on first entry", "Choose whether to use AI. Your choice also applies to later entries."),
    ("Events on a selected day", "Select a date to see its events and deletion actions."),
    ("Confirm event deletion", "Check the event title, then delete or cancel."),
    ("Event details", "Review the date, time, category, place, notes and things to bring."),
    ("Things-to-bring checklist", "Check off what you have packed and open the sharing preview."),
    ("Sharing preview", "Share an event as text or an image card."),
    ("Original sharing card", "An original sharing card rendered by the app."),
    ("Manual event entry", "Enter a title, date and time, then save."),
    ("Additional event details", "Set a place, recurrence, category, notes, supplies and reminders."),
    ("KakaoTalk notification inbox", "Review notification originals matching your filters and start event entry."),
    ("Expand the original message", "Open the original to review dates, times, places and supplies."),
    ("Review before saving", "Review the prefilled details and tap Save to register an event."),
    ("KakaoTalk collection settings", "Manage collection, notification access and message conditions."),
    ("Chat room and sender filters", "Set a chat room or sender name. Date and time conditions are optional."),
    ("Today’s briefing", "View today’s saved events in chronological order."),
    ("This week’s briefing", "View the events saved for this week."),
    ("Settings overview", "Manage AI, KakaoTalk, reminders, design, holidays and message retention."),
    ("Reminder settings", "Check default reminders, notification permission and exact-time access."),
    ("Choose a screen design", "Preview three designs and choose your preferred style."),
    ("Internal AI model download", "Download the approximately 400MB internal AI model to analyze on your device without a ChatGPT subscription."),
    ("Event drafts from a photo", "The photo-entry draft review screen, populated with synthetic example input."),
    ("Illustrative source notice", "A synthetic notice used as photo input. This is not an app screenshot."),
    ("Select and review multiple events", "Choose and edit drafts, then save selected events. This is not a live AI response."),
    ("Soft Minimalism calendar", "The softer design, shown with the same illustrative events."),
    ("Material Design 3 calendar", "An Android-style design, shown with the same illustrative events."),
    ("Today widget", "The app’s actual widget layout, rendered with illustrative events."),
    ("Upcoming events widget", "The actual widget layout for today’s or upcoming events."),
    ("Monthly calendar widget", "The actual widget layout with a month and selected-day events."),
]
GROUPS = {"캘린더":"Calendar", "일정 등록":"Event entry", "일정 관리":"Event management", "준비물·공유":"Checklists & sharing", "카카오톡":"KakaoTalk", "브리핑":"Briefings", "설정":"Settings", "AI 설정":"AI settings", "사진·여러 일정":"Photos & multiple events", "다른 디자인":"Designs", "위젯":"Widgets"}

def main():
    manifest = json.loads((ROOT / "assets/source-manifest.json").read_text(encoding="utf-8-sig"))
    assert len(manifest["images"]) == len(EN), "Image manifest changed; update the English descriptions."
    gallery = []
    for source, (title, caption) in zip(manifest["images"], EN):
        group = source["group"]
        category = "ai" if Path(source["file"]).name == "03-first-ai-choice.png" or group == "AI 설정" else "calendar" if group in ("캘린더", "다른 디자인", "위젯") else "entry" if group in ("일정 등록", "일정 관리", "사진·여러 일정") else "daily"
        gallery.append({"file": Path(source["file"]).name, "ko": source["title"], "en": title, "captionKo": source["caption"], "captionEn": caption, "groupKo": group, "groupEn": GROUPS[group], "category": category, "width": source["width"], "height": source["height"]})
    (ROOT / "assets/gallery-data.js").write_text("/* Supplied app images; synthetic example data only. */\nwindow.CALENDAR_GALLERY = " + json.dumps(gallery, ensure_ascii=False, indent=2) + ";\n", encoding="utf-8")
    print(f"Prepared {len(gallery)} bilingual gallery entries.")

if __name__ == "__main__":
    main()
