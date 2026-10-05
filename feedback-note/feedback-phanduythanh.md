# Prototype Feedback Note — Phan Duy Thanh `2A202602930`

> **Nhóm:** H3201 · **Track 1** · **Case C — AI Support Radar**
> Đầu ra của **Chặng 6 — Test với ba người** (GATE 5).
> **Option phụ trách:** Option A — User-Led / No-inference

**Task (Chặng 5 — đã chốt):**
- **Relevant context (tối đa 2 phút):** "Gần đây bạn có từng đang xem lại slide/bài trên VLearn mà gặp một thuật ngữ không hiểu, phải dừng lại tra cứu một mình không?"
- **Outcome task:** "Trong tình huống này, hãy dùng từng phương án A, B, C để đến lúc bạn tự tin trả lời câu quiz về RAG ngay bên dưới slide — không cần ai giải thích hộ."
- **Observation focus:** first action · hesitation · evidence read/ignored · option được chọn và trade-off

---

## Phiên — Lê Thanh Tình `2A202602449`

| Mục | Nội dung |
| --- | --- |
| Người facilitate | `2A202602930` — Phan Duy Thanh |
| Tester | `T1` — Lê Thanh Tình, `2A202602449` |
| Thời gian / địa điểm | 2026-10-05 · Lab H3201 |
| Option được test | A ☑ · B ☑ · C ☑ |
| Thứ tự trình bày | A → B → C |
| Relevant context xác nhận | Có — tester đang học track chuyên sâu, đã gặp tình huống kẹt thuật ngữ khi xem lại slide ở nhà |

---

**OBSERVED**

| # | Thời điểm | Hành vi quan sát được | Option |
| - | --------- | --------------------- | ------ |
| 1 | 0:00–0:30 | Đọc slide từ đầu, mắt nhìn lên xuống nhiều lần giữa sơ đồ RAG và đoạn văn mô tả — có vẻ cố hiểu sơ đồ nhưng không đặt tay lên chuột, không click gì | A |
| 2 | 0:32 | Nhìn xung quanh giao diện — mắt dừng ở footer lần đầu khi thấy nút "🚩 Đánh dấu chỗ khó hiểu & Gửi Coach" | A |
| 3 | 0:35 | Click nút — không do dự sau khi thấy nút (nút là điểm vào duy nhất nhìn thấy được) | A |
| 4 | 0:42 | Modal mở → mắt đọc label "Điểm cụ thể bạn chưa hiểu rõ" ở textarea → dừng tay ~15 giây không gõ | A |
| 5 | 0:58 | Gõ vào textarea: "Em chưa hiểu slide này" → dừng → xoá → gõ lại: "Em chưa hiểu slide này lắm" → để nguyên | A |
| 6 | 1:05 | Đọc phần "Tuỳ chọn danh tính" → chọn "Gửi ẩn danh" không do dự | A |
| 7 | 1:10 | Click gửi → nhận toast "Đã gửi vướng mắc tới Coach (Ẩn danh). Hệ thống đã gắn số Slide 6" → thở nhẹ | A |
| 8 | 1:18 | Switch sang B → mắt quét footer → thấy 4 chip → đọc hết 4 nhãn chip một lượt | B |
| 9 | 1:25 | Click "🧩 Augmentation là gì?" ngay sau khi đọc xong 4 chip — chip đặt tên đúng cái tester đang nhìn vào sơ đồ | B |
| 10 | 1:35 | Đọc giải thích trong right panel — dừng lại ở analogy "kẹp tài liệu tham khảo" | B |
| 11 | 1:50 | Đọc nhãn "Mức độ chắc chắn: CAO" → gật nhẹ | B |
| 12 | 1:58 | Click "✅ Đã hiểu → Làm Quiz củng cố" | B |
| 13 | 2:05 | Scroll xuống quiz → đọc đáp án → chọn B → đúng → "✅ Đã thông hiểu" | B |
| 14 | 2:15 | Switch sang C → đọc dòng status bar "Radar quan sát học tập đang bật" to ra một lần | C |
| 15 | 2:25 | Ngồi im đợi — không click gì, đợi hệ thống phát hiện | C |
| 16 | 2:35 | Proactive popup hiện → dừng tay, đọc popup ~8 giây | C |
| 17 | 2:45 | Click "✨ Giải thích nhanh giúp mình" — không đọc các nút còn lại trước khi click | C |
| 18 | 2:55 | Đọc giải thích trong popup — gật | C |

---

**INTERPRETED**

- **Về Option A — textarea là barrier, không phải cửa vào:**
  Dừng 15 giây trước khi gõ, viết vague rồi sửa lại vẫn còn vague ("slide này lắm"). T1 không biết mình kẹt ở đâu — không thể mô tả điểm vướng vì chưa xác định được. Đây không phải vấn đề UX của form, mà là vấn đề nhận thức: learner chưa self-diagnose được thì không có gì để điền.

- **Về Option A — ẩn danh không do dự:**
  Chọn ẩn danh nhanh — barrier xã hội của T1 giảm được bằng ẩn danh. Khác với T3 (Chu Thùy Dương) do dự 12 giây trước khi click nút A. T1 không ngại lên tiếng khi đã có giao diện hỗ trợ.

- **Về Option B — chip giải quyết đúng điểm A bỏ sót:**
  Chip đặt tên thuật ngữ thay learner → T1 nhận ra ngay "đây là cái mình đang nhìn vào". B giải quyết được trường hợp không biết cách đặt câu hỏi vì chip đã đặt trước. Không cần tự nhận ra và mô tả vấn đề.

- **Về Option C — phản ứng tích cực nhất trong 3 option:**
  T1 ngồi đợi hệ thống phát hiện (không click gì) — hành vi tự nhiên nhất so với A (cố điền form) và B (cần tìm chip). Khi popup hiện, click ngay không do dự. C phù hợp với học viên chưa tự nhận ra mình kẹt ở đâu — hệ thống làm phần "nhận ra" thay họ.

- **Về lý do chọn C:**
  Không cần tự nhận ra, không cần mô tả vấn đề, không cần biết mình kẹt ở khái niệm gì. C là option duy nhất không yêu cầu self-awareness về điểm vướng.

---

**DECIDED**

| Chọn option | Lý do | Đánh đổi |
| --- | --- | --- |
| **C** | Không phải tự nhận ra mình kẹt — hệ thống hỏi trước; không cần mô tả vấn đề | Nếu popup xuất hiện lúc đang đọc bình thường (false positive), sẽ bị gián đoạn. Tắt popup là mất luôn hỗ trợ |

**Lý do không chọn A:** Textarea là barrier với T1-type — phải biết mình kẹt ở đâu mới điền được. T1 gõ vague vì không xác định được điểm vướng.

**Lý do không chọn B:** Chip giúp được nhưng vẫn cần T1 chủ động click — nếu không nhìn thấy chip, không vào được. T1 tìm thấy chip nhờ quét footer, nhưng đây chưa phải hành vi đặc trưng tự nhiên của T1-type.

---

**STILL UNPROVEN**

- Nếu popup C xuất hiện khi T1 đang đọc bình thường (false positive), T1 có click "Để sau" hay dismiss hẳn? T1 chọn C vì không cần tự nhận ra barrier — nhưng nếu C trigger sai, liệu T1 có mất niềm tin vào radar không?
- Textarea vague ("slide này lắm") là hành vi đặc trưng của T1-type hay chỉ là bối rối ban đầu? Nếu thêm microcopy gợi ý ví dụ ("Ví dụ: Em chưa hiểu khái niệm Augmentation trên Slide 6"), T1 có điền cụ thể hơn không?
- T1 tìm thấy chip B sau khi quét footer — nhưng nếu không có option A để dùng trước, T1 có tự tìm thấy chip không? Thứ tự A → B → C có tạo ra learning effect không?

---

**Quote nguyên văn từ phỏng vấn Day 17**

> "Nói chung là em không tìm được cái nội dung ở đấy luôn."

> "Thấy buồn ạ." / "Thấy lo lắng."

---

**Đối chiếu với kỳ vọng trước phiên**

| Kỳ vọng của nhóm | Kết quả thực tế | Đánh giá |
| --- | --- | --- |
| T1 sẽ gặp khó ở textarea A vì không biết mình kẹt ở đâu | T1 điền vague ("slide này lắm") — confirm | Đúng như dự đoán |
| T1 sẽ chọn B vì chip gợi ý tên thuật ngữ | T1 chọn C — C không cần tự nhận ra barrier | Sai — C ưu việt hơn B với T1-type |
| T1 sẽ dismiss popup C vì chưa quen với proactive AI | T1 click ngay "Giải thích nhanh" | Sai — T1 đón nhận tích cực |
