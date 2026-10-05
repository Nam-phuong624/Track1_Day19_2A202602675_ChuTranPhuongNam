# Prototype Feedback Note — Phùng Gia Khánh `2A202602585`

> **Nhóm:** H3201 · **Track 1** · **Case C — AI Support Radar**
> Đầu ra của **Chặng 6 — Test với ba người** (GATE 5).
> **Option phụ trách:** Option C — Proactive AI Radar (hỗ trợ)

**Task (Chặng 5 — đã chốt):**
- **Relevant context (tối đa 2 phút):** "Gần đây bạn có từng đang xem lại slide/bài trên VLearn mà gặp một thuật ngữ không hiểu, phải dừng lại tra cứu một mình không?"
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
| Relevant context xác nhận | Có — tester học Khoa học máy tính, đang học track AI Thực Chiến, quen đọc tài liệu kỹ thuật |

---

**OBSERVED**

| # | Thời điểm | Hành vi quan sát được | Option |
| - | --------- | --------------------- | ------ |
| 1 | 0:00–0:10 | Tester chọn xem C trước (không theo thứ tự mặc định) — đọc nguyên dòng status bar "Radar quan sát học tập đang bật (Tự động phát hiện khi bạn dừng lâu > 20s ở đoạn khó)" to ra một lần | C |
| 2 | 0:15 | Ngồi im đợi ~20 giây — không click gì, quan sát xem hệ thống phản ứng như thế nào | C |
| 3 | 0:22 | Proactive popup hiện → đọc toàn bộ nội dung popup từ đầu đến cuối (subtitle, body, cả 3 nút, link "Vì sao hệ thống hỏi?") | C |
| 4 | 0:35 | Click "✨ Giải thích nhanh giúp mình" → đọc giải thích | C |
| 5 | 0:48 | Click "👨‍🏫 Nhờ Coach hỗ trợ" — không phải vì chưa hiểu, mà để xem flow escalation | C |
| 6 | 0:55 | Đọc từng trường trong preview thẻ coach: "Vị trí học", "Khái niệm", "Tín hiệu cụ thể" → gật khi thấy trường tín hiệu | C |
| 7 | 1:05 | Xác nhận gửi thẻ → toast xác nhận | C |
| 8 | 1:15 | Switch sang B → **bôi đen** chữ "Vector Embedding" trên slide (không nhìn vào chip footer) | B |
| 9 | 1:22 | Floating popup "Giải thích đoạn này" hiện → click ngay | B |
| 10 | 1:30 | Đọc giải thích Vector Embedding → bôi đen thêm "Knowledge Cutoff" ở đoạn khác | B |
| 11 | 1:42 | Đọc giải thích Knowledge Cutoff → nhận xét: "Cái này mới, không thấy trong slide" | B |
| 12 | 1:50 | Mở chatbox → gõ câu hỏi dài: "Tại sao cần RAG thay vì chỉ fine-tune model?" | B |
| 13 | 2:08 | Đọc giải thích → nhìn vào nhãn "Mức độ chắc chắn: TRUNG BÌNH" → đọc lại dẫn chứng slide | B |
| 14 | 2:18 | Click "✅ Đã hiểu" → scroll xuống quiz → chọn B → đúng | B |
| 15 | 2:30 | Switch sang A → click "Đánh dấu" → chọn category "Sơ đồ luồng xử lý kỹ thuật" đúng ngay | A |
| 16 | 2:38 | Điền textarea: mô tả kỹ thuật đầy đủ (không vague như T1) → gửi ẩn danh | A |

---

**INTERPRETED**

- **Về Option C — đọc cơ chế trước khi dùng:**
  T4 đọc status bar to ra, ngồi đợi xem hệ thống phản ứng — đây là hành vi của người muốn hiểu cơ chế trước khi tin tưởng kết quả. Background kỹ thuật khiến T4 tò mò về cách hệ thống hoạt động, không chỉ kết quả.

- **Về Option C — đọc trường "Tín hiệu cụ thể" trong thẻ coach:**
  Gật khi thấy trường tín hiệu ("Bạn đã dừng 27 giây ở Giai đoạn 2 — Augmentation") — đây là E&U hoạt động đúng. T4 đánh giá cao tính minh bạch của AI về cơ sở phán đoán.

- **Về Option B — bôi text thay vì chip:**
  Không nhìn vào chip footer một lần nào. Bôi text là hành vi đọc tài liệu kỹ thuật tự nhiên — dùng highlight để đánh dấu rồi hỏi. Người có CS background quen thao tác trực tiếp với văn bản hơn là dùng shortcut UI.

- **Về Option B — câu hỏi dài, tự formulate:**
  Tương tự T2 nhưng câu hỏi có hướng so sánh kỹ thuật ("Tại sao RAG thay vì fine-tune?"). T4 không dùng chip vì đã có mental model riêng về thứ cần hỏi.

- **Về Option B — kiểm tra nhãn "TRUNG BÌNH":**
  Đọc lại dẫn chứng khi thấy nhãn TRUNG BÌNH — T4 không chấp nhận AI output mà xác minh. E&U có tác dụng: nhãn độ chắc chắn trigger hành vi verification.

- **Về Option A — điền form đầy đủ:**
  Chọn đúng category kỹ thuật, điền mô tả không vague — T4 có đủ self-awareness về điểm vướng để điền form A. Khác với T1 không biết mình kẹt ở đâu.

---

**DECIDED**

| Chọn option | Lý do | Đánh đổi |
| --- | --- | --- |
| **B** | Linh hoạt nhất — bôi text, hỏi tự do theo luồng suy nghĩ của mình, không bị giới hạn bởi chip cố định; không phải chờ coach | Không có gợi ý hướng dẫn — người mới có thể không biết bắt đầu từ đâu. Chip cố định không phủ được câu hỏi so sánh kỹ thuật |

**Lý do không chọn C:** C hữu ích với người chưa nhận ra mình kẹt. T4 luôn biết mình kẹt ở đâu và đã chủ động tìm hiểu cơ chế. C không thêm giá trị cho T4-type ngoài việc trigger phản xạ khám phá hệ thống.

**Lý do không chọn A:** Phải chờ coach, bị giới hạn vào form có sẵn. T4 muốn hỏi theo luồng suy nghĩ — chatbox B phù hợp hơn form A cho kiểu câu hỏi so sánh kỹ thuật.

---

**STILL UNPROVEN**

- Bôi text là cách dùng B chủ đạo của T4 — feature này có đủ discoverable với learner non-technical không? T4 tìm ra nhờ intuition từ CS background; người không có nền tảng đó có nghĩ đến việc bôi text không?
- T4 đọc kỹ cơ chế C hơn các tester khác và gật khi thấy trường tín hiệu — behavior "đọc kỹ trước khi tin" có tương quan với trust mức cao hơn không? Hay T4 vẫn không chọn C dù hiểu cơ chế?
- T4 escalate lên Coach ở C nhưng không ở B — escalation là hành vi thăm dò flow hay nhu cầu thực sự? Nếu là thăm dò, tỷ lệ escalation thực tế của T4-type sẽ thấp hơn nhiều.

---

**Quote nguyên văn từ phỏng vấn Day 17**

> *(Lê Anh Duy — nghe giảng đầy đủ, từ Lạng Sơn, học Khoa học máy tính tại Đại học Bách khoa)*

> "Mình muốn hiểu cái cơ chế hoạt động của nó trước, rồi mới dùng."

> "Thấy cái trường 'Tín hiệu cụ thể' này hay — biết hệ thống đang nhìn vào cái gì."

---

**Đối chiếu với kỳ vọng trước phiên**

| Kỳ vọng của nhóm | Kết quả thực tế | Đánh giá |
| --- | --- | --- |
| T4 sẽ dùng chip B vì có CS background, quen UI | T4 bỏ qua chip hoàn toàn, dùng bôi text | Sai — CS background → thao tác trực tiếp với text, không qua UI shortcut |
| T4 sẽ thích C vì đọc cơ chế kỹ và trust hệ thống | T4 chọn B — C không thêm giá trị vì T4 đã tự biết mình kẹt ở đâu | Sai — hiểu cơ chế ≠ muốn bị trigger bởi hệ thống |
| T4 sẽ gửi ẩn danh vì ngại hỏi | T4 gửi ẩn danh (nhưng không do dự) — đây là mặc định, không phải barrier | Đúng về hành vi, sai về lý do |
