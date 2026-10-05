# Chặng 4 — Prototype Link

Phan Duy Thanh (2A202602930), nhóm H3201.

Ba micro-prototype được viết bằng HTML, CSS và JavaScript thuần. Chúng chạy trực tiếp trên trình duyệt, không cần cài đặt, không cần server và không gọi mô hình hay API thật nào. Mọi phản hồi "AI" đều là nội dung soạn sẵn.

## 1. Đường dẫn

| Option | Cơ chế | Người phụ trách | Đường dẫn |
| --- | --- | --- | --- |
| A | Người học tự khai, AI không suy luận | Phan Duy Thanh | [options/option-a/index.html](./options/option-a/index.html) |
| B | Tín hiệu ở cấp nội dung, người học tự quyết có lộ diện không | Chử Trần Phương Nam | [options/option-b/index.html](./options/option-b/index.html) |
| C | Support Queue, mentor duyệt | Bùi Hải Nam và Phùng Gia Khánh | [options/option-c/index.html](./options/option-c/index.html) |

Người facilitate vào từ [index.html](./index.html). Khoảng 70% mã nguồn là phần dùng chung, gồm `shared/fixture.js` (deck, thuật ngữ và tín hiệu giả lập), `shared/deck.js` (khung slide và điều hướng) và `shared/styles.css`. Ba option dùng chung phần này để mức độ hoàn thiện về giao diện ngang nhau, tránh option nào thắng chỉ nhờ trông đẹp hơn.

## 2. Phạm vi và critical interaction

Mỗi option chỉ có hai đến ba trạng thái, xoay quanh một critical interaction duy nhất.

| Option | Critical interaction | Các trạng thái |
| --- | --- | --- |
| A | Người học bấm "Chưa hiểu", hệ thống chỉ gom lại đúng những gì họ đã đánh dấu | Bối cảnh ban đầu, đánh dấu, checklist và danh sách |
| B | Banner cấp nội dung hiện ra, người học chọn có cần hỗ trợ không, rồi chọn nêu tên hay ẩn danh | Bối cảnh ban đầu, banner, câu hỏi nêu tên, kết quả |
| C | Phiên học kết thúc, AI tạo một mục trong hàng chờ, mentor chấp nhận hoặc từ chối, người học nhận kết quả | Bối cảnh ban đầu, hàng chờ, quyết định của mentor, kết quả phía người học |

Ở cả ba option, nút "Bắt đầu lại" đưa prototype về đúng bối cảnh ban đầu. Ở C, nút này còn xoá hàng chờ và tắt công tắc.

## 3. Kiểm tra trước khi test

Tôi đã mở cả ba option trên Chrome và chạy hết luồng của từng option. Trình duyệt không báo lỗi trong console, và nút "Bắt đầu lại" đưa mỗi option về đúng trạng thái ban đầu. Giao diện không hiển thị nhãn A, B, C hay bất kỳ gợi ý nào về ý đồ thiết kế cho người test. Ghi chú dành riêng cho người facilitate nằm trong `annotation.md` của từng option, không hiển thị trong prototype.

## 4. Đối chiếu GATE 4

Một người không tham gia build vẫn mở được cả ba option và thực hiện cùng một task. Ba option bắt đầu từ cùng một bối cảnh, người test hiểu được giao diện mà không cần giải thích thêm, và có thể quay lại trạng thái ban đầu bằng một nút.
