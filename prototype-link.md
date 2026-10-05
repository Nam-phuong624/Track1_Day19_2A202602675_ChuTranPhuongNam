# Prototype Link — Nhóm H3201 (Case C: AI Support Radar)

Tất cả prototype đều là HTML/CSS/JS thuần: mở trực tiếp bằng trình duyệt (double-click), không cần cài đặt, không cần server. Mọi phản hồi "AI" là nội dung soạn sẵn, không gọi mô hình hay API thật.

## 1. Bản dùng để test chung của nhóm

**Tệp:** [interactive_micro_prototype_vlearn_option_a_b_c.html](./interactive_micro_prototype_vlearn_option_a_b_c.html)

Một file duy nhất chứa cả ba option dưới dạng tab, dùng chung mini-deck slide 5–7 ("RAG — Retrieval-Augmented Generation"), cùng câu quiz, cùng lời giải thích RAG và cùng câu trả lời của coach.

| Option | Cách mở | Cơ chế | Critical interaction |
| --- | --- | --- | --- |
| A — User-led | Tab **"Phương án A"** | Learner tự đánh dấu chỗ chưa hiểu; hệ thống chỉ gắn số slide và gửi coach, AI không suy đoán (Don't Act). | Đánh dấu → chọn loại vướng → mô tả → chọn ẩn danh/kèm tên → gửi coach. |
| B — Co-create | Tab **"Phương án B"** | Learner hỏi trợ lý; AI giải thích trong phạm vi slide kèm nguồn và độ chắc chắn; chỉ soạn nháp câu hỏi cho coach khi learner vẫn chưa hiểu (Ask). | Hỏi → đọc lời giải + nhãn độ chắc chắn → "Mình hiểu rồi" / "Vẫn chưa hiểu" → sửa nháp, gửi hoặc không gửi. |
| C — AI initiate, human review | Tab **"Phương án C"** | AI thấy tín hiệu hành vi của chính learner (dừng ≥ 20 giây ở slide 6 hoặc quay lại slide 6) và chủ động hỏi; chỉ tạo thẻ gửi coach khi learner đồng ý (Act). | Gợi ý xuất hiện kèm "Vì sao mình hỏi?" → chọn giải thích / nhờ coach / để sau / tắt → xem trước và xác nhận thẻ. |

**Task dùng chung khi test:** "Bạn đang xem lại slide 6 trước khi làm quiz và chưa hiểu rõ thuật ngữ RAG. Hãy dùng từng phương án để đến lúc bạn tự tin trả lời câu quiz bên dưới."

## 2. Prototype của từng thành viên

| Thành viên | Đường dẫn | Ghi chú |
| --- | --- | --- |
| Phan Duy Thanh | [phanduythanh/index.html](./phanduythanh/index.html) | Hub dẫn tới ba option tách riêng (`options/option-a|b|c/index.html`), dùng chung `shared/` (deck 11 slide, styles). Mỗi option có nút "Bắt đầu lại"; ghi chú cho facilitator nằm trong `annotation.md`. |
| Chử Trần Phương Nam | [prototype_phuongnam/index.html](./prototype_phuongnam/index.html) | Một trang gồm A/B/C (`index.html` + `app.js` + `style.css`). |
| Phùng Gia Khánh | [khanh/](./khanh/) | Mỗi option một file: `khanh-option-a-prototype.html`, `khanh-option-b-prototype.html`, `khanh-option-c-prototype.html` (các bản `(1)`, `(2)`, `choosing` là phiên bản thử của Option C). |

## 3. Repo

- **Repo GitHub của nhóm:** [điền]
- **Repo GitHub cá nhân (Phan Duy Thanh):** https://github.com/thanhpd123/Track1_Day19_2A202602930_PhanDuyThanh
