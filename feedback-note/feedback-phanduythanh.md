# Prototype Feedback Note — Phan Duy Thanh `2A202602930`

> **Nhóm:** H3201 · **Track 1** · **Case C — AI Support Radar**
> Đầu ra của **Chặng 6 — Test với ba người** (GATE 5).

**Task (Chặng 5 — đã chốt):**
- **Relevant context:** "Gần đây bạn có từng đang xem lại slide/bài trên VLearn mà gặp một thuật ngữ không hiểu, phải dừng lại tra cứu một mình không?"
- **Outcome task:** "Trong tình huống này, hãy dùng từng phương án A, B, C để đến lúc bạn tự tin trả lời câu quiz về RAG ngay bên dưới slide — không cần ai giải thích hộ."
- **Observation focus:** first action · hesitation · evidence read/ignored · option được chọn và trade-off

---

## Phiên — Lê Thanh Tình `2A202602449`

| Mục | Nội dung |
| --- | --- |
| Người facilitate | `2A202602930` — Phan Duy Thanh |
| Tester | `T1` — Lê Thanh Tình, `2A202602449` |
| Thời gian / địa điểm | 2026-10-05 · Lab H3201 |
| Option được test | A ☑ · B ☑ · C ☑ |
| Thứ tự trình bày | A → B → C |

**OBSERVED**

| # | Thời điểm | Hành vi | Với option |
| - | --------- | -------- | ---------- |
| 1 | 0:00–0:30 | Đọc slide, nhìn lên xuống giữa sơ đồ RAG và đoạn văn mô tả, không chủ động làm gì — không biết bắt đầu từ đâu | A |
| 2 | 0:35 | Click "Đánh dấu chỗ khó hiểu & Gửi Coach" khi nhìn thấy nút — đây là điểm vào duy nhất nhìn thấy | A |
| 3 | 0:50 | Mở modal → dừng lâu ở textarea "Điểm cụ thể bạn chưa hiểu rõ" → không biết viết gì → gõ vài từ mờ nhạt ("Em chưa hiểu slide này") → gửi ẩn danh | A |
| 4 | 1:10 | Switch sang B → thấy 4 chip khái niệm ở footer → đọc qua → click "🧩 Augmentation là gì?" ngay | B |
| 5 | 1:20 | Đọc giải thích (độ chắc chắn CAO + analogy "kẹp tài liệu tham khảo") → gật nhẹ → click "✅ Đã hiểu → Làm Quiz củng cố" | B |
| 6 | 1:40 | Scroll xuống quiz → chọn đáp án B → đúng → status "Đã thông hiểu" | B |
| 7 | 2:00 | Switch sang C → đọc status bar "Radar quan sát học tập đang bật" → đợi im lặng → proactive popup hiện ra | C |
| 8 | 2:15 | Đọc popup kỹ ~8 giây → click "✨ Giải thích nhanh giúp mình" (không cần tự nhận ra mình kẹt) | C |

**INTERPRETED**

- Ở A: không thể mô tả điểm vướng vì không xác định được mình kẹt ở đâu → textarea là barrier, không phải cửa vào.
- Ở B: chip đặt tên thuật ngữ thay cho learner → giải quyết đúng cái mà A không làm được. T1-type cần ai đó "đặt câu hỏi trước" giúp họ.
- Ở C: proactive popup → không cần nhận ra mình kẹt, hệ thống làm việc đó.

**DECIDED**

| Chọn option | Lý do | Đánh đổi |
| --- | --- | --- |
| **C** | Không phải tự nhận ra mình kẹt, không phải mô tả vấn đề — hệ thống hỏi trước | Nếu popup xuất hiện nhầm lúc (đang đọc bình thường), sẽ bị gián đoạn |

**STILL UNPROVEN**

- T1 có tự tìm thấy chip B không nếu không có hint "Mẹo: Bôi đen văn bản" trên slide? (discoverability)
- Textarea rỗng/vague trong A là edge case UX hay hành vi đặc trưng của learner type này?

**Quote**

> "Nói chung là em không tìm được cái nội dung ở đấy luôn."
> "Thấy buồn ạ." / "Thấy lo lắng."
