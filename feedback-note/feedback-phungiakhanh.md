# Prototype Feedback Note — Phùng Gia Khánh `2A202602585`

> **Nhóm:** H3201 · **Track 1** · **Case C — AI Support Radar**
> Đầu ra của **Chặng 6 — Test với ba người** (GATE 5).

**Task (Chặng 5 — đã chốt):**
- **Relevant context:** "Gần đây bạn có từng đang xem lại slide/bài trên VLearn mà gặp một thuật ngữ không hiểu, phải dừng lại tra cứu một mình không?"
- **Outcome task:** "Trong tình huống này, hãy dùng từng phương án A, B, C để đến lúc bạn tự tin trả lời câu quiz về RAG ngay bên dưới slide — không cần ai giải thích hộ."
- **Observation focus:** first action · hesitation · evidence read/ignored · option được chọn và trade-off

---

## Phiên — Lê Anh Duy `2A202602723`

| Mục | Nội dung |
| --- | --- |
| Người facilitate | `2A202602585` — Phùng Gia Khánh |
| Tester | `T4` — Lê Anh Duy, `2A202602723` |
| Thời gian / địa điểm | 2026-10-05 · Lab H3201 |
| Option được test | A ☑ · B ☑ · C ☑ |
| Thứ tự trình bày | C → B → A |

**OBSERVED**

| # | Thời điểm | Hành vi | Với option |
| - | --------- | -------- | ---------- |
| 1 | 0:05 | Switch sang C trước → đọc nguyên dòng status bar "Radar quan sát học tập đang bật (> 20s)" — tìm hiểu cơ chế trước | C |
| 2 | 0:20 | Proactive popup hiện → đọc toàn bộ popup trước khi action | C |
| 3 | 0:35 | Click "✨ Giải thích nhanh giúp mình" → đọc giải thích → click "👨‍🏫 Nhờ Coach hỗ trợ" để xem thẻ coach | C |
| 4 | 0:55 | Xem preview thẻ coach sẽ nhận → đọc từng trường (vị trí, khái niệm, tín hiệu) → xác nhận gửi | C |
| 5 | 1:15 | Switch sang B → **bôi đen** chữ "Vector Embedding" trên slide (không click chip) → floating popup "Giải thích đoạn này" hiện | B |
| 6 | 1:25 | Click "Giải thích đoạn này" → nhận giải thích → bôi đen thêm "Knowledge Cutoff" | B |
| 7 | 1:50 | Gõ câu hỏi dài vào chatbox: "Tại sao cần RAG thay vì chỉ fine-tune model?" | B |
| 8 | 2:10 | Click "✅ Đã hiểu" → làm quiz → chọn B → đúng | B |
| 9 | 2:30 | Switch sang A → click "Đánh dấu" → chọn đúng category "Sơ đồ luồng xử lý kỹ thuật" → điền mô tả kỹ thuật → gửi ẩn danh | A |

**INTERPRETED**

- Tìm hiểu cơ chế radar trước khi dùng → background kỹ thuật, tò mò về cơ chế hoạt động hơn là kết quả.
- Bôi đen text thay vì dùng chip — cách explore tự nhiên với người đã quen đọc tài liệu kỹ thuật.
- Click "Nhờ Coach" ở C dù đã có giải thích — muốn xem toàn bộ flow của product.
- Chọn đúng category ở A — phân loại vấn đề kỹ thuật chính xác.

**DECIDED**

| Chọn option | Lý do | Đánh đổi |
| --- | --- | --- |
| **B** | Linh hoạt nhất — bôi đen, hỏi tự do, hỏi theo luồng; không bị giới hạn bởi chip cố định | Phải tự điều hướng, không có gợi ý — người mới hơn có thể bị lost |

**STILL UNPROVEN**

- Bôi text là cách dùng B chủ đạo của T4 — nhưng feature này có đủ discoverable với learner khác không?
- T4 đọc kỹ cơ chế C hơn các tester khác — behavior này có ảnh hưởng đến trust với AI không?

**Quote**

> *(Nghe giảng đầy đủ, từ Lạng Sơn, học Khoa học máy tính, muốn học tốt AI thực chiến)*
