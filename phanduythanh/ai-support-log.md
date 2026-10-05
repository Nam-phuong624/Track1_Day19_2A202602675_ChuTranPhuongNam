# AI Support Log — Phan Duy Thanh · `2A202602930`

> Khai báo **mọi** cách dùng AI trong quá trình làm Lab 18.
> **AI không được dùng để:** tạo quote / observation / feedback không tồn tại; làm sạch evidence đến mức mất tính chân thực;
> viết thay phần **đóng góp cá nhân** và phần **reflection**.

---

## 1. Bảng khai báo

| # | Dùng AI ở đâu | AI đã giúp gì | Điểm sai / hời hợt của AI | Tôi đã tự sửa thế nào |
| - | ------------- | ------------- | ------------------------- | --------------------- |
| 1 | Đọc đề Lab 18 và dựng khung thư mục nộp bài | Cấu trúc hoá 6 chặng + 5 gate thành các file rời; tạo `shared/`, `options/`, `test/` | AI có xu hướng **điền sẵn** cả những phần nhóm phải tự chốt (phân công option, phần đóng góp) và trình bày như đã xong | Mọi chỗ chưa có dữ liệu thật đều để trống kèm nhãn `[điền]` hoặc nhãn 🚫; không nhận phần nào là đã chốt |
| 2 | Chặng 1 — rút evidence từ note Day 17 (`note/`) | Gom PN1/PN2/PN3 thành bảng facts-vs-diễn giải; tách rõ điều đã biết và điều còn là suy đoán | AI có thể **diễn giải quá xa** so với lời tester thật (ví dụ suy ra nguyên nhân của "không xác định được chỗ vướng") | Mọi dòng diễn giải đều ghi rõ "đây là suy đoán từ một lần kể"; quote được đối chiếu lại với bản ghi gốc; note rỗng `notes_khanh.md` bị loại khỏi evidence |
| 3 | Chặng 2 — nháp ba option từ Solution Parking Lot | Gợi ý map hướng #2 / #5 / #6 thành ba mechanism dọc spectrum user-led → co-create → AI-initiate | AI chọn theo "spectrum đẹp" chứ chưa chắc theo evidence; có thể tạo option nghe hợp lý nhưng không giải barrier đã thấy | Mỗi option đều phải trả lời câu neo "cơ chế này làm việc lên tiếng dễ hơn ở chỗ nào?"; thêm mục trade-off nói thẳng option nào **chưa** giải được pain nào |
| 4 | Chặng 3 — Human–AI Decision Table | Gợi ý Act / Ask / Don't Act cho từng option và các đường control/recovery | AI hay **bỏ qua rủi ro riêng tư** ở option C và dễ để AI tự quyết ở chỗ có hậu quả thật | Bắt buộc bước human review trước khi liên hệ learner ở option C; thêm công tắc từ chối nhận hỗ trợ và đường tự đánh dấu khi mentor reject |
| 5 | Chặng 4 — sinh code ba micro-prototype | Viết `shared/fixture.js`, `shared/deck.js`, `shared/styles.css` và ba trang option A/B/C (HTML/CSS/JS thuần) | Bản đầu **lỗi thật**: `deck` bị dùng trước khi gán xong nên `onSlide` ném `TypeError` ở cả option A và C | Phát hiện bằng cách mở prototype trên trình duyệt và bắt lỗi console; sửa bằng biến index riêng (`cur`, `TOTAL`) rồi chạy lại trọn luồng cả ba option, không còn lỗi |
| 6 | Chặng 4 — ghi `prototype-link.md` | Điền bảng link, cách mở, reset path, checklist QA | AI dễ tự nhận "đã test trên máy khác" dù chưa ai test hộ | Cột "người kiểm" ghi đúng là máy này; phần đổi chéo vẫn để trống chờ thành viên khác |
| 7 | Chặng 5 — test prompt + observation focus | Viết relevant context, outcome task, luật facilitation, 5 mục quan sát | AI có thể viết câu hỏi **dẫn dắt** hoặc gợi ý đáp án cho tester | Rà lại để task chỉ nói **kết quả**, không nói nút cần bấm; thêm mục "điều không được làm" |
| 8 | Chặng 6 — dựng khung Feedback Note + Synthesis | Tạo khung 4 lớp OBSERVED / INTERPRETED / DECIDED / STILL UNPROVEN và bảng pattern | AI **không thể** và **không được** tạo dữ liệu tester; nếu để mặc định, AI sẽ bịa ra quan sát nghe hợp lý | Toàn bộ ô quan sát để trống kèm `[điền]` và ghi rõ **CHƯA CÓ DỮ LIỆU**; không có quote hay observation nào do AI sinh |
| 9 | `[bổ sung nếu có]` | | | |

---

## 2. Kết luận về mức độ tin cậy của phần có AI hỗ trợ

```text
AI được dùng để: cấu trúc đề bài, gợi ý cơ chế tương tác, sinh dữ liệu mẫu (canned) và viết code prototype,
soạn khung tài liệu.
AI KHÔNG được dùng để: tạo interview data, bịa quote tester, suy diễn chi tiết tester chưa nói,
hoặc viết thay phần đóng góp cá nhân và reflection.
Phần quan sát tester và reflection trong thư mục này do tôi tự viết; các phần AI dựng khung đã được tôi
rà lại và tự chịu trách nhiệm.
```

---

## 3. Checklist minh bạch

- [x] Mọi lần dùng AI đều có dòng trong bảng §1 (kể cả dùng để sửa câu chữ)
- [x] Không có quote / observation / feedback nào do AI sinh
- [ ] Phần đóng góp cá nhân và reflection do tôi tự viết 🚫 — *chưa điền*
- [x] Nói rõ AI đã viết code prototype nào
- [ ] Người phụ trách từng option đã ghi rõ — *chờ chốt ở Chặng 2*
