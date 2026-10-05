# Three-Option Design Sheet — Option B · In-situ Grounded AI (VLearn)

> **Học viên:** Chử Trần Phương Nam · **MHV:** `2A202602675` · **Nhóm:** H3201 · **Track 1** · **Case C — AI Support Radar**
> **Phần phụ trách chính:** **Option B — AI giải thích khi được hỏi (In-situ Grounded AI & Escalation)**
> 
> File này lưu trữ toàn bộ thiết kế, bằng chứng phỏng vấn và kịch bản thực thi cá nhân của Chử Trần Phương Nam cho **Chặng 1 → Chặng 3 (GATE 1, GATE 2, GATE 3)** theo yêu cầu của Day 18.

---

## 0. Thông tin cá nhân & Phân công

| Mục | Nội dung |
| --- | --- |
| Họ và tên | **Chử Trần Phương Nam** |
| Mã học viên | `2A202602675` |
| Nhóm | H3201 (Track 1) |
| Case nghiên cứu | Case C — AI Support Radar (VLearn) |
| Option phụ trách chính | **Option B — Trợ lý AI giải thích tại chỗ (In-situ Grounded AI)** |
| Nhiệm vụ dùng chung | Biên soạn Canned Output AI (lời giải nghĩa đa tầng & kịch bản Help Ticket gửi Coach) |
| Bằng chứng phỏng vấn gốc | Practice Note PN3 (Phỏng vấn học viên nữ track chuyên sâu) |

---

## 1. Hypothesis Problem & Evidence PN3 — GATE 1

### 1.1. Bằng chứng phỏng vấn gốc của Chử Trần Phương Nam (Practice Note PN3)

* **Đối tượng phỏng vấn:** Học viên nữ đang học track chuyên sâu (AI Thực Chiến).
* **Bối cảnh (Situation):** Học trên lớp (nghe giảng + đọc slide) và recap lại ở nhà (xem kỹ lại slide và củng cố kiến thức).
* **Khó khăn thực tế (Barrier 1 - Tra cứu rời rạc):** Mắc ở các thuật ngữ/khái niệm chuyên sâu khó hiểu trong slide (ví dụ: `RAG - Retrieval-Augmented Generation`).
* **Workaround đã dùng:** 
  1. Lên hỏi AI trước.
  2. Nếu thuật ngữ chuyên sâu AI giải thích chưa chuẩn $\rightarrow$ lên Google search các trang chuyên ngành để tìm cấu trúc mô hình.
  3. Tốn khoảng **10 phút** cho mỗi thuật ngữ chuyên sâu.
* **Rào cản tâm lý (Barrier 2 - Chi phí xã hội):** Hoàn toàn **không chủ động hỏi** giảng viên hay bạn cùng lớp (*"Mình nghĩ là không tại mình cũng hơi ngại"*).
* **Hậu quả học tập (Consequence):** Khi vào làm bài Quiz trắc nghiệm (mật độ câu hỏi dày, áp lực thời gian) $\rightarrow$ *"ôi trời ơi không nhớ nó là gì luôn"*.
* **Phản ứng khi được hỗ trợ:** Khi giảng viên lớp code chủ động đi hỏi thăm tình hình $\rightarrow$ Cảm thấy *"Wow, được giải thoát rồi!"*.

---

### 1.2. Phát biểu Hypothesis Problem (GATE 1)

> Khi **đọc hoặc xem lại slide bài giảng của track chuyên sâu và gặp một thuật ngữ/đoạn thông tin khó hiểu**, **học viên** gặp khó khăn trong việc **hiểu đủ để học tiếp và làm bài quiz** vì **phải tự tra cứu qua nhiều công cụ rời rạc mất nhiều thời gian; e ngại hỏi trực tiếp người dạy; và người hỗ trợ không biết học viên đang kẹt**, dẫn đến **mất ~10 phút cho mỗi khái niệm, lúng túng khi làm quiz và lo lắng vì thấy mình bị tụt lại**.

| Thành phần | Nội dung | Evidence thực tế từ lượt phỏng vấn của Phương Nam (PN3) |
| --- | --- | --- |
| **User** | Học viên track chuyên sâu (AI Thực Chiến) | Học viên nữ đang học môn AI Thực Chiến |
| **Situation** | Tự đọc/recap slide bài giảng ở nhà | Tự xem lại slide và chuẩn bị làm bài quiz củng cố |
| **Job-to-be-done** | Hiểu bản chất khái niệm để học tiếp và làm được bài Quiz | Vừa recap kiến thức vừa làm bài kiểm tra trắc nghiệm |
| **Barrier 1** | Tra cứu rời rạc, tốn thời gian | Hỏi AI ngoài $\rightarrow$ Google search $\sim 10$ phút/thuật ngữ |
| **Barrier 2** | Ngại hỏi người thật (chi phí xã hội) | *"Mình nghĩ là không tại mình cũng hơi ngại"* |
| **Consequence** | Lúng túng, quên kiến thức khi làm Quiz | Vào quiz nhanh thì *"ôi trời ơi không nhớ nó là gì luôn"* |

---

## 2. Thiết kế Solution Option B — GATE 2

### 2.1. Comparison Contract (Khung chuẩn mực chung)

| Trường | Thiết lập cho Option B |
| --- | --- |
| **Target User** | Học viên tự học trên hệ thống (Learner-centric) |
| **Situation** | Đang xem Slide 6 (Kiến trúc xử lý dữ liệu chuyên sâu) trước khi làm quiz, gặp khái niệm khó hiểu |
| **Outcome Task** | Gỡ được điểm nghẽn khó hiểu ngay tại chỗ trong $\le 1$ phút để tự tin làm đúng câu hỏi Quiz bên dưới |
| **Data Fixture** | Slide 6 + Sơ đồ luồng 3 bước + Câu hỏi Quiz trắc nghiệm về bước *Augmentation* |

---

### 2.2. Chi tiết cơ chế Option B (In-situ Grounded AI)

* **Tên giải pháp:** **Trợ lý AI giải thích tại chỗ khi được hỏi (In-situ Grounded AI & Escalation)**.
* **Vị trí trên Spectrum:** **User + AI Co-create** (Học viên chủ động chọn điểm khó hiểu $\rightarrow$ AI giải nghĩa tại chỗ $\rightarrow$ Học viên đánh giá mức độ hiểu $\rightarrow$ AI hỗ trợ tạo bản nháp gửi Coach nếu cần).
* **Cơ chế hoạt động (1 câu):** Học viên bôi đen đoạn văn bản hoặc click vào từ khoá trên slide để AI giải thích đa tầng dựa trên tài nguyên bài học (có nhãn độ tin cậy); nếu vẫn chưa thông, AI tự động soạn **Structured Help Ticket** để học viên gửi ẩn danh tới Coach.
* **Trigger:** Do học viên chủ động kích hoạt (**On-demand Pull**).
* **AI Agency:** **Ask / Don't Act** (AI chỉ giải thích khi học viên yêu cầu; tuyệt đối không tự động gửi thông tin cho Coach khi chưa được học viên bấm xác nhận).
* **Quyền quyết định cuối cùng:** Thuộc về **Học viên (Learner)**.
* **Rào cản được giải quyết:**
  - *Giải quyết Barrier 1:* Cung cấp câu trả lời có cấu trúc ngay tại chỗ trong $< 30$ giây thay vì mất 10 phút tra Google bên ngoài.
  - *Giải quyết Barrier 2:* Tận dụng tâm lý học viên **không ngại hỏi AI** làm tiền tuyến, và cung cấp chế độ **Gửi ẩn danh** khi cần chuyển giao sang Coach.

---

### 2.3. Distance Check (Phân định cơ chế với Option A và C)

- **Option B khác Option A ở chỗ:** Ở Option A toàn bộ lời giải phụ thuộc vào **con người** (Coach trả lời thủ công bất đồng bộ); ở Option B **AI đóng vai trò gia sư tiền tuyến giải thích tức thì** grounded theo bài học, Coach chỉ là tuyến hỗ trợ chuyên sâu khi AI chưa đủ.
- **Option B khác Option C ở chỗ:** Ở Option B **học viên làm chủ hoàn toàn điểm bắt đầu** (Pull on-demand qua click/highlight); ở Option C hệ thống **tự động kích hoạt (Push)** dựa trên đo lường thời gian dừng của học viên.
- **Kết luận:** Option B là cơ chế **đồng sáng tạo (Co-create)**, cân bằng giữa tốc độ phản hồi tức thì của AI và sự an toàn của con người hỗ trợ phía sau.

---

## 3. Human–AI Decision Table — GATE 3

### 3.1. Bảng phân định quyết định Human–AI cho Option B

| # | Tình huống tương tác | AI **Act** | AI **Ask** | AI **Don't Act** | Học viên hiểu điều gì? | Kiểm soát & Phục hồi khi sai (Control & Recovery) |
| - | -------------------- | ---------- | ---------- | ---------- | ---------------------- | ------------------------------------------------- |
| **1** | Học viên mở panel hoặc click/bôi đen từ khoá | Hiển thị menu giải nghĩa nhanh hoặc danh sách các chip khái niệm có sẵn của slide | — | Không tự động nhảy pop-up che màn hình; không đọc trộm dữ liệu cá nhân | "Trợ lý hỗ trợ giải nghĩa trong phạm vi Slide 5–7. Bạn có thể bôi đen từ khoá hoặc tự gõ câu hỏi" | Bấm nút đóng/thu nhỏ panel; bỏ qua để tiếp tục tự đọc slide |
| **2** | Học viên yêu cầu giải thích một khái niệm | Trình bày thẻ giải nghĩa 4 tầng (Ẩn dụ $\rightarrow$ Vai trò trong bài $\rightarrow$ Ranh giới kiến thức $\rightarrow$ Nguồn dẫn chứng) kèm nhãn **Độ chắc chắn: CAO/TB** | — | Không bịa đặt thông tin nằm ngoài bài giảng; không trả lời lan man dài dòng | Nhận biết rõ phần kiến thức nào thuộc bài học, phần nào là nâng cao ngoài bài | Nút: **"Đã hiểu (Làm Quiz)"**, **"Hỏi thêm ý khác"**, hoặc **"Vẫn chưa thông (Nhờ Coach)"** |
| **3** | Học viên bấm "Vẫn chưa thông / Nhờ Coach" | Tự động trích xuất ngữ cảnh slide và tạo bản nháp **Structured Help Ticket** | Hỏi học viên: **"Gửi ẩn danh"** (mặc định) hay **"Kèm tên"** và cho phép chỉnh sửa nội dung nháp | **Tuyệt đối không tự ý gửi câu hỏi** cho Coach khi học viên chưa bấm nút "Xác nhận gửi" | "Trợ lý đã soạn sẵn nháp câu hỏi có cấu trúc giúp bạn không phải tự nghĩ câu chữ. Bạn có toàn quyền sửa hoặc huỷ" | Nút **"Huỷ bỏ / Quay lại tự học"**, **"Sửa nội dung nháp"**, và nút **"Thu hồi ticket"** nếu đã lỡ gửi |

---

### 3.2. Bốn nguyên lý Human–AI Design áp dụng cho Option B

1. **Expectation (Kỳ vọng):** Panel nêu rõ khả năng và giới hạn: *"Trợ lý giải thích tại chỗ dựa trên Slide 5–7, có nhãn mức độ chắc chắn; hỗ trợ soạn nháp câu hỏi nếu cần gửi Coach"*.
2. **Role & Agency (Vai trò & Quyền hạn):** AI giữ vai trò **Ask** (trợ giúp khi có lệnh); học viên giữ toàn quyền duyệt nội dung câu hỏi và quyết định có gửi Coach hay không.
3. **Evidence & Uncertainty (Dẫn chứng & Độ tin cậy):** Mọi lời giải thích đều có nhãn `Độ chắc chắn: CAO / TRUNG BÌNH`, trích nguồn `Slide 6 & Slide 7` và cảnh báo rõ các khái niệm nâng cao nằm ngoài bài.
4. **Control & Recovery (Kiểm soát & Phục hồi):** Học viên có thể click chọn từ bất kỳ, sửa câu hỏi nháp, chọn gửi ẩn danh, đóng panel bất kỳ lúc nào, và làm lại câu hỏi Quiz nếu làm sai.

---

### 3.3. Kịch bản Canned AI Output & Fixture Data (Biên soạn: Chử Trần Phương Nam)

Dữ liệu kịch bản mẫu này đã được nạp trực tiếp vào mã nguồn prototype tại [`prototype/app.js`](file:///home/namphuong/Desktop/vin_lab/Track1_Day19_2A202602930_PhanDuyThanh/prototype/app.js):

#### A. Kịch bản 1 — Học viên click/chọn khái niệm `[Augmentation (Bổ sung ngữ cảnh)]`:
* **Input:** Học viên click vào hộp *"Giai đoạn 2: Augmentation"* trên slide.
* **AI Output hiển thị:**
  ```text
  [🛡️ Mức độ chắc chắn: CAO — Dẫn chứng: Slide 6 & 7]
  
  📌 Khái niệm: Augmentation (Bổ sung ngữ cảnh)
  
  💡 Hiểu đơn giản (Analogy): Tương tự như việc trước khi làm bài thi mở, bạn kẹp thêm 
  tài liệu tham khảo chính xác vào đề bài để tra cứu.
  
  🎯 Ý nghĩa trong bài giảng: Hệ thống tự động lấy các đoạn tài liệu tìm được từ bước 
  Retrieval để ghép trực tiếp vào khung Prompt (Context Window) của người dùng trước khi gửi tới LLM.
  
  ⚠️ Lưu ý: Đây là mấu chốt để trả lời đúng câu Quiz củng cố bên dưới Slide 6.
  
  [Nút tương tác]: [✅ Đã hiểu (Làm Quiz củng cố)]   [❓ Vẫn chưa thông (Nhờ Coach)]
  ```

#### B. Kịch bản 2 — Học viên bấm `[❓ Vẫn chưa thông (Nhờ Coach)]` (Escalation to Coach):
* **AI Action:** Tự động tạo bản nháp có cấu trúc (Structured Help Ticket):
  ```text
  --- BẢN NHÁP CÂU HỎI GỬI COACH (Bạn có thể chỉnh sửa trước khi gửi) ---
  
  • Vị trí học: Slide 6 — Kiến trúc Tích hợp Dữ liệu Động
  • Khái niệm đang hỏi: Augmentation (Bổ sung ngữ cảnh)
  • Trạng thái tương tác: Đã xem giải thích cơ bản của AI nhưng cần Coach cho ví dụ thực tế.
  • Nội dung câu hỏi: "Em đã đọc phần Augmentation nhưng chưa hình dung được cách hệ thống 
    ghép tài liệu vào prompt thực tế mà không làm nhiễu câu hỏi gốc. Nhờ Coach cho em ví dụ 
    cụ thể dạng text prompt thực tế với ạ."
  
  [Tuỳ chọn danh tính]: (•) Gửi ẩn danh (mặc định)   ( ) Gửi kèm tên: Chử Trần Phương Nam
  
  [Nút kiểm soát]: [✏️ Sửa câu hỏi]   [📤 Xác nhận gửi cho Coach]   [❌ Huỷ bỏ / Quay lại]
  ```

---

## 4. Bảng tự kiểm Gate cá nhân (GATE 1 – GATE 3)

- [x] **GATE 1 (Evidence Continuity):** Hypothesis Problem gắn chặt với dữ liệu phỏng vấn PN3 của Phương Nam, phản ánh đúng rào cản tra cứu 10 phút, tâm lý ngại hỏi người thật, và hậu quả khi làm Quiz.
- [x] **GATE 2 (Meaningful Option):** Option B định vị rõ ràng ở vị trí *User + AI Co-create*, khác biệt về cơ chế so với Option A (User-Led) và Option C (Proactive AI).
- [x] **GATE 3 (Human Control & Clarity):** Có Decision Table 3 tình huống chi tiết, thể hiện trọn vẹn 4 nguyên lý Human-AI, có kịch bản Canned Output hoàn chỉnh và đường phục hồi an toàn.
