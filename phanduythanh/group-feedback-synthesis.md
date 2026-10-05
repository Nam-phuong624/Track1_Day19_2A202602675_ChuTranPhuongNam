# Chặng 6 — Group Feedback Synthesis

> **Người thực hiện:** Phan Duy Thanh · `2A202602930`
> Tổng hợp từ các Feedback Note độc lập của nhóm → **1 Next Change** + **1 Still Unproven**.
> Nguồn: [prototype-feedback-note.md](./prototype-feedback-note.md) (bản của Phan Duy Thanh) và note của các thành viên khác.
>
> ⚠️ **Trạng thái: CHƯA CÓ DỮ LIỆU.** Ba phiên test chưa diễn ra → bảng dưới đang trống.
> Không được suy diễn pattern khi chưa có note thật.

---

## 1. Bảng evidence tổng hợp

| Nội dung | Feedback 1 | Feedback 2 | Feedback 3 | Pattern hoặc khác biệt |
| -------- | ---------- | ---------- | ---------- | ---------------------- |
| **First action** | `[điền]` | `[điền]` | `[điền]` | `[điền]` |
| **Breakdown chính** | `[điền]` | `[điền]` | `[điền]` | `[điền]` |
| **Cách lấy lại control** | `[điền]` | `[điền]` | `[điền]` | `[điền]` |
| **Option được chọn** | `[điền]` | `[điền]` | `[điền]` | `[điền]` |
| **Trade-off** | `[điền]` | `[điền]` | `[điền]` | `[điền]` |

**Nguồn từng cột:**

| Cột | Người facilitate | File note |
| --- | ---------------- | --------- |
| Feedback 1 | `[điền]` | `[điền]` |
| Feedback 2 | `[điền]` | `[điền]` |
| Feedback 3 | `[điền]` | `[điền]` |

---

## 2. Pattern tìm được

> Chỉ ghi pattern khi **≥ 2 tester** cho thấy cùng một hành vi hoặc cùng một điểm vướng.

| # | Pattern | Số tester gặp | Bằng chứng (note nào, hành vi nào) | Do feedback hay do lỗi prototype? |
| - | ------- | ------------- | ---------------------------------- | --------------------------------- |
| 1 | `[điền]` | `[điền]` | `[điền]` | `[điền]` |
| 2 | `[điền]` | `[điền]` | `[điền]` | `[điền]` |

**Điểm khác biệt giữa các tester:** `[điền]`

**Điều bất ngờ / trái với kỳ vọng của nhóm:** `[điền]`

**Kiểm chéo với hypothesis ban đầu:**

| | Điều nhóm kỳ vọng trước khi test | Điều thực tế quan sát được |
| --- | --- | --- |
| Option A | Learner bấm đánh dấu ngay khi thấy vướng | `[điền]` |
| Option B | Learner đọc cảnh báo là về nội dung, không phải về mình | `[điền]` |
| Option C | Learner thấy nhẹ nhõm khi được hỏi trước (neo vào PN3) | `[điền]` |

---

## 3. Một Next Change duy nhất

> Chọn **1** thay đổi cho iteration tiếp theo. Không liệt kê danh sách dài.

| Mục | Nội dung |
| --- | --- |
| **Next Change** | `[điền]` |
| Nhắm vào option nào | ⬜ A · ⬜ B · ⬜ C |
| Nhắm vào nguyên lý nào | ⬜ Expectation · ⬜ Role & Agency · ⬜ Evidence & Uncertainty · ⬜ Control & Recovery |
| Vì sao là thay đổi này mà không phải cái khác | `[điền]` |
| Dấu hiệu sẽ quan sát ở vòng test sau để biết đã cải thiện | `[điền]` |
| Người phụ trách | `[điền]` |

**Dạng Next Change được phép:** giữ một option và sửa interaction · kết hợp hai option nhưng giữ một cơ chế chính rõ ràng · bỏ một option vì tester không hiểu hoặc nó không tạo khác biệt · sửa cả ba rồi test người tiếp theo.

---

## 4. Một điều Still Unproven

| Mục | Nội dung |
| --- | --- |
| **Still Unproven** | `[điền]` |
| Vì sao 3 phiên vừa rồi chưa trả lời được | `[điền]` |
| Cần test thế nào để trả lời ở vòng sau | `[điền]` |

---

## 5. Điều được phép / không được phép kết luận

**Được phép:**

> "Với **Hypothesis Problem này**, chúng tôi đã thử **ba cách giải**. Tester đã **làm…**, vì vậy **iteration tiếp theo** chúng tôi sẽ **…**"

**Không được phép:** ~~"User đã xác nhận solution này đúng."~~

- [ ] Không có dòng nào tuyên bố "validated"
- [ ] Không dùng 3 feedback để suy ra product value hoặc market demand
- [ ] 3 Feedback Note là 3 bản độc lập
- [ ] Pattern chỉ được ghi khi có ≥ 2 tester cùng gặp
