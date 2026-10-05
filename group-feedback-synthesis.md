# Group Feedback Synthesis — H3201 · Case C

> **Nhóm:** H3201 · **Track 1** · **Case C — AI Support Radar**
> Tổng hợp từ **4 Feedback Note** → đầu ra của **GATE 5**.
> Nguồn: [prototype-feedback-note.md](./prototype-feedback-note.md)

---

## 1. Bảng evidence tổng hợp

| # | Tester | Người facilitate | First action đáng chú ý | Option được chọn | Lý do / đánh đổi |
| - | ------ | ---------------- | ----------------------- | ---------------- | ---------------- |
| T1 | Lê Thanh Tình `2A202602449` | Phan Duy Thanh | Dừng lâu ở textarea A, không biết viết gì → click chip B ngay | **C** | Không cần tự nhận ra mình kẹt — hệ thống chủ động hỏi |
| T2 | Vũ Quang Tiến `2A202602872` | Bùi Hải Nam | Bỏ qua chip, gõ thẳng câu hỏi vào chatbox B; chọn "kèm tên" ở A | **B** | Nhanh, tự do, không chờ; không có barrier ngại hỏi |
| T3 | Chu Thủy Dương `2A202602660` | Chử Trần Phương Nam | Do dự 12s ở danh tính A → đọc kỹ 4 chip B → click "Giải thích nhanh" ở C | **B** | Không cần hỏi người; tự đọc được; barrier xã hội = 0 |
| T4 | Lê Anh Duy `2A202602723` | Phùng Gia Khánh | Bôi đen text trên slide B (không dùng chip); đọc cơ chế radar C kỹ | **B** | Linh hoạt nhất cho người kỹ thuật |

---

## 2. Pattern tìm được

| # | Pattern | Số phiên gặp | Bằng chứng | Prototype hay hành vi? |
| - | ------- | ------------ | ---------- | ----------------------- |
| **P1** | **Option B được chọn bởi nhiều learner-type khác nhau** — cả người không biết mình kẹt (T1), người chủ động (T2), người ngại hỏi (T3), người kỹ thuật (T4) | 3/4 (T2, T3, T4) | T2: chatbox như search tool; T3: B loại bỏ cost xã hội; T4: bôi text như dev query | Hành vi: B fit nhiều loại learner vì cho nhiều cách vào (chip / chatbox / bôi text) |
| **P2** | **Option A breakdown ở bước mô tả vấn đề** — textarea trở thành barrier với người không xác định được điểm vướng | 1/4 rõ ràng (T1) + pattern ở T3 | T1 gõ vài từ mờ nhạt rồi gửi; T3 do dự 12s trước khi bắt đầu điền | Một phần UX (dropdown category), một phần barrier nhận thức |
| **P3** | **Option C có giá trị với learner không tự nhận ra barrier** — nhưng bị coi là "thừa" bởi người đã tự lo được | Split: T1 chọn C; T2 dismiss; T3 click nhưng chọn B | T1 không kể workaround, không xác định được slide kẹt → C đúng điểm; T2 đã quen tự đi tìm coach → dismiss | Cơ chế trigger đúng, nhưng giá trị phụ thuộc vào mức độ tự nhận thức barrier |
| **P4** | **Ẩn danh mặc định phục vụ đúng learner có barrier ngại hỏi** — learner không có barrier tự chọn kèm tên | T3 ẩn danh; T1 ẩn danh; T2 kèm tên | T3 đọc kỹ radio danh tính trước khi chọn; T2 chọn kèm tên ngay không do dự | Thiết kế default đúng — không cản người không cần ẩn danh |

**Điểm khác biệt giữa các tester:**
- T1 là người duy nhất chọn C — vì C là option duy nhất không yêu cầu họ nhận ra mình đang kẹt.
- T2 là người duy nhất chọn "kèm tên" tự nhiên ở A — không có barrier ngại hỏi.
- T3 click "Giải thích nhanh" ở C nhưng vẫn chọn B — B loại bỏ cost xã hội triệt để hơn C.
- T4 bỏ qua chip, dùng bôi text — cách dùng B linh hoạt không dự đoán được từ chip-first UX.

**Điều bất ngờ / trái với giả định của nhóm:**
- **Giả định:** Learner ngại hỏi (T3-type) sẽ thích C vì không cần chủ động. **Kết quả:** T3 click "Giải thích nhanh" ở C nhưng **chọn B** — B cũng không cần hỏi người, và còn kiểm soát được; C bị cảm nhận là "bị theo dõi" nhiều hơn là "được giúp đỡ".
- **Giả định:** B cần người biết rõ câu hỏi của mình. **Kết quả:** T1 (không biết mình kẹt ở đâu) vẫn dùng được B nhờ chip đặt tên sẵn — chip là "scaffolding cho nhận thức", không chỉ là shortcut.

---

## 3. Một Next Change duy nhất

| Mục | Nội dung |
| --- | --- |
| **Next Change** | **Option C popup — thêm tín hiệu cụ thể** vào body: thay "dừng lâu ở slide 6" bằng "bạn đã dừng 27 giây ở **Giai đoạn 2 — Augmentation**" |
| Nhắm vào option nào | C |
| Nhắm vào nguyên lý nào | **Evidence & Uncertainty** — learner cần thấy AI dựa vào tín hiệu nào cụ thể để quyết định có cần giúp hay không |
| Vì sao là thay đổi này | P3 cho thấy T2 dismiss ngay và T3 click nhưng không đổi lựa chọn. Nếu popup nói rõ *giai đoạn nào* thay vì "dừng lâu" chung chung, tester có thêm dữ liệu để tự đánh giá — T1-type cũng có thêm context để nhận ra "đúng, đây là giai đoạn mình đang bị vướng" |
| Dấu hiệu cải thiện | Tỷ lệ tester đọc popup > 3s trước khi dismiss tăng; T1-type click "Giải thích nhanh" nhiều hơn |
| Người phụ trách | Bùi Hải Nam + Phùng Gia Khánh |

---

## 4. Một điều Still Unproven

| Mục | Nội dung |
| --- | --- |
| **Still Unproven** | **Learner có tự tìm thấy chip trong Option B không?** — discoverability của footer chip với người lần đầu dùng prototype |
| Vì sao chưa trả lời | T3 đọc kỹ 4 chip trước khi click; T4 bỏ qua chip hoàn toàn, dùng bôi text — hành vi này gợi ý chip không phải entry point tự nhiên với mọi người. Chưa quan sát được đủ thời gian 30s đầu ở tất cả tester. |
| Cần test thế nào | Observation focus ở phiên tiếp theo: **30 giây đầu của Option B** — tester nhìn đâu trước (chip footer / nút "Mở Trợ lý" / cuộn xuống quiz)? Nếu ≥ 2/3 tester không tìm thấy chip trong 30s → thêm animation glow hoặc onboarding nudge. |

---

## 5. Kết luận

> "Với Hypothesis Problem (learner kẹt thuật ngữ khi xem slide, ngại hỏi người), chúng tôi đã thử ba option A/B/C với 4 tester. Option B phù hợp với nhiều learner-type nhất — cả người không biết mình kẹt (nhờ chip), người chủ động (nhờ chatbox tự do), người ngại hỏi (nhờ AI thay người), và người kỹ thuật (nhờ bôi text). Option C có giá trị riêng với learner không tự nhận ra barrier (T1-type) nhưng bị coi là intrusive bởi learner đã tự lo được. Iteration tiếp theo: sửa bug `alert()` ở C, làm rõ tín hiệu cụ thể trong C popup."

---

**Checklist Gate 5:**
- [x] Có đủ 4 Feedback Note
- [x] Nêu được pattern (P1–P4) và khác biệt giữa tester
- [x] Chốt 1 Next Change cụ thể (C popup — Evidence & Uncertainty)
- [x] Nêu 1 điều Still Unproven (discoverability chip B)
