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

**Phân công phụ trách chính (4 thành viên — 4 Solution Options độc lập):**

| # | MHV | Họ và tên | Option phụ trách chính | Cơ chế cốt lõi |
| - | --- | --------- | ---------------------- | -------------- |
| 1 | `2A202602636` | Bùi Hải Nam | **Option A** | Self-Check Tagging (User-led / No-inference) |
| 2 | `2A202602675` | Chử Trần Phương Nam | **Option B** | Slide-level Difficulty Digest (User + AI Co-create) |
| 3 | `2A202602585` | Phùng Gia Khánh | **Option C** | AI Proactive Support Radar (AI Initiate, Mentor Review) |
| 4 | `2A202602930` | Phan Duy Thành | **Option D** | In-situ Socratic Micro-Scaffolding (On-demand AI Guided Decomposition) |

> Nhóm gồm 4 thành viên, tương ứng với 4 nguồn phỏng vấn độc lập (PN1 $\rightarrow$ PN4), xây dựng 4 Solution Options trải rộng trên toàn bộ phổ phân quyền Human–AI.

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

## 2. Bốn Solution Options (A / B / C / D) — GATE 2

Bốn cách giải **cùng một problem**, khác nhau ở **cơ chế tương tác và phân chia quyền user–AI**.

| Tiêu chí | **Option A** | **Option B** | **Option C** | **Option D** |
| :--- | :--- | :--- | :--- | :--- |
| **Tên option** | **Self-Check Tagging** <br>*(Learner tự đánh dấu)* | **Slide-level Difficulty Digest** <br>*(Cảnh báo độ khó cấp slide)* | **AI Proactive Support Radar** <br>*(AI phát hiện & Mentor duyệt)* | **In-situ Socratic Scaffolding** <br>*(AI gợi mở nhận thức tại chỗ)* |
| **Cơ chế (1 câu)** | Learner tự đánh dấu các khái niệm chưa hiểu; hệ thống gom lại thành checklist ôn tập cá nhân không dùng suy đoán. | AI phân tích dữ liệu ẩn danh tổng hợp để gắn cờ "Slide độ khó cao", gợi mở learner bấm yêu cầu hỗ trợ. | AI theo dõi chuỗi hành vi học tập (dừng lâu, đổi đáp án quiz), tạo Support Queue cho Mentor duyệt hỗ trợ. | Khi learner kẹt từ khóa, AI chẻ nhỏ khái niệm thành các câu hỏi gợi mở dạng bậc thang (Socratic) để user tự hiểu. |
| **Vị trí trên spectrum** | **User-led / No-inference** | **User + AI co-create** | **AI initiate, Human review** | **User-triggered, AI-guided Dialogue** |
| **User làm gì?** | Chủ động bấm "Đánh dấu chưa hiểu" dưới mỗi slide. | Đọc nhãn cảnh báo độ khó; chủ động bấm "Tôi cần hỗ trợ slide này". | Đang tự học thì nhận được tin nhắn hỗ trợ từ Coach; chọn tiếp nhận hoặc từ chối. | Bấm nút "Gợi mở khái niệm này" ngay tại từ khóa khó; trả lời câu hỏi phụ nhỏ của AI. |
| **AI làm gì?** | Không suy đoán; chỉ lưu trữ, gom nhóm và hiển thị lại. | Phân tích hành vi ẩn danh ở **cấp slide**, không định danh cá nhân. | Phân tích hành vi ở **cấp cá nhân**; tự động tạo draft đề xuất hỗ trợ cho Mentor. | Phân rã thuật ngữ thành 2 mảnh kiến thức nền tảng; đặt câu hỏi gợi ý bậc thang (Hint Level 1 $\rightarrow$ 2). |
| **Ai giữ quyền quyết định cuối?** | **Learner** toàn quyền quyết định. | **Learner** quyết định có gửi yêu cầu hay không. | **Mentor** duyệt gửi; **Learner** quyết định nhận/bỏ qua. | **Learner** tự quyết định dừng ở mức gợi ý nào khi đã hiểu. |
| **Chống lại barrier nào?** | Gỡ **Barrier 1** (Không định vị được chỗ kẹt để tự ôn). | Giảm **Barrier 3** (Bình thường hóa việc nhiều người cùng kẹt). | Phá vỡ **Barrier 3** (Đưa Coach chủ động đến tận tay learner). | Gỡ **Barrier 1 & 3** (Tự hiểu ngay tại chỗ, không mất 10p tra Google, không ngại hỏi người). |
| **Rủi ro chính nếu AI sai** | Không có rủi ro AI sai (no inference); rủi ro user lười tự đánh dấu. | AI đánh giá sai độ khó $\rightarrow$ hoang mang hoặc bỏ sót slide khó. | AI đoán sai (False Positive) $\rightarrow$ tin nhắn làm phiền; cảm giác bị giám sát. | AI đặt câu hỏi gợi mở quá trừu tượng $\rightarrow$ làm người học càng thêm rối trí (Cognitive Overload). |
| **Người phụ trách chính** | Bùi Hải Nam (`2A202602636`) | Chử Trần Phương Nam (`2A202602675`) | Phùng Gia Khánh (`2A202602585`) | Phan Duy Thành (`2A202602930`) |

### 2.1. Comparison Contract (Bắt buộc giống nhau 100% giữa A/B/C/D)

| Trường | Giá trị dùng chung cho A/B/C/D ⚙️ |
| :--- | :--- |
| **User** | Học viên tự học trên nền tảng VLearn vào buổi tối, một mình, không có người ngồi cạnh hướng dẫn. |
| **Situation** | Đang tự học slide chuyên sâu môn AI Thực Chiến (chứa các thuật ngữ khó như `RAG`, `Vector DB`), gặp đoạn khó hiểu và có bài quiz ngay sau đó. |
| **Task tester phải làm** | Đọc nội dung slide, gặp thuật ngữ chuyên ngành khó hiểu, trải nghiệm cách hệ thống tương tác và tìm cách gỡ vướng để hoàn thành câu hỏi quiz. |
| **Outcome kỳ vọng** | Nắm được định nghĩa/khái niệm cốt lõi, không bị nghẽn mạch học quá 5 phút, hoàn thành bài quiz tự tin và đúng hạn. |
| **Data / Content Fixture** | Cùng 1 bài giảng mẫu gồm 10 slide; slide số 4 chứa thuật ngữ khó `RAG`; 1 câu hỏi quiz trắc nghiệm áp lực thời gian 30s. |

### 2.2. Distance Check 🚫

> Phân biệt bản chất cơ chế giữa 4 phương án — không nhắc tới màu sắc, layout, wording, font hay animation:

- **A khác B ở chỗ:** A hoàn toàn do **người dùng tự chủ động khai báo** và hệ thống không suy đoán bất cứ điều gì, trong khi B sử dụng **AI để suy đoán độ khó ở cấp độ nội dung (slide)** rồi mới gợi mở cho người dùng quyết định.
- **B khác C ở chỗ:** B **không bao giờ định danh hay theo dõi từng cá nhân** (chỉ phân tích tổng hợp ở cấp slide) và để người học chủ động yêu cầu hỗ trợ; còn C **AI trực tiếp phân tích hành vi của từng cá nhân** và kích hoạt quy trình hỗ trợ chủ động từ phía Mentor.
- **C khác D ở chỗ:** C kích hoạt sự can thiệp từ **con người (Mentor)** thông qua hàng đợi hỗ trợ, trong khi D cung cấp **giàn giáo nhận thức tức thì từ AI tại chỗ** để người học tự thân vận động giải mã kiến thức mà không cần tương tác xã hội.
- **A khác D ở chỗ:** A chỉ đóng vai trò là **sổ tay lưu trữ thụ động** các điểm chưa hiểu, còn D là **công cụ tương tác hai chiều thông minh** giúp người học phân rã và thấu hiểu khái niệm ngay tại thời điểm vướng mắc.
- **Kết luận:** Bốn option đại diện cho 4 cơ chế giải quyết độc lập trên phổ tương tác Human–AI, không phải 4 phiên bản chỉnh sửa giao diện. ✅

---

## 3. Human–AI Decision Table — GATE 3

Điền cho **từng option**. Mỗi dòng là một hành vi then chốt trong critical interaction.

### 3.1. Option A — Self-Check Tagging (User-led / No-inference)

| # | Tình huống | AI **Act** (tự làm) | AI **Ask** (hỏi trước) | AI **Don't Act** (không được làm) | User hiểu điều gì? | Đường kiểm soát / phục hồi |
| - | ---------- | ------------------- | ---------------------- | --------------------------------- | ------------------ | --------------------------- |
| 1 | Learner dừng lại đọc slide lâu (> 3 phút). | Không làm gì. | Không làm gì. | **Tuyệt đối không tự bật popup** hay phỏng đoán user bị kẹt. | User hiểu hệ thống tôn trọng nhịp độ tự học riêng. | Tiếp tục đọc bình thường. |
| 2 | Learner bấm nút "Đánh dấu chưa hiểu" ở thuật ngữ `RAG`. | Lưu thuật ngữ vào mục "Checklist cần ôn tập" cá nhân. | Không cần hỏi lại. | Không tự ý gửi thông báo cho giảng viên/bạn học. | User biết mục này đã được lưu vào sổ tay cá nhân. | Bấm nút lần nữa để **Hủy đánh dấu** (Toggle On/Off). |
| 3 | Learner kết thúc bài học và mở mục Recap. | Hiển thị danh sách các thuật ngữ user đã tự đánh dấu kèm định nghĩa tóm tắt. | Hỏi: *"Bạn có muốn tạo quiz ôn lại các từ này không?"* | Không tự động đăng ký lịch hỗ trợ với TA khi chưa được yêu cầu. | User biết danh sách hoàn toàn do chính mình chọn lọc. | Bấm **Xóa khỏi danh sách** hoặc chỉnh sửa ghi chú. |

### 3.2. Option B — Slide-level Difficulty Digest (User + AI Co-create)

| # | Tình huống | AI **Act** (tự làm) | AI **Ask** (hỏi trước) | AI **Don't Act** (không được làm) | User hiểu điều gì? | Đường kiểm soát / phục hồi khi AI sai |
| - | ---------- | ------------------- | ---------------------- | --------------------------------- | ------------------ | ------------------------------------- |
| 1 | Hệ thống phát hiện slide 4 có >60% học viên xem lại nhiều lần. | Hiển thị huy hiệu ẩn danh: *"🔥 Slide có nhiều khái niệm khó (65% học viên xem lại)"*. | Không hỏi riêng từng cá nhân. | Không nêu tên hoặc chỉ định bất kỳ học viên cụ thể nào đang xem slide. | User hiểu đây là thống kê xu hướng chung, không phải soi riêng mình. | Bấm nút **"Ẩn cảnh báo độ khó"** nếu thấy xao nhãng. |
| 2 | Learner đọc slide 4 và cảm thấy vướng mắc. | Hiển thị nút bấm: *"Xem giải thích mở rộng"* hoặc *"Yêu cầu hỗ trợ slide này"*. | Khi bấm, hỏi: *"Bạn muốn gửi câu hỏi ẩn danh lên diễn đàn hay yêu cầu Coach giải đáp?"* | Không tự động gửi thông tin cá nhân của learner lên kênh chung. | User hiểu mình có quyền lựa chọn kênh giải tỏa phù hợp. | Được **Preview nội dung và quyền riêng tư**; có nút **Hủy bỏ**. |
| 3 | Slide được AI đánh giá nhầm là "Rất khó" (False Positive). | Hiển thị nhãn độ khó dựa trên dữ liệu thời gian dừng. | Cuối slide, hỏi: *"Thông tin độ khó này có chính xác với bạn không?"* | Không khóa tiến độ học hay ép buộc user phải đọc phần bổ trợ. | User hiểu đây là ước tính tự động từ dữ liệu tập thể. | Bấm **"Slide này dễ hiểu"** $\rightarrow$ Giảm trọng số độ khó trong phiên sau. |

### 3.3. Option C — AI Proactive Support Radar (AI Initiate, Human Review)

| # | Tình huống | AI **Act** (tự làm) | AI **Ask** (hỏi trước) | AI **Don't Act** (không được làm) | User hiểu điều gì? | Đường kiểm soát / phục hồi khi AI sai |
| - | ---------- | ------------------- | ---------------------- | --------------------------------- | ------------------ | ------------------------------------- |
| 1 | Learner dừng ở slide 4 >5 phút, tra từ `RAG` 2 lần và đổi đáp án quiz liên quan. | Ghi nhận tín hiệu; phân tích mức độ kẹt (85%); tạo 1 item nháp trong **Support Queue của Mentor**. | Không can thiệp ngay vào màn hình học khi chưa qua Mentor. | **Tuyệt đối không tự động gửi tin nhắn bot** làm gián đoạn dòng suy nghĩ của user. | Learner không bị làm phiền; Mentor hiểu rõ căn cứ dữ liệu vì sao cần hỗ trợ. | Mentor kiểm tra, nếu thấy không cần thiết thì bấm **Dismiss/Reject**. |
| 2 | Mentor duyệt đề xuất và chọn mẫu can thiệp nhẹ nhàng. | Chuyển tin nhắn từ Mentor đến thanh thông báo góc màn hình của Learner. | Tin nhắn hiển thị dạng gợi ý kèm 2 lựa chọn: *"Có, hỗ trợ em với"* hoặc *"Em tự xử lý được"*. | Không mở khung chat video/audio ép buộc; không hiển thị nhãn cảnh báo đỏ "Học kém". | Learner cảm thấy được quan tâm tự nhiên từ Mentor thật (giải tỏa tâm lý). | Bấm **"Em tự xử lý được / Bỏ qua"** $\rightarrow$ Thông báo tự biến mất sau 10s. |
| 3 | AI nhận diện sai (Learner chỉ đang bận việc riêng chứ không phải bị kẹt). | Mentor gửi tin nhắn hỏi thăm do tin vào AI. | Learner bấm nút *"Em đang bận việc riêng, không bị vướng bài"*. | Hệ thống không tiếp tục gửi cảnh báo kẹt trong suốt 60 phút tiếp theo. | Learner hiểu mình hoàn toàn làm chủ phiên học và có quyền từ chối. | Nút **"Tắt gợi ý hỗ trợ buổi tối"** trong phần cài đặt riêng tư. |

### 3.4. Option D — In-situ Socratic Micro-Scaffolding (User-triggered, AI-guided Dialogue)

| # | Tình huống | AI **Act** (tự làm) | AI **Ask** (hỏi trước) | AI **Don't Act** (không được làm) | User hiểu điều gì? | Đường kiểm soát / phục hồi khi AI sai |
| - | ---------- | ------------------- | ---------------------- | --------------------------------- | ------------------ | ------------------------------------- |
| 1 | Learner gặp thuật ngữ khó `RAG` và bấm nút "Gợi mở khái niệm này". | Phân rã `RAG` thành 2 phần (`Retrieval` & `Generation`); hiển thị câu hỏi gợi mở Level 1. | Hỏi: *"Bạn đã nắm rõ khái niệm Search/Truy xuất dữ liệu truyền thống chưa?"* | **Tuyệt đối không đưa ngay định nghĩa dài 3 đoạn** hoặc làm thay bài quiz của learner. | User hiểu AI đóng vai trò gia sư gợi mở tư duy từng bước, không làm bài hộ. | User bấm nút **"Đóng gợi mở / Tôi đã hiểu"** để tiếp tục tự học. |
| 2 | Learner trả lời đúng câu hỏi phụ Level 1 và bấm "Bước tiếp theo". | Tự động liên kết câu trả lời của user với cơ chế sinh văn bản của LLM (Level 2 Scaffold). | Hỏi: *"Khi LLM kết hợp với dữ liệu vừa tìm được, điều gì sẽ xảy ra với câu trả lời?"* | Không đánh giá chấm điểm hay phán xét câu trả lời của learner. | User cảm nhận mình đang tự khám phá và xâu chuỗi logic kiến thức. | Nút **"Xem lại gợi ý bước 1"** hoặc **"Đổi sang ví dụ trực quan khác"**. |
| 3 | AI sinh câu hỏi gợi mở quá trừu tượng hoặc không ăn khớp với slide. | Tạm dừng luồng câu hỏi phức tạp. | Hiển thị nút hỏi: *"Gợi ý này có giúp bạn hiểu hơn không?"* | Không tiếp tục đẩy user vào mê cung câu hỏi vòng vo. | User biết mình không bắt buộc phải theo hết kịch bản đối thoại. | Bấm **"Gợi ý này khó hiểu $\rightarrow$ Xem tóm tắt 1 câu"** để lấy định nghĩa cốt lõi tức thì. |

### 3.5. Bốn nguyên lý Human–AI Design — Đối chiếu tổng hợp (A / B / C / D)

| Nguyên lý | Option A (Self-Check) | Option B (Slide Digest) | Option C (Support Radar) | Option D (Socratic Scaffold) |
| :--- | :--- | :--- | :--- | :--- |
| **Expectation** <br>*(Kỳ vọng rõ ràng)* | User biết hệ thống chỉ là sổ tay lưu trữ các mục do chính mình bấm chọn. | User biết trước nhãn độ khó là thống kê tập thể; biết rõ bấm nút sẽ nhận được gì. | User biết tin nhắn đến từ Mentor thật dựa trên tín hiệu tự học; không bị bất ngờ bởi bot. | User biết AI là công cụ gợi mở từng nấc thang tư duy, không phải bộ máy giải bài hộ. |
| **Role & Agency** <br>*(Vai trò & Quyền làm chủ)* | **User làm chủ 100%**: Tự phát hiện, tự đánh dấu, tự ôn tập. | **Đồng kiến tạo**: AI đưa bối cảnh độ khó; User quyết định lên tiếng hay im lặng. | **AI đề xuất, Người quyết định**: AI lọc tín hiệu $\rightarrow$ Mentor duyệt $\rightarrow$ Learner tiếp nhận. | **User kích hoạt, AI dẫn dắt**: User tự quyết định khi nào cần gợi ý và dừng ở cấp độ nào. |
| **Evidence & Uncertainty** <br>*(Chứng cứ & Độ tin cậy)* | Không áp dụng (No inference, dữ liệu do user nhập trực tiếp). | Hiển thị rõ căn cứ: *"Dựa trên 65% học viên xem lại slide này"*. | Dashboard của Mentor ghi rõ: *Dừng 5p + Đổi đáp án quiz (Độ tin cậy: 85%)*. | AI minh bạch từng nấc thang kiến thức (Hiển thị rõ: *Gợi ý 1/2 $\rightarrow$ 2/2*). |
| **Control & Recovery** <br>*(Kiểm soát & Phục hồi)* | Bật/tắt nút đánh dấu tức thì; xóa danh sách ôn tập dễ dàng. | Tắt nhãn cảnh báo; chọn gửi ẩn danh hoặc công khai; hủy trước khi gửi. | Nút từ chối nhanh ("Em tự làm được"); tắt hẳn radar trong cài đặt; Mentor loại bỏ false positive. | Nút đóng gợi ý tức thì; chuyển đổi nhanh giữa chế độ "Gợi mở tư duy" và "Xem tóm tắt ngắn". |

### 3.6. Kiểm tra dữ liệu và quyền riêng tư (Privacy & Data Check)

* **Phạm vi dữ liệu sử dụng:**
  * Option A, B & D: Chỉ dùng tương tác bấm nút tại chỗ và telemetry ẩn danh; không theo dõi hay định danh hồ sơ cá nhân.
  * Option C: Sử dụng tín hiệu hành vi trong phiên học hiện tại (thời gian dừng, thao tác quiz, tra cứu) để hỗ trợ khẩn cấp.
* **Quyền rút lui và ghi nhớ dữ liệu:**
  * Toàn bộ dữ liệu hành vi ở Option C chỉ có giá trị trong **phiên học hiện tại** để hỗ trợ kịp thời; không lưu vào hồ sơ đánh giá học lực dài hạn của học viên.
  * Học viên có nút **"Chế độ riêng tư (Private Mode)"** trong cài đặt để tắt toàn bộ việc thu thập telemetry thời gian thực.

---

## 4. Gate tự kiểm

- [x] **GATE 1** — Hypothesis Problem đủ 5 thành phần + $\ge 1$ observation Day 17 + $\ge 1$ điều chưa biết (Đạt ở Mục 1).
- [x] **GATE 2** — Cùng user/situation/task/outcome, 4 options khác nhau có ý nghĩa ở cơ chế tương tác và phân chia quyền User–AI (Đạt ở Mục 2).
- [x] **GATE 3** — Rõ ràng User và AI làm gì cho cả 4 options, agency phù hợp với hậu quả khi sai, có đường kiểm soát và phục hồi minh bạch (Đạt ở Mục 3).
- [x] **Distance Check** — Không nhắc tới màu sắc, layout, wording, font hay hiệu ứng thị giác (Đạt ở Mục 2.2).

