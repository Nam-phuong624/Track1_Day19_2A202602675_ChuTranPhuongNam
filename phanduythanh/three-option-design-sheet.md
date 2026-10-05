# Chặng 2 và 3 — Three-Option Design Sheet và Human–AI Design

Phan Duy Thanh (2A202602930), nhóm H3201, Case C: AI Support Radar.
Đầu vào là [evidence-snapshot.md](./evidence-snapshot.md); ba option lấy từ các hướng số 2, 5 và 6 trong Solution Parking Lot của Day 17.

# Phần I — Ba Solution Options

## 1. Comparison Contract

Để so sánh ba option một cách công bằng, nhóm giữ các yếu tố sau giống hệt nhau. Ba option chỉ khác ở cơ chế và ở cách chia quyền quyết định.

| Thành phần | Giá trị chung |
| --- | --- |
| Target user | Người học tự học trên VLearn vào buổi tối, không có ai bên cạnh |
| Situation | Đang học một slide khó và gặp thuật ngữ hoặc định nghĩa chưa rõ |
| Task | Hiểu đủ để học tiếp và làm quiz đúng hạn |
| Desired outcome | Gỡ được chỗ mắc ngay trong lúc học, không để dồn lại |
| Fixture | Cùng một deck 11 slide, cùng thuật ngữ RAG ở slide 7, cùng bộ tín hiệu hành vi giả lập, cùng persona người học (Minh Anh) |

## 2. Ba option

| | Option A: người học tự khai | Option B: tín hiệu ở cấp nội dung | Option C: Support Queue |
| --- | --- | --- | --- |
| Kiểu cơ chế | Người học khởi xướng, AI không suy luận | Người học và AI cùng tạo | AI khởi xướng, có người duyệt |
| Nguồn từ Parking Lot | Hướng 2: checklist tự kiểm tra và nút "Chưa hiểu" | Hướng 5: báo cáo theo slide, không theo người | Hướng 6: Support Queue theo đề bài |
| Cơ chế | Người học tự đánh dấu chỗ mình mắc; AI chỉ tổng hợp lại đúng những gì họ đã đánh dấu | AI phát hiện slide khó dựa trên số liệu chung; người học tự chọn có nêu tên để được hỗ trợ hay không | AI suy đoán từng người học đang mắc ở đâu, xếp mức ưu tiên và đề xuất hành động; mentor duyệt rồi mới quyết định |
| Người học làm gì | Bấm "Chưa hiểu", ghi chú, tự kiểm tra bằng checklist | Đọc cảnh báo, chọn có cần hỗ trợ không, rồi chọn nêu tên hoặc ẩn danh | Nhận thông báo; có thể tắt việc nhận hỗ trợ |
| AI làm gì | Không suy luận gì | Suy luận ở cấp nội dung, không bao giờ ở cấp cá nhân | Suy luận ở cấp cá nhân, kèm căn cứ và độ tin cậy |
| Khi nào kích hoạt | Khi người học bấm | Khi người học mở một slide được đánh dấu là khó | Khi phiên học kết thúc |
| Trade-off chính | An toàn và người học giữ toàn quyền, nhưng chỉ hiệu quả khi họ biết mình mắc ở đâu; barrier của PN1 vẫn chưa được giải quyết | Ít tạo cảm giác bị theo dõi, nhưng người học vẫn phải tự lên tiếng nên Pain B vẫn còn | Giải quyết được việc không ai biết người học đang mắc, nhưng đụng thẳng vào Pain B, có rủi ro về quyền riêng tư và có thể gắn cờ nhầm |
| Ai quyết định cuối cùng | Người học | Người học | Mentor |
| Người phụ trách | Phan Duy Thanh | Chử Trần Phương Nam | Bùi Hải Nam và Phùng Gia Khánh |

## 3. Distance Check

Ba option khác nhau ở hai điểm: ai phát hiện ra vấn đề trước, và ai có quyền quyết định. Giao diện không phải là điểm khác biệt.

A khác B ở chỗ ai phát hiện vấn đề trước. Ở A, người học tự nhận ra và AI không suy luận gì. Ở B, AI nhận ra trước, nhưng chỉ ở mức "slide này khó với nhiều người", và người học vẫn quyết định có lộ diện hay không.

B khác C ở chỗ AI có định danh người học hay không. Tín hiệu ở B chỉ dừng ở cấp slide. C tạo ra nhận định về từng người cụ thể rồi chuyển cho mentor duyệt.

A và C đối lập nhau ở điểm khởi đầu. Ở A, người học nói ra trước. Ở C, AI nói ra trước và một người khác duyệt lại.

Như vậy ba option trải dài theo một trục: từ người học tự làm (A), qua người học cùng làm với AI (B), đến AI khởi xướng và có người duyệt (C).

## 4. Đối chiếu GATE 2

Ba option có chung user, situation, task và desired outcome, và khác nhau ở cơ chế cũng như cách chia quyền quyết định. Trong đó có một option không dùng suy luận của AI (A) và một option chuyển lên người duyệt (C). Không option nào bị làm yếu có chủ đích để option khác trông tốt hơn.

# Phần II — Human–AI Design

Phần này chỉ xét critical interaction cần đem đi test, không thiết kế toàn bộ sản phẩm. Khung phân tích dựa trên guidelines cho tương tác người–AI của Amershi và cộng sự (2019) và People + AI Guidebook của Google PAIR (2019).

## 5. Human–AI Decision Table

| Quyết định | Option A | Option B | Option C |
| --- | --- | --- | --- |
| Người học và AI mỗi bên làm gì | Người học đánh dấu và ghi chú. AI liệt kê lại đúng những mục đó và đưa ra checklist có đáp án nền | AI báo "slide này được xem lại nhiều". Người học chọn có cần hỗ trợ không và có nêu tên không | AI tạo một mục trong hàng chờ, kèm suy đoán và độ tin cậy. Mentor chấp nhận hoặc từ chối. Người học nhận kết quả |
| AI ở mức Act, Ask hay Don't Act, và vì sao | Don't Act. AI không suy luận nên không có gì để sai, do đó cũng không cần bước duyệt | Ask. Tín hiệu không gắn với cá nhân nào nên không có rủi ro riêng tư; AI chỉ hỏi thêm | Act, nhưng bắt buộc có người duyệt. Nếu sai, AI sẽ gắn cờ nhầm người, nên AI không được tự liên hệ người học |
| Làm sao người học hiểu AI làm được gì và không làm được gì | Một dòng chú thích cố định: hệ thống không suy đoán, danh sách là do bạn tự đánh dấu | Banner nói rõ "chúng tôi không biết bạn có đang mắc hay không" và ghi nguồn số liệu là tổng hợp theo slide | Nhãn "AI suy đoán", độ tin cậy, và câu "mentor sẽ xem trước khi liên hệ bạn" |
| Căn cứ và mức độ không chắc chắn hiển thị ra sao | "Nguồn: 2 đánh dấu và 1 ghi chú của bạn" | "37/48 lượt xem lại slide này (số liệu tổng hợp, không phải về bạn)" | Căn cứ hành vi cụ thể, độ tin cậy 62% và dòng chữ "có thể sai" |
| Người học kiểm soát và khắc phục thế nào | Xoá từng đánh dấu, sửa ghi chú, xoá tất cả. Không có gì được gửi đi | Đổi lựa chọn, bỏ qua banner. Nếu không chọn gì thì mặc định là ẩn danh | Người học có công tắc từ chối nhận hỗ trợ. Mentor từ chối kèm lý do, mục đó bị gỡ khỏi hàng chờ, và người học vẫn có thể tự đánh dấu |

## 6. Act, Ask và Don't Act trong từng tình huống

### 6.1. Option A

| Tình huống | AI làm | AI không làm | Cách kiểm soát |
| --- | --- | --- | --- |
| Người học đọc slide 7 | Không làm gì | Không gợi ý, không cảnh báo | Người học tự bấm "Chưa hiểu" |
| Người học bấm "Chưa hiểu" | Liệt kê lại slide đã đánh dấu | Không suy đoán họ mắc ở khái niệm nào | Xoá đánh dấu bất cứ lúc nào |
| Người học ghi chú | Hiển thị đúng nguyên văn kèm checklist | Không viết lại, không gửi cho ai | Sửa hoặc xoá ghi chú |

### 6.2. Option B

| Tình huống | AI làm | AI hỏi | AI không làm | Cách kiểm soát |
| --- | --- | --- | --- | --- |
| Người học mở slide 7 | Hiện banner về độ khó của slide | Hỏi người học thấy thế nào | Không nói gì về cá nhân người học | Bỏ qua banner |
| Người học chọn cần hỗ trợ | | Hỏi có muốn nêu tên không | Không tự lấy tên dù hệ thống có sẵn | Chọn ẩn danh hoặc đổi lựa chọn |
| Phiên học kết thúc mà người học chưa chọn gì | | | Không tự tạo yêu cầu hỗ trợ | Im lặng nghĩa là không có gì xảy ra |

### 6.3. Option C

| Tình huống | AI làm | AI không làm | Cách kiểm soát |
| --- | --- | --- | --- |
| Phiên học kết thúc | Tạo mục trong hàng chờ, kèm căn cứ và độ tin cậy | Không tự liên hệ người học | Người học dùng công tắc từ chối |
| Mentor mở hàng chờ | Hiển thị căn cứ để mentor kiểm tra | Không tự gửi tin nhắn | Mentor từ chối và ghi lý do |
| Mentor từ chối | Gỡ mục khỏi hàng chờ và lưu lý do | Không thử lại | Người học vẫn có thể tự đánh dấu |

## 7. Liên hệ với bằng chứng

PN3 cho thấy người học ngại lên tiếng, trong khi cả A và B đều dựa vào việc người học lên tiếng. Vì vậy hai option này giảm bớt công sức mở lời theo hai cách khác nhau. Ở A, người học chỉ cần bấm một nút và không phải nói với ai. Ở B, người học chỉ cần trả lời một câu hỏi đã được đặt sẵn, và có lựa chọn ẩn danh. Cũng PN3 cho thấy người học nhẹ nhõm khi được hỏi trước, đây là bằng chứng ủng hộ C. Tuy vậy, C vẫn phải giữ bước mentor duyệt để hạn chế rủi ro gắn cờ nhầm.

## 8. Đối chiếu GATE 3

Mỗi option đều nêu rõ người học làm gì và AI làm gì, xếp AI vào mức Act, Ask hay Don't Act dựa trên hậu quả nếu AI sai, và có đường kiểm soát cũng như khắc phục. Không option nào để AI tự quyết ở những chỗ có hậu quả thật đối với người học.

## Tài liệu tham khảo

Amershi, S., Weld, D., Vorvoreanu, M., Fourney, A., Nushi, B., Collisson, P., Suh, J., Iqbal, S., Bennett, P.N., Inkpen, K., Teevan, J., Kikin-Gil, R. and Horvitz, E. (2019) 'Guidelines for human-AI interaction', in *Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems*. New York: ACM, pp. 1–13.

Google PAIR (2019) *People + AI Guidebook*. Available at: https://pair.withgoogle.com/guidebook (Accessed: 5 October 2026).
