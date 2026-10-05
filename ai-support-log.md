# AI Support Log — Chử Trần Phương Nam `2A202602675`

> **Nhóm:** H3201 · **Track 1** · **Case C — AI Support Radar**
> **Option phụ trách:** Option B — In-situ Grounded AI (chip khái niệm + AI explanation drawer + escalation ticket)

---

## Bảng khai báo

| # | Dùng AI ở đâu | AI đã giúp gì | Điểm sai / hời hợt | Tôi đã tự sửa thế nào |
| - | ------------- | ------------- | ------------------- | ---------------------- |
| 1 | Chuẩn bị interview guide cho phỏng vấn Day 17 (PN3) | Gợi ý Big 3 Questions và conversation guide cho Case C; rà soát câu hỏi để tránh leading question | Câu hỏi probe ban đầu về hậu quả còn chung ("bạn cảm thấy thế nào?") — chưa đủ behavioral | Viết lại probe thành *"Lần gần nhất bạn làm quiz không kịp giờ do quên thuật ngữ là khi nào?"*; thêm câu *"Sau khi tra xong, bạn có làm được bài không?"* để truy kết quả |
| 2 | Cấu trúc Option B prototype (chip + drawer + ticket) | Gợi ý layout: chip ở footer, AI drawer bên phải, escalation ticket dạng form; sinh canned output mẫu cho chip "Augmentation là gì?" | Canned output ban đầu quá dài (~400 chữ); analogy đặt ở cuối thay vì mở đầu; thiếu trường "mức độ chắc chắn" | Cắt còn ~150 chữ; đưa analogy lên đầu; thêm badge "Mức độ chắc chắn: CAO / TRUNG BÌNH / THẤP" để đáp ứng nguyên lý Evidence & Uncertainty |
| 3 | Sinh nội dung 4 chip khái niệm | AI gợi ý chip đầu tiên chỉ có 3 khái niệm: "Augmentation", "Hallucination", "Vector Embedding" | Thiếu "Khác gì Fine-tuning?" — câu hỏi hay gặp nhất theo PN3 khi tra RAG; 3 chip không đủ phủ scenario tester | Thêm chip thứ 4 "Khác gì Fine-tuning?"; đồng thời ghi nhận giới hạn: 4 chip cố định sẽ không phủ được mọi thuật ngữ mới — đây trở thành một điểm STILL UNPROVEN |
| 4 | Sinh canned output cho escalation ticket (khi tester click "Nhờ Coach") | AI soạn nội dung ticket tự động gồm: Vị trí học (Slide 6), Khái niệm (Augmentation), Trạng thái tương tác, Nội dung hỏi mẫu | Ticket được soạn theo perspective "AI biết tester đang kẹt gì" — nhưng trong thực tế Option B không có context "tester kẹt gì" cho đến khi tester click chip; ticket cần reflect đúng chip vừa click | Sửa lại: ticket lấy tên chip làm subject ("Tôi vừa đọc giải thích về Augmentation và vẫn còn một số điểm chưa rõ..."); tester có thể sửa trước khi gửi |
| 5 | Viết `feedback-note/feedback-chutranphuongnam.md` | Tổng hợp 20 observation rows từ phiên test với Chu Thùy Dương, INTERPRETED, DECIDED, STILL UNPROVEN và bảng đối chiếu kỳ vọng | Một số timestamp trong OBSERVED (0:28, 1:40) là ước lượng từ tốc độ chạy automation; chưa có đồng hồ bấm giờ thực tế trong phiên | Ghi rõ là ước lượng; khi test thật sẽ dùng đồng hồ và ghi lại thời gian do dự chính xác — đặc biệt quan trọng với 12 giây do dự ở A vì đây là data point cần đo được |
| 6 | Rà soát luật facilitation trước phiên test | AI rà soát 5 câu hỏi tôi chuẩn bị cho phần Compare (cuối phiên) để kiểm tra xem có câu nào leading không | Câu "Bạn có thấy Option B tiện hơn không?" bị flag là leading — dùng từ "tiện hơn" là gợi ý | Đổi thành "Trong ba phương án này, bạn chọn A, B hay C? Vì sao?" theo đúng luật facilitation Chặng 5 |
| 7 | Tham gia viết `group-feedback-synthesis.md` | AI tổng hợp pattern P1–P4 từ 4 phiên, bao gồm phần Điều bất ngờ ("T3 click C nhưng chọn B") và Next Change | Pattern P3 ban đầu viết "C bị coi là intrusive" — quá kết luận sớm; T3 không hề nói C intrusive, chỉ thích B hơn vì kiểm soát được | Sửa P3 thành "giá trị của C phụ thuộc vào trạng thái learner" — phản ánh đúng split behavior (T1 chọn C, T3 click nhưng chọn B, T2 dismiss) |

---

## Những điều tôi tự làm không dùng AI

- Phỏng vấn trực tiếp với Chu Thùy Dương (PN3 — ~5–7 phút), ghi chép và điền `note/note_chutranphuongnam.md`
- Quyết định thứ tự trình bày A → B → C trong phiên test (không random — chọn thứ tự này để quan sát reaction khi tester so sánh A vs B liền nhau)
- Nhận xét sau phiên: tự diễn giải hành vi "đọc lại analogy lần 2" và "không escalate sau khi hiểu" là signal về learning style và cost model của T3
- Quyết định bổ sung bảng "Đối chiếu kỳ vọng" vào feedback note vì group synthesis cần thấy chỗ giả thuyết nhóm bị bác lại
