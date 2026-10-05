# Three-Option Design Sheet — Case C · AI Support Radar (VLearn)

> **Nhóm:** H3201 · **Track 1** · **Case C — AI Support Radar**
> Nhãn: ⚙️ có sẵn từ Day 17 · ✍️ nhóm tự điền · 🧪 nháp do AI soạn, nhóm phải tự chốt · 🚫 cấm dùng AI
>
> File này là đầu ra của **Chặng 1 → Chặng 3** (GATE 1, GATE 2, GATE 3).

---

## 0. Thông tin chung

| Mục | Nội dung |
| --- | --- |
| Hypothesis Problem (tên ngắn) | AI Support Radar — Phát hiện và hỗ trợ người học bị kẹt âm thầm khi tự học slide khó |
| Người điều phối điền file | Phan Duy Thành (2A202602930) |
| Ngày chốt | 05/10/2026 |
| Trạng thái | ✅ Đã review nhóm · ✅ Đã chốt |

**Phân công phụ trách chính:**

| # | MHV | Họ và tên | Option phụ trách chính |
| - | --- | --------- | ---------------------- |
| 1 | `2A202602636` | Bùi Hải Nam | Option A (User-led / No-inference) |
| 2 | `2A202602675` | Chử Trần Phương Nam | Option B (User + AI co-create) |
| 3 | `2A202602585` | Phùng Gia Khánh | Option C (AI initiate, Human review) |
| 4 | `2A202602930` | Phan Duy Thành | Option C (AI initiate, Human review — Đồng phụ trách) |

> Nhóm có 4 người nhưng chỉ có 3 option → **Option C do Phùng Gia Khánh và Phan Duy Thành cùng phụ trách**.

---

## 1. Hypothesis Problem (⚙️ carry-over từ Day 17) — GATE 1

Đủ **5 thành phần**, không đổi case, không tìm problem mới.

| Thành phần | Nội dung chuẩn hóa ⚙️ |
| --- | --- |
| **User** | Learner tự học trên nền tảng VLearn (khóa AI Thực Chiến / track chuyên sâu) |
| **Situation** | Đang tự học/đọc một slide/nội dung khó trên VLearn vào buổi tối, một mình, không có ai ngồi cạnh |
| **Job-to-be-done** | Hiểu đủ nội dung/thuật ngữ cốt lõi để tiếp tục bài học và hoàn thành bài tập/quiz đúng hạn |
| **Barrier** | Không ai ở vai trò hỗ trợ biết họ đang mắc ở đâu **và** bản thân họ ngại/không chủ động lên tiếng hỏi |
| **Consequence** | Mất thời gian tự xoay xở (~10 phút/từ), không nhớ kiến thức khi làm quiz tốc độ cao, lỗ hổng kiến thức tích luỹ, đà học giảm dần |

### 1.1. Bảng tổng hợp Evidence Huddle Chặng 1 (Tổng hợp từ tất cả các Note phỏng vấn)

| Nguồn / Thành viên | User đã thực sự làm / nói gì? (Quotes & Facts nguyên văn) | Điều nhóm đang diễn giải (Suy đoán có căn cứ) |
| :--- | :--- | :--- |
| **PN1 (Phan Duy Thành)** <br>→ *Learner Lê Thanh Tình* | • Buổi học gần nhất chiều hôm qua.<br>• Làm đến một phần thì không hiểu nhưng không xác định được nội dung trên slide: *"Nói chung là em không tìm được cái nội dung ở đấy luôn."*<br>• Gặp thuật ngữ tiếng Anh: *"Hi-list (High list)?"*<br>• Cảm xúc: Thấy buồn, lo lắng khi nhận ra mình tụt lại phía sau. | • Learner gặp khó khăn trong việc định vị và diễn đạt chính xác điểm nghẽn nhận thức.<br>• Tự ti và lo lắng khi rơi vào trạng thái bị kẹt kiến thức một mình. |
| **PN2 (Bùi Hải Nam)** <br>→ *Learner 2A202602872 (K4)* | • Buổi học gần nhất là hôm qua; định nghĩa trên video/slide chưa rõ, đọc chưa hiểu.<br>• **Workaround:** Tự lên mạng search, hỏi bạn bè xung quanh hoặc hỏi lab coach; cảm thấy ổn thì mới chuyển phần.<br>• *"Thường là mình tự đi chủ động đi tìm các anh lab coach... chứ các anh cũng không hỏi tình hình của mình mấy."* | • Learner có phản xạ chủ động tìm kiếm các kênh hỗ trợ sẵn có (làm yếu giả định learner hoàn toàn bất lực không biết tìm ai).<br>• Coach đóng vai trò phản ứng thụ động (chờ hỏi mới trả lời), ít chủ động thăm dò. |
| **PN3 (Chử Trần Phương Nam)** <br>→ *Learner Nữ (Track chuyên sâu)* | • Vừa nghe giảng vừa đọc slide trên lớp, về nhà recap lại toàn bộ slide.<br>• Gặp thuật ngữ khó (ví dụ: `RAG`), không nhớ nên dừng tra cứu: Hỏi AI trước $\rightarrow$ Search Google cấu trúc mô hình (~10 phút/từ).<br>• Hoàn toàn không hỏi mentor/bạn vì **ngại**: *"Mình nghĩ là không tại mình cũng hơi ngại (cười)"*.<br>• Hậu quả làm quiz nhanh: *"ôi trời ơi không nhớ nó là gì luôn"*.<br>• Phản ứng khi được coach hỏi trước: *"Wow, được giải thoát rồi!"* | • **Minh chứng đắt giá cho Pain B (Chi phí xã hội):** Ngại hỏi là rào cản chính khiến learner im lặng tự xoay xở.<br>• Lỗ hổng kiến thức lộ rõ khi làm bài kiểm tra áp lực thời gian.<br>• Sự can thiệp chủ động từ người dạy mang lại sự giải tỏa tâm lý cực lớn. |
| **PN4 (Phùng Gia Khánh)** <br>→ *Learner AE06 (CS)* | • Học viên Khoa học máy tính, tham gia khóa học với mong muốn nắm chắc kiến thức AI thực chiến.<br>• Đi học, nghe giảng trên lớp đầy đủ; đang trong quá trình củng cố phương pháp tự học. | • Xác nhận động lực học tập nghiêm túc của sinh viên kỹ thuật; cần bổ sung sâu hơn về hành vi tương tác micro-interaction trong các vòng test prototype. |

### 1.2. Ánh xạ Evidence vào các Barrier cốt lõi

| # | Practice Note | Observation / quote gốc ⚙️ | Chống lưng cho Barrier nào |
| - | ------------- | --------------------------- | -------------------------- |
| **PN1** | Thành → Tình | *"Nói chung là em không tìm được cái nội dung ở đấy luôn"* | **Barrier 1:** Không tự chỉ ra được điểm nghẽn để người khác hỗ trợ. |
| **PN2** | Bùi Nam → K4 | *"các anh cũng không hỏi tình hình của mình mấy"* | **Barrier 2:** Giảng viên/Coach không có radar phát hiện người học đang kẹt. |
| **PN3** | Phương Nam → Nữ | *"Mình nghĩ là không tại mình cũng hơi ngại"*, *"Wow, được giải thoát rồi!"* | **Barrier 3 (Trọng tâm):** Chi phí xã hội (ngại hỏi) khiến learner tự cô lập; can thiệp chủ động giúp giải tỏa. |

### 1.3. Điều nhóm vẫn CHƯA BIẾT (Still Unproven — Bắt buộc $\ge 1$): ✍️
1. Liệu cơ chế **AI tự động phát hiện và gợi ý can thiệp** có tạo ra cảm giác *“được giải thoát”* như khi con người (coach) hỏi trực tiếp hay sẽ gây cảm giác bị soi mói / phiền hà?
2. Mức độ thiệt hại định lượng cụ thể (điểm số quiz bị giảm bao nhiêu %, tỷ lệ bỏ dở buổi học) trên quy mô toàn bộ học viên VLearn.

---

## 2. Ba Solution Options — GATE 2

Ba cách giải **cùng một problem**, khác nhau ở **cơ chế tương tác và phân chia quyền user–AI**.

| Tiêu chí | **Option A** | **Option B** | **Option C** |
| :--- | :--- | :--- | :--- |
| **Tên option** | **Self-Check Tagging** <br>*(Learner chủ động đánh dấu)* | **Slide-level Difficulty Digest** <br>*(Cảnh báo độ khó cấp slide & Tự nguyện)* | **AI Proactive Support Radar** <br>*(AI phát hiện kẹt & Mentor duyệt can thiệp)* |
| **Cơ chế (1 câu)** | Learner tự đánh dấu các khái niệm/slide chưa hiểu; hệ thống gom lại thành danh sách ôn tập cá nhân mà không dùng thuật toán suy đoán. | AI phân tích dữ liệu ẩn danh tổng hợp để gắn cờ "Slide có độ khó cao", gợi mở cho learner bấm chọn "Yêu cầu giải thích". | AI theo dõi chuỗi hành vi học tập cá nhân (dừng lâu, tra cứu lặp lại) để phát hiện tín hiệu kẹt, tự tạo Support Queue cho Mentor duyệt hỗ trợ. |
| **Vị trí trên spectrum** | **User-led / No-inference** | **User + AI co-create** | **AI initiate, Human review** |
| **User làm gì?** | Chủ động bấm nút "Đánh dấu chưa hiểu" / chọn checklist khái niệm cần làm rõ dưới mỗi slide. | Đọc nhãn cảnh báo độ khó của slide; chủ động bấm nút "Tôi cần hỗ trợ slide này". | Đang tự học thì nhận được gợi ý/tin nhắn hỗ trợ từ Coach; chọn tiếp nhận hoặc từ chối ("Tôi tự xử lý được"). |
| **AI làm gì?** | Không suy đoán; chỉ lưu trữ, gom nhóm và hiển thị lại các mục learner đã tự khai báo. | Phân tích hành vi ẩn danh ở **cấp slide** (tần suất xem lại, thời gian dừng trung bình), không định danh cá nhân. | Phân tích hành vi ở **cấp cá nhân** (dừng lâu, đổi đáp án quiz); tự động tạo draft đề xuất hỗ trợ trong Support Queue. |
| **Ai giữ quyền quyết định cuối?** | **Learner** toàn quyền quyết định nội dung cần lưu và cần hỏi. | **Learner** quyết định có công khai yêu cầu hỗ trợ của mình hay không. | **Mentor/Coach** quyết định duyệt gửi hỗ trợ; **Learner** quyết định tiếp nhận hoặc bỏ qua. |
| **Chống lại barrier nào?** | Giúp gỡ **Barrier 1** (Không định vị được chỗ kẹt để tự ôn). | Giúp giảm áp lực tâm lý **Barrier 3** bằng việc bình thường hóa: *"Nhiều bạn cũng gặp khó ở slide này"*. | Phá vỡ hoàn toàn **Barrier 3 (Ngại hỏi / Chi phí xã hội)** bằng cách đưa sự hỗ trợ đến tận tay người học. |
| **Rủi ro chính nếu AI sai** | Không có rủi ro AI sai (no inference); rủi ro nằm ở user lười hoặc không tự nhận biết được chỗ chưa hiểu. | AI đánh giá sai độ khó của slide $\rightarrow$ gây tâm lý hoang mang không cần thiết hoặc bỏ sót nội dung khó thật sự. | AI suy đoán sai (False Positive) $\rightarrow$ Mentor gửi tin nhắn làm phiền learner đang tập trung tự học; gây cảm giác bị giám sát. |
| **Người phụ trách chính** | Bùi Hải Nam (`2A202602636`) | Chử Trần Phương Nam (`2A202602675`) | Phùng Gia Khánh (`2A202602585`) & Phan Duy Thành (`2A202602930`) |

### 2.1. Comparison Contract (Bắt buộc giống nhau 100% giữa A/B/C)

| Trường | Giá trị dùng chung cho A/B/C ⚙️ |
| :--- | :--- |
| **User** | Học viên tự học trên nền tảng VLearn vào buổi tối, một mình, không có người ngồi cạnh hướng dẫn. |
| **Situation** | Đang tự học slide chuyên sâu môn AI Thực Chiến (chứa các thuật ngữ khó như `RAG`, `Vector DB`), gặp đoạn khó hiểu và có bài quiz ngay sau đó. |
| **Task tester phải làm** | Đọc nội dung slide, gặp thuật ngữ chuyên ngành khó hiểu, trải nghiệm cách hệ thống tương tác và tìm cách gỡ vướng để hoàn thành câu hỏi quiz. |
| **Outcome kỳ vọng** | Nắm được định nghĩa/khái niệm cốt lõi, không bị nghẽn mạch học quá 5 phút, hoàn thành bài quiz tự tin và đúng hạn. |
| **Data / Content Fixture** | Cùng 1 bài giảng mẫu gồm 10 slide; slide số 4 chứa thuật ngữ khó `RAG`; 1 câu hỏi quiz trắc nghiệm áp lực thời gian 30s. |

### 2.2. Distance Check 🚫

> Ba câu phân biệt bản chất cơ chế — không nhắc tới màu sắc, layout, wording, font hay animation:

- **A khác B ở chỗ:** A hoàn toàn do **người dùng tự chủ động khai báo** và hệ thống không suy đoán bất cứ điều gì, trong khi B sử dụng **AI để suy đoán độ khó ở cấp độ nội dung (slide)** rồi mới gợi mở cho người dùng quyết định.
- **B khác C ở chỗ:** B **không bao giờ định danh hay theo dõi từng cá nhân** (chỉ phân tích tổng hợp ở cấp slide) và để người học chủ động yêu cầu hỗ trợ; còn C **AI trực tiếp phân tích hành vi của từng cá nhân** và kích hoạt quy trình hỗ trợ chủ động từ phía Mentor.
- **A khác C ở chỗ:** A đảo ngược hoàn toàn điểm khởi tạo (**User khởi tạo $\rightarrow$ AI lưu trữ thụ động**), trong khi C là **AI tự động khởi tạo nhận định kẹt $\rightarrow$ Mentor kiểm duyệt $\rightarrow$ User phản hồi**.
- **Kết luận:** Ba option đại diện cho 3 điểm khác biệt rõ ràng trên phổ phân quyền Human–AI (User-led $\rightarrow$ Co-create $\rightarrow$ AI-initiated), không phải ba phiên bản chỉnh sửa giao diện. ✅

---

## 3. Human–AI Decision Table — GATE 3

Điền cho **từng option**. Mỗi dòng là một hành vi then chốt trong critical interaction.

### 3.1. Option A — Self-Check Tagging (User-led / No-inference)

| # | Tình huống | AI **Act** (tự làm) | AI **Ask** (hỏi trước) | AI **Don't Act** (không được làm) | User hiểu điều gì? | Đường kiểm soát / phục hồi khi có sai sót |
| - | ---------- | ------------------- | ---------------------- | --------------------------------- | ------------------ | ----------------------------------------- |
| 1 | Learner dừng lại đọc slide lâu (> 3 phút). | Không làm gì. | Không làm gì. | **Tuyệt đối không tự bật popup** hay phỏng đoán user bị kẹt. | User hiểu hệ thống tôn trọng nhịp độ tự học riêng, không can thiệp ngầm. | Không có rủi ro can thiệp sai; user tiếp tục đọc bình thường. |
| 2 | Learner bấm nút "Đánh dấu chưa hiểu" ở thuật ngữ `RAG`. | Lưu thuật ngữ vào mục "Checklist cần ôn tập" cá nhân. | Không cần hỏi lại. | Không tự ý gửi thông báo cho giảng viên/bạn học. | User biết mục này đã được lưu vào sổ tay cá nhân để xem lại sau. | User bấm nút một lần nữa để **Hủy đánh dấu** (Toggle On/Off tức thì). |
| 3 | Learner kết thúc bài học và mở mục Recap. | Hiển thị danh sách các thuật ngữ user đã tự đánh dấu kèm định nghĩa tóm tắt. | Hỏi: *"Bạn có muốn tạo quiz ôn lại các từ này không?"* | Không tự động đăng ký lịch hỗ trợ với TA khi chưa được yêu cầu. | User biết danh sách này hoàn toàn do chính mình chọn lọc. | User có thể bấm **Xóa khỏi danh sách** hoặc chỉnh sửa ghi chú cá nhân bất cứ lúc nào. |

### 3.2. Option B — Slide-level Difficulty Digest (User + AI Co-create)

| # | Tình huống | AI **Act** (tự làm) | AI **Ask** (hỏi trước) | AI **Don't Act** (không được làm) | User hiểu điều gì? | Đường kiểm soát / phục hồi khi AI sai |
| - | ---------- | ------------------- | ---------------------- | --------------------------------- | ------------------ | ------------------------------------- |
| 1 | Hệ thống phát hiện slide 4 có >60% học viên xem lại nhiều lần. | Hiển thị huy hiệu ẩn danh: *"🔥 Slide có nhiều khái niệm khó (65% học viên xem lại)"*. | Không hỏi riêng từng cá nhân. | Không nêu tên hoặc chỉ định bất kỳ học viên cụ thể nào đang xem slide. | User hiểu đây là thống kê xu hướng chung của bài học, không phải hệ thống đang soi riêng mình. | User có thể bấm nút **"Ẩn cảnh báo độ khó"** nếu cảm thấy gây xao nhãng. |
| 2 | Learner đọc slide 4 và cảm thấy vướng mắc. | Hiển thị nút bấm: *"Xem giải thích mở rộng"* hoặc *"Yêu cầu hỗ trợ slide này"*. | Khi bấm, hỏi: *"Bạn muốn gửi câu hỏi ẩn danh lên diễn đàn hay yêu cầu Coach giải đáp?"* | Không tự động gửi thông tin cá nhân của learner lên kênh chung. | User hiểu mình có quyền lựa chọn kênh giải tỏa phù hợp với mức độ e ngại của bản thân. | Trước khi gửi, user được **Preview nội dung và quyền riêng tư** (ẩn danh / hiện tên); có nút **Hủy bỏ**. |
| 3 | Slide được AI đánh giá nhầm là "Rất khó" (False Positive do học viên dừng xem hình minh họa). | Hiển thị nhãn độ khó dựa trên dữ liệu thời gian dừng. | Cuối slide, hiển thị widget nhỏ: *"Thông tin độ khó này có chính xác với bạn không?"* | Không khóa tiến độ học hay ép buộc user phải đọc phần bổ trợ. | User hiểu đây là ước tính tự động từ dữ liệu hành vi tập thể. | User bấm **"Slide này dễ hiểu"** $\rightarrow$ Hệ thống lập tức giảm trọng số độ khó của slide trong phiên sau. |

### 3.3. Option C — AI Proactive Support Radar (AI Initiate, Human Review)

| # | Tình huống | AI **Act** (tự làm) | AI **Ask** (hỏi trước) | AI **Don't Act** (không được làm) | User hiểu điều gì? | Đường kiểm soát / phục hồi khi AI sai |
| - | ---------- | ------------------- | ---------------------- | --------------------------------- | ------------------ | ------------------------------------- |
| 1 | Learner dừng ở slide 4 >5 phút, tra từ `RAG` 2 lần và đổi đáp án câu quiz liên quan. | Ghi nhận chuỗi tín hiệu; phân tích mức độ kẹt (Confidence: 85%); tạo 1 item nháp trong **Support Queue của Mentor**. | Không can thiệp ngay vào màn hình học của user khi chưa qua Mentor. | **Tuyệt đối không tự động gửi tin nhắn bot tự động** làm gián đoạn dòng suy nghĩ của user. | Learner không bị làm phiền đột ngột; Mentor hiểu rõ căn cứ dữ liệu vì sao learner này cần hỗ trợ. | Mentor kiểm tra dashboard, nếu thấy learner chỉ đang ghi chép thì bấm **Dismiss/Reject** khỏi Queue. |
| 2 | Mentor duyệt đề xuất và chọn mẫu can thiệp nhẹ nhàng: *"Thầy thấy phần RAG hơi nhiều khái niệm mới, em có cần thầy gợi ý nhanh cấu trúc của nó không?"*. | Chuyển tin nhắn từ Mentor đến thanh thông báo góc màn hình của Learner. | Tin nhắn hiển thị dạng gợi ý kèm 2 lựa chọn: *"Có, hỗ trợ em với"* hoặc *"Em tự xử lý được"*. | Không mở khung chat video/audio ép buộc; không hiển thị nhãn cảnh báo đỏ "Bạn đang học kém". | Learner cảm thấy được quan tâm tự nhiên từ Mentor thật (giải tỏa tâm lý), không cảm thấy bị AI giám sát. | Learner có thể bấm **"Em tự xử lý được / Bỏ qua"** $\rightarrow$ Thông báo tự biến mất sau 10s, không nhắc lại trong buổi học. |
| 3 | AI nhận diện sai (Learner chỉ đang bận nghe điện thoại chứ không phải bị kẹt bài). | Mentor gửi tin nhắn hỏi thăm do tin vào AI. | Learner bấm nút *"Em đang bận việc riêng, không bị vướng bài"*. | Hệ thống không tiếp tục gửi cảnh báo kẹt trong suốt 60 phút tiếp theo của phiên học. | Learner hiểu mình hoàn toàn làm chủ phiên học và có quyền từ chối hỗ trợ. | Nút **"Tắt gợi ý hỗ trợ buổi tối"** trong phần cài đặt riêng tư để vô hiệu hóa hoàn toàn Radar khi cần tập trung tuyệt đối. |

### 3.4. Bốn nguyên lý Human–AI Design — Đối chiếu tổng hợp

| Nguyên lý | Option A (Self-Check) | Option B (Slide Digest) | Option C (Support Radar) |
| :--- | :--- | :--- | :--- |
| **Expectation** <br>*(Kỳ vọng rõ ràng)* | User biết rõ hệ thống chỉ là cuốn sổ tay lưu trữ các mục do chính mình bấm chọn. | User biết trước nhãn độ khó là thống kê tập thể; biết rõ bấm nút sẽ nhận được gì. | User biết tin nhắn đến từ Mentor thật dựa trên tín hiệu tự học; không bị bất ngờ bởi bot vô cảm. |
| **Role & Agency** <br>*(Phân định vai trò & Quyền làm chủ)* | **User làm chủ 100%**: Tự phát hiện, tự đánh dấu, tự tìm cách ôn tập. | **Đồng kiến tạo**: AI cung cấp bối cảnh độ khó chung; User giữ quyền lên tiếng hoặc im lặng. | **AI đề xuất, Người quyết định**: AI lọc tín hiệu $\rightarrow$ Mentor duyệt $\rightarrow$ Learner quyết định đón nhận. |
| **Evidence & Uncertainty** <br>*(Minh bạch chứng cứ & Độ tin cậy)* | Không áp dụng (No inference, dữ liệu do user nhập trực tiếp). | Hiển thị rõ căn cứ: *"Dựa trên 65% học viên xem lại slide này"*; không khẳng định tuyệt đối. | Dashboard của Mentor ghi rõ: *Dừng 5p + Đổi đáp án quiz + Tra từ 2 lần (Độ tin cậy: 85%)*. |
| **Control & Recovery** <br>*(Kiểm soát & Phục hồi sai sót)* | Bật/tắt nút đánh dấu tức thì; xóa danh sách ôn tập dễ dàng. | Tắt nhãn cảnh báo; chọn gửi ẩn danh hoặc công khai; hủy yêu cầu trước khi gửi. | Nút từ chối nhanh ("Em tự làm được"); tắt hẳn radar trong phần cài đặt; Mentor loại bỏ false positive. |

### 3.5. Kiểm tra dữ liệu và quyền riêng tư (Privacy & Data Check)

* **Phạm vi dữ liệu sử dụng:**
  * Option A & B: Chỉ dùng tương tác bấm nút trực tiếp và dữ liệu tổng hợp không định danh (Anonymous Aggregate Telemetry).
  * Option C: Sử dụng tín hiệu hành vi trong phiên học hiện tại (thời gian dừng trên slide, thao tác đổi đáp án quiz, tần suất tra cứu thuật ngữ).
* **Quyền rút lui và ghi nhớ dữ liệu:**
  * Toàn bộ dữ liệu hành vi ở Option C chỉ có giá trị trong **phiên học hiện tại** để hỗ trợ kịp thời; không lưu vào hồ sơ đánh giá học lực dài hạn của học viên.
  * Học viên có nút **"Chế độ riêng tư (Private Mode)"** trong cài đặt để tắt toàn bộ việc thu thập telemetry thời gian thực.

---

## 4. Gate tự kiểm

- [x] **GATE 1** — Hypothesis Problem đủ 5 thành phần + $\ge 1$ observation Day 17 + $\ge 1$ điều chưa biết (Đạt ở Mục 1).
- [x] **GATE 2** — Cùng user/situation/task/outcome, khác nhau có ý nghĩa ở cơ chế tương tác và phân chia quyền User–AI (Đạt ở Mục 2).
- [x] **GATE 3** — Rõ ràng User và AI làm gì, agency phù hợp với hậu quả khi sai, có đường kiểm soát và phục hồi minh bạch (Đạt ở Mục 3).
- [x] **Distance Check** — Không nhắc tới màu sắc, layout, wording, font hay hiệu ứng thị giác (Đạt ở Mục 2.2).

