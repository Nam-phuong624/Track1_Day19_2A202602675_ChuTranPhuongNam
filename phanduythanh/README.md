# Lab 18 — Case C: AI Support Radar (VLearn)

Phan Duy Thanh (2A202602930), nhóm H3201, Track 1.

Thư mục này là bài nộp cá nhân của tôi cho Lab 18, đi qua đủ sáu chặng của đề bài. Nhóm sẽ dùng nó làm nguồn để gộp vào template chung. Nhóm gồm bốn người: tôi phụ trách Option A, Chử Trần Phương Nam phụ trách Option B, còn Bùi Hải Nam và Phùng Gia Khánh cùng phụ trách Option C. Dù phụ trách option nào, mỗi người vẫn test cả ba.

## 1. Tài liệu theo từng chặng

| Chặng | Nội dung | Tài liệu | Tình trạng |
| --- | --- | --- | --- |
| 1. Tổng hợp evidence | Evidence Snapshot và Hypothesis Problem | [evidence-snapshot.md](./evidence-snapshot.md) | Hoàn tất, qua GATE 1 |
| 2. Chọn ba Solution Options | Comparison Contract và Distance Check | [three-option-design-sheet.md](./three-option-design-sheet.md), Phần I | Hoàn tất, qua GATE 2 |
| 3. Human–AI Design | Human–AI Decision Table | [three-option-design-sheet.md](./three-option-design-sheet.md), Phần II | Hoàn tất, qua GATE 3 |
| 4. Micro-prototype | Ba prototype, link và annotation | [prototype-link.md](./prototype-link.md), [index.html](./index.html) | Hoàn tất, qua GATE 4 |
| 5. Chuẩn bị test | Test Prompt và Observation Focus | [test/test-prompt.md](./test/test-prompt.md), [test/observation-focus.md](./test/observation-focus.md) | Hoàn tất |
| 6. Test với người dùng | Feedback Note và Group Synthesis | [prototype-feedback-note.md](./prototype-feedback-note.md), [group-feedback-synthesis.md](./group-feedback-synthesis.md) | Chờ phiên test |
| Khác | Khai báo sử dụng AI | [ai-support-log.md](./ai-support-log.md) | Đã cập nhật |
| Khác | Đóng góp cá nhân và reflection | [contribution.md](./contribution.md) | Chờ phiên test |

## 2. Cấu trúc thư mục

```text
phanduythanh/
├── README.md
├── index.html                     trang mở đầu, dẫn tới ba option
├── evidence-snapshot.md           Chặng 1
├── three-option-design-sheet.md   Chặng 2 và 3
├── prototype-link.md              Chặng 4
├── prototype-feedback-note.md     Chặng 6, phiên do tôi facilitate
├── group-feedback-synthesis.md    Chặng 6, tổng hợp của nhóm
├── ai-support-log.md
├── contribution.md
├── shared/                        phần dùng chung cho cả ba option
│   ├── fixture.js                 deck 11 slide, thuật ngữ RAG, tín hiệu giả lập
│   ├── deck.js                    khung slide, điều hướng, reset
│   └── styles.css
├── options/
│   ├── option-a/                  index.html và annotation.md
│   ├── option-b/
│   └── option-c/
└── test/
    ├── test-prompt.md
    └── observation-focus.md
```

## 3. Cách chạy prototype

Mở [index.html](./index.html) bằng trình duyệt (Chrome hoặc Edge) rồi chọn một option. Prototype không cần cài đặt, không cần server và không cần mạng. Toàn bộ phản hồi "AI" đều là nội dung soạn sẵn, không có mô hình thật nào được gọi. Nút "Bắt đầu lại" ở góc phải trên đưa phiên học về trạng thái ban đầu.

## 4. Ba option

| Option | Cơ chế | Vai trò của AI | Ai quyết định cuối cùng |
| --- | --- | --- | --- |
| A | Người học tự đánh dấu chỗ chưa hiểu; AI chỉ gom lại những gì họ đã đánh dấu | Don't Act | Người học |
| B | AI báo slide nào khó dựa trên số liệu chung, không nhắm vào cá nhân nào; người học tự chọn có nêu tên để được hỗ trợ hay không | Ask | Người học |
| C | AI đoán từng người học đang kẹt ở đâu và xếp vào hàng chờ; mentor duyệt trước khi liên hệ | Act, có người duyệt | Mentor (người học có thể từ chối) |

## 5. Tình trạng các gate

GATE 1 đến GATE 4 đã đạt; chi tiết từng gate nằm ở cuối mỗi tài liệu tương ứng. GATE 5 (Learning, not praise) cần ba Feedback Note độc lập, một Next Change và một Still Unproven. Gate này chỉ đánh giá được sau khi ba phiên test thật diễn ra.

## 6. Việc còn lại

- Facilitate một phiên test với người ngoài nhóm theo thứ tự C, A, B, rồi ghi vào [prototype-feedback-note.md](./prototype-feedback-note.md).
- Gộp ba Feedback Note của nhóm vào [group-feedback-synthesis.md](./group-feedback-synthesis.md).
- Viết phần đóng góp và reflection trong [contribution.md](./contribution.md).
