# Phan Duy Thanh — `2A202602930` · Lab 18 · Case C

> **Nhóm:** H3201 · **Track 1** · **Case C — AI Support Radar (VLearn)**
> Đây là thư mục bài nộp cá nhân: toàn bộ 6 chặng của Lab 18, do Phan Duy Thanh thực hiện và chịu trách nhiệm.

---

## 1. Bản đồ file theo chặng

| Chặng | Đầu ra | File | Trạng thái |
| ----- | ------ | ---- | ---------- |
| **1 — Tổng hợp evidence** | Evidence Snapshot + Hypothesis Problem | [evidence-snapshot.md](./evidence-snapshot.md) | ✅ hoàn tất · GATE 1 |
| **2 — Chọn ba Solution Options** | Option A/B/C + Comparison Contract + Distance Check | [three-option-design-sheet.md](./three-option-design-sheet.md) (Phần I) | ✅ hoàn tất · GATE 2 |
| **3 — Human–AI Design pass** | Human–AI Decision Table | [three-option-design-sheet.md](./three-option-design-sheet.md) (Phần II) | ✅ hoàn tất · GATE 3 |
| **4 — Build ba micro-prototype** | Ba prototype + link + annotation | [prototype-link.md](./prototype-link.md) · [index.html](./index.html) | ✅ hoàn tất · GATE 4 |
| **5 — Chuẩn bị test** | Test Prompt + Observation Focus | [test/test-prompt.md](./test/test-prompt.md) · [test/observation-focus.md](./test/observation-focus.md) | ✅ hoàn tất |
| **6 — Test với ba người** | Feedback Note + Group Next Change | [prototype-feedback-note.md](./prototype-feedback-note.md) · [group-feedback-synthesis.md](./group-feedback-synthesis.md) | ⏳ khung sẵn — chờ phiên test thật |
| — | Khai báo dùng AI | [ai-support-log.md](./ai-support-log.md) | ✅ |
| — | Đóng góp cá nhân + reflection | [contribution.md](./contribution.md) | ⏳ chờ tự viết 🚫 |

---

## 2. Cấu trúc thư mục

```text
phanduythanh/
├── README.md                      # file này — bản đồ 6 chặng
├── index.html                     # trang vào chung, liệt kê A/B/C
├── evidence-snapshot.md           # Chặng 1
├── three-option-design-sheet.md   # Chặng 2 + 3
├── prototype-link.md              # Chặng 4
├── prototype-feedback-note.md     # Chặng 6 — phiên do tôi facilitate
├── group-feedback-synthesis.md    # Chặng 6 — tổng hợp nhóm
├── ai-support-log.md              # khai báo dùng AI
├── contribution.md                # đóng góp cá nhân 🚫
├── shared/                        # ~70% dùng chung
│   ├── fixture.js                 #   deck 11 slide + thuật ngữ RAG + tín hiệu giả lập
│   ├── deck.js                    #   khung slide + điều hướng + reset
│   └── styles.css                 #   visual style + component
├── options/
│   ├── option-a/                  # user-led / no-inference
│   │   ├── index.html
│   │   └── annotation.md          #   chỉ cho facilitator, không hiện cho tester
│   ├── option-b/                  # user + AI co-create
│   │   ├── index.html
│   │   └── annotation.md
│   └── option-c/                  # AI initiate, human review
│       ├── index.html
│       └── annotation.md
└── test/
    ├── test-prompt.md             # relevant context + outcome task + luật facilitation
    └── observation-focus.md       # tối đa 5 mục
```

---

## 3. Cách chạy prototype

1. Mở [index.html](./index.html) bằng double-click (Chrome/Edge).
2. Chọn một trong ba option.
3. Nút **Bắt đầu lại** ở góc phải trên là đường reset về common context.

Không cần cài gì, không cần server, không kết nối mạng. Toàn bộ AI output là **canned** — không có model thật.

---

## 4. Ba option trong một dòng

| Option | Cơ chế | AI Act / Ask / Don't Act | Quyền quyết định cuối |
| --- | --- | --- | --- |
| **A** | Learner tự khai mình kẹt ở đâu; AI chỉ gom lại | **Don't Act** | Learner |
| **B** | AI nêu tín hiệu ở cấp nội dung; learner chọn có lộ diện | **Ask** | Learner |
| **C** | AI suy đoán từng learner và xếp queue; mentor duyệt | **Act** + human review | Mentor (learner có quyền từ chối nhận) |

---

## 5. Trạng thái gate

| Gate | Nội dung | Trạng thái |
| ---- | -------- | ---------- |
| **GATE 1** | Evidence continuity — đủ 5 thành phần + ≥1 observation + ≥1 điều chưa biết | ✅ |
| **GATE 2** | Meaningful options — cùng user/situation/task/outcome, khác mechanism hoặc phân chia quyền | ✅ |
| **GATE 3** | Human control — rõ user/AI làm gì, có đường kiểm soát/phục hồi | ✅ |
| **GATE 4** | Test-ready — mở được, cùng task, reset được, không cần narrate | ✅ |
| **GATE 5** | Learning, not praise — 3 feedback độc lập + 1 Next Change + 1 Still Unproven | ⏳ chờ phiên test thật |

---

## 6. Việc còn lại của tôi

- [ ] Chốt **option tôi phụ trách chính** cùng nhóm (Chặng 2) và ghi vào [contribution.md](./contribution.md)
- [ ] Tự facilitate **1 phiên test** với người ngoài nhóm, tester chạy **cả A/B/C**, rồi tự điền [prototype-feedback-note.md](./prototype-feedback-note.md) 🚫
- [ ] Ghi lại thứ tự trình bày A/B/C đã dùng để tránh thiên lệch thứ tự
- [ ] Hợp nhất 3 note của nhóm vào [group-feedback-synthesis.md](./group-feedback-synthesis.md) → chốt **1 Next Change** + **1 Still Unproven**
- [ ] Tự viết phần đóng góp cá nhân + reflection trong [contribution.md](./contribution.md) 🚫
- [ ] Rà lại [ai-support-log.md](./ai-support-log.md) và bổ sung các lần dùng AI khác nếu có

> 🚫 Những mục gắn nhãn này **không được** để AI viết thay: quote/observation của tester, phần đóng góp cá nhân và reflection.
