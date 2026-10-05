# Prototype Feedback Note — Bùi Hải Nam `2A202602636`

> **Nhóm:** H3201 · **Track 1** · **Case C — AI Support Radar**
> Đầu ra của **Chặng 6 — Test với ba người** (GATE 5).

**Task (Chặng 5 — đã chốt):**
- **Relevant context:** "Gần đây bạn có từng đang xem lại slide/bài trên VLearn mà gặp một thuật ngữ không hiểu, phải dừng lại tra cứu một mình không?"
- **Outcome task:** "Trong tình huống này, hãy dùng từng phương án A, B, C để đến lúc bạn tự tin trả lời câu quiz về RAG ngay bên dưới slide — không cần ai giải thích hộ."
- **Observation focus:** first action · hesitation · evidence read/ignored · option được chọn và trade-off

---

## Phiên — Vũ Quang Tiến `2A202602872`

| Mục | Nội dung |
| --- | --- |
| Người facilitate | `2A202602636` — Bùi Hải Nam |
| Tester | `T2` — Vũ Quang Tiến, `2A202602872` |
| Thời gian / địa điểm | 2026-10-05 · Lab H3201 |
| Option được test | A ☑ · B ☑ · C ☑ |
| Thứ tự trình bày | B → A → C |

**OBSERVED**

| # | Thời điểm | Hành vi | Với option |
| - | --------- | -------- | ---------- |
| 1 | 0:05 | Thấy prototype → nhìn thẳng vào nút "Mở Trợ lý Giải nghĩa", click ngay — không đọc chip trước | B |
| 2 | 0:15 | Gõ vào chatbox: "Augmentation trong RAG khác gì Fine-tuning?" — tự đặt câu hỏi thay vì dùng chip có sẵn | B |
| 3 | 0:30 | Đọc giải thích → thấy phần dẫn chứng slide → click hỏi thêm về Vector Embedding | B |
| 4 | 0:50 | Click "❓ Vẫn chưa thông → Nhờ Coach" → xem ticket AI soạn sẵn → **sửa** câu hỏi cho cụ thể hơn ("Cho mình ví dụ thực tế với knowledge base của công ty") → chọn "kèm tên" thay vì ẩn danh | B |
| 5 | 1:15 | Switch sang A → click "Đánh dấu" → điền form nhanh, đúng category → chọn "kèm tên" ngay, không do dự | A |
| 6 | 1:30 | Nhận xét: "Cái này giống gửi email cho coach, bình thường, nhưng phải chờ" | A |
| 7 | 1:50 | Switch sang C → proactive popup hiện → đọc nhanh ~3 giây → click "Để sau" | C |

**INTERPRETED**

- T2 bỏ qua chip trong B, gõ tự do — quen tự formulate câu hỏi, tự đi tìm nguồn hỗ trợ.
- T2 chọn "kèm tên" ở cả A và B — không có barrier ngại hỏi người.
- T2 sửa ticket AI soạn sẵn — kỳ vọng cao về độ cụ thể, muốn câu trả lời thực dụng.
- C bị dismiss vì đã tự lo được trước khi popup xuất hiện.

**DECIDED**

| Chọn option | Lý do | Đánh đổi |
| --- | --- | --- |
| **B** | Nhanh hơn A (không phải điền form), không phải chờ coach trả lời; chatbox tự do như công cụ search | Phải tin AI giải thích đúng — nếu sai mà không biết thì nguy |

**STILL UNPROVEN**

- T2 escalate lên Coach dù đã "hiểu" — muốn confirmation hay thực sự còn câu hỏi?
- Bao nhiêu % tester sẽ sửa ticket vs. gửi nguyên trạng như AI soạn?

**Quote**

> "Khi đấy thì mình tự lên mạng mình search thôi, hoặc mình hỏi những cái bạn xung quanh, hoặc là hỏi anh lab coach."
> "Thường là mình tự đi chủ động đi tìm các anh lab coach... chứ các anh cũng không hỏi tình hình của mình mấy."
