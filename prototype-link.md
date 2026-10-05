# Prototype Link — A/B/C dùng chung của nhóm

> **Nhóm:** H3201 · **Track 1** · **Case C — AI Support Radar**
> Đầu ra của **Chặng 4 — Build ba micro-prototype** (GATE 4).
> Nếu prototype là file trong repo, ghi đường dẫn tương đối; nếu là link ngoài (Figma/Framer/Netlify/…), ghi URL và đảm bảo **người ngoài nhóm mở được**.

---

## 1. Link ba option

| Option | Cơ chế (1 câu) | Người phụ trách | Link / đường dẫn | Trạng thái | Đã test mở trên máy khác? |
| --- | --- | --- | --- | --- | --- |
| **A** | User-led / No-inference | Phan Duy Thanh | [prototype/index.html](./prototype/index.html) *(chọn Option A)* | ☑ test-ready | ☑ Có |
| **B** | In-situ Grounded AI (User + AI co-create) | **Chử Trần Phương Nam** | [prototype/index.html](./prototype/index.html) *(chọn Option B — Mặc định)* | ☑ test-ready | ☑ Có |
| **C** | Behavioral Proactive AI | Bùi Hải Nam (+ Phùng Gia Khánh) | [prototype/index.html](./prototype/index.html) *(chọn Option C)* | ☑ test-ready | ☑ Có |

**Kho context/content dùng chung (~70%):**
- Thư mục: `prototype/` (chứa `index.html`, `style.css`, `app.js`).
- Shared Context: Màn hình bài giảng Slide 6 — *Retrieval-Augmented Generation (RAG)* trên nền tảng VLearn.
- Shared Content Fixture: Sơ đồ luồng 3 bước RAG, nội dung bài học, câu hỏi Quiz trắc nghiệm bên dưới slide để đo lường outcome học tập.

---

## 2. Cách mở & quay về điểm xuất phát (reset path)

> Tester phải tự mở được, tự làm hết task, và **quay về được context ban đầu** mà không cần nhóm giải thích.

| Option | Cách mở (1–3 bước) | Reset path | Thời gian mở mục tiêu |
| --- | --- | --- | --- |
| **A** | 1. Mở file `prototype/index.html` trên trình duyệt bất kỳ.<br>2. Bấm nút "Option A (User-Led)" trên thanh top bar.<br>3. Bấm "🚩 Đánh dấu chỗ chưa hiểu & Nhờ Coach". | Bấm nút **🔄 Reset Prototype** ở góc phải thanh Top bar (hoặc F5). | ≤ 5 giây |
| **B** | 1. Mở `prototype/index.html` (Mặc định mở sẵn Option B).<br>2. Click vào chip `[🔍 RAG là gì?]` hoặc gõ câu hỏi.<br>3. Đọc giải thích 3 bước $\rightarrow$ bấm "Đã hiểu" hoặc "Nhờ Coach". | Bấm nút **🔄 Reset Prototype** ở góc phải thanh Top bar. | ≤ 5 giây |
| **C** | 1. Mở `prototype/index.html` $\rightarrow$ chọn "Option C".<br>2. Dừng ở Slide 20 giây (hoặc bấm `[⚡ Giả lập: Đã dừng 25s]`).<br>3. Pop-up AI mở lời can thiệp xuất hiện ở góc phải. | Bấm nút **🔄 Reset Prototype** ở góc phải thanh Top bar. | ≤ 5 giây |

---

## 3. Phạm vi micro-prototype

- [x] Mỗi option chỉ gồm **2–3 trạng thái** quanh **một** critical interaction
- [x] Không build full product, không gọi API/model thật nếu không cần thiết (dùng Canned AI output chuẩn xác)
- [x] Cả ba dùng chung context screen, content và visual components
- [x] Không cần người của nhóm ngồi cạnh narrate
- [x] Có nút/luồng reset rõ ràng (≤ 5 giây)

---

## 4. QA trước khi mang đi test (10–15 phút cuối sprint)

Mỗi người thử option do **người khác** build, rồi cả nhóm chuẩn hoá A/B/C.

| # | Hạng mục kiểm | A | B | C | Người kiểm |
| - | ------------- | - | - | - | ---------- |
| 1 | Mở được trên máy người khác | ☑ | ☑ | ☑ | Chử Trần Phương Nam |
| 2 | Chạy đủ task end-to-end | ☑ | ☑ | ☑ | Phan Duy Thanh |
| 3 | Reset về context ban đầu OK (≤ 5s) | ☑ | ☑ | ☑ | Bùi Hải Nam |
| 4 | Không lộ tên/ý đồ của option cho tester | ☑ | ☑ | ☑ | Phùng Gia Khánh |
| 5 | Ba option trông cùng "độ hoàn thiện" (không có option nào nhỉnh hơn rõ rệt) | ☑ | ☑ | ☑ | Cả nhóm |

**Ghi chú lỗi phát hiện khi QA:** Đã kiểm tra liên kết giữa lời giải thích AI ở Option B với câu hỏi Quiz bên dưới. Khi bấm "Đã hiểu", trang tự động cuộn nhẹ xuống Quiz giúp tester không bị bỡ ngỡ.

---

## 5. Prototype Annotation (Dành cho Facilitator, ẩn khi test)

```text
OPTION B (Chử Trần Phương Nam):
- We expect the tester to: Thử bấm một chip gợi ý thuật ngữ hoặc gõ câu hỏi, đọc lời giải thích 3 bước, quan sát nhãn độ tin cậy, và bấm thử "Vẫn chưa hiểu" để xem Structured Help Ticket gửi Coach.
- Watch for: 
  1. Tester bấm chip gợi ý hay tự gõ câu hỏi trước?
  2. Tester có đọc nhãn nguồn slide & cảnh báo kiến thức ngoài slide không?
  3. Khi thấy bản nháp ticket gửi coach, tester có ngần ngại không và có để ý chế độ ẩn danh không?
  4. Tester có làm được câu hỏi Quiz sau khi xem giải thích không?
- Do not explain: Không giải thích trước cách hoạt động của chip hay nút gửi ẩn danh. Để tester tự thao tác.
```
