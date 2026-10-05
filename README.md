# Lab 18 — Ba Solution Options · Human–AI Micro-prototypes

> **Track 1 · Case C — AI Support Radar (VLearn)**

---

## 1. Thông tin cá nhân & Đội ngũ

| Mục | Nội dung |
| --- | --- |
| Họ và tên | **Chử Trần Phương Nam** |
| Mã sinh viên | `2A202602675` |
| Nhóm | **H3201** |
| Track | Track 1 |
| Case | Case C — AI Support Radar |
| Option phụ trách chính | **Option B — In-situ Grounded AI** |
| Ngày nộp | 2026-10-05 |

**Thành viên nhóm:**

| # | Mã SV | Họ và tên | Option phụ trách |
| - | ----- | --------- | ---------------- |
| 1 | `2A202602675` | Chử Trần Phương Nam | **B** — In-situ Grounded AI |
| 2 | `2A202602636` | Bùi Hải Nam | **C** — Proactive AI Radar (chính) |
| 3 | `2A202602585` | Phùng Gia Khánh | **C** — Proactive AI Radar (hỗ trợ) |
| 4 | `2A202602930` | Phan Duy Thanh | **A** — User-Led / No-inference |

> Nhóm 4 người, 3 option — Option C do 2 người cùng phụ trách vì đây là option phức tạp nhất (timer trigger + proactive popup + xem trước thẻ coach).

---

## 2. Hypothesis Problem

```
Khi đọc hoặc xem lại slide của track chuyên sâu và gặp một thuật ngữ / định nghĩa chưa hiểu,
learner gặp khó khăn trong việc hiểu đủ để học tiếp và làm quiz vì phải tự tra qua nhiều kênh
rời rạc không gắn với đúng chỗ trên slide, một số người ngại hỏi, và người hỗ trợ không biết
họ đang kẹt, dẫn đến mất ~10 phút cho mỗi thuật ngữ, lúng túng khi làm quiz và lo lắng vì
thấy mình tụt lại.
```

| Thành phần | Nội dung | Evidence neo vào |
| --- | --- | --- |
| **User** | Learner đang học track chuyên sâu AI Thực Chiến | PN1, PN2, PN3 |
| **Situation** | Đọc hoặc xem lại slide, gặp thuật ngữ / định nghĩa chưa rõ | PN3: "RAG"; PN1: "thuật ngữ tiếng Anh"; PN2: "định nghĩa chưa được làm rõ" |
| **Job-to-be-done** | Hiểu đủ để học tiếp và làm được quiz | PN3: vừa recap ở nhà vừa phải làm quiz |
| **Barrier** | Tra cứu rời rạc (~10 phút/thuật ngữ) + ngại hỏi người + coach không biết learner đang kẹt | PN3: hỏi AI → Google · "hơi ngại"; PN2: "các anh cũng không hỏi tình hình của mình mấy" |
| **Consequence** | Tốn thời gian, quiz không kịp nhớ, buồn / lo lắng vì thấy tụt lại | PN3: "ôi trời ơi không nhớ nó là gì luôn"; PN1: "thấy buồn ạ" |

**Điều vẫn chưa được chứng minh sau Day 17:**
- Learner phản ứng thế nào khi **AI** (không phải người) phát hiện họ kẹt — "được giải thoát rồi!" là phản ứng với giảng viên, chưa biết có transfer sang AI không.
- Ngại hỏi là phổ biến hay chỉ một số người — PN2 và PN3 đi hai hướng ngược nhau.
- Hậu quả học tập có đo được (điểm, deadline) hay chỉ là cảm nhận.

---

## 3. Three Solution Options

### Option A — User-Led / No-inference
**Người phụ trách:** Phan Duy Thanh `2A202602930`

Learner **tự đánh dấu** chỗ chưa hiểu trên slide, chọn loại nội dung và mô tả ngắn. Hệ thống **không suy đoán gì** — chỉ tự động gắn số slide và gửi câu hỏi tới coach. Learner chọn gửi ẩn danh hoặc kèm tên (mặc định ẩn danh để giảm ngại). Coach nhận đủ context (slide số mấy, loại câu hỏi, mô tả của learner) và phản hồi lại.

> **Barrier giải:** Barrier 2 (ẩn danh giảm ngại) + Barrier 1 (tự gắn đúng slide thay vì phải mô tả vị trí).
> **Rủi ro:** Chỉ chạy khi learner đã tự nhận ra mình kẹt — không giải được trường hợp không biết mình kẹt ở đâu.
> **Link prototype:** [`prototype_phuongnam/index.html`](./prototype_phuongnam/index.html) → chọn **Option A**

---

### Option B — In-situ Grounded AI *(option tôi phụ trách)*
**Người phụ trách:** Chử Trần Phương Nam `2A202602675`

Learner **hỏi AI ngay tại slide** bằng cách click chip khái niệm sẵn có (Augmentation, Hallucination, Vector Embedding, Khác gì Fine-tuning?) hoặc bôi đen đoạn văn để hỏi tự do. AI giải thích dựa trên nội dung slide 5–7, kèm **nhãn độ chắc chắn** (CAO / TRUNG BÌNH / THẤP) và dẫn chứng slide. Nếu learner vẫn chưa hiểu, AI soạn nháp câu hỏi cho coach — learner xem, sửa, rồi mới gửi (mặc định ẩn danh).

> **Barrier giải:** Barrier 1 (tra cứu rời rạc ~10 phút → giải thích trong 1 giây) + Barrier 2 (không phải hỏi người, không có chi phí xã hội).
> **Rủi ro:** Learner phải tự tìm thấy chip — nếu không nhìn thấy footer, không vào được. Chip cố định không phủ hết thuật ngữ mới.
> **Link prototype:** [`prototype_phuongnam/index.html`](./prototype_phuongnam/index.html) → chọn **Option B**

---

### Option C — Proactive AI Radar
**Người phụ trách:** Bùi Hải Nam `2A202602636` + Phùng Gia Khánh `2A202602585`

AI **chủ động phát hiện** learner dừng lâu (≥ 20 giây) ở slide khó và **tự hỏi trước**: "Bạn có cần mình hỗ trợ giải thích không?" Learner chọn giải thích nhanh / nhờ coach / để sau / tắt hẳn. Nếu chọn nhờ coach, learner xem trước thẻ sẽ gửi (kèm tín hiệu hệ thống đã đo) trước khi xác nhận. AI nêu rõ mình dựa vào tín hiệu gì và gọi đó là suy đoán.

> **Barrier giải:** Barrier 3 (coach/hệ thống không biết learner đang kẹt) + không cần learner chủ động nhận ra mình gặp khó.
> **Rủi ro:** Popup sai thời điểm (learner đang đọc bình thường) gây cảm giác bị theo dõi. Giá trị phụ thuộc vào trạng thái learner khi popup xuất hiện.
> **Link prototype:** [`prototype_phuongnam/index.html`](./prototype_phuongnam/index.html) → chọn **Option C**

---

## 4. Đóng góp cụ thể của tôi trong sản phẩm nhóm

### Option B — phần tôi tự build

| Thành phần | Mô tả |
| --- | --- |
| **4 chip khái niệm** | "Augmentation là gì?", "Hallucination là gì?", "Vector Embedding là gì?", "Khác gì Fine-tuning?" — soạn cả 4 canned output kèm analogy, nhãn độ chắc chắn và dẫn chứng slide |
| **AI explanation drawer** | Right panel giải thích theo chip, hiển thị mức chắc chắn, link dẫn chứng slide, nút "Đã hiểu" và "Nhờ Coach" |
| **Escalation ticket** | Ticket AI soạn sẵn từ tên chip → learner xem, sửa, chọn ẩn danh/kèm tên, rồi mới gửi |
| **Text selection** | Feature bôi đen đoạn văn → floating popup "Giải thích đoạn này" — cho phép hỏi tự do ngoài chip |

### Đóng góp vào bối cảnh chung (shared context)

- Phỏng vấn PN3 (Day 17): khai thác được evidence trực tiếp cho Barrier 2 (ngại hỏi) và phản ứng tích cực khi được hỏi trước — hai data point quan trọng nhất để thiết kế Option B và C.
- Rà soát câu hỏi facilitation của cả nhóm (Chặng 5): phát hiện 1 câu leading ("bạn có thấy Option B tiện hơn không?") và đề xuất sửa lại.
- Viết `three-option-design-sheet.md` §1.1 (errata): đối chiếu README nhóm với 4 file note gốc, phát hiện 5 điểm sai về tình huống, barrier và quote.

### Tham gia Human–AI Decision Table (Chặng 3)

Phụ trách viết toàn bộ Decision Table cho **Option B** (§3.2 trong `three-option-design-sheet.md`): xác định AI Ask thay vì Act, thiết kế nhãn độ chắc chắn cho Evidence & Uncertainty, và đường Control & Recovery (sửa nháp → không gửi → thu hồi).

### Hỗ trợ đồng đội

- Bùi Hải Nam (Option C): góp ý canned output cho popup C — đề xuất thêm tên giai đoạn cụ thể ("Giai đoạn 2 — Augmentation") thay vì "dừng lâu" chung chung; đây trở thành **Next Change** của nhóm.
- Phùng Gia Khánh (Option C): review thẻ coach trong popup C, đề xuất thêm trường "Tín hiệu cụ thể" để đáp ứng nguyên lý Evidence & Uncertainty.

---

## 5. Dữ liệu kiểm thử & Bài học

### 5.1. Phiên tôi facilitate — Chu Thùy Dương `2A202602660`

*(Chi tiết đầy đủ: [`feedback-note/feedback-chutranphuongnam.md`](./feedback-note/feedback-chutranphuongnam.md))*

| Observation | Nội dung |
| --- | --- |
| **First action** | Đọc slide kỹ từ đầu, dừng ở sơ đồ RAG — không click gì ngay |
| **Chỗ do dự** | Dừng ~12 giây trước khi click nút ở Option A; đọc hết 4 chip B trước khi chọn 1 |
| **Evidence đọc kỹ** | Đọc lại analogy "kẹp tài liệu tham khảo" lần 2; đọc nhãn "Mức độ chắc chắn: CAO"; nhìn vào link dẫn chứng slide |
| **Control & recovery** | Không click "Nhờ Coach" ở B sau khi đã hiểu — tự quyết định không escalate |
| **Option được chọn** | **B** |
| **Lý do** | Không cần hỏi người, AI giải thích ngay, tự đọc được — loại bỏ hoàn toàn chi phí xã hội |
| **Trade-off tester nêu** | Phải tự tìm thấy chip; chip cố định không phủ hết nếu gặp thuật ngữ mới |
| **Evidence chống lại kỳ vọng nhóm** | Nhóm tưởng T3 sẽ chọn C (vì "được giải thoát rồi!" trong phỏng vấn) — thực tế T3 click "Giải thích nhanh" ở C nhưng vẫn chọn B vì **muốn kiểm soát được khi nào hỏi** |

### 5.2. Bảng tổng hợp 4 phiên của nhóm

*(Chi tiết đầy đủ: [`group-feedback-synthesis.md`](./group-feedback-synthesis.md))*

| | **T1 — Lê Thanh Tình** | **T2 — Vũ Quang Tiến** | **T3 — Chu Thùy Dương** | **T4 — Lê Anh Duy** |
| --- | --- | --- | --- | --- |
| First action | Dừng dài ở slide, click A khi thấy nút | Click "Mở Trợ lý" ngay, bỏ qua chip | Đọc kỹ slide, do dự 12s ở A | Đọc cơ chế radar C trước |
| Option chọn | **C** | **B** | **B** | **B** |
| Lý do chính | Không cần tự nhận ra mình kẹt | Nhanh, tự do, không chờ | Không hỏi người, tự đọc được | Linh hoạt: bôi text, hỏi tự do |
| Điểm phân biệt | Duy nhất chọn C; không biết mình kẹt ở đâu | Bỏ qua chip, gõ tự do; chọn kèm tên | Click C tích cực nhưng chọn B vì kiểm soát hơn | Bôi text thay vì chip — cách dùng B không dự đoán được |

**Pattern P1 — B phù hợp với nhiều learner-type vì nhiều cách vào:**
Chip (T3) · chatbox tự do (T2) · bôi text (T4) · cả ba đều không cần hỏi người.

**Pattern P2 — A breakdown ở bước mô tả nếu learner không biết mình kẹt ở đâu:**
T1 gõ mờ nhạt, không biết viết gì. T3 điền được vì biết mình kẹt ở RAG.

**Pattern P3 — C có giá trị với learner không tự nhận ra barrier; bị dismiss bởi người đã tự lo được:**
T1 chọn C (không biết mình kẹt). T2 dismiss C (đã tự lo). T3 click C tích cực nhưng chọn B (kiểm soát được hơn).

**Điều bất ngờ — trái giả thuyết nhóm:**
Nhóm dự đoán T3 (ngại hỏi → "được giải thoát") sẽ chọn C. Thực tế T3 chọn B vì B cũng không cần hỏi người, lại còn chủ động được khi nào hỏi. **C bị cảm nhận là "bị theo dõi" hơn là "được giúp đỡ"** khi learner đã có mental model về tình huống của mình.

### 5.3. Next Change

**Sửa Option C popup — thêm tín hiệu cụ thể thay vì "dừng lâu" chung chung:**

~~`"Phát hiện bạn đang dừng lâu ở phần kiến thức khó"`~~ → **`"Bạn đã dừng 27 giây ở Giai đoạn 2 — Augmentation"`**

Đã thực hiện trong prototype (`index.html` line 371): popup subtitle và body text đã cập nhật để nêu đúng tên giai đoạn và khái niệm cụ thể.

Lý do: P3 cho thấy T2 dismiss ngay và T3 không đổi lựa chọn dù click tích cực. Nếu popup nêu đúng tên giai đoạn, T1-type có thêm context để nhận ra "đây đúng là chỗ tôi vướng" — tăng relevance cho người cần nhất.

Nguyên lý liên quan: **Evidence & Uncertainty** — learner cần thấy AI dựa vào tín hiệu nào cụ thể.

### 5.4. Still Unproven

**Chip B có đủ discoverable không trong 30 giây đầu?**

T3 đọc hết 4 chip trước khi chọn — nhưng đó là vì đã biết chip ở đó. T4 bỏ qua chip hoàn toàn, dùng bôi text. Chưa quan sát được learner thật tìm thấy chip như thế nào trong 30 giây đầu của Option B.

**Cách đo trong vòng test tiếp theo:** Khi switch sang B, facilitator đặt đồng hồ và hỏi sau 30 giây: *"Bạn thấy gì ở phần dưới slide không?"* — nếu tester không tự nhắc đến chip, ghi nhận là "không phát hiện tự nhiên". Nếu ≥ 2/3 tester không tìm thấy chip trong 30s → thêm animation glow hoặc nudge nhỏ khi lần đầu vào option B.

---

## 6. AI Support Log

*(Chi tiết đầy đủ: [`ai-support-log/log-chutranphuongnam.md`](./ai-support-log/log-chutranphuongnam.md))*

| Khâu | AI hỗ trợ hiệu quả | Điểm sai tôi đã tự sửa |
| --- | --- | --- |
| Chuẩn bị phỏng vấn Day 17 | Gợi ý Big 3 Questions và conversation guide | Câu probe về hậu quả còn chung — tôi viết lại thành hành vi cụ thể |
| Build Option B | Sinh canned output chip, layout drawer, escalation ticket | Output dài, analogy ở cuối, thiếu chip thứ 4 ("Khác gì Fine-tuning?") — tôi cắt, đảo thứ tự, bổ sung |
| Kiểm tra câu facilitation | Rà soát 5 câu Compare cuối phiên | Phát hiện 1 câu leading ("tiện hơn không") — tôi đổi lại đúng format |
| Viết feedback note | Sinh 20 observation rows, INTERPRETED, DECIDED, STILL UNPROVEN | Timestamp ước lượng; Pattern P3 ban đầu viết "C intrusive" quá sớm — tôi sửa thành "phụ thuộc trạng thái learner" |
| Group synthesis | Tổng hợp pattern từ 4 phiên | — |

**Phần tôi tự làm không dùng AI:**
- Trực tiếp phỏng vấn Chu Thùy Dương (PN3 Day 17), ghi chép và điền note
- Quyết định thứ tự test A → B → C trong phiên (để quan sát so sánh liền mạch A vs B)
- Diễn giải sau phiên: "đọc lại analogy lần 2" và "không escalate sau khi hiểu" là signal về learning style
- Thêm bảng "Đối chiếu kỳ vọng vs thực tế" vào feedback note — đây là insight quan trọng nhất của phiên

---

## Bảng 5 Cổng Đánh Giá

| Cổng | Tiêu chí | Trạng thái |
| --- | --- | --- |
| **Cổng 1 — Evidence Continuity** | Hypothesis Problem gắn ≥ 1 dữ kiện Day 17 + chỉ rõ ẩn số chưa biết | ✅ — PN1/PN2/PN3 neo vào từng barrier; 3 điều chưa biết được liệt kê |
| **Cổng 2 — Meaningful Options** | A/B/C cùng problem, khác rõ ở mechanism và phân chia quyền user–AI | ✅ — A: Don't Act / B: Ask / C: Act; ai khởi xướng khác nhau hoàn toàn |
| **Cổng 3 — Human Control** | Mỗi option có Expectation, Agency, Evidence/Uncertainty và đường thoát | ✅ — Decision Table đủ 3 option; ẩn danh mặc định; nút dismiss/thu hồi/tắt; C popup nêu tín hiệu cụ thể (E&U) |
| **Cổng 4 — Test-ready** | Người ngoài tự mở, tự làm cùng task A/B/C, không cần narrate | ✅ — Prototype chạy tại `prototype_phuongnam/`; có nút Reset; đã fix text popup chỉ hiện đúng button theo option đang chọn |
| **Cổng 5 — Learning, Not Praise** | 4 Feedback Notes độc lập, pattern + khác biệt, 1 Next Change, 1 Still Unproven | ✅ — 4 phiên × 4 người facilitate khác nhau; Next Change đã implement; Still Unproven có điều kiện đo cụ thể |

---

## Cấu trúc file nộp

```
Track1_Day19_2A202602930_PhanDuyThanh/
├── README.md                          ← file này
├── three-option-design-sheet.md       ← Chặng 1–3: Hypothesis Problem, A/B/C, Human–AI Decision Table
├── prototype-link.md                  ← link A/B/C, cách mở, reset path
├── prototype_phuongnam/               ← prototype HTML/CSS/JS dùng chung cho cả A/B/C
├── prototype-feedback-note.md         ← index → 4 file phiên
├── feedback-note/
│   ├── feedback-phanduythanh.md       ← Phiên 1: Lê Thanh Tình
│   ├── feedback-buihainom.md          ← Phiên 2: Vũ Quang Tiến
│   ├── feedback-chutranphuongnam.md   ← Phiên 3: Chu Thùy Dương (phiên tôi facilitate)
│   └── feedback-phungiakhanh.md       ← Phiên 4: Lê Anh Duy
├── group-feedback-synthesis.md        ← Pattern P1–P4, Next Change, Still Unproven
├── ai-support-log.md                  ← index → 4 file log cá nhân
├── ai-support-log/
│   ├── log-chutranphuongnam.md        ← log của tôi (chi tiết)
│   ├── log-phanduythanh.md
│   ├── log-buihainom.md
│   └── log-phungiakhanh.md
├── note/                              ← bản ghi phỏng vấn Day 17 (4 thành viên)
└── prototype-test-log.md              ← kết quả automated test 11 test case
```
