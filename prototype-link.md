# Prototype Link — Nhóm H3201 (Case C: AI Support Radar)

Tất cả prototype đều là HTML/CSS/JS thuần: mở trực tiếp bằng trình duyệt (double-click), không cần cài đặt, không cần server. Mọi phản hồi "AI" là nội dung soạn sẵn, không gọi mô hình hay API thật.

## 1. Phương án được chọn: Option B — Trợ lý giải nghĩa tại chỗ

**Tệp:** [interactive_micro_prototype_vlearn_option_a_b_c.html](./interactive_micro_prototype_vlearn_option_a_b_c.html)

Sau khi so sánh ba phương án A/B/C, nhóm chọn **Option B (User + AI co-create, Ask)**. Giao diện và nội dung dựa trên prototype của Chử Trần Phương Nam. Mini-deck gồm slide 5–7, trong đó slide 6 "RAG — Retrieval-Augmented Generation" có sơ đồ 3 giai đoạn. Câu quiz hỏi về bước Augmentation; câu trả lời của coach là nội dung soạn sẵn.

| Thành phần           | Nội dung                                                                                                                                                                                                                                                                       |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Cơ chế               | Learner chủ động hỏi; AI giải thích trong phạm vi slide 5–7 kèm độ chắc chắn và dẫn chứng; chỉ khi learner vẫn chưa hiểu mới soạn nháp câu hỏi cho coach.                                                                                                                      |
| Critical interaction | Bấm thuật ngữ / bôi đen đoạn văn / chọn câu hỏi nhanh / tự gõ → đọc giải thích 3 lớp (hiểu đơn giản → trong bài này → giới hạn) → "Mình hiểu rồi → làm quiz" hoặc "Vẫn chưa hiểu → nhờ coach" → sửa nháp, chọn ẩn danh/kèm tên → gửi hoặc không gửi; thu hồi được sau khi gửi. |
| Vì sao chọn B        | Nhắm vào việc tra cứu rời rạc (~10 phút/thuật ngữ, PN3) và thói quen "hỏi AI trước" mà learner đã có; learner không phải tự lên tiếng với người khác (ngại hỏi, PN3) nhưng vẫn giữ quyền quyết định có nhờ coach hay không; không cần AI suy đoán về từng người như C.         |
| Rủi ro chính         | AI có thể giải thích sai mà learner tin → có nhãn độ chắc chắn, dẫn chứng slide, và không đoán khi câu hỏi nằm ngoài slide.                                                                                                                                                    |

Nút **"↺ Bắt đầu lại"** đưa prototype về bối cảnh ban đầu (slide 6, chưa hỏi gì, quiz chưa làm). `?log=1` hoặc Shift+L hiện nhật ký thao tác cho người facilitate.

**Task khi test:** "Bạn đang xem lại slide 6 trước khi làm quiz và chưa hiểu rõ thuật ngữ RAG. Hãy dùng trợ lý để đến lúc bạn tự tin trả lời câu quiz bên dưới."

## 2. Prototype của từng thành viên

| Thành viên          | Đường dẫn                                                          | Ghi chú                                                                                                                                                                                                          |
| ------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

| Chử Trần Phương Nam | [prototype_phuongnam/index.html](./prototype_phuongnam/index.html) | Một trang gồm A/B/C (`index.html` + `app.js` + `style.css`).                                                                                                                                                     |

## 3. Repo

- **Repo GitHub cá nhân (Phan Duy Thanh):**

- **Repo GitHub cá nhân (Bùi Hải Nam):**

- **Repo GitHub cá nhân (Phùng Gia Khánh):**

- **Repo GitHub cá nhân (Chử Trần Phương Nam):**
  https://github.com/Nam-phuong624/Track1_Day19_2A202602675_ChuTranPhuongNam
