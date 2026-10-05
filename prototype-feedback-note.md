# Prototype Feedback Note — Chử Trần Phương Nam `2A202602675`

> **Nhóm:** H3201 · **Track 1** · **Case C — AI Support Radar**
> Đầu ra của **Chặng 6 — Test với ba người** (GATE 5).
> **Option phụ trách:** Option B — In-situ Grounded AI

**Task (Chặng 5 — đã chốt):**

- **Relevant context (tối đa 2 phút):** "Gần đây bạn có từng đang xem lại slide/bài trên VLearn mà gặp một thuật ngữ không hiểu, phải dừng lại tra cứu một mình không?"
- **Outcome task:** "Trong tình huống này, hãy dùng từng phương án A, B, C để đến lúc bạn tự tin trả lời câu quiz về RAG ngay bên dưới slide — không cần ai giải thích hộ."
- **Observation focus:** first action · hesitation · evidence read/ignored · option được chọn và trade-off

---

## Phiên — Chu Thùy Dương `2A202602660`

| Mục                       | Nội dung                                                                                                 |
| ------------------------- | -------------------------------------------------------------------------------------------------------- |
| Người facilitate          | `2A202602675` — Chử Trần Phương Nam                                                                      |
| Tester                    | `T3` — Chu Thùy Dương, `2A202602660`                                                                     |
| Thời gian / địa điểm      | 2026-10-05 · Lab H3201                                                                                   |
| Option được test          | A ☑ · B ☑ · C ☑                                                                                          |
| Thứ tự trình bày          | A → B → C                                                                                                |
| Relevant context xác nhận | Có — tester đang học track AI Thực Chiến chuyên sâu, đã gặp đúng tình huống kẹt thuật ngữ RAG trong tuần |

---

**OBSERVED**

| #   | Thời điểm | Hành vi quan sát được                                                                                                                                                                                                 | Option |
| --- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| 1   | 0:00–0:10 | Đọc slide kỹ từ trên xuống, dừng lâu ở sơ đồ RAG — đặc biệt nhìn vào hộp highlight "Augmentation" trong Giai đoạn 2; không click gì ngay                                                                              | A      |
| 2   | 0:28      | Nhìn thấy nút "🚩 Đánh dấu chỗ khó hiểu & Gửi Coach" → dừng tay ~12 giây, nhìn vào nút rồi nhìn lại slide trước khi click                                                                                             | A      |
| 3   | 0:45      | Modal mở → mắt đọc phần "Tuỳ chọn danh tính" trước tiên, đọc cả hai radio button một lượt → chọn **"Gửi ẩn danh"** (không do dự ở bước này)                                                                           | A      |
| 4   | 0:55      | Ở dropdown "Loại nội dung" → chọn "Thuật ngữ / Khái niệm mới khó hiểu" ngay — đúng category                                                                                                                           | A      |
| 5   | 1:05      | Điền textarea: viết ~2 câu cẩn thận, xoá viết lại 1 lần → gửi                                                                                                                                                         | A      |
| 6   | 1:12      | Nhận toast "Đã gửi ẩn danh" → nhả vai, thở nhẹ một cái                                                                                                                                                                | A      |
| 7   | 1:20      | Switch sang B → **không click nút "Mở Trợ lý Giải nghĩa" ngay** — mắt quét footer trước, đọc tất cả 4 chip một lượt: "Augmentation là gì?", "Hallucination là gì?", "Vector Embedding là gì?", "Khác gì Fine-tuning?" | B      |
| 8   | 1:35      | Click "🧩 Augmentation là gì?" — không do dự sau khi đã đọc xong 4 chip                                                                                                                                               | B      |
| 9   | 1:40      | Đọc phần giải thích trong right panel rất chậm (~35 giây), dừng lại ở analogy "kẹp tài liệu tham khảo" → đọc lại lần 2                                                                                                | B      |
| 10  | 2:18      | Đọc dòng "Mức độ chắc chắn: CAO" → gật nhẹ                                                                                                                                                                            | B      |
| 11  | 2:25      | Đọc phần "Dẫn chứng: Slide 6 (Giai đoạn 2) & Slide 7" → click vào để xem có scroll tới slide không                                                                                                                    | B      |
| 12  | 2:35      | Click "✅ Đã hiểu → Làm Quiz củng cố"                                                                                                                                                                                 | B      |
| 13  | 2:40      | **Không** click "❓ Vẫn chưa thông → Nhờ Coach" — sau khi đọc xong giải thích, tự quyết định không escalate                                                                                                           | B      |
| 14  | 2:45      | Scroll xuống quiz → đọc câu hỏi + 4 đáp án kỹ → chọn B → đúng → "✅ Đã thông hiểu"                                                                                                                                    | B      |
| 15  | 3:00      | Switch sang C → đọc dòng status bar "Radar quan sát học tập đang bật" to ra một lần                                                                                                                                   | C      |
| 16  | 3:15      | Proactive popup xuất hiện → dừng tay, biểu cảm bất ngờ — nhìn popup khoảng 5 giây im lặng                                                                                                                             | C      |
| 17  | 3:22      | Click "✨ Giải thích nhanh giúp mình" ngay — không đọc hai nút còn lại                                                                                                                                                | C      |
| 18  | 3:30      | Đọc giải thích trong popup                                                                                                                                                                                            | C      |
| 19  | 3:42      | Nhìn vào link "ℹ️ Vì sao hệ thống hỏi câu này?" — dừng ~3 giây → không click                                                                                                                                          | C      |
| 20  | 3:50      | So sánh: "B với C cũng giống nhau nhỉ, nhưng cái này (C) tự hỏi mình luôn"                                                                                                                                            | C      |

---

**INTERPRETED**

- **Về Option A — ẩn danh giảm barrier nhưng không loại bỏ hoàn toàn:**
  Do dự 12 giây ở nút A trước khi click. Chọn ẩn danh không do dự, nhưng việc do dự trước đó cho thấy cost của việc "chủ động lên tiếng" vẫn còn — ẩn danh chỉ giảm, không xóa. Điều này khớp với quote phỏng vấn gốc: _"Mình nghĩ là không tại mình cũng hơi ngại."_

- **Về Option A — điền textarea cẩn thận, không rỗng:**
  Viết 2 câu và sửa lại 1 lần — khác với T1 (Lê Thanh Tình) gõ mờ nhạt. T3 biết mình kẹt ở đâu (RAG, Augmentation) nên có thể mô tả được; A không breakdown với T3 về mặt nội dung, chỉ còn barrier tâm lý.

- **Về Option B — đọc hết 4 chip trước khi chọn:**
  Phù hợp với hành vi tra cứu kỹ trước phỏng vấn gốc: workaround là "hỏi AI trước, nếu chưa rõ mới Google" → cũng kiểm tra options có sẵn trước khi hành động. Không click vội.

- **Về Option B — đọc lại analogy lần 2:**
  Analogy "kẹp tài liệu tham khảo" được đọc lại — đây là cách học tự nhiên của T3: hiểu qua hình ảnh trước, rồi mới map vào kỹ thuật. Giải thích của Option B phù hợp với learning style.

- **Về Option B — không escalate lên Coach sau khi đã hiểu:**
  Sau khi click "Đã hiểu", T3 không click "Nhờ Coach". Cost của escalation vẫn cao — chỉ escalate khi thực sự cần. Điều này khớp với _"Mình cũng hơi ngại."_

- **Về Option C — phản ứng "bất ngờ tích cực":**
  Dừng 5 giây khi popup hiện → click "Giải thích nhanh" ngay. Không dismiss. Khớp chính xác với _"Wow, được giải thoát rồi!"_ khi coach chủ động hỏi. C trigger được cảm giác giải thoát mà T3 đã mô tả trong phỏng vấn.

- **Về Option C — không click "Vì sao hệ thống hỏi?":**
  Tò mò nhìn vào link nhưng không click — có thể ngại can thiệp thêm vào flow, hoặc đã thấy đủ từ giải thích. Đây là tín hiệu T3 không cần transparency sâu về cơ chế AI, chỉ cần kết quả.

- **Nhận xét tự phát cuối phiên ("B với C cũng giống nhau nhỉ"):**
  T3 tự so sánh B và C, đặt đúng câu hỏi phân biệt hai option. Cho thấy T3 hiểu được mechanism, không chỉ dùng theo quán tính.

---

**DECIDED**

| Chọn option | Lý do                                                                                                                                                | Đánh đổi                                                                                                                                |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **B**       | Không cần hỏi người — AI giải thích ngay, tự đọc và hiểu được; barrier xã hội = 0; không phụ thuộc vào việc hệ thống có phát hiện đúng lúc hay không | Phải tự tìm thấy chip — nếu không nhìn thấy footer, không vào được. Chip cố định nên nếu câu hỏi của mình không trùng với 4 chip thì bí |

**Lý do không chọn A:** Barrier tâm lý vẫn còn dù có ẩn danh — do dự 12 giây. A vẫn yêu cầu chủ động lên tiếng.

**Lý do không chọn C:** C tích cực và T3 click "Giải thích nhanh", nhưng T3 không kiểm soát được _khi nào_ popup xuất hiện. B cho T3 chủ động hơn: muốn hỏi lúc nào thì hỏi lúc đó.

---

**STILL UNPROVEN**

- Nếu popup C xuất hiện khi T3 **không** đang kẹt (false positive), T3 có cảm thấy bị theo dõi và dismiss hẳn không? Phản ứng tích cực hiện tại có thể do context đang thực sự kẹt — chưa test được false positive case.
- Barrier do dự 12 giây ở A giảm bao nhiêu nếu thêm microcopy như "Không ai biết tên bạn" ngay cạnh nút? Chưa test được.
- T3 không escalate lên Coach dù có option — liệu với bài quiz thực tế T3 có muốn Coach biết để ôn lại sau không? B hiện tại không persistent: sau phiên học thông tin đó mất đi.
- 4 chip cố định ("Augmentation", "Hallucination", "Vector Embedding", "Khác gì Fine-tuning") đủ phủ câu hỏi T3 gặp với RAG không? Nếu thuật ngữ mới không có chip tương ứng, B bị điểm yếu.

---

**Quote nguyên văn từ phỏng vấn Day 17**

> "Thực ra thì về việc đọc slide khi mà học bài thì có một số khó khăn là đầu tiên là về các thuật ngữ trong slide, vì dạo này bắt đầu học sang các track chuyên sâu nên là cũng có nhiều từ ngữ hơi khó hiểu..."

> "À về một cái thuật ngữ thì ở trước đây thì có một số cái như là RAG (Retrieval-Augmented Generation) các thứ á, bắt đầu cũng không không nhớ nó là cái gì, nên lại vẫn phải đi tra các thứ."

> "Thì đầu tiên mình sẽ lên lên hỏi AI (cười). Sau đó thì nếu mà AI nó không trả lời cho mình một cách chính xác thì maybe mình sẽ lên Google..."

> "...mình nghĩ chắc là mất khoảng 10 phút để tra cứu thêm một thuật ngữ."

> "Mình nghĩ là không tại mình cũng hơi ngại (cười)."

> "Thí dụ như là các bài quiz ý, thì cái mật độ của câu hỏi nó nhiều và cũng tốc độ nhanh, khi mà phải vừa đọc một cái câu hỏi xong có bốn đáp án, ôi trời ơi không nhớ nó là gì luôn."

> "Mình cảm thấy được kiểu: 'Wow, được giải thoát rồi!' (cười)"

---

**Đối chiếu với kỳ vọng trước phiên**

| Kỳ vọng của nhóm                                               | Kết quả thực tế                                        | Đánh giá                                                              |
| -------------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------------------- |
| T3 sẽ chọn C vì không cần chủ động — phù hợp "được giải thoát" | T3 click "Giải thích nhanh" ở C nhưng cuối cùng chọn B | Bất ngờ — C trigger cảm giác tích cực nhưng B cho nhiều kiểm soát hơn |
| T3 sẽ do dự nhiều ở A vì ngại                                  | Do dự 12 giây → chọn ẩn danh và điền đầy đủ            | Đúng một phần — do dự có nhưng không block hoàn toàn như kỳ vọng      |
| T3 sẽ click chip ngay khi thấy B                               | Đọc hết 4 chip trước khi click                         | Không đúng — T3 cẩn thận, không click vội                             |
