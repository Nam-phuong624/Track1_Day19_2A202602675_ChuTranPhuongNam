# Prototype Link — A/B/C dùng chung của nhóm

> **Nhóm:** H3201 · **Track 1** · **Case C — AI Support Radar**
> Đầu ra của **Chặng 4 — Build ba micro-prototype** (GATE 4).
> Nếu prototype là file trong repo, ghi đường dẫn tương đối; nếu là link ngoài (Figma/Framer/Netlify/…), ghi URL và đảm bảo **người ngoài nhóm mở được**.

---

## 1. Link ba option

| Option | Cơ chế (1 câu) | Người phụ trách | Link / đường dẫn | Trạng thái | Đã test mở trên máy khác? |
| --- | --- | --- | --- | --- | --- |
| **A** | User-led / No-inference | ✍️ | ✍️ | ⬜ chưa · ⬜ đang build · ⬜ test-ready | ⬜ |
| **B** | User + AI co-create | ✍️ | ✍️ | ⬜ chưa · ⬜ đang build · ⬜ test-ready | ⬜ |
| **C** | AI initiate, Human review | ✍️ | ✍️ | ⬜ chưa · ⬜ đang build · ⬜ test-ready | ⬜ |

**Kho context/content dùng chung (~70%):** ✍️ *(đường dẫn tới thư mục `shared/`, file content, fixture, component chung)*

---

## 2. Cách mở & quay về điểm xuất phát (reset path)

> Tester phải tự mở được, tự làm hết task, và **quay về được context ban đầu** mà không cần nhóm giải thích.

| Option | Cách mở (1–3 bước) | Reset path | Thời gian mở mục tiêu |
| --- | --- | --- | --- |
| **A** | | | ≤ 15 giây |
| **B** | | | ≤ 15 giây |
| **C** | | | ≤ 15 giây |

---

## 3. Phạm vi micro-prototype

- [ ] Mỗi option chỉ gồm **2–3 trạng thái** quanh **một** critical interaction
- [ ] Không build full product, không gọi API/model thật nếu không cần thiết
- [ ] Cả ba dùng chung context screen, content và visual components
- [ ] Không cần người của nhóm ngồi cạnh narrate
- [ ] Có nút/luồng reset rõ ràng

---

## 4. QA trước khi mang đi test (10–15 phút cuối sprint)

Mỗi người thử option do **người khác** build, rồi cả nhóm chuẩn hoá A/B/C.

| # | Hạng mục kiểm | A | B | C | Người kiểm |
| - | ------------- | - | - | - | ---------- |
| 1 | Mở được trên máy người khác | ⬜ | ⬜ | ⬜ | |
| 2 | Chạy đủ task end-to-end | ⬜ | ⬜ | ⬜ | |
| 3 | Reset về context ban đầu OK | ⬜ | ⬜ | ⬜ | |
| 4 | Không lộ tên/ý đồ của option cho tester | ⬜ | ⬜ | ⬜ | |
| 5 | Ba option trông cùng "độ hoàn thiện" (không có option nào nhỉnh hơn rõ rệt) | ⬜ | ⬜ | ⬜ | |

**Ghi chú lỗi phát hiện khi QA:** ✍️
