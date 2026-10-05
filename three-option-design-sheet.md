# Three-Option Design Sheet — Case C · AI Support Radar (VLearn)

> **Nhóm:** H3201 (4 thành viên, giảng viên đã đồng ý) · **Track 1** · **Case C — AI Support Radar**
> Nhãn: ⚙️ lấy từ Day 17 · ✍️ nhóm phải xác nhận/chọn · 🧪 bản nháp do AI soạn từ evidence Day 17, **nhóm phải tự đọc lại và chốt** · 🚫 cấm dùng AI
>
> File này là đầu ra của **Chặng 1 → Chặng 3** (GATE 1, GATE 2, GATE 3).
> **Trạng thái: ☑ Draft — chờ nhóm review · ☐ Đã review nhóm · ☐ Đã chốt**

---

## 0. Thông tin chung

| Mục | Nội dung |
| --- | --- |
| Hypothesis Problem (tên ngắn) | 🧪 Kẹt ở thuật ngữ khi xem lại slide, tự tra rời rạc, một số người ngại hỏi |
| Người điều phối điền file | ✍️ Bùi Hải Nam *(đã điều phối Chặng 1–2 ở Day 17 — nhóm xác nhận)* |
| Ngày chốt | ✍️ |

**Phân công phụ trách chính — 🧪 đề xuất, nhóm tự chốt:**

| # | MHV | Họ và tên | Option phụ trách chính | Việc dùng chung |
| - | --- | --------- | ---------------------- | --------------- |
| 1 | `2A202602636` | Bùi Hải Nam | **C** (chính) | Điều phối Chặng 1–3 |
| 2 | `2A202602675` | Chử Trần Phương Nam | **B** | Soạn canned output của AI (lời giải thích RAG) & kịch bản escalation |
| 3 | `2A202602585` | Phùng Gia Khánh | **C** (người thứ hai cùng phụ trách) | `prototype/` dùng chung: slide, quiz, nút reset |
| 4 | `2A202602930` | Phan Duy Thanh | **A** | Soạn canned reply của coach; chốt link/QA |

> 4 người, 3 option → **Option C do 2 người cùng phụ trách** (Nam chịu trách nhiệm chính, Khánh hỗ trợ). Lý do chọn C: option này phức tạp nhất (trigger + gợi ý + xem trước thẻ gửi coach). Nhóm có thể đổi.

---

## 1. Hypothesis Problem — GATE 1

### 1.1. Sửa lại so với README nhóm (errata) 🧪

Khi đối chiếu README nhóm với 4 file note gốc, mình thấy 5 chỗ nên sửa trước khi chốt:

| # | README nhóm đang viết | Đối chiếu với note gốc | Sửa thành |
| - | --------------------- | ---------------------- | --------- |
| 1 | "Cả **ba** note đều có mốc *buổi học gần nhất là hôm qua*" | PN1 ("chiều hôm qua") và PN2 ("buổi hôm qua") có. **PN3 (learner của Phương Nam) không nói mốc ngày** | "PN1 và PN2 kể được một buổi học hôm qua; PN3 kể chung về thói quen đọc slide và recap ở nhà" |
| 2 | Situation: "buổi tối, một mình, không có ai ngồi cạnh" | **Không note nào nói "buổi tối" hay "một mình".** PN3 nói đọc slide ở lớp *và* recap ở nhà | "Đang đọc hoặc xem lại slide" (bỏ "buổi tối, một mình") |
| 3 | Barrier: "không ai biết họ đang mắc ở đâu **và** bản thân họ cũng không chủ động lên tiếng" | PN2: learner **chủ động** tìm coach/bạn → mâu thuẫn. PN3: ngại nên không hỏi. Hai learner khác nhau ở đúng điểm này | Tách barrier thành 3 thứ có evidence riêng (xem 1.2) |
| 4 | Phản ứng "Wow, được giải thoát rồi!" được dùng để "chống lại giả định learner không muốn bị chú ý" | PN3 nói câu này về lúc **giảng viên ở lớp code đến hỏi trực tiếp**. Chưa có evidence nào về phản ứng khi **AI** phát hiện và báo | Ghi rõ là *Still Unproven*: chưa biết learner chấp nhận bị AI phát hiện hay không |
| 5 | File `notes_phuongnam.md` | Đây là note của **Bùi Hải Nam** (phỏng vấn Vũ Quang Tiến), không phải của Phương Nam | Đổi tên thành `notes_buihainam.md` |

Ngoài ra: `notes_khanh.md` (Khánh → Lê Anh Duy) vẫn là template, chỉ có vài dòng thật (ở Lạng Sơn, học Khoa học máy tính, muốn học tốt AI thực chiến, nghe giảng đầy đủ trên lớp; phiên 3 phút). **Chưa dùng làm evidence.** Khánh nên nghe lại bản ghi và điền nốt, hoặc ghi rõ "phiên quá ngắn, không đủ evidence".

### 1.2. Hypothesis Problem 🧪 *(bản đề xuất — nhóm so với bản Day 17 và chọn)*

> Khi **đọc hoặc xem lại slide của track chuyên sâu và gặp một thuật ngữ/định nghĩa chưa hiểu**, **learner** gặp khó khăn trong việc **hiểu đủ để học tiếp và làm quiz** vì **phải tự tra qua nhiều kênh rời rạc, không gắn với đúng chỗ trên slide; một số người ngại hỏi; và người hỗ trợ không biết họ đang kẹt**, dẫn đến **mất thời gian cho mỗi thuật ngữ, lúng túng khi làm quiz và lo lắng vì thấy mình tụt lại**.

| Thành phần | Nội dung | Evidence |
| --- | --- | --- |
| **User** | Learner đang học track chuyên sâu (AI Thực Chiến) | PN1, PN2, PN3 đều là learner của khóa |
| **Situation** | Đọc hoặc xem lại slide/video và gặp thuật ngữ, định nghĩa chưa rõ | PN1 "thuật ngữ tiếng Anh"; PN2 "định nghĩa chưa được làm rõ"; PN3 "RAG" |
| **Job-to-be-done** | Hiểu đủ để học tiếp và làm được quiz | PN3: vừa recap ở nhà vừa phải làm quiz |
| **Barrier 1 — tra cứu rời rạc** | Phải xoay qua AI, Google, bạn, coach; không gắn với chỗ trên slide | PN2: search / hỏi bạn / hỏi lab coach. PN3: hỏi AI → Google. PN1: "không tìm được cái nội dung ở đấy luôn" |
| **Barrier 2 — ngại hỏi** *(chỉ có ở một số người)* | Biết cách hỏi nhưng không hỏi | PN3: "Mình nghĩ là không tại mình cũng hơi ngại". **PN2 ngược lại: chủ động đi tìm coach** |
| **Barrier 3 — người hỗ trợ không biết** | Coach không chủ động hỏi tình hình | PN2: "các anh cũng không hỏi tình hình của mình mấy". PN3: coach lớp code *có* hỏi thăm → khác nhau giữa các lớp |
| **Consequence** | Tốn thời gian, lúng túng ở quiz, lo lắng | PN3: ~10 phút/thuật ngữ, quiz "ôi trời ơi không nhớ nó là gì luôn". PN1: "buồn", "lo lắng" khi tụt lại |

**Evidence neo vào (3 Practice Notes Day 17):**

| # | Practice Note | Observation / quote gốc ⚙️ | Chống lưng cho barrier nào |
| - | ------------- | --------------------------- | -------------------------- |
| PN1 | Thành → Lê Thanh Tình | "Nói chung là em không tìm được cái nội dung ở đấy luôn." · "Nó sẽ gặp những các thuật ngữ tiếng Anh." · "Thấy buồn ạ." / "Thấy lo lắng." | Barrier 1 (không định vị được chỗ kẹt); Consequence (cảm xúc) |
| PN2 | Nam → Vũ Quang Tiến | "Khi đấy thì mình tự lên mạng… search thôi, hoặc mình hỏi những cái bạn xung quanh, hoặc là hỏi anh lab coach." · "…chứ các anh cũng… không hỏi tình hình của mình mấy." | Barrier 1 (kênh rời rạc); Barrier 3; **làm yếu Barrier 2** |
| PN3 | Phương Nam → learner nữ | "Mình nghĩ là không tại mình cũng hơi ngại." · "…mất khoảng 10 phút để tra cứu thêm một thuật ngữ." · "ôi trời ơi không nhớ nó là gì luôn." · "Wow, được giải thoát rồi!" (khi coach lớp code hỏi thăm) | Barrier 1; Barrier 2; Consequence |

**Điều nhóm vẫn CHƯA BIẾT (bắt buộc ≥ 1):**

1. Learner phản ứng thế nào khi **AI** (không phải người) phát hiện họ kẹt và gợi ý/báo — chưa note nào hỏi tới việc này, và "được giải thoát" là phản ứng với **con người**.
2. Ngại hỏi là chung hay chỉ ở một số người (PN2 và PN3 đi hai hướng).
3. Hậu quả học tập thật (điểm quiz, deadline) — mới có cảm nhận, chưa có số.
4. Toàn bộ phía instructor/coach (Day 17 chỉ phỏng vấn learner).

> ✍️ Nếu nhóm giữ nguyên câu Day 17 thì vẫn phải ghi errata ở 1.1, và phải áp dụng **giống nhau** cho cả A/B/C.

---

## 2. Ba Solution Options — GATE 2

### 2.1. Comparison Contract — giống hệt nhau ở cả 3 option

| Trường | Giá trị dùng chung cho A/B/C |
| --- | --- |
| User | **Learner** (cả ba option đều lấy learner làm người dùng chính; coach chỉ xuất hiện ở màn kết quả) |
| Situation | Đang xem lại slide 6 "RAG — Retrieval-Augmented Generation" trước khi làm quiz, chưa hiểu thuật ngữ |
| Task tester phải làm | Đến lúc tự tin trả lời 1 câu quiz về RAG nằm ngay dưới slide |
| Outcome kỳ vọng | Gỡ được chỗ vướng ngay trong lúc học, hoặc chuyển được câu hỏi tới đúng người |
| Fixture | Cùng mini-deck 3 slide (5–7), cùng câu quiz, cùng lời giải thích RAG, cùng câu trả lời của coach *(synthetic, do nhóm soạn — xem `ai-support-log.md`)* |

> **Vì sao sửa bản nháp trong README nhóm?** Bản nháp đó để Option B gửi digest cho mentor và Option C để **người hỗ trợ** làm user ("learner chỉ nhận thông báo"). Như vậy ba option **không cùng user** → trượt Gate 2. Ở đây learner là user cho cả ba; phía coach chỉ là nơi câu hỏi đến.

### 2.2. Ba option

| | **Option A** | **Option B** | **Option C** |
| --- | --- | --- | --- |
| Tên option | Tự đánh dấu, coach trả lời | AI giải thích khi được hỏi (In-situ Grounded AI) | AI chủ động hỏi thăm (Behavioral Proactive AI) |
| Từ Parking Lot | #1 FAQ, #2 checklist, #4 mentor | #5 digest theo slide + trợ lý grounded nội dung | #6 Support Queue (đưa quyền quyết định về learner) |
| Cơ chế (1 câu) | Learner tự đánh dấu chỗ chưa hiểu; hệ thống gắn số slide và gửi cho coach, **không suy đoán gì** | Learner chọn chip thuật ngữ hoặc tự hỏi; AI giải thích theo mental model 3 bước dựa trên slide 5–7 (có nhãn độ tin cậy), và tự soạn Structured Help Ticket gửi coach nếu learner vẫn vướng | AI thấy tín hiệu hành vi của chính learner (dừng lâu/quay lại slide), **chủ động hỏi**, và chỉ khi learner đồng ý mới tạo thẻ gửi coach |
| Vị trí trên spectrum | User-led / No-inference | User + AI co-create | AI initiate, human decide |
| User làm gì? | Tự nhận ra chỗ kẹt, chọn loại, mô tả, chọn ẩn danh/kèm tên, gửi | Chọn nhanh chip gợi ý (`[RAG là gì?]`, `[Top-k]`) hoặc tự gõ câu hỏi; đọc mô hình giải thích 3 bước; bấm "Đã hiểu" hoặc "Vẫn chưa hiểu"; duyệt/sửa nháp gửi coach | Phản hồi gợi ý (giải thích / nhờ coach / để sau / tắt); xem trước và xác nhận thẻ |
| AI làm gì? | Chỉ gắn slide vào câu hỏi | Gợi ý sẵn chip thuật ngữ của slide; giải thích grounding theo slide 5–7 kèm nhãn độ chắc chắn và nguồn; tạo bản nháp câu hỏi có cấu trúc (Structured Help Ticket) cho coach | Đo thời gian ở slide và số lần quay lại; hiện gợi ý kèm lý do; soạn bản xem trước thẻ |
| Trigger | Learner | Learner (On-demand pull) | AI (dừng ≥ 20 giây ở slide 6 hoặc quay lại slide 6 lần 2) |
| AI Act / Ask / Don't Act | **Don't Act** | **Ask** (chỉ giải thích khi được yêu cầu, không tự ý gửi coach) | **Act** (khởi xướng) nhưng chỉ ở mức *hỏi learner*, không tự báo coach |
| Ai giữ quyền quyết định cuối? | Learner | Learner | Learner |
| Chống lại barrier nào? | Barrier 2 (ẩn danh giảm ngại) và Barrier 1 (tự gắn đúng slide) | Barrier 1 (tra rời rạc ~10 phút) bằng giải thích tức thì; Barrier 2 (ngại hỏi người) bằng cách tận dụng việc learner không ngại hỏi AI + hỗ trợ soạn nháp ẩn danh | Barrier 3 (coach/hệ thống biết learner đang kẹt) |
| Rủi ro chính nếu sai | Learner không nhận ra mình kẹt thì không dùng được; phải chờ coach | AI giải thích dài dòng/sai lệch khiến learner hiểu lầm hoặc mất thời gian đọc | Gợi ý nhầm thời điểm, hoặc learner thấy bị theo dõi |
| Người phụ trách chính | Phan Duy Thanh | Chử Trần Phương Nam | Bùi Hải Nam (+ Phùng Gia Khánh) |

### 2.3. Distance Check 🚫 *(đã chuẩn hoá theo cơ chế phân chia quyền)*

- **A khác B ở chỗ:** Ở A toàn bộ lời giải và suy luận đến từ **con người** (coach trả lời bất đồng bộ); ở B **AI làm tuyến đầu giải thích tức thì** dựa trên tài nguyên slide (không tốn chi phí xã hội), con người (coach) chỉ là tuyến sau hỗ trợ chuyên sâu khi AI chưa đủ.
- **B khác C ở chỗ:** Ở B **learner hoàn toàn làm chủ điểm khởi xướng** (Pull on-demand qua chip gợi ý/ô hỏi); ở C **hệ thống tự động kích hoạt** (Push) dựa trên đo lường hành vi dừng lâu/chuyển slide của từng cá nhân.
- **A khác C ở chỗ:** A đòi hỏi learner **tự nhận thức và tự lên tiếng trước**; C là hệ thống **nhận diện tín hiệu khó khăn và mở lời trước**.
- **Kết luận:** Ba option khác nhau rõ ràng ở **cơ chế giải quyết (Mechanism)**, **nguồn cung cấp lời giải (AI vs. Human)** và **phương thức khởi xướng tương tác (Pull vs. Push vs. Manual Form)**, hoàn toàn không phụ thuộc vào màu sắc hay bố cục giao diện. ☑

---

## 3. Human–AI Decision Table — GATE 3 🧪

### 3.1. Option A — Tự đánh dấu, coach trả lời

| # | Tình huống | AI **Act** | AI **Ask** | AI **Don't Act** | User hiểu điều gì? | Kiểm soát / phục hồi khi sai |
| - | ---------- | ---------- | ---------- | ---------- | ---------------- | ---------------------------- |
| 1 | Learner bấm đánh dấu chỗ chưa hiểu ở slide đang xem | Tự gắn số slide vào câu hỏi | — | **Không** đoán learner chưa hiểu gì, không tự điền mô tả | "Câu hỏi sẽ gửi tới coach. Hệ thống không tự đoán bạn đang gặp khó ở đâu" | Sửa mô tả, đổi loại, chọn lại slide trước khi gửi |
| 2 | Chọn cách gửi | — | Hỏi gửi **ẩn danh** hay **kèm tên** (mặc định ẩn danh) | Không tự tiết lộ tên | Dòng "Coach sẽ thấy: …" cập nhật theo lựa chọn | Đổi lại trước khi gửi |
| 3 | Đã gửi, chờ coach | Hiển thị trạng thái "đã gửi" và phản hồi của coach khi có | — | Không tự tóm tắt hay chỉnh sửa lời coach | "Coach thường phản hồi trong vòng một ngày làm việc" | **Sửa câu hỏi** hoặc **Thu hồi** trước khi có phản hồi; **Hỏi thêm** sau khi có phản hồi |

### 3.2. Option B — AI giải thích khi được hỏi (Chử Trần Phương Nam phụ trách)

| # | Tình huống | AI **Act** | AI **Ask** | AI **Don't Act** | User hiểu điều gì? | Kiểm soát / phục hồi |
| - | ---------- | ---------- | ---------- | ---------- | ---------------- | -------------------- |
| 1 | Learner mở panel trợ lý ở slide 6 | Hiển thị các **chip thuật ngữ gợi ý nhanh** (`[RAG là gì?]`, `[Quy trình 3 bước]`, `[Top-k]`) + nhãn độ khó nội dung trọng tâm | — | Không tự động nhảy pop-up; không tự gửi thông báo cho ai; không đọc dữ liệu cá nhân | "Trợ lý hỗ trợ giải nghĩa nhanh trong phạm vi Slide 5–7. Bạn có thể chọn chip có sẵn hoặc tự gõ câu hỏi" | Bấm nút đóng/thu nhỏ panel; bỏ qua để tiếp tục tự học |
| 2 | Learner chọn chip hoặc hỏi thuật ngữ | Trình bày lời giải thích theo **mental model 3 bước** ngắn gọn, trích nguồn slide (`Slide 6, mục định nghĩa; Slide 7, bước 1-3`), hiển thị nhãn **Độ chắc chắn: Cao/Trung bình/Thấp** | — | Không bịa đặt kiến thức nằm ngoài slide; không trả lời lan man dài dòng | Nhận biết ranh giới kiến thức: slide chỉ dạy luồng cơ bản, các phần nâng cao (Vector DB, chọn k) được cảnh báo rõ là nằm ngoài slide | Nút: **"Đã hiểu (Làm Quiz)"**, **"Hỏi thêm ý khác"**, hoặc **"Vẫn chưa hiểu (Nhờ Coach)"** |
| 3 | Learner bấm "Vẫn chưa hiểu / Nhờ Coach" | Tự động tạo **Structured Help Ticket** (gồm: Slide 6, khái niệm đang hỏi, điểm còn vướng cụ thể) | Hỏi learner: **"Gửi ẩn danh"** (mặc định) hay **"Kèm tên"** và cho phép sửa nháp trước khi bấm gửi | **Tuyệt đối không tự động gửi** câu hỏi cho coach nếu learner chưa bấm nút "Gửi ticket" | "Trợ lý đã soạn sẵn nháp câu hỏi có cấu trúc giúp bạn không phải tự viết từ đầu. Bạn có thể sửa hoặc huỷ bất cứ lúc nào" | Nút **"Huỷ bỏ / Quay lại tự học"**, **"Chỉnh sửa nội dung nháp"**, và nút **"Thu hồi ticket"** nếu đã lỡ gửi |

### 3.3. Option C — AI chủ động hỏi thăm

| # | Tình huống | AI **Act** | AI **Ask** | AI **Don't Act** | User hiểu điều gì? | Kiểm soát / phục hồi |
| - | ---------- | ---------- | ---------- | ---------- | ---------------- | -------------------- |
| 1 | Learner dừng ≥ 20 giây ở slide 6 hoặc quay lại lần 2 | Hiện gợi ý kèm lý do ("Đang ở slide 6 khoảng N giây"; "Đã quay lại N lần") | "Bạn có cần mình giúp không?" | Không tự báo coach; không đọc ghi chú hay nội dung chat | Panel luôn nói rõ mình dùng dữ liệu gì; nút **"Vì sao mình hỏi?"**; "đây chỉ là suy đoán, có thể sai" | **Để sau**; **Đừng gợi ý nữa**; công tắc Bật/Tắt trong panel; tối đa 2 lần gợi ý |
| 2 | Learner chọn "Nhờ coach hỗ trợ" | Tạo bản **xem trước thẻ** sẽ vào hàng chờ của coach (learner / nội dung / tín hiệu / gợi ý hành động) | Hỏi **kèm tên** hay **ẩn danh**, rồi xác nhận gửi | **Không gửi** khi learner chưa bấm "Gửi cho coach" | Thấy chính xác coach sẽ nhận được gì, kể cả tín hiệu hệ thống đã đo | "Không gửi"; **Thu hồi** sau khi gửi |
| 3 | AI gợi ý sai (learner không gặp khó) | — | — | Không lặp lại gợi ý quá 2 lần; không ghi nhận "learner gặp khó" nếu learner từ chối | Gợi ý được gọi rõ là suy đoán | Tắt gợi ý bất kỳ lúc nào; learner vẫn làm quiz bình thường |

### 3.4. Bốn nguyên lý Human–AI Design — đối chiếu

| Nguyên lý | Option A | Option B | Option C |
| --- | --- | --- | --- |
| **Expectation** | Câu "Hệ thống không tự đoán bạn đang gặp khó ở đâu" + dòng "Coach sẽ thấy…" | Panel nêu rõ: "Chỉ giải thích trong phạm vi Slide 5–7, có kèm mức độ chắc chắn; hỗ trợ soạn nháp nếu cần hỏi coach" | Panel nêu rõ dữ liệu được dùng / không dùng; nút "Vì sao mình hỏi?" minh bạch lý do can thiệp |
| **Role & Agency** | Learner làm gần hết; AI **Don't Act** vì hậu quả sai thấp nhưng phụ thuộc learner tự nhận biết | AI **Ask** (hỗ trợ giải thích và soạn nháp khi có lệnh; learner giữ quyền duyệt nội dung và quyết định gửi) | AI **Act** (chủ động mở lời khi thấy tín hiệu); learner giữ quyền chấp nhận hoặc từ chối |
| **Evidence & Uncertainty** | Số slide, loại chỗ vướng do learner chọn | Trích dẫn cụ thể `Slide 6, 7` + Nhãn độ chắc chắn (Cao/TB/Thấp) + Cảnh báo kiến thức nằm ngoài slide | Danh sách tín hiệu hành vi đã đo (thời gian, số lần chuyển slide), nói rõ đây là suy đoán |
| **Control & Recovery** | Sửa mô tả, đổi ẩn danh, thu hồi, hỏi thêm | Chọn chip gợi ý / tự gõ, bấm "Đã hiểu", sửa nháp Structured Ticket, Huỷ gửi, Thu hồi | Để sau, Đừng gợi ý nữa, Tắt hẳn gợi ý, xem trước thẻ, Huỷ gửi, Thu hồi |

### 3.5. Feedback and data check

| Câu hỏi | Trả lời trong prototype 🧪 *(nhóm xác nhận)* |
| --- | --- |
| Feedback của learner ảnh hưởng phiên hiện tại, lần sau hay không được ghi nhớ? | Chỉ ảnh hưởng **phiên hiện tại**: "Đừng gợi ý nữa" tắt gợi ý trong phiên; prototype không lưu gì sang phiên sau |
| Dữ liệu nào được dùng? | Thao tác chuyển slide và thời gian ở mỗi slide trong phiên. **Không** dùng ghi chú, đáp án quiz, nội dung chat |
| Learner có cách rút quyền không? | Có: công tắc Bật/Tắt, "Đừng gợi ý nữa", "Không gửi", "Thu hồi" |
| Nhãn định hướng nội dung (Option B) | Ghi nhận "Nội dung trọng tâm Slide 6", tránh tạo số liệu người dùng ảo gây thiên lệch tâm lý |

---

### 3.6. Canned AI Output & Fixture Data cho Option B ✍️ *(Do Chử Trần Phương Nam biên soạn)*

Phần này cung cấp kịch bản dữ liệu mẫu (synthetic fixture) phục vụ trực tiếp cho việc build prototype Option B ở Chặng 4:

#### A. Kịch bản 1 — Learner bấm chip gợi ý `[RAG là gì?]` tại Slide 6:
* **Input (Trigger):** Learner click vào chip `[RAG là gì?]` trong panel trợ lý.
* **AI Output hiển thị:**
  ```text
  [Độ chắc chắn: CAO — Dựa trên Slide 6 & 7]
  
  RAG (Retrieval-Augmented Generation) là kỹ thuật giúp AI trả lời chính xác bằng cách kết hợp:
  
  1. Retrieve (Truy xuất): Tìm các đoạn văn bản liên quan trong tài liệu (Slide 7, Bước 1).
  2. Augment (Bổ sung): Ghép nội dung tìm được vào câu hỏi gốc làm ngữ cảnh (Slide 7, Bước 2).
  3. Generate (Tạo câu trả lời): Mô hình ngôn ngữ đọc ngữ cảnh và sinh câu trả lời đúng trọng tâm (Slide 7, Bước 3).
  
  ⚠️ Lưu ý: Slide 6–7 chỉ mô tả luồng xử lý cơ bản; các khái niệm nâng cao như "Embedding vector" hay "Top-k" không thuộc phạm vi slide này.
  ```
* **Các nút tương tác đi kèm:**
  - `[✅ Đã hiểu — Sang làm Quiz]` → Đóng panel, focus vào câu quiz bên dưới slide.
  - `[❓ Vẫn chưa hiểu — Soạn câu hỏi nhờ Coach]` → Kích hoạt Kịch bản 2.

#### B. Kịch bản 2 — Learner bấm "Vẫn chưa hiểu / Nhờ Coach" (Escalation to Coach):
* **AI Action:** Tự động tạo bản nháp có cấu trúc (Structured Help Ticket):
  ```text
  --- BẢN NHÁP CÂU HỎI GỬI COACH (Bạn có thể chỉnh sửa trước khi gửi) ---
  
  • Vị trí: Slide 6 — Mục "Retrieval-Augmented Generation (RAG)"
  • Trạng thái: Em đã đọc định nghĩa của trợ lý AI nhưng chưa rõ bước số 2 (Augment).
  • Câu hỏi chi tiết: "Em chưa hiểu cách tài liệu tìm được được ghép vào prompt như thế nào để mô hình không bị nhầm lẫn với câu hỏi ban đầu ạ. Nhờ coach giải thích thêm bằng ví dụ thực tế giúp em."
  
  [Lựa chọn gửi]: (•) Gửi ẩn danh (mặc định)   ( ) Gửi kèm tên tài khoản
  ```
* **Các nút kiểm soát của User:**
  - `[✏️ Chỉnh sửa câu hỏi]`
  - `[📤 Xác nhận gửi cho Coach]`
  - `[❌ Huỷ bỏ — Quay lại tự học]`

---

## 4. Gate tự kiểm
- [x] **GATE 1** — Hypothesis đủ 5 thành phần + ≥ 1 observation Day 17 + ≥ 1 điều chưa biết *(đã chuẩn hoá ở §1 và §1.1)*
- [x] **GATE 2** — Cùng user/situation/task/outcome, khác mechanism *(§2.1, §2.2 & §2.3)*
- [x] **GATE 3** — Rõ user/AI làm gì, agency phù hợp hậu quả, có đường kiểm soát/phục hồi, có canned output fixture cụ thể *(§3.1–3.6)*
- [x] Distance Check không nhắc màu / layout / wording
