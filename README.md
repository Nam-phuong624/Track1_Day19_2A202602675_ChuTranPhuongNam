# Track1_Day19_2A202602930_PhanDuyThanh

## I. THÔNG TIN CÁ NHÂN VÀ NHÓM

- **MHV:** 2A202602930
- **Họ và tên:** Phan Duy Thanh
- **Nhóm:** H3201
- **Case đã chọn:** Case C — AI Support Radar (VLearn)
- **Option tôi phụ trách chính:** Option A — Tự đánh dấu, coach trả lời

**Thành viên nhóm**

| MHV | Họ và tên | Option phụ trách chính | Việc dùng chung |
| --- | --- | --- | --- |
| 2A202602636 | Bùi Hải Nam | C | Điều phối Chặng 1–3 |
| 2A202602675 | Chử Trần Phương Nam | B | Soạn lời giải thích RAG của AI (nội dung soạn sẵn) |
| 2A202602585 | Phùng Gia Khánh | C (cùng phụ trách) | Phần prototype dùng chung: slide, quiz, nút reset |
| 2A202602930 | Phan Duy Thanh | A | Soạn câu trả lời mẫu của coach; chốt link và QA |

Nhóm có 4 thành viên (giảng viên đã đồng ý) nên Option C do 2 người cùng phụ trách. Dù phụ trách option nào, mỗi người vẫn test cả A/B/C.

## II. PROBLEM HYPOTHESIS BRIEF

### 1. Solution Directive

Case C — AI Support Radar.

Sau mỗi phiên học, hệ thống phân tích các tín hiệu như di chuyển giữa slide, dừng lâu hoặc xem lại, highlight và ghi chú, đánh dấu "Chưa hiểu", thay đổi câu trả lời và nội dung trao đổi với AI Chat. AI tạo một Support Queue cho giảng viên gồm: học viên có thể cần hỗ trợ, phần nội dung họ có thể đang gặp khó, các tín hiệu dẫn đến nhận định đó và một hành động hỗ trợ được đề xuất. Giảng viên xem lại và quyết định có liên hệ với học viên hay không.

### 2. Problem Hypothesis ban đầu (Day 17)

Khi tự học một phần nội dung khó trên VLearn một mình, learner thường mắc lại khá lâu nhưng xử lý âm thầm — bằng workaround tốn thời gian hoặc bỏ qua phần đó — vì không ai ở vai trò hỗ trợ biết được họ đang mắc ở đâu, và bản thân họ cũng không chủ động lên tiếng. Hậu quả là lỗ hổng kiến thức tích luỹ và đà học giảm dần.

### 3. Evidence cần kiểm chứng

Nhóm đặt hai cách giải thích cạnh tranh:

- **Pain A — Visibility gap:** learner mắc nhưng không ai biết, và learner cũng không chủ động nói.
- **Pain B — Chi phí xã hội:** learner biết mình mắc và biết cách hỏi, nhưng chọn im lặng vì ngại.

Nhóm cần kiểm chứng:

- Learner có thực sự mắc lại ở một sự kiện cụ thể gần đây hay không.
- Learner đã dùng workaround nào và tốn bao nhiêu thời gian, công sức.
- Điều gì khiến learner không chủ động nhờ hỗ trợ, và họ phản ứng thế nào khi được hỏi trước.
- Việc này có tạo ra hậu quả học tập thực tế hay không.

### 4. Kết quả sau phỏng vấn

**PN1 — Phan Duy Thanh → Lê Thanh Tình (2A202602449)**

Buổi học gần nhất là chiều hôm qua. Learner làm đến một phần thì không hiểu nhưng không xác định được nội dung trên slide, và gặp thuật ngữ tiếng Anh: "Nói chung là em không tìm được cái nội dung ở đấy luôn." Learner không kể workaround nào, chỉ nói thấy buồn và lo lắng khi nhận ra mình tụt lại.

Lượt này cho dấu hiệu hạn chế về Pain A (khó chỉ ra chính xác điểm nghẽn) và chưa có evidence cho Pain B.

**PN2 — Bùi Hải Nam → learner 2A202602872**

Buổi học gần nhất là hôm qua. Một số định nghĩa trong video/slide chưa được làm rõ nên learner đọc vẫn chưa hiểu. Workaround là tự search mạng, hỏi bạn xung quanh, hỏi lab coach, rồi tìm hiểu tiếp đến khi thấy ổn: "Thường là mình tự đi chủ động đi tìm các anh lab coach... chứ các anh cũng không hỏi tình hình của mình mấy."

Learner có nhiều kênh hỗ trợ và chủ động dùng được, nên lượt này làm yếu giả định "learner không chủ động lên tiếng". Learner chưa nêu hậu quả cụ thể nào.

**PN3 — Chử Trần Phương Nam → learner nữ, track chuyên sâu**

Learner không nhớ định nghĩa thuật ngữ chuyên sâu (ví dụ RAG) nên phải dừng lại tra cứu: hỏi AI trước, AI chưa chuẩn thì search Google, mất khoảng 10 phút cho một thuật ngữ. Learner không hỏi ai vì "Mình nghĩ là không tại mình cũng hơi ngại". Khi làm quiz mật độ dày, tốc độ nhanh thì "ôi trời ơi không nhớ nó là gì luôn". Khi giảng viên lớp code chủ động hỏi thăm, learner thấy "Wow, được giải thoát rồi!".

Lượt này cho evidence trực tiếp về Pain B. Phản ứng tích cực ở trên là với người hỏi trực tiếp, chưa phải với việc bị AI phát hiện.

Note thứ tư ([note/notes_khanh.md](note/notes_khanh.md)) còn ở dạng template, chưa đủ nội dung nên nhóm không dùng làm evidence.

### 5. Kết luận hypothesis

Evidence hiện tại chưa đủ để tuyên bố Problem Hypothesis đã validated.

- Cả ba note đều gặp thuật ngữ hoặc định nghĩa chưa rõ trong slide.
- PN2 và PN3 có workaround tự xoay (search, hỏi AI, hỏi bạn, hỏi coach); PN1 không kể workaround.
- PN2 và PN3 đi hai hướng khác nhau: một người chủ động tìm coach, một người ngại nên không hỏi.

Sau khi đối chiếu lại với note gốc, nhóm tiếp tục với Hypothesis Problem sau và dùng chung cho cả A/B/C:

> Khi đọc hoặc xem lại slide của track chuyên sâu và gặp một thuật ngữ/định nghĩa chưa hiểu, learner gặp khó khăn trong việc hiểu đủ để học tiếp và làm quiz vì phải tự tra qua nhiều kênh rời rạc, không gắn với đúng chỗ trên slide; một số người ngại hỏi; và người hỗ trợ không biết họ đang kẹt, dẫn đến mất thời gian cho mỗi thuật ngữ, lúng túng khi làm quiz và lo lắng vì thấy mình tụt lại.

Điều nhóm vẫn chưa biết:

- Learner phản ứng thế nào khi AI (không phải người) phát hiện họ kẹt và gợi ý hoặc báo coach.
- Ngại hỏi là chung hay chỉ ở một số người.
- Hậu quả học tập thật (điểm quiz, deadline): mới có cảm nhận, chưa có số.
- Toàn bộ phía instructor/coach, vì Day 17 chỉ phỏng vấn learner.

## III. CONVERSATION GUIDE (Day 17 — chỉ để tham khảo context)

Lab này không tiếp tục problem interview. Phiên test là prototype test nên nhóm không mang Big 3 Questions vào.

### 1. Tiêu chí tuyển người

Người đã tự học một bài trên VLearn (hoặc một nền tảng học online khác) và bị mắc lại ở một phần nội dung, phải dừng lại để tìm cách xử lý trong vòng 7 ngày gần đây.

### 2. Recruitment Check

"Trong 7 ngày qua, có lần nào bạn đang học mà gặp một chỗ không hiểu, phải dừng lại xử lý không? Chỗ đó là gì, và bạn xử lý thế nào?"

### 3. Story Opener

"Kể mình nghe về lần gần nhất bạn đang học một bài mà gặp một chỗ không hiểu — bắt đầu từ lúc bạn mở bài đó?"

### 4. Big 3 Questions

1. "Kể mình nghe về lần gần nhất bạn học một bài mà có chỗ không hiểu — hôm đó là hôm nào? Bạn đang học bài gì, và chuyện diễn ra thế nào từ lúc mở bài tới lúc bạn dừng lại?"
2. "Lúc nhận ra mình không hiểu chỗ đó, bạn đã làm gì tiếp theo? Cụ thể: bạn mở cái gì, tua lại chỗ nào, gõ gì để tìm, hỏi ai? Việc đó mất bao lâu? Cuối cùng bạn có hiểu được chỗ đó không, hay để lại?"
3. "Lần gần nhất bạn chủ động nhờ ai đó (mentor, TA, bạn học) về một chỗ không hiểu là khi nào? Bạn hỏi ai, qua đâu, và sau đó chuyện gì xảy ra?" → "Có lần nào bạn định hỏi nhưng lại thôi không? Lúc đó vì sao?" → "Đã bao giờ có ai chủ động nhắn trước và hỏi bạn đang mắc chỗ nào chưa? Lúc đó bạn thấy thế nào?"

### 5. Nguyên tắc khi phỏng vấn

- Hỏi về hành vi trong quá khứ, ưu tiên "lần gần nhất".
- Không nhắc solution, không hỏi user có muốn tính năng hay không.
- Chỉ ghi âm sau khi người được phỏng vấn đồng ý.
- Không coi lời khen hoặc mong muốn tương lai là evidence.

## IV. PRACTICE REFLECTION

### 1. Câu hỏi nào đã giúp user kể một tình huống cụ thể?

Hỏi về lần gần nhất người tham gia kết thúc buổi học mà chưa nắm chắc bài; câu trả lời xác định được mốc "chiều hôm qua".

### 2. Chỗ nào mình cần làm tốt hơn ở lần phỏng vấn thật?

Câu hỏi ban đầu gộp cảm giác chưa nắm bài với bài tập bị nghẽn. Khi người tham gia nói tình trạng rời rạc, mình chưa hỏi tiếp một việc cụ thể họ đã làm, lúc nào nhận ra vấn đề, hoặc điều gì xảy ra tiếp theo. Câu hỏi gợi ý "thuật ngữ mới hay logic bài toán mới" có thể giới hạn câu trả lời.

### 3. Điều chỉnh cho lần phỏng vấn thật

Bám vào một khoảnh khắc cụ thể; hỏi người tham gia đang làm gì, nội dung/slide nào, họ đã thử cách nào để vượt qua, có hỏi ai không và chuyện gì xảy ra sau đó. Hỏi mở trước, tránh đưa sẵn các khả năng làm ví dụ.

## V. AI SUPPORT LOG

Khai báo đầy đủ nằm ở [ai-support-log.md](ai-support-log.md). Tóm tắt:

- **AI đã hỗ trợ:** cấu trúc hoá README, nháp ba option A/B/C và Human–AI Decision Table, tạo khung và rút gọn bộ file nộp.
- **AI sai hoặc hời hợt:** điền sẵn phần nhóm phải tự chốt, chọn option theo "đẹp spectrum", để ba option không cùng user, và viết lệch so với note gốc.
- **Nhóm đã tự sửa:** đưa learner về làm user của cả ba option, đối chiếu từng option với ba Practice Notes, sửa các chỗ lệch với note gốc.

AI không được dùng để tạo interview data, quote, observation hay feedback của tester.

## VI. INTERVIEW RECORD

- Interview Record của lượt phỏng vấn cá nhân: [note/notes_phanduythanh.md](note/notes_phanduythanh.md)
- Note của các thành viên khác: [note/notes_nambui.md](note/notes_nambui.md), [note/note_chutranphuongnam.md](note/note_chutranphuongnam.md), [note/notes_khanh.md](note/notes_khanh.md)
- Link bản ghi âm: [record/record.m4a](record/record.m4a) (file văn bản chứa link Drive)

Bản ghi âm được giữ lại để review khi cần, không dùng như dữ liệu công khai.

## VII. TRẠNG THÁI BÀI

- **Case:** Case C — AI Support Radar
- **Problem Hypothesis:** Chưa validated
- **Three Option Design Sheet:** Đã có A/B/C và Human–AI Decision Table — [three-option-design-sheet.md](three-option-design-sheet.md)
- **Micro-prototype:** Đã build, gộp A/B/C trong một file — [prototype-link.md](prototype-link.md)
- **Prototype Feedback Note:** Chưa có dữ liệu test — [prototype-feedback-note.md](prototype-feedback-note.md)
- **Group Feedback Synthesis:** Chưa có, chờ đủ ba feedback — [group-feedback-synthesis.md](group-feedback-synthesis.md)
- **AI Support Log:** Đã khai báo — [ai-support-log.md](ai-support-log.md)
