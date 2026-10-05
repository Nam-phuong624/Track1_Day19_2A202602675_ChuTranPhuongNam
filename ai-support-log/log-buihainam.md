# AI Support Log — Bùi Hải Nam `2A202602636`

> **Nhóm:** H3201 · **Track 1** · **Case C — AI Support Radar**

| # | Dùng AI ở đâu | AI đã giúp gì | Điểm sai / hời hợt | Tôi đã tự sửa thế nào |
| - | ------------- | ------------- | ------------------- | ---------------------- |
| 1 | Build Option C (Proactive AI — AI Support Radar) | Gợi ý cơ chế timer-based trigger (≥20s trên slide), cấu trúc proactive popup 3 nút, và canned output cho popup | Canned output ban đầu nói "dừng lâu" chung chung, chưa nêu giai đoạn cụ thể | Sửa popup text thành "Giai đoạn 2 — Augmentation" để tăng relevance; đây cũng là Next Change được chốt trong group synthesis |
| 2 | Viết `feedback-note/feedback-buihainom.md` | Tổng hợp hành vi của Vũ Quang Tiến từ bản ghi phỏng vấn PN2 và behavior quan sát khi test | AI sinh OBSERVED table với thời gian ước lượng, không có đồng hồ thực tế | Đánh dấu thời gian là ước lượng; khi test thật sẽ ghi lại chính xác hơn |
| 3 | Human–AI Decision Table cho Option C | Gợi ý phần "AI Act" và "Control & Recovery" | AI đề xuất "người hỗ trợ reject một mục trong queue" — không phù hợp với scope micro-prototype hiện tại | Giữ lại cơ chế dismiss popup phía learner là đủ cho scope test; không build thêm review queue |
