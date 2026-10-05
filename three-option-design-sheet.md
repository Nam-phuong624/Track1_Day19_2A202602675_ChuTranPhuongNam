# Three-Option Design Sheet — Case C · AI Support Radar (VLearn)

> **Nhóm:** H3201 · **Track 1** · **Case C — AI Support Radar**
> Nhãn: ⚙️ có sẵn từ Day 17 · ✍️ nhóm tự điền · 🧪 nháp do AI soạn, nhóm phải tự chốt · 🚫 cấm dùng AI
>
> File này là đầu ra của **Chặng 1 → Chặng 3** (GATE 1, GATE 2, GATE 3).

---

## 0. Thông tin chung

| Mục | Nội dung |
| --- | --- |
| Hypothesis Problem (tên ngắn) | ✍️ |
| Người điều phối điền file | ✍️ |
| Ngày chốt | ✍️ |
| Trạng thái | ⬜ Draft · ⬜ Đã review nhóm · ⬜ Đã chốt |

**Phân công phụ trách chính:**

| # | MHV | Họ và tên | Option phụ trách chính |
| - | --- | --------- | ---------------------- |
| 1 | `2A202602636` | Bùi Hải Nam | ✍️ A / B / C |
| 2 | `2A202602675` | Chử Trần Phương Nam | ✍️ A / B / C |
| 3 | `2A202602585` | Phùng Gia Khánh | ✍️ A / B / C |
| 4 | `2A202602930` | Phan Duy Thanh | ✍️ A / B / C |

> Nhóm có 4 người nhưng chỉ có 3 option → **một option do 2 người cùng phụ trách**. Ghi rõ ai là người chịu trách nhiệm chính của option đó.

---

## 1. Hypothesis Problem (⚙️ carry-over từ Day 17) — GATE 1

Đủ **5 thành phần**, không đổi case, không tìm problem mới.

| Thành phần | Nội dung ⚙️ |
| --- | --- |
| **User** | |
| **Situation** | |
| **Job-to-be-done** | |
| **Barrier** | |
| **Consequence** | |

**Evidence neo vào (từ 3 Practice Notes Day 17):**

| # | Practice Note | Observation / quote gốc ⚙️ | Nó chống lưng cho barrier nào |
| - | ------------- | --------------------------- | ----------------------------- |
| PN1 | | | |
| PN2 | | | |
| PN3 | | | |

**Điều nhóm vẫn CHƯA BIẾT (bắt buộc ≥ 1):** ✍️

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
