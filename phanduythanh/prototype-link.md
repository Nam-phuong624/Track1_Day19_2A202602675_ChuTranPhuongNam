# Chặng 4 — Prototype Link & Definition of testable

> **Người thực hiện:** Phan Duy Thanh · `2A202602930` · **Gate:** GATE 4 — Test-ready
> Ba micro-prototype là HTML/CSS/JS thuần, **không cần cài gì, không cần server, không gọi model/API thật**.

---

## 1. Link ba option

| Option | Cơ chế | Người phụ trách | Đường dẫn | Trạng thái | Đã test mở trên máy khác? |
| --- | --- | --- | --- | --- | --- |
| **A** | User-led / no-inference — learner tự khai, AI không suy đoán | `[chốt ở Chặng 2]` | [options/option-a/index.html](./options/option-a/index.html) | test-ready | ✅ đã mở và chạy trọn luồng |
| **B** | User + AI co-create — tín hiệu cấp nội dung, learner quyết định lộ diện | `[chốt ở Chặng 2]` | [options/option-b/index.html](./options/option-b/index.html) | test-ready | ✅ đã mở và chạy trọn luồng |
| **C** | AI initiate + human review — Support Queue có mentor duyệt | `[chốt ở Chặng 2]` | [options/option-c/index.html](./options/option-c/index.html) | test-ready | ✅ đã mở và chạy trọn luồng |

**Trang vào chung cho facilitator:** [index.html](./index.html) — liệt kê A/B/C, không lộ annotation.

**Kho dùng chung (~70%):**

| Thành phần | File | Dùng cho |
| --- | --- | --- |
| Deck + fixture + tín hiệu | [shared/fixture.js](./shared/fixture.js) | A, B, C |
| Khung slide + điều hướng | [shared/deck.js](./shared/deck.js) | A, B, C |
| Visual style + component | [shared/styles.css](./shared/styles.css) | A, B, C |

---

## 2. Cách mở và đường reset

| Option | Cách mở | Reset path | Thời gian mở |
| --- | --- | --- | --- |
| **A** | Double-click `options/option-a/index.html` | Nút **Bắt đầu lại** (góc phải trên) → xoá hết đánh dấu, về slide 1 | ~5 giây |
| **B** | Double-click `options/option-b/index.html` | Nút **Bắt đầu lại** → xoá trạng thái cảnh báo, về slide 1 | ~5 giây |
| **C** | Double-click `options/option-c/index.html` | Nút **Bắt đầu lại** → xoá queue, tắt công tắc, về tab Học viên + slide 1 | ~5 giây |

Không cần cài đặt, không cần mở terminal, không cần kết nối mạng.

---

## 3. Phạm vi micro-prototype

- [x] Mỗi option chỉ gồm **2–3 trạng thái** quanh **một** critical interaction
- [x] Không build full product; không gọi API/model thật (toàn bộ AI output là **canned**)
- [x] Cả ba dùng chung context screen, content fixture, component và visual style
- [x] Không cần người của nhóm ngồi cạnh narrate
- [x] Có **đường reset** rõ ràng ở cả ba

**Critical interaction của từng option:**

| Option | Critical interaction | Trạng thái |
| --- | --- | --- |
| A | Learner bấm "Chưa hiểu" → AI chỉ gom lại đúng điều learner đã tự khai | context → đánh dấu → checklist + danh sách |
| B | Banner cấp nội dung → learner chọn có cần hỗ trợ → chọn nêu tên hay ẩn danh | context → banner → câu hỏi nêu tên → kết quả |
| C | Phiên kết thúc → AI tạo queue item → mentor chấp nhận/từ chối → learner nhận kết quả | context → queue + thông báo → mentor quyết định → learner thấy kết quả |

---

## 4. QA trước khi mang đi test

Đổi chéo: mỗi người thử option do **người khác** build.

| # | Hạng mục kiểm | A | B | C | Người kiểm |
| - | ------------- | - | - | - | ---------- |
| 1 | Mở được trên máy người khác | ✅ | ✅ | ✅ | Phan Duy Thanh (đã chạy trên trình duyệt, không lỗi console) |
| 2 | Chạy đủ task end-to-end | ✅ | ✅ | ✅ | Phan Duy Thanh |
| 3 | Reset về context ban đầu OK | ✅ | ✅ | ✅ | Phan Duy Thanh |
| 4 | Không lộ tên/ý đồ của option cho tester | ✅ | ✅ | ✅ | Không có nhãn A/B/C nào hiện trên giao diện |
| 5 | Ba option cùng "độ hoàn thiện" | ✅ | ✅ | ✅ | Dùng chung `styles.css`, không option nào được polish hơn |

> Test lại bằng người thứ hai trong nhóm trước phiên test thật (**Chặng 5, phút 65–75**) và ghi người kiểm vào cột cuối.

---

## 5. Prototype annotation

Đặt **ngoài frame**, **không hiện cho tester**:

- [options/option-a/annotation.md](./options/option-a/annotation.md)
- [options/option-b/annotation.md](./options/option-b/annotation.md)
- [options/option-c/annotation.md](./options/option-c/annotation.md)

---

## 6. GATE 4 — Test-ready ✅

- [x] Một người **không build** có thể mở, thực hiện cùng task qua A/B/C
- [x] Cả ba bắt đầu từ cùng context và cùng task (xem [test/test-prompt.md](./test/test-prompt.md))
- [x] Không cần giải thích thêm để hiểu giao diện
- [x] Quay về context ban đầu được bằng nút Bắt đầu lại
