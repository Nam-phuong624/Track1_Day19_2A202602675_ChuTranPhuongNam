# AI Support Log — Bùi Hải Nam `2A202602636`

> **Nhóm:** H3201 · **Track 1** · **Case C — AI Support Radar**
> **Option phụ trách:** Option C — Proactive AI Radar (chính)

---

## Bảng khai báo

| # | Dùng AI ở đâu | AI đã giúp gì | Điểm sai / hời hợt | Tôi đã tự sửa thế nào |
| - | ------------- | ------------- | ------------------- | ---------------------- |
| 1 | Build Option C — cơ chế timer trigger và proactive popup | Gợi ý cơ chế timer-based trigger (dừng ≥ 20 giây trên slide), cấu trúc popup 4 nút (Giải thích nhanh / Nhờ Coach / Để sau / Tắt hẳn), và layout popup góc dưới phải | Popup ban đầu không có nút "Tắt hẳn" — chỉ có "Để sau". Thiếu đường Recovery cho learner muốn opt-out hoàn toàn khỏi radar trong phiên | Thêm nút "Tắt hẳn (không nhắc lại phiên này)" để đáp ứng nguyên lý Control & Recovery; tách "Để sau" (tạm thời) khỏi "Tắt hẳn" (permanent cho phiên) |
| 2 | Sinh canned output cho popup C | Gợi ý nội dung popup body: "Phát hiện bạn đang dừng lâu ở phần kiến thức khó. Bạn có muốn mình hỗ trợ không?" kèm slide số | Canned output nói "dừng lâu" chung chung, không nêu tên giai đoạn hoặc khái niệm cụ thể — learner không biết AI đang nói về đoạn nào | Sửa thành "Bạn đã dừng 27 giây ở Giai đoạn 2 — Augmentation" theo góp ý của Nam; đây cũng là Next Change được chốt trong group synthesis |
| 3 | Build Option C — thẻ coach preview | Gợi ý cấu trúc preview thẻ coach: Vị trí học, Khái niệm, Trạng thái tương tác, Nội dung hỏi mẫu | Thẻ coach ban đầu không có trường "Tín hiệu cụ thể" — coach nhận thẻ nhưng không biết AI phát hiện dựa vào gì; thiếu E&U từ AI → Coach | Thêm trường "Tín hiệu: dừng X giây ở Giai đoạn Y" vào thẻ — theo góp ý của Khánh; coach có thể xác minh tín hiệu của AI |
| 4 | Human–AI Decision Table cho Option C | Gợi ý phần "AI Act": trigger → popup → học viên chọn; phần "Control & Recovery": dismiss / tắt hẳn / thu hồi thẻ | AI đề xuất thêm "review queue" phía coach (coach có thể reject ticket trong queue trước khi learner thấy) — feature này nằm ngoài scope micro-prototype | Giữ lại chỉ cơ chế dismiss phía learner là đủ cho vòng test này; ghi vào Decision Table "review queue nằm ngoài scope" |
| 5 | Viết `feedback-note/feedback-buihainom.md` | Tổng hợp 15 observation rows từ phiên test với Vũ Quang Tiến, INTERPRETED, DECIDED, STILL UNPROVEN và bảng đối chiếu kỳ vọng | Một số timestamp là ước lượng; INTERPRETED ban đầu chưa có bảng đối chiếu kỳ vọng | Ghi rõ ước lượng; bổ sung bảng đối chiếu; sửa lại INTERPRETED cho T2 để bỏ assumption "không ngại hỏi vì tự tin" thành observation thực tế |
| 6 | Rà soát câu hỏi facilitation trước phiên | Kiểm tra 5 câu hỏi Compare cuối phiên | Không phát hiện vấn đề lớn, nhưng AI không flag câu "Bạn thấy C có ích không?" là slightly leading | Tự nhận ra và đổi thành "Trong ba phương án, bạn chọn phương án nào?" theo feedback từ Nam |

---

## Những điều tôi tự làm không dùng AI

- Phỏng vấn trực tiếp Vũ Quang Tiến (PN2 Day 17), ghi chép và điền `note/note_buihainom.md`
- Quyết định thứ tự test B → A → C (khác thứ tự A → B → C của nhóm) — muốn quan sát T2 dùng B tự do trước, không bị ảnh hưởng bởi cách đặt câu hỏi của A
- Nhận xét sau phiên: T2 dismiss C không phải vì C xấu mà vì T2 không có barrier mà C thiết kế để giải — insight này không có trong OBSERVED table mà là diễn giải sau phiên
- Phát hiện điểm bất ngờ: T2 sửa ticket AI soạn sẵn — đây là hành vi nhóm không dự đoán trước và trở thành data point quan trọng trong group synthesis
