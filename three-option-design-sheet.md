# Three-Option Design Sheet — Case C · AI Support Radar (VLearn)

> **Nhóm:** H3201 · **Track 1** · **Case C — AI Support Radar**
> Nhãn: ⚙️ có sẵn từ Day 17 · ✍️ nhóm tự điền · 🧪 nháp do AI soạn, nhóm phải tự chốt · 🚫 cấm dùng AI
>
> File này là đầu ra của **Chặng 1 → Chặng 3** (GATE 1, GATE 2, GATE 3).

---

## 0. Thông tin chung

| Mục | Nội dung |
| --- | --- |
| Hypothesis Problem (tên ngắn) | AI Support Radar — Phát hiện và hỗ trợ người học bị kẹt âm thầm khi tự học slide khó |
| Người điều phối điền file | Phan Duy Thành (2A202602930) |
| Ngày chốt | 05/10/2026 |
| Trạng thái | ✅ Đã review nhóm · ✅ Đã chốt |

**Phân công phụ trách chính:**

| # | MHV | Họ và tên | Option phụ trách chính |
| - | --- | --------- | ---------------------- |
| 1 | `2A202602636` | Bùi Hải Nam | Option A (User-led / No-inference) |
| 2 | `2A202602675` | Chử Trần Phương Nam | Option B (User + AI co-create) |
| 3 | `2A202602585` | Phùng Gia Khánh | Option C (AI initiate, Human review) |
| 4 | `2A202602930` | Phan Duy Thành | Option C (AI initiate, Human review — Đồng phụ trách) |

> Nhóm có 4 người nhưng chỉ có 3 option → **Option C do Phùng Gia Khánh và Phan Duy Thành cùng phụ trách**.

---

## 1. Hypothesis Problem (⚙️ carry-over từ Day 17) — GATE 1

Đủ **5 thành phần**, không đổi case, không tìm problem mới.

| Thành phần | Nội dung chuẩn hóa ⚙️ |
| --- | --- |
| **User** | Learner tự học trên nền tảng VLearn (khóa AI Thực Chiến / track chuyên sâu) |
| **Situation** | Đang tự học/đọc một slide/nội dung khó trên VLearn vào buổi tối, một mình, không có ai ngồi cạnh |
| **Job-to-be-done** | Hiểu đủ nội dung/thuật ngữ cốt lõi để tiếp tục bài học và hoàn thành bài tập/quiz đúng hạn |
| **Barrier** | Không ai ở vai trò hỗ trợ biết họ đang mắc ở đâu **và** bản thân họ ngại/không chủ động lên tiếng hỏi |
| **Consequence** | Mất thời gian tự xoay xở (~10 phút/từ), không nhớ kiến thức khi làm quiz tốc độ cao, lỗ hổng kiến thức tích luỹ, đà học giảm dần |

### 1.1. Bảng tổng hợp Evidence Huddle Chặng 1 (Tổng hợp từ tất cả các Note phỏng vấn)

| Nguồn / Thành viên | User đã thực sự làm / nói gì? (Quotes & Facts nguyên văn) | Điều nhóm đang diễn giải (Suy đoán có căn cứ) |
| :--- | :--- | :--- |
| **PN1 (Phan Duy Thành)** <br>→ *Learner Lê Thanh Tình* | • Buổi học gần nhất chiều hôm qua.<br>• Làm đến một phần thì không hiểu nhưng không xác định được nội dung trên slide: *"Nói chung là em không tìm được cái nội dung ở đấy luôn."*<br>• Gặp thuật ngữ tiếng Anh: *"Hi-list (High list)?"*<br>• Cảm xúc: Thấy buồn, lo lắng khi nhận ra mình tụt lại phía sau. | • Learner gặp khó khăn trong việc định vị và diễn đạt chính xác điểm nghẽn nhận thức.<br>• Tự ti và lo lắng khi rơi vào trạng thái bị kẹt kiến thức một mình. |
| **PN2 (Bùi Hải Nam)** <br>→ *Learner 2A202602872 (K4)* | • Buổi học gần nhất là hôm qua; định nghĩa trên video/slide chưa rõ, đọc chưa hiểu.<br>• **Workaround:** Tự lên mạng search, hỏi bạn bè xung quanh hoặc hỏi lab coach; cảm thấy ổn thì mới chuyển phần.<br>• *"Thường là mình tự đi chủ động đi tìm các anh lab coach... chứ các anh cũng không hỏi tình hình của mình mấy."* | • Learner có phản xạ chủ động tìm kiếm các kênh hỗ trợ sẵn có (làm yếu giả định learner hoàn toàn bất lực không biết tìm ai).<br>• Coach đóng vai trò phản ứng thụ động (chờ hỏi mới trả lời), ít chủ động thăm dò. |
| **PN3 (Chử Trần Phương Nam)** <br>→ *Learner Nữ (Track chuyên sâu)* | • Vừa nghe giảng vừa đọc slide trên lớp, về nhà recap lại toàn bộ slide.<br>• Gặp thuật ngữ khó (ví dụ: `RAG`), không nhớ nên dừng tra cứu: Hỏi AI trước $\rightarrow$ Search Google cấu trúc mô hình (~10 phút/từ).<br>• Hoàn toàn không hỏi mentor/bạn vì **ngại**: *"Mình nghĩ là không tại mình cũng hơi ngại (cười)"*.<br>• Hậu quả làm quiz nhanh: *"ôi trời ơi không nhớ nó là gì luôn"*.<br>• Phản ứng khi được coach hỏi trước: *"Wow, được giải thoát rồi!"* | • **Minh chứng đắt giá cho Pain B (Chi phí xã hội):** Ngại hỏi là rào cản chính khiến learner im lặng tự xoay xở.<br>• Lỗ hổng kiến thức lộ rõ khi làm bài kiểm tra áp lực thời gian.<br>• Sự can thiệp chủ động từ người dạy mang lại sự giải tỏa tâm lý cực lớn. |
| **PN4 (Phùng Gia Khánh)** <br>→ *Learner AE06 (CS)* | • Học viên Khoa học máy tính, tham gia khóa học với mong muốn nắm chắc kiến thức AI thực chiến.<br>• Đi học, nghe giảng trên lớp đầy đủ; đang trong quá trình củng cố phương pháp tự học. | • Xác nhận động lực học tập nghiêm túc của sinh viên kỹ thuật; cần bổ sung sâu hơn về hành vi tương tác micro-interaction trong các vòng test prototype. |

### 1.2. Ánh xạ Evidence vào các Barrier cốt lõi

| # | Practice Note | Observation / quote gốc ⚙️ | Chống lưng cho Barrier nào |
| - | ------------- | --------------------------- | -------------------------- |
| **PN1** | Thành → Tình | *"Nói chung là em không tìm được cái nội dung ở đấy luôn"* | **Barrier 1:** Không tự chỉ ra được điểm nghẽn để người khác hỗ trợ. |
| **PN2** | Bùi Nam → K4 | *"các anh cũng không hỏi tình hình của mình mấy"* | **Barrier 2:** Giảng viên/Coach không có radar phát hiện người học đang kẹt. |
| **PN3** | Phương Nam → Nữ | *"Mình nghĩ là không tại mình cũng hơi ngại"*, *"Wow, được giải thoát rồi!"* | **Barrier 3 (Trọng tâm):** Chi phí xã hội (ngại hỏi) khiến learner tự cô lập; can thiệp chủ động giúp giải tỏa. |

### 1.3. Điều nhóm vẫn CHƯA BIẾT (Still Unproven — Bắt buộc $\ge 1$): ✍️
1. Liệu cơ chế **AI tự động phát hiện và gợi ý can thiệp** có tạo ra cảm giác *“được giải thoát”* như khi con người (coach) hỏi trực tiếp hay sẽ gây cảm giác bị soi mói / phiền hà?
2. Mức độ thiệt hại định lượng cụ thể (điểm số quiz bị giảm bao nhiêu %, tỷ lệ bỏ dở buổi học) trên quy mô toàn bộ học viên VLearn.

---

## 2. Ba Solution Options — GATE 2

Ba cách giải **cùng một problem**, khác nhau ở **cơ chế tương tác và phân chia quyền user–AI**.

| | **Option A** | **Option B** | **Option C** |
| --- | --- | --- | --- |
| Tên option | | | |
| Cơ chế (1 câu) | | | |
| Vị trí trên spectrum | User-led / No-inference | User + AI co-create | AI initiate, Human review |
| User làm gì? | | | |
| AI làm gì? | | | |
| Ai giữ quyền quyết định cuối? | | | |
| Chống lại barrier nào? | | | |
| Rủi ro chính nếu AI sai | | | |
| Người phụ trách chính | | | |

### 2.1. Comparison Contract (bắt buộc giống nhau)

| Trường | Giá trị dùng chung cho A/B/C |
| --- | --- |
| User | |
| Situation | |
| Task tester phải làm | |
| Outcome kỳ vọng | |

### 2.2. Distance Check 🚫

> Viết bằng lời của nhóm. **Không được** nhắc tới màu sắc, layout, wording, font, animation.

- **A khác B ở chỗ:** ✍️
- **B khác C ở chỗ:** ✍️
- **A khác C ở chỗ:** ✍️
- **Kết luận:** ba option khác nhau ở **mechanism / phân chia quyền**, không phải ba phiên bản giao diện ⬜

---

## 3. Human–AI Decision Table — GATE 3

Điền cho **từng option**. Mỗi dòng là một hành động trong critical interaction.

### 3.1. Option A — ✍️ tên option

| # | Tình huống | AI **Act** (tự làm) | AI **Ask** (hỏi trước) | AI **Don't Act** (không được làm) | User hiểu điều gì? | Đường kiểm soát / phục hồi khi AI sai |
| - | ---------- | ------------------- | ---------------------- | --------------------------------- | ------------------ | ------------------------------------- |
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |

### 3.2. Option B — ✍️ tên option

| # | Tình huống | AI **Act** | AI **Ask** | AI **Don't Act** | User hiểu điều gì? | Đường kiểm soát / phục hồi |
| - | ---------- | ---------- | ---------- | ---------------- | ------------------ | --------------------------- |
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |

### 3.3. Option C — ✍️ tên option

| # | Tình huống | AI **Act** | AI **Ask** | AI **Don't Act** | User hiểu điều gì? | Đường kiểm soát / phục hồi |
| - | ---------- | ---------- | ---------- | ---------------- | ------------------ | --------------------------- |
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |

### 3.4. Bốn nguyên lý Human–AI Design — đối chiếu

| Nguyên lý | A | B | C |
| --- | --- | --- | --- |
| **Expectation** — user biết AI sắp làm gì | | | |
| **Role & Agency** — quyền quyết định đặt đúng chỗ | | | |
| **Evidence & Uncertainty** — AI nói rõ căn cứ và độ chắc chắn | | | |
| **Control & Recovery** — user lấy lại quyền / sửa sai được | | | |

---

## 4. Gate tự kiểm

- [ ] **GATE 1** — Hypothesis Problem đủ 5 thành phần + ≥1 observation Day 17 + ≥1 điều chưa biết
- [ ] **GATE 2** — Cùng user/situation/task/outcome, khác mechanism hoặc phân chia quyền
- [ ] **GATE 3** — Rõ user/AI làm gì, agency phù hợp hậu quả, có đường kiểm soát/phục hồi
- [ ] Distance Check không nhắc màu / layout / wording
