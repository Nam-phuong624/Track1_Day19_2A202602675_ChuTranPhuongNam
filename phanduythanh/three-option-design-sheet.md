# Chặng 2 + 3 — Three-Option Design Sheet & Human–AI Design

> **Người thực hiện:** Phan Duy Thanh · `2A202602930` · **Nhóm:** H3201 · **Case C — AI Support Radar**
> **Gate:** GATE 2 (Meaningful options) · GATE 3 (Human control)
> Đầu vào: [evidence-snapshot.md](./evidence-snapshot.md) — Hypothesis Problem và 3 Practice Notes.
> Nguồn ý tưởng: Solution Parking Lot hướng #2 + #5 + #6 (Day 17).

---

# Phần I — Chặng 2: Ba Solution Options

## 1. Comparison Contract — những thứ A/B/C phải giống nhau ⚙️

| Thành phần | Giá trị dùng chung cho A/B/C |
| ---------- | ---------------------------- |
| **Target user** | Learner tự học trên VLearn vào buổi tối, một mình, không có ai ngồi cạnh |
| **Situation** | Đang tự học một bài/slide khó; gặp thuật ngữ / định nghĩa chưa rõ; không có ai hỗ trợ trực tiếp |
| **Task** | Hiểu đủ nội dung để học tiếp và làm bài tập/quiz đúng hạn |
| **Desired outcome** | Gỡ được chỗ vướng ngay trong lúc còn đang học, không dồn nợ kiến thức |
| **Content/data fixture** | Cùng một deck VLearn rút gọn (11 slide) · cùng thuật ngữ gây vướng `RAG` ở slide 7 · cùng bộ tín hiệu hành vi giả lập (điều hướng slide, dừng lâu, đánh dấu "Chưa hiểu", đổi đáp án quiz, đoạn chat với AI Chat) · cùng một persona learner (`Minh Anh`) |

## 2. Những thứ A/B/C được phép khác

| | **Option A** — Learner tự khai | **Option B** — Tín hiệu cấp nội dung | **Option C** — Support Queue |
| --- | --- | --- | --- |
| **Tên cơ chế** | User-led · no-inference | User + AI co-create | AI initiate · human review |
| **Nguồn Parking Lot** | #2 — checklist tự kiểm tra + tín hiệu "đánh dấu Chưa hiểu" | #5 — digest theo slide, không theo người | #6 — Support Queue theo directive |
| **Solution mechanism** | Learner **tự khai** mình kẹt ở đâu; AI chỉ **tổng hợp lại đúng những gì learner đã tự nói**, tuyệt đối không suy đoán | AI **phát hiện nội dung khó ở cấp slide** (không gắn cờ ai); learner **quyết định** có nêu tên mình để được hỗ trợ hay không | AI **suy đoán từng learner** đang kẹt ở đâu, xếp ưu tiên và đề xuất hành động; **người hỗ trợ review & quyết định** |
| **User làm gì?** | Chủ động bấm "Chưa hiểu" trên slide, ghi chú ngắn, tự kiểm tra bằng checklist | Đọc cảnh báo nội dung khó, chọn "Cần người hỗ trợ", rồi chọn **nêu tên** hoặc **ẩn danh** | Chỉ **nhận** thông báo; quyết định có phản hồi hay không (công tắc nhận hỗ trợ) |
| **AI làm gì?** | **Không suy đoán.** Chỉ gom và hiển thị lại đánh dấu + ghi chú của learner | Suy đoán ở **cấp nội dung**, **không bao giờ** ở cấp người | Suy đoán ở **cấp người** + xếp hạng ưu tiên + nêu độ chắc chắn |
| **Trigger** | Learner bấm/đánh dấu trong lúc học | Learner mở slide bị đánh dấu là khó / hết phiên học | Hết phiên học |
| **Trade-off chính** | An toàn, learner giữ toàn quyền — nhưng **chỉ chạy khi learner đã biết mình kẹt ở đâu**, đúng chỗ PN1 nói là khó → barrier PN1 chưa được giải | Giảm cảm giác bị theo dõi — nhưng **vẫn cần learner tự lên tiếng**, nên Pain B chưa được giải | Giải được barrier "không ai biết" — nhưng **chạm thẳng vào Pain B** (ngại) và rủi ro riêng tư / AI gắn cờ sai |
| **Ai giữ quyền quyết định cuối?** | Learner | Learner | Người hỗ trợ (sau khi AI đề xuất) |
| **Người phụ trách chính** | `[chốt ở Chặng 2]` | `[chốt ở Chặng 2]` | `[chốt ở Chặng 2]` |

## 3. Distance Check — viết bằng lời của nhóm 🚫

> Không nhắc màu sắc, layout, wording, font, animation.

- **A khác B vì:** A để **learner khởi tạo** và AI **không suy đoán gì cả**; B để **AI suy đoán ở cấp nội dung** rồi learner quyết định có lộ diện hay không. Điểm khác nằm ở **ai là người phát hiện ra vấn đề trước**, không nằm ở chỗ khác.
- **B khác C vì:** B **không bao giờ định danh học viên** — tín hiệu dừng ở cấp slide; C để AI **tạo nhận định về từng con người** rồi mới đưa cho người hỗ trợ review.
- **A khác C vì:** A **đảo ngược điểm khởi tạo** (learner tự nói ra trước, AI chỉ ghi lại); C là **AI khởi tạo rồi người review**.

**Kết luận:** [x] Ba option khác nhau ở **mechanism và cách phân chia quyền quyết định**, không phải ba phiên bản giao diện.

```text
A  USER CREATES / INITIATES      (AI: Don't Act)
        ↓
B  USER + AI CO-CREATE           (AI: Ask)
        ↓
C  AI CREATES / INITIATES, HUMAN REVIEWS  (AI: Act + human review)
```

## 4. GATE 2 — Meaningful options ✅

- [x] Cùng **user, situation, task, desired outcome**
- [x] Khác nhau có ý nghĩa ở **mechanism** hoặc **phân chia công việc và quyền quyết định**
- [x] Có ít nhất một hướng **user-led / no-inference** (A) và một hướng **human escalation** (C)
- [x] Không cố ý làm một option tệ để hai option còn lại thắng

---

# Phần II — Chặng 3: Human–AI Design pass

Chỉ review **critical interaction** cần test. Không thiết kế toàn bộ product, không thêm một màn hình cho mỗi tiêu chí.

## 5. Human–AI Decision Table

| Human–AI decision | **Option A** | **Option B** | **Option C** |
| ----------------- | ------------ | ------------ | ------------ |
| **User làm gì? AI làm gì?** | Learner đánh dấu "Chưa hiểu" + ghi chú. AI chỉ liệt kê lại đúng những mục đó và đưa checklist tự kiểm tra có đáp án nền | AI nêu "slide này bị xem lại nhiều" ở cấp nội dung. Learner chọn có cần hỗ trợ không, và có nêu tên không | AI tạo mục trong Support Queue kèm suy đoán và độ chắc chắn. Mentor chấp nhận hoặc từ chối. Learner chỉ nhận thông báo |
| **AI Act / Ask / Don't Act? Vì sao?** | **Don't Act** — AI không suy đoán, chỉ ghi lại điều learner tự khai. Hậu quả nếu AI sai là 0, nên không cần bước review | **Ask** — AI nêu tín hiệu cấp nội dung rồi **hỏi** learner có muốn được hỗ trợ. Vì tín hiệu không gắn với người nên không có rủi ro riêng tư | **Act** (có human review bắt buộc) — hậu quả khi sai là **gắn cờ sai người**, nên AI không được tự liên hệ learner; mentor phải duyệt trước |
| **User hiểu capability/limit bằng gì?** | Dòng chú thích cố định: *"Hệ thống không suy đoán. Danh sách dưới đây là do bạn tự đánh dấu."* | Câu hỏi mở đầu banner: *"Chúng tôi **không biết** bạn có đang kẹt hay không — bạn thấy thế nào?"* + nguồn số liệu ghi rõ là tổng hợp cấp slide | Nhãn **"AI suy đoán"** + **độ chắc chắn** + câu *"Mentor sẽ xem trước khi liên hệ bạn."* |
| **Evidence/uncertainty được thể hiện thế nào?** | Nguồn dữ liệu hiển thị ngay: *"Nguồn: 2 đánh dấu + 1 ghi chú của bạn"* | *"37/48 lượt xem lại slide này (số liệu tổng hợp, không phải về bạn)"* | Căn cứ cụ thể + thanh confidence (62% = trung bình) + chữ *"suy đoán, có thể sai"* |
| **User kiểm soát và recovery thế nào?** | Xoá từng đánh dấu, sửa ghi chú, "Xoá tất cả", bấm "Đã hiểu". Không có gì bị gửi đi nên không cần undo | Chọn lại được ("Đổi lựa chọn"), bỏ qua banner (dismiss), và **không chọn nêu tên = mặc định ở lại ẩn danh** | Learner có công tắc **"Không muốn nhận hỗ trợ"**; mentor **từ chối** mục trong queue kèm lý do → mục bị gỡ, learner thấy và vẫn còn đường tự đánh dấu "Chưa hiểu" |

## 6. Chi tiết Act / Ask / Don't Act theo từng option

### 6.1. Option A — Learner tự khai

| # | Tình huống | AI **Act** | AI **Ask** | AI **Don't Act** | User hiểu điều gì? | Kiểm soát / phục hồi |
| - | ---------- | ---------- | ---------- | ---------------- | ------------------ | -------------------- |
| 1 | Learner đang đọc slide 7 (RAG) | — | — | Không gợi ý, không cảnh báo, không đề xuất | Không có gì tự xuất hiện; mọi thứ bắt đầu từ learner | Learner tự bấm "Chưa hiểu" |
| 2 | Learner bấm "Chưa hiểu" ở slide 7 | Liệt kê lại đúng slide đã đánh dấu | — | Không suy đoán learner kẹt ở khái niệm nào cụ thể | Danh sách này là do chính learner tạo ra | Xoá đánh dấu bất cứ lúc nào |
| 3 | Learner ghi chú "chưa hiểu RAG khác gì fine-tuning" | Hiển thị nguyên văn ghi chú + checklist câu hỏi tự kiểm tra | — | Không viết lại, không diễn giải, không gửi cho ai | AI không thêm thông tin nào ngoài thứ learner gõ | Sửa/xoá ghi chú tự do |

### 6.2. Option B — Tín hiệu cấp nội dung

| # | Tình huống | AI **Act** | AI **Ask** | AI **Don't Act** | User hiểu điều gì? | Kiểm soát / phục hồi |
| - | ---------- | ---------- | ---------- | ---------------- | ------------------ | -------------------- |
| 1 | Learner mở slide 7 | Hiện banner "slide này nhiều bạn xem lại" | Hỏi learner thấy thế nào | Không nói gì về bản thân learner | Cảnh báo là về **nội dung**, không phải về learner | Dismiss banner |
| 2 | Learner chọn "Cần người hỗ trợ" | — | Hỏi *"Nêu tên để mentor liên hệ?"* | Không tự lấy tên learner dù hệ thống có sẵn | Learner là người quyết định lộ diện | Chọn ẩn danh / đổi lựa chọn |
| 3 | Learner hết phiên mà chưa chọn gì | — | — | Không tự tạo yêu cầu hỗ trợ, không gửi tín hiệu nào | Im lặng = không có chuyện gì xảy ra | Bỏ qua hoàn toàn |

### 6.3. Option C — Support Queue

| # | Tình huống | AI **Act** | AI **Ask** | AI **Don't Act** | User hiểu điều gì? | Kiểm soát / phục hồi |
| - | ---------- | ---------- | ---------- | ---------------- | ------------------ | -------------------- |
| 1 | Hết phiên học | Tạo mục queue: suy đoán + căn cứ + confidence | — | Không tự liên hệ learner | Đây là **suy đoán có thể sai**, chưa phải kết luận | Công tắc "Không muốn nhận hỗ trợ" |
| 2 | Mentor mở queue | Hiển thị căn cứ để mentor kiểm chứng | — | Không tự gửi tin nhắn cho learner | AI đề xuất, mentor quyết | Mentor Từ chối + lý do |
| 3 | Mentor từ chối mục | Gỡ mục khỏi queue, ghi lại lý do | — | Không thử lại, không hỏi lại learner | Suy đoán đã bị bác | Learner vẫn còn đường tự đánh dấu "Chưa hiểu" |

## 7. Đối chiếu bốn nguyên lý Human–AI Design

| Nguyên lý | **Option A** | **Option B** | **Option C** |
| --- | --- | --- | --- |
| **Expectation** — user biết AI sắp làm gì | Chú thích cố định: AI không suy đoán, chỉ ghi lại | Banner hỏi mở, nói rõ "chúng tôi không biết bạn có kẹt hay không" | Nhãn "AI suy đoán" + "mentor sẽ xem trước khi liên hệ" |
| **Role & Agency** — quyền quyết định đặt đúng chỗ | Toàn bộ ở learner; AI không có agency | Learner giữ quyền lộ diện; AI chỉ nêu tín hiệu cấp nội dung | AI đề xuất, **mentor quyết**, learner có quyền từ chối nhận |
| **Evidence & Uncertainty** | Nguồn = "2 đánh dấu + 1 ghi chú của bạn" | Nguồn = "37/48 lượt xem lại, số liệu tổng hợp" | Căn cứ hành vi + confidence 62% + chữ "có thể sai" |
| **Control & Recovery** | Xoá/sửa/xoá tất cả; không gửi gì đi nên rủi ro bằng 0 | Đổi lựa chọn, dismiss, mặc định ẩn danh | Công tắc từ chối; mentor reject + lý do; còn đường tự đánh dấu |

**Neo vào evidence (bắt buộc đọc lại trước khi build):**

- PN3 nói learner **ngại** lên tiếng → A và B **đều dựa vào việc learner lên tiếng**. Cả hai phải trả lời: *cơ chế này làm việc lên tiếng dễ hơn ở chỗ nào?* → A: chỉ cần bấm một nút, không cần nói với ai. B: chỉ cần trả lời một câu hỏi đã được đặt trước, có sẵn đường ẩn danh.
- PN3 cũng nói learner **rất nhẹ nhõm khi được hỏi trước** → đó là evidence **ủng hộ** hướng C (AI chủ động), nhưng phải giữ bước human review để không lặp lại rủi ro gắn cờ sai.

## 8. GATE 3 — Human control ✅

- [x] Mỗi option nói rõ **user làm gì, AI làm gì**
- [x] Có **Act / Ask / Don't Act** kèm lý do gắn với hậu quả khi AI sai
- [x] Có **đường kiểm soát và phục hồi** cho từng option
- [x] Không option nào để AI tự quyết ở chỗ có hậu quả thật với learner
