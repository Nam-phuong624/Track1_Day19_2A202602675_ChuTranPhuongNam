# THREE OPTION DESIGN SHEET & HUMAN-AI DECISION MATRIX

**Nhóm:** H3201  
**Case:** Case C — AI Support Radar (VLearn)

**Dùng chung cho A/B/C:** learner đang xem lại slide 6 "RAG — Retrieval-Augmented Generation" trước khi làm quiz và chưa hiểu thuật ngữ; task là đến lúc tự tin trả lời 1 câu quiz về RAG nằm ngay dưới slide. Cả ba dùng cùng mini-deck 3 slide (5–7), cùng câu quiz, cùng lời giải thích RAG và cùng câu trả lời của coach (nội dung soạn sẵn, không phải dữ liệu thật). Ở cả ba option, learner là người giữ quyền quyết định cuối.

---

## 1. BẢNG SO SÁNH 3 SOLUTION OPTIONS (A / B / C)

| Thành phần | Option A: User-Led (Tự đánh dấu, coach trả lời) | Option B: Co-Creation (AI giải thích khi được hỏi) | Option C: AI-Led (AI chủ động hỏi thăm) |
| :--- | :--- | :--- | :--- |
| **Solution Mechanism** | Learner tự đánh dấu chỗ chưa hiểu; hệ thống gắn số slide và gửi cho coach, không suy đoán gì. | Learner hỏi trợ lý; AI giải thích trong phạm vi slide, nói rõ độ chắc chắn; chỉ khi learner còn chưa hiểu mới soạn nháp câu hỏi cho coach. | AI thấy tín hiệu hành vi của chính learner (dừng lâu, quay lại slide) và chủ động hỏi; chỉ khi learner đồng ý mới tạo thẻ gửi coach. |
| **User làm gì?** | Tự nhận ra chỗ kẹt → chọn loại → mô tả → chọn ẩn danh/kèm tên → gửi. | Chọn thuật ngữ hoặc tự hỏi → đọc và đánh giá lời giải → quyết định có nhờ coach không → sửa nháp. | Phản hồi gợi ý (giải thích / nhờ coach / để sau / tắt) → xem trước và xác nhận thẻ. |
| **AI làm gì?** | Chỉ gắn số slide vào câu hỏi. | Giải thích dựa trên slide 5–7 kèm nhãn độ chắc chắn và nguồn → hiển thị số bạn khác đánh dấu (ẩn danh) → soạn nháp. | Đo thời gian ở slide và số lần quay lại → hiện gợi ý kèm lý do → soạn bản xem trước thẻ. |
| **Trigger** | Learner (bấm đánh dấu). | Learner (hỏi trợ lý). | AI (dừng ≥ 20 giây ở slide 6 hoặc rời slide 6 rồi quay lại). |
| **Trade-off chính** | Ẩn danh giảm ngại hỏi và câu hỏi gắn đúng slide, nhưng learner không nhận ra mình kẹt thì không dùng được và phải chờ coach. | Gỡ nhanh việc tra cứu rời rạc (~10 phút/thuật ngữ), nhưng AI có thể giải thích sai mà learner tin. | Hệ thống biết learner đang kẹt mà learner không phải lên tiếng trước, nhưng gợi ý có thể nhầm thời điểm hoặc khiến learner thấy bị theo dõi. |

**Distance check**

- **A khác B:** ở A lời giải đến từ con người (coach) và hệ thống không suy luận gì; ở B AI tự giải thích ngay, con người chỉ là đường lui khi AI chưa đủ.
- **B khác C:** ở B learner khởi xướng và AI chỉ nhìn ở cấp nội dung (slide); ở C AI khởi xướng dựa trên hành vi của từng người.
- **A khác C:** A đòi learner tự lên tiếng trước; C là hệ thống hỏi learner trước.

---

## 2. BẢNG NGUYÊN TẮC THIẾT KẾ HUMAN-AI (DECISION TABLE)

| Human-AI Decision | Option A: User-Led | Option B: Co-Creation | Option C: AI-Led |
| :--- | :--- | :--- | :--- |
| **1. Phân chia công việc** | Learner tự nhận ra chỗ kẹt, mô tả và chọn cách gửi. AI chỉ gắn số slide; lời giải đến từ coach. | Learner hỏi và đánh giá lời giải. AI giải thích theo slide, soạn nháp câu hỏi cho coach khi learner vẫn chưa hiểu. | AI phát hiện tín hiệu và hỏi trước. Learner chọn cách phản hồi, xem trước và xác nhận thẻ gửi coach. |
| **2. Act / Ask / Don't Act** | Don't Act: AI không đoán learner chưa hiểu gì, không tự điền mô tả. Hậu quả khi sai thấp, nhưng lợi ích phụ thuộc việc learner tự nhận ra. | Ask: AI chỉ làm khi được hỏi, không gửi coach khi learner chưa bấm. Hậu quả khi sai ở mức vừa (hiểu sai thuật ngữ). | Act: AI khởi xướng nhưng chỉ ở mức hỏi learner, không tự báo coach. Hậu quả khi sai là cảm giác bị theo dõi. |
| **3. Capability & Limits** | Dòng "Hệ thống không tự đoán bạn đang gặp khó ở đâu" + dòng "Coach sẽ thấy: …" cập nhật theo lựa chọn. | Dòng "Trợ lý chỉ dựa trên slide 5–7 của bài này và có thể trả lời sai". | Panel nêu rõ dữ liệu được dùng / không dùng; nút "Vì sao mình hỏi?"; "Đây chỉ là suy đoán, có thể sai". |
| **4. Uncertainty & Evidence** | Số slide và loại chỗ vướng do learner tự chọn; không có suy đoán nào của AI. | Nguồn slide ("Slide 7, bước 4") + nhãn Độ chắc chắn Cao/Trung bình/Thấp + cảnh báo khi slide chưa đủ (Top-k: "Slide chưa nói cách chọn k"). | Danh sách tín hiệu đã đo ("Đang ở slide 6 khoảng N giây", "Đã quay lại slide 6 N lần"), gọi rõ là suy đoán. |
| **5. Control & Recovery** | Sửa mô tả, đổi loại, đổi ẩn danh/kèm tên trước khi gửi; "Sửa câu hỏi" hoặc "Thu hồi" trước khi coach phản hồi; "Hỏi thêm" sau đó. | "Mình hiểu rồi", "Vẫn chưa hiểu", "Hỏi phần khác"; sửa nháp; "Không gửi"; "Thu hồi" sau khi gửi. | "Để sau", "Đừng gợi ý nữa", công tắc Bật/Tắt, tối đa 2 lần gợi ý; xem trước thẻ, "Không gửi", "Thu hồi". |

**Ghi chú dữ liệu:** Option C chỉ dùng thao tác chuyển slide và thời gian ở mỗi slide trong phiên hiện tại; không dùng ghi chú, đáp án quiz hay nội dung chat, và không lưu sang phiên sau. Số "12 bạn khác cũng đánh dấu chưa hiểu" ở Option B là số liệu minh hoạ.
