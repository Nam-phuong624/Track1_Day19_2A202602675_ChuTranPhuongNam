# Lab 18 — Ba Solution Options · Human–AI Micro-prototypes

> **Track 1 · Case C — AI Support Radar (VLearn)**
> 180 phút · Sản phẩm nhóm 3 người, nộp bài cá nhân · Mỗi người chịu trách nhiệm 1 option · Mỗi người test cả A/B/C với 1 người khác · Hoàn tất ngoài giờ nếu 20 phút cuối chưa đủ.

Tài liệu này gộp hai phần: **đề bài** (làm gì, luật chơi, gate) và **cách làm** (đầu vào Day 17 đã có gì, mỗi chặng điền gì, template nào dùng).

**Quy ước nhãn trong file:**

| Nhãn | Nghĩa |
| --- | --- |
| ⚙️ | Nội dung **đã có sẵn từ Day 17** — chỉ cần đối chiếu, không phải nghĩ lại |
| ✍️ | Nội dung **nhóm phải tự điền trong buổi lab** |
| 🧪 | Bản **nháp đề xuất** (AI hỗ trợ soạn) — nhóm phải tự review và chốt, không dùng nguyên trạng |
| 🚫 | Nội dung **cấm dùng AI** — phải do người tự viết (reflection, quote, feedback) |

---

## 0. Thông tin bài nộp

| Mục | Nội dung |
| --- | --- |
| MHV | `2A202602930` |
| Họ và tên | `Phan Duy Thanh` |
| Nhóm | `H3201` |
| Track | `Track 1` |
| Case | `Case C — AI Support Radar` |
| Thời lượng | 180 phút |
| Hình thức | Sản phẩm nhóm 3 người, **nộp bài cá nhân** |
| Option tôi phụ trách chính | `[CẦN CHỐT Ở CHẶNG 2]` — A / B / C |
| Ngày nộp | `...` |

**Thành viên nhóm — danh sách đầy đủ:**

| # | MHV | Họ và tên | Vai trò Day 17 ⚙️ | Option phụ trách chính |
| - | --- | --------- | ----------------- | ---------------------- |
| 1 | `2A202602636` | `Bùi Hải Nam` | Điều phối Chặng 1–2 | ✍️ chốt ở Chặng 2 |
| 2 | `2A202602675` | `Chử Trần Phương Nam` | Ghi chép & hợp nhất | ✍️ chốt ở Chặng 2 |
| 3 | `2A202602585` | `Phùng Gia Khánh` | Phản biện guide | ✍️ chốt ở Chặng 2 |
| 4 | `2A202602930` | `Phan Duy Thanh` | Bản ghi & nộp bài | ✍️ chốt ở Chặng 2 |

> Nhóm có **4 thành viên** trong khi A/B/C chỉ có ba option — nên một option sẽ do **2 người cùng phụ trách**. Phân công chốt ở Chặng 2 và ghi vào cột trên.
>
> **Dù phụ trách option nào, mỗi người vẫn phải test cả A/B/C.** Không ai chỉ mang option mình làm đi test.

---

## 1. Đề bài — tổng quan

### 1.1. Về bài lab này

Cuối Day 17, nhóm đã có một **Hypothesis Problem**, ba **Practice Notes** và một **Solution Parking Lot**. Day 18 **không** yêu cầu đi tìm problem mới.

Nhiệm vụ là **mở lại solution space**, biến ba cách giải thành ba **Human–AI micro-prototype**, và mang **cả bộ A/B/C** đi test.

```text
DAY 17
3 Practice Notes + Hypothesis Problem + Solution Parking Lot
                              ↓
DAY 18
3 Solution Options
→ Human–AI Design
→ 3 Micro-prototypes
→ 3 Testers × A/B/C
→ 3 Feedback Notes
→ 1 Group Next Change
```

### 1.2. Bạn làm được gì sau bài này

- Mở lại solution space từ Hypothesis Problem và evidence Day 17 thành **ba Solution Options khác nhau có ý nghĩa**.
- Thực hiện **Human–AI Design pass** cho critical interaction: Expectation, Role & Agency, Evidence & Uncertainty, Control & Recovery.
- Build ba **micro-prototype test-ready** chia sẻ ~70% common context/content nhưng khác biệt rõ ở **cơ chế tương tác**.
- Chuẩn bị **test prompt, outcome task và observation focus** mà không dẫn dắt hoặc pitch giải pháp.
- **Test chéo cả ba option A/B/C** với ba người ngoài nhóm, ghi **Feedback Notes** và tổng hợp thành **Group Next Change**.

### 1.3. Cần chuẩn bị

- Đã hoàn thành Day 17 với Hypothesis Problem, ba Practice Notes và Solution Parking Lot.
- Nắm vững các nguyên lý Human–AI Design: **Expectation, Role & Agency, Evidence & Uncertainty, Control & Recovery**.
- Sẵn sàng công cụ prototyping: Figma, Framer, HTML/CSS/JS, hoặc giấy.
- Tài liệu làm việc nhóm (Google Docs / Sheets / HackMD).
- Thiết bị chạy prototype và **đồng hồ bấm giờ**.
- *(Tùy chọn)* Công cụ AI — nếu dùng thì **phải khai báo minh bạch**.

### 1.4. Lỗi thường gặp

| # | Lỗi | Cách tránh trong file này |
| - | --- | ------------------------- |
| 1 | Đổi case hoặc tìm problem mới thay vì giữ Hypothesis Problem Day 17 | Chặng 1 khoá vào §5.1 |
| 2 | Build ba **phiên bản giao diện** (khác màu, wording, layout) thay vì ba **solution mechanism** | Distance check ở Chặng 2 |
| 3 | Không làm rõ quyền quyết định và điểm user lấy lại control / recovery khi AI sai | Human–AI Decision Table ở Chặng 3 + GATE 3 |
| 4 | Build full product, model thật hay API thay vì micro-prototype 2–3 màn hình | Scope chuẩn ở Chặng 4 |
| 5 | Chỉ mang option mình làm đi test thay vì cho tester trải nghiệm cả A/B/C | Trách nhiệm cá nhân ở Chặng 6 |
| 6 | Facilitator giải thích, dẫn dắt hoặc hỏi "Bạn có thích không?" thay vì quan sát hành vi | Luật facilitation ở Chặng 5 |
| 7 | Tuyên bố solution đã validated chỉ với ba feedback | §12 — kết luận được phép / không được phép |

### 1.5. Roadmap 6 chặng

| Chặng | Thời gian | Câu hỏi trung tâm | Đầu ra | Gate |
| ----- | --------- | ----------------- | ------ | ---- |
| **1. Tổng hợp evidence** | 15 phút | Từ ba Practice Notes, nhóm tiếp tục Hypothesis Problem nào? | Evidence Snapshot + Hypothesis Problem | GATE 1 |
| **2. Chọn ba Solution Options** | 20 phút | Ba cách giải nào cùng problem nhưng chia công việc user–AI khác nhau? | Option A/B/C + Comparison Contract | GATE 2 |
| **3. Human–AI Design pass** | 30 phút | User và AI làm gì; user hiểu, kiểm soát và phục hồi thế nào? | Human–AI Decision Table | GATE 3 |
| **4. Build ba micro-prototype** | 80 phút | Cần build tối thiểu gì để tester trải nghiệm được khác biệt? | Three Micro-prototypes | GATE 4 |
| **5. Chuẩn bị test** | 15 phút | Context, task và behavior cần quan sát là gì? | Test Prompt + Observation Focus | — |
| **6. Test với ba người** | 20 phút cuối hoặc ngoài giờ | Ba tester làm gì, chọn gì và đánh đổi điều gì? | 3 Feedback Notes + 1 Group Next Change | GATE 5 |

---

## 2. Luật của bài lab

1. **Giữ một Hypothesis Problem.** A/B/C phải cùng giải một problem cho cùng user và situation.
2. **Build ba solution, không phải ba phiên bản giao diện.** Khác màu, wording hoặc layout chưa tạo thành ba option.
3. **Mỗi option phải thể hiện một Human–AI interaction.** Nhóm phải nói rõ user làm gì, AI làm gì và ai giữ quyền quyết định.
4. **Prototype vừa đủ để test.** Mỗi option chỉ cần 2–3 trạng thái quanh một critical interaction; không build full product.
5. **Mỗi tester trải nghiệm cả ba.** Mỗi thành viên test với một người khác, nhưng không được chỉ mang option mình làm đi test.
6. **Ghi hành vi trước, diễn giải sau.** "Tester chọn B" chưa đủ nếu không có lý do, trade-off và hành vi đi kèm.
7. **Không tuyên bố validated.** Ba feedback tạo input cho iteration tiếp theo, không chứng minh product value hoặc market demand.

---

## 3. Cách làm việc nhóm

- Ở **Chặng 1–3**, cả nhóm cùng chốt evidence, ba options và Human–AI decisions.
- Ở **Chặng 4**, mỗi thành viên **chịu trách nhiệm chính một option** nhưng phải dùng chung context, content và visual components.
- Trong **10–15 phút cuối prototype sprint**, mỗi người thử option do người khác build; cả nhóm chuẩn hoá A/B/C.
- Ở **Chặng 6**, mỗi thành viên tự facilitate và ghi một Feedback Note cho một tester ngoài nhóm. Cả ba tester đều phải dùng A/B/C.
- Sau buổi học, mỗi thành viên **nộp repo cá nhân** và ghi rõ phần mình đã đóng góp vào sản phẩm chung.

---

## 4. Quy tắc dùng AI

### 4.1. Phạm vi được phép

- Gợi ý cơ chế tương tác và kịch bản đối thoại mẫu.
- Sinh dữ liệu mẫu (synthetic / dummy data) để đưa vào prototype.
- Soạn thảo canned AI outputs hoặc wizard-of-oz inputs cho các tương tác thử nghiệm.
- Hỗ trợ viết code giao diện hoặc boilerplate cho prototype.
- Rà soát câu hỏi dẫn dắt nhằm tránh định hướng hoặc gợi ý câu trả lời cho tester.

### 4.2. Phạm vi nghiêm cấm 🚫

- **Tuyệt đối không** tạo quote, quan sát (observation) hoặc phản hồi (feedback) giả mạo từ tester.
- Không dùng AI làm sạch hoặc chuẩn hoá evidence đến mức làm mất tính chân thực giữa lời nói thực tế của người dùng và nhận định chủ quan của nhóm.
- Không dùng AI để viết hộ phần **đóng góp cá nhân** và phần **reflection** sau buổi học.

### 4.3. Khai báo minh bạch

Mọi trường hợp có ứng dụng công cụ AI trong quá trình làm bài lab đều phải được ghi chú và giải trình rõ ràng theo quy định của môn học — dùng [Phụ lục A — AI Support Log](#phụ-lục-a--ai-support-log).

---

## 5. Đầu vào từ Day 17 (carry-over)

⚙️ Toàn bộ mục này lấy từ [Lab17 · Day17-Track1-H3201](/d:/Code/AITHUCCHIEN/Labs/Lab17/Day17-Track1-H3201). Đặt cạnh nhau trước khi bắt đầu Chặng 1.

- Hypothesis Problem của nhóm → §5.1
- Ba Practice Notes (một note từ mỗi thành viên) → §5.2
- Solution Parking Lot (6 hướng ≥ 5, có ≥ 1 hướng không dùng AI) → §5.3
- Conversation Guide → §5.4 (chỉ để tham khảo context; **Day 18 không tiếp tục problem interview**)

> ⚠️ Practice interview Day 17 **chưa đủ** để chứng minh pain đã được validated.

### 5.1. Hypothesis Problem ⚙️

```text
Khi tự học một phần nội dung khó trên VLearn một mình, learner thường mắc lại khá lâu nhưng xử lý
âm thầm — bằng workaround tốn thời gian hoặc bỏ qua phần đó — vì không ai ở vai trò hỗ trợ biết được
họ đang mắc ở đâu, và bản thân họ cũng không chủ động lên tiếng. Hậu quả là lỗ hổng kiến thức tích
luỹ và đà học giảm dần.
```

**Cấu trúc chuẩn (đối chiếu ở GATE 1):**

> Khi **[situation]**, **[user]** gặp khó khăn trong việc **[job]** vì **[barrier]**, dẫn đến **[consequence]**.

| Thành phần | Nội dung ⚙️ |
| ---------- | ----------- |
| Situation | Đang tự học một bài/slide khó trên VLearn vào buổi tối, một mình, không có ai ngồi cạnh |
| User | Learner tự học |
| Job | Hiểu đủ nội dung để học tiếp và làm bài tập/quiz đúng hạn |
| Barrier | Không ai ở vai trò hỗ trợ biết họ đang mắc ở đâu **và** bản thân họ cũng không chủ động lên tiếng |
| Consequence | Lỗ hổng kiến thức tích luỹ, đà học giảm dần |

**Hai cách giải thích cạnh tranh ĐÃ ĐIỀU TRA ở Day 17:**

| | Pain Hypothesis | Trạng thái sau Day 17 |
| --- | --- | --- |
| **A** | *Visibility gap* — learner mắc nhưng **không ai biết**, và learner cũng không chủ động nói | Có dấu hiệu yếu (PN1); bị **làm yếu** bởi PN2 |
| **B** | *Chi phí xã hội* — learner **biết** mình mắc và **biết** cách hỏi, nhưng chọn im lặng vì ngại | **Có evidence trực tiếp** ở PN3 |

### 5.2. Ba Practice Notes ⚙️

| # | Interviewer → Participant | Tín hiệu chính |
| - | ------------------------- | -------------- |
| PN1 | `Phan Duy Thanh` → `Lê Thanh Tình` (`2A202602449`) | Không xác định được slide/nội dung đang vướng → **không nói được mình kẹt ở đâu** |
| PN2 | `Bùi Hải Nam` → learner `2A202602872` (khoá 4 AI Thực Chiến) | Có **nhiều kênh hỗ trợ** và **chủ động dùng** (search, hỏi bạn, hỏi lab coach) |
| PN3 | `Chử Trần Phương Nam` → learner nữ (track chuyên sâu AI Thực Chiến) | **Ngại** nên không hỏi ai; ~10 phút/thuật ngữ; khi được hỏi trước thì **"Wow, được giải thoát rồi!"** |

> Có thêm một note ở dạng **template rỗng** (`notes_khanh.md` — chưa có cuộc phỏng vấn, không phải dữ liệu thật). Không dùng nó làm evidence.

### 5.3. Solution Parking Lot ⚙️

| # | Hướng giải quyết có thể có | AI? |
| - | -------------------------- | --- |
| 1 | **FAQ theo slide** do TA tổng hợp từ câu hỏi thật của các khoá trước, gắn ngay dưới slide | Không |
| 2 | **Checklist tự kiểm tra cuối bài** ("bạn có giải thích được khái niệm X bằng lời của mình không?") kèm đáp án nền ngắn | Không |
| 3 | **Peer pod hằng tuần**: 4–5 learner học cùng, có điều phối viên và khung giờ cố định | Không |
| 4 | **Mentor chủ động nhắn 1 câu hỏi mở** cho từng learner sau mỗi buổi ("chỗ nào hôm nay khó nhất?") — làm thủ công | Không |
| 5 | **Digest theo slide, không theo người**: thống kê tín hiệu đơn giản (slide bị xem lại nhiều nhất, tỉ lệ đổi đáp án) gửi mentor — **cảnh báo nội dung khó, không gắn cờ học viên** | AI |
| 6 | **Support Queue đúng như directive**: AI suy đoán **từng learner** đang kẹt ở đâu và xếp mức ưu tiên cho giảng viên | AI |

> **CHECKPOINT 1 (Day 17):** qua khi lần theo được đủ chuỗi Solution → Change → Actor → Situation & Job → Pain → Evidence; có hai cách giải thích cạnh tranh; và nói rõ điều gì có thể làm giả thuyết được chọn trở nên sai. ✅ Đã qua.

### 5.4. Conversation Guide — chỉ để tham khảo context ⚙️

Day 18 **không** tiếp tục problem interview. Không mang Big 3 Questions vào phiên test hôm nay — phiên test hôm nay là **prototype test**, không phải problem interview.

---

## 6. Chặng 1 — Tổng hợp evidence · 15 phút

### 1. Evidence huddle

Đặt ba Practice Notes cạnh nhau. Nếu dùng Evidence Pack, đọc các snippet như **ba nguồn riêng**; không biến chúng thành findings thật.

⚙️ Bảng dưới đã điền sẵn từ Day 17 — đọc lại, đối chiếu bản ghi gốc, sửa nếu thấy sai:

| Practice Note | User đã thực sự làm/nói gì? | Điều nhóm đang diễn giải |
| ------------- | --------------------------- | ------------------------ |
| **PN1** — Thành → Lê Thanh Tình | Làm đến một phần thì không hiểu nhưng **không xác định được nội dung trên slide**; gặp thuật ngữ tiếng Anh; *"Nói chung là em không tìm được cái nội dung ở đấy luôn."*; cảm giác **buồn**, **lo lắng** khi thấy mình tụt lại. Không kể workaround nào. | Learner có thể **khó chỉ ra chính xác điểm nghẽn** — nhưng đây mới là suy đoán từ một lần kể, chưa biết do cách trình bày, vốn từ hay nguyên nhân khác |
| **PN2** — Nam → learner `2A202602872` | Buổi học gần nhất **là hôm qua**; một số định nghĩa trong video/slide **chưa rõ**, đọc vẫn chưa hiểu; workaround: **tự search mạng, hỏi bạn xung quanh, hỏi lab coach**, tiếp tục tìm hiểu đến khi thấy ổn; *"Thường là mình tự đi chủ động đi tìm các anh lab coach... chứ các anh cũng không hỏi tình hình của mình mấy."* | Learner **có nhiều kênh hỗ trợ và chủ động dùng được** → làm yếu giả định "không ai biết mình đang kẹt". Chưa rõ các kênh đó có luôn hiệu quả không. |
| **PN3** — Nam (Chử Trần Phương Nam) → learner nữ, track chuyên sâu | Thuật ngữ chuyên sâu (ví dụ `RAG`) **không nhớ định nghĩa** nên phải dừng tra cứu; workaround: **hỏi AI trước → Google search** nếu AI chưa chuẩn; **~10 phút/thuật ngữ**; *"Mình nghĩ là không tại mình cũng hơi ngại"*; quiz **mật độ dày, tốc độ nhanh** thì *"ôi trời ơi không nhớ nó là gì luôn"*; khi được coach chủ động hỏi thăm: *"Wow, được giải thoát rồi!"* | **Pain B có evidence trực tiếp** (chi phí xã hội khi lên tiếng). Phản ứng tích cực khi được hỏi trước **chống lại** giả định "learner không muốn bị chú ý". |

**Thảo luận nhanh** ✍️ — trả lời bằng chữ của nhóm, không copy:

- **Situation / behavior / workaround nào xuất hiện nhiều hơn một lần?**
  → Cả ba note đều có mốc "buổi học gần nhất là hôm qua"; cả ba đều gặp **thuật ngữ / định nghĩa chưa rõ trong slide**; workaround lặp lại là **tự xoay** (search / hỏi AI / hỏi bạn).
- **Evidence nào mâu thuẫn hoặc làm nhóm bất ngờ?**
  → PN2 cho thấy learner **chủ động hỏi được** (làm yếu Pain A). PN3 cho thấy learner **ngại nên không hỏi dù kênh có sẵn** (ủng hộ Pain B), nhưng lại **rất nhẹ nhõm khi được hỏi trước** (chống lại "không muốn bị theo dõi"). Hai note này kéo về hai hướng khác nhau.
- **Điều gì vẫn chỉ là suy đoán của nhóm?**
  → Hậu quả học tập **cụ thể** (điểm, deadline, phải học lại) chưa ai kể; tần suất "mắc mà không ai biết" chưa đo được; "không xác định được chỗ vướng" là đặc điểm chung hay chỉ do cách kể ở một lượt.
- **Hypothesis Problem nào đủ cụ thể để dùng làm điểm xuất phát hôm nay?**
  → Bản ở §5.1. Giữ nguyên để A/B/C cùng giải một problem.

### 2. Chốt Hypothesis Problem

**Hypothesis Problem nhóm tiếp tục:** ⚙️

```text
Khi tự học một phần nội dung khó trên VLearn một mình, learner thường mắc lại khá lâu nhưng xử lý
âm thầm — bằng workaround tốn thời gian hoặc bỏ qua phần đó — vì không ai ở vai trò hỗ trợ biết được
họ đang mắc ở đâu, và bản thân họ cũng không chủ động lên tiếng. Hậu quả là lỗ hổng kiến thức tích
luỹ và đà học giảm dần.
```

**Evidence ban đầu hỗ trợ giả thuyết:** ⚙️

```text
- Cả ba lượt đều kể được một sự kiện cụ thể trong tuần ("hôm qua"), không phải "thường thì mình hay bị".
- Cả ba đều gặp barrier tại đúng một loại nội dung: thuật ngữ / định nghĩa chưa rõ trong slide.
- Có workaround lặp lại và tốn thời gian (PN3: ~10 phút cho một thuật ngữ).
- Có consequence: PN1 (buồn, lo lắng, thấy tụt lại), PN3 (quiz nhanh thì không kịp nhớ).
- PN3 nói thẳng barrier "ngại" → tức đã biết mình mắc mà vẫn không lên tiếng.
```

**Điều vẫn chưa được chứng minh:** ⚙️

```text
- Pain A (visibility gap) chưa có evidence đủ mạnh; PN2 còn đi ngược lại.
- Chưa có hậu quả học tập định lượng được (điểm, deadline, học lại).
- Chưa biết tần suất "mắc mà không ai biết" trên nhiều learner.
- Ba feedback chỉ từ ba người, phần lớn là learner trong cùng môi trường AI Thực Chiến.
```

> 🧪 **Nháp đề xuất:** nhóm có thể giữ nguyên câu chữ §5.1 nhưng ghi rõ trong README rằng **trọng số điều tra đã dịch từ A sang B** — tức barrier "ngại/không chủ động lên tiếng" là barrier được evidence ủng hộ hơn, còn "không ai biết" là barrier nền. Nhóm tự quyết định có sửa câu chữ hay không; nếu sửa, **sửa ở cả ba option như nhau**.

**GATE 1 — Evidence continuity** ✅

> Nhóm qua gate khi Hypothesis Problem có đủ **user, situation, job, barrier và consequence**; đồng thời chỉ ra được **ít nhất một observation Day 17** và **một điều vẫn chưa biết**.

---

## 7. Chặng 2 — Chọn ba Solution Options · 20 phút

### 1. Mở lại Solution Parking Lot

Đọc lại §5.3. **Không cần nghĩ thêm quota ý tưởng mới.** Chỉ bổ sung một hướng khi pool hiện tại:

- [ ] toàn là cùng một cơ chế;
- [ ] chỉ thay UI hoặc wording;
- [ ] không có hướng **user-led / no-inference** hoặc **human escalation** khi context cần;
- [ ] không tạo được ba options cùng giải một task.

> Day 16 chỉ được dùng như một **prompt**, không phải deliverable:
> *"Có nguyên lý nào từ sản phẩm đã teardown giúp nhóm nghĩ ra một cơ chế khác? Nhóm đang **adapt nguyên lý nào**, thay vì copy feature nào?"*

### 2. Chọn ba cách giải

Ba options cùng xuất phát từ **một** Hypothesis Problem nhưng đại diện cho **ba solution hypothesis khác nhau**.

#### Những thứ phải giữ nguyên ⚙️

| Thành phần | Quyết định chung cho A/B/C |
| ---------- | --------------------------- |
| **Target user** | Learner tự học trên VLearn vào buổi tối, một mình, không có ai ngồi cạnh |
| **Situation** | Đang tự học một bài/slide khó; gặp thuật ngữ / định nghĩa chưa rõ; không có ai hỗ trợ trực tiếp |
| **Task** | Hiểu đủ nội dung để học tiếp và làm quiz/bài tập đúng hạn |
| **Desired outcome** | Gỡ được chỗ vướng ngay trong lúc còn đang học, không dồn nợ kiến thức |
| **Content/data fixture** | Cùng một deck VLearn rút gọn (~10–12 slide) · cùng một thuật ngữ gây vướng (ví dụ `RAG`) · cùng bộ tín hiệu hành vi giả lập (điều hướng slide, dừng lâu, đánh dấu "Chưa hiểu", đổi đáp án quiz, đoạn chat với AI Chat) · cùng một persona learner |

#### Những thứ được phép khác

| Thành phần | Option A | Option B | Option C |
| ---------- | -------- | -------- | -------- |
| **Solution mechanism** ✍️ | | | |
| **User làm gì?** ✍️ | | | |
| **AI làm gì?** ✍️ | | | |
| **Trigger** ✍️ | | | |
| **Trade-off chính** ✍️ | | | |

> 🧪 **Bản nháp khoanh vùng 3 option** (AI hỗ trợ soạn từ Parking Lot — nhóm tự review và chốt, đây **chưa** phải quyết định):
>
> | | Option A | Option B | Option C |
> | --- | --- | --- | --- |
> | Nguồn từ Parking Lot | #2 (checklist tự kiểm tra) + tín hiệu "đánh dấu Chưa hiểu" | #5 (digest theo slide, không theo người) | #6 (Support Queue đúng directive) |
> | Mechanism | Learner **tự khai** mình kẹt ở đâu; AI chỉ **tổng hợp cái learner đã tự nói**, không suy đoán | AI **phát hiện nội dung khó ở cấp slide** (không gắn cờ ai); learner **quyết định** có nêu tên mình để được hỗ trợ hay không | AI **suy đoán từng learner** đang kẹt ở đâu, xếp ưu tiên và đề xuất hành động; người hỗ trợ **review & quyết định** |
> | User làm gì | Chủ động đánh dấu / tự kiểm tra | Đọc cảnh báo nội dung khó, chọn "cần người hỗ trợ" | Chỉ **nhận** thông báo; quyết định có phản hồi hay không |
> | AI làm gì | Không suy đoán; chỉ gom và hiển thị lại | Suy đoán ở **cấp nội dung**, không ở cấp người | Suy đoán ở **cấp người** + xếp hạng ưu tiên |
> | Trigger | Learner bấm/đánh dấu trong lúc học | Hết slide / hết phiên học | Hết phiên học |
> | Trade-off chính | An toàn, learner giữ toàn quyền — nhưng **chỉ chạy khi learner đã biết mình kẹt ở đâu** (đúng barrier PN1 lại chưa được giải) | Giảm cảm giác bị theo dõi — nhưng **vẫn cần learner tự lên tiếng**, nên Pain B chưa được giải | Giải được barrier "không ai biết" — nhưng chạm thẳng vào Pain B (ngại) và rủi ro riêng tư / AI gắn cờ sai |

#### Distance check ✍️

Hoàn thành ba câu **không nhắc màu, layout hoặc wording**:

- **A khác B vì:** `...`
- **B khác C vì:** `...`
- **A khác C vì:** `...`

> 🧪 Nháp gợi ý để nhóm đối chiếu (phải tự viết lại bằng lời của nhóm):
>
> - A khác B vì A để **user khởi tạo** và AI không suy đoán gì, còn B để **AI suy đoán ở cấp nội dung** rồi user quyết định có lộ diện không.
> - B khác C vì B **không bao giờ định danh học viên**, còn C để AI **tạo nhận định về từng con người** rồi người hỗ trợ review.
> - A khác C vì A **đảo ngược điểm khởi tạo** (learner tự nói ra trước), C là **AI khởi tạo rồi người review**.

Spectrum tham chiếu (không bắt buộc mọi case phải dùng đúng spectrum này; **không cố tình làm một option tệ để hai option còn lại thắng**):

```text
USER CREATES / INITIATES          ← Option A
       ↓
USER + AI CO-CREATE               ← Option B
       ↓
AI CREATES / INITIATES, USER REVIEWS  ← Option C
```

**GATE 2 — Meaningful options** ✅

> Ba options **cùng user, situation, task và desired outcome**; khác nhau có ý nghĩa ở **mechanism** hoặc **cách phân chia công việc và quyền quyết định giữa user với AI**.

---

## 8. Chặng 3 — Human–AI Design pass · 30 phút

Chỉ review **critical interaction** cần test. Không thiết kế toàn bộ product và **không thêm một màn hình cho mỗi tiêu chí**.

### 1. Bốn quyết định thiết kế

**Expectation**
- Trước khi AI hoạt động, user có hiểu AI sắp làm gì không?
- Capability và limit nào cần nói rõ?

**Role and Agency**
- User làm phần nào? AI làm phần nào?
- AI **Act, Ask hay Don't Act** tại critical moment?
- Nếu AI sai, user mất gì và sai có dễ phát hiện không?

**Evidence and Uncertainty**
- User cần biết AI dựa vào tín hiệu hoặc dữ liệu nào?
- Nếu AI không chắc, hệ thống thể hiện ra sao?

**Control and Recovery**
- User preview, edit, reject, stop, undo hoặc dismiss ở đâu?
- Sau khi AI sai, user tiếp tục task ban đầu bằng đường nào?

### 2. Human–AI Decision Table

| Human–AI decision | Option A | Option B | Option C |
| ----------------- | -------- | -------- | -------- |
| **User làm gì? AI làm gì?** | ✍️ | ✍️ | ✍️ |
| **AI Act / Ask / Don't Act? Vì sao?** | ✍️ | ✍️ | ✍️ |
| **User hiểu capability/limit bằng gì?** | ✍️ | ✍️ | ✍️ |
| **Evidence/uncertainty được thể hiện thế nào?** | ✍️ | ✍️ | ✍️ |
| **User kiểm soát và recovery thế nào?** | ✍️ | ✍️ | ✍️ |

> 🧪 **Nháp đề xuất cho 2 dòng nhạy cảm nhất** (nhóm tự chốt và tự bổ sung 3 dòng còn lại):
>
> | | A | B | C |
> | --- | --- | --- | --- |
> | AI Act/Ask/Don't Act | **Don't Act** — AI không suy đoán, chỉ ghi lại điều learner tự khai | **Ask** — AI nêu "slide này nhiều người xem lại", rồi **hỏi** learner có muốn được hỗ trợ | **Act** — AI chủ động tạo Support Queue; hậu quả khi sai là *gắn cờ sai người* nên bắt buộc có bước **human review** trước khi ai bị liên hệ |
> | Control & recovery | Learner tự sửa/xoá đánh dấu; không có gì để "undo" | Learner **không chọn nêu tên** = mặc định ở lại ẩn danh; có nút dismiss cảnh báo | Người hỗ trợ **reject** một mục trong queue và ghi lý do; learner có nút "không muốn nhận hỗ trợ" để tắt |
>
> ⚠️ **Neo vào evidence:** PN3 nói learner **ngại** lên tiếng → A và B đều **dựa vào việc learner lên tiếng**, nên phải nói rõ lý do vì sao cơ chế mới làm việc đó dễ hơn. PN3 cũng nói learner **rất nhẹ nhõm khi được hỏi trước** → đó là evidence **ủng hộ** hướng chủ động, miễn là có đường thoát.

### 3. Feedback and data check — khi liên quan

Coach có thể yêu cầu nhóm bổ sung nếu option dùng **dữ liệu nhạy cảm** hoặc **học từ feedback**. Option C dùng tín hiệu hành vi học tập gắn với từng cá nhân, nên trả lời trước:

- Feedback có ảnh hưởng **phiên hiện tại**, **lần sau**, hay **không được ghi nhớ**?
- Dữ liệu nào được dùng và user có cách **rút quyền** không?

**GATE 3 — Human control** ✅

> Mỗi option nói rõ **user và AI làm gì**, **agency phù hợp với hậu quả khi sai**, và **user có một đường kiểm soát hoặc phục hồi**.

---

## 9. Chặng 4 — Build ba micro-prototype · 80 phút

### 1. Scope chuẩn

Mỗi option chỉ cần **2–3 màn hình hoặc trạng thái**:

```text
COMMON CONTEXT
      ↓
CRITICAL INTERACTION
      ↓
RESULT / USER DECISION
```

Cả ba options dùng chung khoảng **70%**:

- Context screen;
- Content/data fixture;
- Component và visual style;
- Task và desired outcome.

**Chỉ critical interaction cần khác rõ.**

### 2. Definition of testable

Prototype sẵn sàng khi:

- [ ] Tester có thể **tự mở và thao tác** A/B/C.
- [ ] Cả ba bắt đầu từ **cùng một context và task**.
- [ ] Option **không cần facilitator narrate** để hiểu.
- [ ] Nội dung **đủ thật** để tester ra quyết định.
- [ ] Mỗi option thể hiện được **điểm user lấy lại control**.
- [ ] Có **đường reset** về common context.

**Được dùng:**

- Figma, Framer hoặc công cụ tương đương.
- HTML/CSS/JavaScript.
- Prototype giấy có flow rõ.
- **Canned AI output.**
- Wizard of Oz — miễn người mô phỏng AI **không giải thích giao diện hộ tester**.

**Không cần:**

- Model hoặc API thật.
- Full onboarding hoặc dashboard.
- Responsive cho nhiều thiết bị.
- Visual polish hoàn chỉnh.
- Một failure catalog đầy đủ.

### 3. Build order

| Phút | Việc cần làm | Ai |
| ---- | ------------ | -- |
| **0–10** | Vẽ common context, task và content fixture dùng cho cả ba | Cả nhóm |
| **10–55** | Mỗi thành viên build một option bằng shared components | Mỗi người 1 option |
| **55–65** | Thêm control/recovery và evidence/uncertainty cần thiết | Cả nhóm |
| **65–75** | Mỗi thành viên tự test option do người khác build | Đổi chéo |
| **75–80** | Chuẩn hoá A/B/C, kiểm link và reset path | Cả nhóm |

### 4. Prototype annotation

Đặt annotation **ngoài frame**, **không hiện cho tester**:

```text
OPTION ___
We expect the tester to: ______________________________________
Watch for: ____________________________________________________
Do not explain: _______________________________________________
```

**GATE 4 — Test-ready** ✅

> Một người **không build** có thể mở, thực hiện cùng task qua A/B/C và quay về context ban đầu **mà không cần người khác giải thích**.

---

## 10. Chặng 5 — Chuẩn bị test · 15 phút

### 1. Chốt context và task

**Relevant context** — một câu hỏi, **tối đa 2 phút** trong lúc test:

> "Gần đây bạn có từng ................................................................................................ không?"

Nếu tester chưa từng có context liên quan, vẫn có thể dùng họ để tìm **interaction breakdown**, nhưng **không đưa ra value claim mạnh**.

Gợi ý neo vào case (nhóm tự viết lại bằng lời của mình): *"Gần đây bạn có từng đang tự học slide/bài trên VLearn mà gặp một thuật ngữ hoặc đoạn không hiểu, phải dừng lại xử lý một mình không?"*

**Outcome task** — task nói **kết quả cần đạt**, **không nói nút cần bấm**:

> "Trong tình huống này, hãy dùng từng phương án để ........................................................................"

### 2. Observation focus

Chọn **tối đa năm** thứ:

- [ ] first action;
- [ ] hesitation;
- [ ] evidence read / ignored;
- [ ] misunderstanding;
- [ ] help needed;
- [ ] correction / recovery;
- [ ] option được chọn và trade-off.

### 3. Luật facilitation

1. Tester **tự điều khiển** prototype.
2. Dùng **cùng một task** cho A/B/C.
3. **Không narrate** hoặc giải thích icon.
4. **Không lấp im lặng.**
5. **Không hỏi "Bạn có thích không?"**
6. Khi tester hỏi cách hoạt động, hỏi lại: *"Theo bạn, nó nên hoạt động như thế nào?"*

**Ba câu cứu hộ:**

- "Bạn cứ nói to suy nghĩ của mình nhé."
- "Bạn sẽ làm gì tiếp theo?"
- "Theo bạn, nó nên hoạt động như thế nào?"

---

## 11. Chặng 6 — Test với ba người · 20 phút cuối hoặc ngoài giờ

### 1. Trách nhiệm cá nhân

- **Thành viên 1** test cả A/B/C với **Tester 1**.
- **Thành viên 2** test cả A/B/C với **Tester 2**.
- **Thành viên 3** test cả A/B/C với **Tester 3**.
- Ba tester phải là **ba người khác nhóm**; ưu tiên người có **relevant context** với case.
- Có thể chạy song song nếu coach đã chuẩn bị tester. Nếu không đủ người hoặc không đủ 20 phút, **hoàn tất ngoài giờ trước khi nộp**.
- Người phụ trách Option A **vẫn phải test cả A/B/C**; tương tự với B và C.

### 2. Timeline 20 phút

| Thời gian | Hoạt động |
| --------- | --------- |
| **0–2 phút** | Make comfortable + hỏi relevant context ngắn |
| **2–14 phút** | Tester dùng A/B/C, khoảng **4 phút mỗi option** |
| **14–18 phút** | So sánh option, lý do và trade-off |
| **18–20 phút** | Hoàn thành Feedback Note cá nhân |

**Opening:**

> "Chúng mình đang thử ba cách thiết kế, **không kiểm tra bạn**. Không có câu trả lời đúng hoặc sai. Bạn hãy tự thao tác và nói to điều mình đang nghĩ; mình sẽ cố gắng không hướng dẫn."

**Compare:**

- "Trong tình huống này, bạn chọn A, B hay C? Vì sao?"
- "Bạn muốn tự làm phần nào và giao cho AI phần nào?"
- "Điều gì ở phương án đã chọn khiến bạn chưa thoải mái?"

### 3. Prototype Feedback Note — mỗi thành viên hoàn thành một bản 🚫

> 🚫 Không dùng AI để tạo hoặc làm đẹp phần này. Điền sau khi vừa test xong, khi ký ức còn tươi.

**Tester/context:** ........................................................................................................

| Observation | Note |
| ----------- | ---- |
| **First action** | |
| **Chỗ dừng, do dự hoặc hiểu sai** | |
| **Evidence được đọc hay bỏ qua** | |
| **Cách tester sửa hoặc lấy lại control** | |
| **Option được chọn** | A / B / C |
| **Lý do và trade-off** | |
| **Evidence chống lại kỳ vọng của nhóm** | |

**Tách bốn lớp:**

- **OBSERVED:** Tester đã làm hoặc nói gì?
- **INTERPRETED:** Nhóm nghĩ điều đó có thể có nghĩa gì?
- **DECIDED — NEXT CHANGE:** Nhóm sẽ sửa, kết hợp hoặc test gì tiếp?
- **STILL UNPROVEN:** Điều gì chưa thể kết luận từ một người?

**Next Change có thể là:**

- Giữ một option và **sửa interaction**.
- **Kết hợp hai options** nhưng giữ một cơ chế chính rõ ràng.
- **Bỏ một option** vì tester không hiểu hoặc nó không tạo khác biệt.
- **Sửa cả ba** rồi test người tiếp theo.

### 4. Group Feedback Synthesis — sau khi có đủ ba bản

| Nội dung | Feedback 1 | Feedback 2 | Feedback 3 | Pattern hoặc khác biệt |
| -------- | ---------- | ---------- | ---------- | ---------------------- |
| **First action** | | | | |
| **Breakdown chính** | | | | |
| **Cách lấy lại control** | | | | |
| **Option được chọn** | | | | |
| **Trade-off** | | | | |

**Một Next Change nhóm chốt:** ✍️
```text
...
```

**Evidence nào dẫn tới quyết định này:** ✍️
```text
...
```

**Still Unproven sau ba feedback:** ✍️
```text
...
```

**GATE 5 — Learning, not praise** ✅

> Nhóm có **ba Feedback Notes độc lập**, nêu được **pattern hoặc khác biệt** giữa ba người, chốt **một Next Change** và **một điều vẫn chưa được chứng minh**.
> *"Ba tester thích B"* **không đủ** nếu không có hành vi và trade-off đi kèm.

### 5. Sau lớp — hoàn tất test nếu cần

- Nếu 20 phút cuối chưa đủ để cả ba thành viên hoàn thành phiên riêng, mỗi người **tự hẹn một tester** và bổ sung Feedback Note trước deadline.
- **Không** bắt transcript hoặc report dài.
- **Không** dùng ba feedback để áp dụng threshold thống kê hoặc tuyên bố product value đã validated.

---

## 12. Kết luận được phép / không được phép

**Được phép kết luận:**

> "Với **Hypothesis Problem này**, chúng tôi đã thử **ba cách giải**. Tester đã **làm…**, vì vậy **iteration tiếp theo** chúng tôi sẽ **…**"

**Không được phép kết luận:**

> ~~"User đã xác nhận solution này đúng."~~

---

## 13. Nộp bài

### 13.1. Cấu trúc repo

```text
Lab18/
├── README.md                     # file này — đề bài + cách làm + kết quả
├── shared/                       # ~70% dùng chung: context screen, fixture, components
├── options/
│   ├── option-a/                 # user-led / no-inference
│   ├── option-b/                 # user + AI co-create
│   └── option-c/                 # AI initiate, human review
├── test/
│   ├── test-prompt.md            # relevant context + outcome task
│   ├── observation-focus.md      # tối đa 5 mục
│   └── feedback-notes/
│       ├── feedback-note-1.md    # mỗi thành viên tự viết 1 bản 🚫
│       ├── feedback-note-2.md
│       └── feedback-note-3.md
├── synthesis/
│   └── group-next-change.md      # pattern + 1 Next Change + Still Unproven
├── ai-support-log.md             # khai báo mọi cách dùng AI
└── contribution.md               # đóng góp cá nhân vào sản phẩm chung 🚫
```

### 13.2. Checklist trước khi nộp

- [ ] Hypothesis Problem giữ đúng case Day 17, có đủ user/situation/job/barrier/consequence (GATE 1)
- [ ] Ba options nêu rõ mechanism khác nhau, cùng một problem (GATE 2)
- [ ] Distance check hoàn thành **không** nhắc màu/layout/wording
- [ ] Mỗi option có Human–AI Decision Table với Act/Ask/Don't Act và đường control/recovery (GATE 3)
- [ ] Cả ba prototype mở được, cùng context, có reset path, không cần narrate (GATE 4)
- [ ] Test prompt dùng cùng một task cho A/B/C; observation focus ≤ 5 mục
- [ ] Ba Feedback Notes độc lập, tách rõ OBSERVED / INTERPRETED / DECIDED / STILL UNPROVEN (GATE 5)
- [ ] Có **1 Group Next Change** + **1 điều Still Unproven**
- [ ] Không có dòng nào tuyên bố "validated"
- [ ] Đã khai báo đầy đủ việc dùng AI (Phụ lục A)
- [ ] Đã ghi rõ phần đóng góp cá nhân của mình

### 13.3. Năm gate đánh giá

| Gate | Nội dung | Trạng thái |
| ---- | -------- | ---------- |
| **GATE 1** | Evidence continuity — Hypothesis Problem đủ 5 thành phần + ≥1 observation Day 17 + ≥1 điều chưa biết | ⬜ |
| **GATE 2** | Meaningful options — cùng user/situation/task/outcome, khác mechanism hoặc phân chia quyền | ⬜ |
| **GATE 3** | Human control — rõ user/AI làm gì, agency phù hợp hậu quả, có đường kiểm soát/phục hồi | ⬜ |
| **GATE 4** | Test-ready — người ngoài mở được, làm cùng task, quay về context, không cần giải thích | ⬜ |
| **GATE 5** | Learning, not praise — 3 feedback độc lập, có pattern, 1 Next Change, 1 Still Unproven | ⬜ |

---

## Phụ lục A — AI Support Log

> Mọi cách dùng AI phải được khai báo. AI **không** được dùng để tạo quote, observation hoặc feedback không tồn tại, và **không** được viết thay phần đóng góp / reflection cá nhân.

| # | Dùng AI ở đâu | AI đã giúp gì | Điểm sai hoặc hời hợt của AI | Nhóm đã tự sửa thế nào |
| - | ------------- | ------------- | ---------------------------- | ---------------------- |
| 1 | Soạn file README này (tổng hợp đề bài + carry-over Day 17) | Cấu trúc hoá toàn bộ đề bài Lab 18 thành 6 chặng + gate; bê nguyên Hypothesis Problem, 3 Practice Notes và Parking Lot từ Lab 17 vào | AI có xu hướng **điền sẵn** cả những phần nhóm phải tự làm (bảng Comparison Contract, Human–AI Decision Table) và trình bày như thể đã chốt | Các phần đó được đánh dấu 🧪 **nháp đề xuất**; các phần reflection/feedback/contribution đánh dấu 🚫; nhóm phải tự review và tự chốt |
| 2 | 🧪 Nháp 3 option A/B/C từ Parking Lot | Gợi ý cách map 6 hướng park thành 3 mechanism dọc theo spectrum user-led → co-create → AI-initiate | AI chọn hướng theo "đẹp spectrum" chứ chưa chắc theo evidence; có thể tạo ra một option nghe hợp lý nhưng không giải barrier đã thấy | Nhóm phải tự đối chiếu từng option với PN1/PN2/PN3 ở Chặng 2 và tự viết lại Distance Check bằng lời của nhóm |
| 3 | `[CẦN TỰ ĐIỀN NẾU CÓ]` | | | |

**Kết luận về mức độ tin cậy của phần có AI hỗ trợ:**

```text
AI chỉ được dùng để cấu trúc đề bài, gợi ý cơ chế và sinh dữ liệu mẫu. AI KHÔNG được dùng để tạo
interview data, bịa quote, suy diễn chi tiết tester chưa nói, hoặc viết thay phần đóng góp / reflection.
Mọi nội dung gắn nhãn 🧪 là nháp và phải được nhóm tự rà lại, tự chịu trách nhiệm.
```

---

## Phụ lục B — Đóng góp cá nhân 🚫

> 🚫 Phần này **phải do cá nhân tự viết**, không dùng AI.

| Mục | Nội dung |
| --- | -------- |
| Option tôi phụ trách chính | `A / B / C` |
| Phần tôi build | `...` |
| Tester tôi đã test | `...` (ngoài nhóm, có relevant context: Có / Không) |
| Feedback Note tôi ghi | `test/feedback-notes/feedback-note-___.md` |
| Phần tôi đóng góp vào sản phẩm chung ngoài option của mình | `...` |
| Reflection cá nhân | `...` |

---

## Phụ lục C — Thuật ngữ

| Thuật ngữ | Nghĩa trong bài này |
| --------- | ------------------- |
| **Hypothesis Problem** | Phát biểu problem dạng giả thuyết, chưa phải fact: *Khi [situation], [user] gặp khó khăn trong việc [job] vì [barrier], dẫn đến [consequence]* |
| **Solution mechanism** | Cách giải hoạt động như thế nào (ai làm gì, trigger là gì), không phải giao diện trông ra sao |
| **Critical interaction** | Khoảnh khắc tương tác quyết định giữa user và AI — chỗ duy nhất A/B/C cần khác rõ |
| **Common context** | ~70% dùng chung giữa A/B/C: bối cảnh, dữ liệu, component, task, outcome |
| **Act / Ask / Don't Act** | Lựa chọn agency của AI tại critical moment: tự làm, hỏi trước, hay không can thiệp |
| **Canned AI output** | Output AI được soạn sẵn để nhét vào prototype, không cần model thật |
| **Wizard of Oz** | Người mô phỏng AI thật ở sau; không được giải thích giao diện hộ tester |
| **Next Change** | Thay đổi cụ thể nhóm sẽ làm ở iteration tiếp theo, dựa trên behavior + trade-off quan sát được |
