# AI Support Log — Phan Duy Thanh `2A202602930`

> **Nhóm:** H3201 · **Track 1** · **Case C — AI Support Radar**
> **Option phụ trách:** Option A — User-Led / No-inference

---

## Bảng khai báo

| # | Dùng AI ở đâu | AI đã giúp gì | Điểm sai / hời hợt | Tôi đã tự sửa thế nào |
| - | ------------- | ------------- | ------------------- | ---------------------- |
| 1 | Soạn `README.md` và cấu trúc repo ban đầu | Tổng hợp đề bài Lab 18 thành 6 chặng + 5 gate; bê Hypothesis Problem, 3 Practice Notes, Parking Lot từ Lab 17 vào đúng vị trí; gợi ý cấu trúc folder nộp | Điền sẵn cả phần nhóm phải tự chốt (Comparison Contract, Human–AI Decision Table, Distance Check) — AI không biết nhóm đã quyết gì ở Chặng 3 | Đánh dấu 🧪 các phần nháp cần review; yêu cầu nhóm tự chốt nội dung sau; không để AI fill thay quyết định thiết kế |
| 2 | Nháp 3 option A/B/C từ Solution Parking Lot | Gợi ý map 6 hướng park thành 3 mechanism theo spectrum user-led → co-create → AI-initiate; sinh tên gọi và mô tả ngắn cho từng option | Chọn hướng theo "đẹp spectrum" chứ chưa hẳn theo evidence; Distance Check giữa B và C còn chung chung, chưa nêu được điểm phân kỳ thực sự (ai khởi xướng) | Đối chiếu từng option với PN1/PN2/PN3; viết lại Distance Check bằng ngôn ngữ của nhóm: "A không có AI, B AI phản hồi, C AI chủ động" |
| 3 | Tạo skeleton các file nộp | Sinh khung `three-option-design-sheet.md`, `prototype-link.md`, `prototype-feedback-note.md`, `group-feedback-synthesis.md`, `ai-support-log.md` với header và section đúng format Lab 18 | Khung gợi ý sẵn cách diễn đạt ở nhiều chỗ nhóm phải tự viết — tạo nguy cơ nhóm fill vào mà không tự suy nghĩ; một số label quá cụ thể | Để trống ✍️ các mục cần chốt; ghi chú rõ chỗ nào nhóm tự điền, chỗ nào AI đã điền nháp |
| 4 | Build Option A — modal form và UX flow | Gợi ý layout modal: dropdown "Loại nội dung" (4 category), textarea mô tả, radio ẩn danh/kèm tên, toast xác nhận kèm số slide tự động | Dropdown ban đầu chỉ có 2 category chung ("Không hiểu" và "Cần thêm ví dụ") — không đủ phân biệt loại câu hỏi cho coach; không có category kỹ thuật | Mở rộng thành 4 category: "Thuật ngữ / Khái niệm mới", "Sơ đồ luồng xử lý kỹ thuật", "Cần thêm ví dụ thực tế", "Khác" — phủ được câu hỏi T1-type lẫn T4-type |
| 5 | Sinh microcopy cho modal Option A | Gợi ý placeholder textarea và label cho từng bước | Placeholder mặc định quá dài: "Ví dụ: Em đọc phần Augmentation nhưng chưa hình dung được..." — chiếm hết diện tích textarea, tester không biết xoá hay điền thêm | Rút placeholder ngắn lại thành 1 dòng; thêm helper text nhỏ bên dưới thay vì placeholder dài |
| 6 | Chạy automated test toàn bộ prototype | Kiểm tra 11 test case end-to-end (Option A/B/C + Quiz + Reset) qua browser automation; phát hiện 3 bug; xuất `prototype-test-log.md` và `phuongnam_prototype_test_run.gif` | Automation không test được trường hợp tester thật nhìn vào giao diện lần đầu (discoverability); không đo được hesitation time thực tế; một số test case bỏ qua nút gây alert() | Ghi rõ giới hạn trong test log; giữ observation focus discoverability cho phiên test người thật; bug alert() được ghi nhận và fix bởi Nam |
| 7 | Viết `feedback-note/feedback-phanduythanh.md` | Tổng hợp hành vi quan sát được trong phiên test với Lê Thanh Tình từ bản ghi phỏng vấn PN1 và kết quả automation | Một số timestamp trong OBSERVED (0:35, 0:50) là ước lượng, không phải đồng hồ thực tế; INTERPRETED ban đầu không có bảng đối chiếu kỳ vọng | Ghi rõ là ước lượng; bổ sung bảng đối chiếu kỳ vọng vs thực tế để làm rõ điểm bất ngờ |
| 8 | Tổng hợp `group-feedback-synthesis.md` | Tổng hợp pattern P1–P4 từ 4 phiên, viết Next Change và Still Unproven | Pattern được suy từ behavior quan sát 4 phiên, chưa được hỏi lại tester để xác nhận lý do; P3 ban đầu viết "C intrusive" quá kết luận | Ghi rõ "suy từ behavior" trong cột INTERPRETED; không tuyên bố validated; sửa P3 sau khi Nam góp ý |

---

## Những điều tôi tự làm không dùng AI

- Phỏng vấn trực tiếp Lê Thanh Tình (PN1 Day 17), ghi chép và điền `note/note_phanduythanh.md`
- Quyết định cấu trúc repo nhóm (folder feedback-note, ai-support-log, prototype_phuongnam) — chọn một repo chung thay vì 4 repo riêng
- Thiết kế thứ tự 4 category trong dropdown Option A dựa trên phân tích câu hỏi từ 3 phỏng vấn Day 17
- Quyết định dùng browser automation (không phải test thủ công) để kiểm tra prototype trước khi đưa cho tester thật — tiết kiệm 1 buổi test nếu có bug cơ bản
