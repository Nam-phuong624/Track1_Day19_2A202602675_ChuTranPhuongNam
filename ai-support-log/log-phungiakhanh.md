# AI Support Log — Phùng Gia Khánh `2A202602585`

> **Nhóm:** H3201 · **Track 1** · **Case C — AI Support Radar**
> **Option phụ trách:** Option C — Proactive AI Radar (hỗ trợ)

---

## Bảng khai báo

| # | Dùng AI ở đâu | AI đã giúp gì | Điểm sai / hời hợt | Tôi đã tự sửa thế nào |
| - | ------------- | ------------- | ------------------- | ---------------------- |
| 1 | Build Option C — thẻ coach và trường tín hiệu | Gợi ý cấu trúc "thẻ coach" trong popup C: gồm Vị trí học, Khái niệm, Trạng thái tương tác, Nội dung hỏi | Thẻ coach ban đầu không có trường "Tín hiệu cụ thể" — thiếu thông tin để coach biết AI phát hiện dựa trên gì; vi phạm nguyên lý Evidence & Uncertainty | Thêm trường "Tín hiệu: dừng X giây ở Giai đoạn Y" vào thẻ; coach có thể đọc tín hiệu và tự đánh giá AI đúng hay sai trước khi phản hồi learner |
| 2 | Gợi ý microcopy cho nút trong popup C | AI gợi ý tên nút: "Giải thích ngay", "Hỏi Coach", "Bỏ qua" | Tên nút chưa truyền đủ cảm xúc và cụ thể: "Bỏ qua" nghe như dismiss vĩnh viễn; "Hỏi Coach" chưa nêu được đây là nhờ AI soạn trước | Đổi thành "✨ Giải thích nhanh giúp mình", "👨‍🏫 Nhờ Coach hỗ trợ", "Để sau", "Tắt hẳn" — phân biệt rõ tạm thời vs vĩnh viễn |
| 3 | Chuẩn bị guide phỏng vấn `notes_khanh.md` | Gợi ý Big 3 Questions và conversation guide cho Case C; soạn câu mở đầu relevant context | Câu probe về "phản ứng khi được hỏi trước" còn giả định: "Nếu hệ thống tự hỏi bạn thì bạn có thích không?" — leading vào hướng tích cực | Đổi thành "Kể cho mình nghe một lần gần đây bạn tự nhận ra mình đang kẹt ở đoạn nào đó" — để tester kể trải nghiệm thực trước, không giả định |
| 4 | Viết `feedback-note/feedback-phungiakhanh.md` | Tổng hợp 16 observation rows từ phiên test với Lê Anh Duy, INTERPRETED, DECIDED, STILL UNPROVEN và bảng đối chiếu kỳ vọng | Phiên phỏng vấn PN4 thực tế chỉ ~3 phút, ít evidence behavioral hơn các phiên khác; một số hành vi trong OBSERVED được suy từ background kỹ thuật của tester hơn là từ quote thực tế | Không đưa ra claim mạnh từ phiên này; ghi rõ những hành vi nào là quan sát trực tiếp và những hành vi nào là diễn giải từ background; thêm vào STILL UNPROVEN các điểm chưa được xác nhận |
| 5 | Tham gia review Human–AI Decision Table Option C | Đọc và đối chiếu Decision Table B và C để kiểm tra tính nhất quán | AI gợi ý thêm "AI gửi notification cho coach khi learner dừng lâu" vào phần AI Act — vượt scope, đây là hệ thống notification nằm ngoài micro-prototype | Giữ scope trong popup phía learner; ghi chú "notification coach = Phase 2, ngoài scope test vòng này" |
| 6 | Hỗ trợ group synthesis — phần Pattern P3 và Next Change | Góp ý wording cho P3: "C có giá trị với learner không tự nhận ra barrier" | P3 ban đầu của Nam viết "C bị coi là intrusive" — quá kết luận; T4 không hề nói C intrusive, chỉ chọn B vì B linh hoạt hơn với T4 | Đề xuất đổi P3 thành "giá trị của C phụ thuộc trạng thái learner" — phản ánh split behavior (T1 chọn C, T3 click nhưng chọn B, T2 dismiss) |

---

## Những điều tôi tự làm không dùng AI

- Phỏng vấn trực tiếp Lê Anh Duy (PN4 Day 17), ghi chép trong `note/note_phungiakhanh.md` — dù phiên ngắn (~3 phút), nhận ra được hành vi đặc trưng: đặt câu hỏi so sánh kỹ thuật thay vì câu hỏi hiểu định nghĩa
- Quyết định thứ tự test C → B → A để quan sát T4 phản ứng với Option C đầu tiên — muốn tránh T4 đã "quen" với giao diện trước khi thấy popup C
- Nhận ra sau phiên: T4 escalate lên Coach ở C không phải vì cần Coach thật — mà để xem flow của product. Đây là hành vi thăm dò, không phải nhu cầu thực. Insight này không có trong OBSERVED mà là diễn giải sau phiên
- Đề xuất thêm trường "Tín hiệu cụ thể" vào thẻ coach — dựa trên quan sát T4 gật khi thấy trường này; không phải AI đề xuất, là tự phát hiện qua phiên test
