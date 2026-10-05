# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A university lab submission (AI Thực Chiến, Lab 18 / Day 18–19, Track 1, group H3201), not a software product. It holds Vietnamese-language design documents plus static HTML micro-prototypes for **Case C — AI Support Radar (VLearn)**: three solution options (A/B/C) to the same problem hypothesis, tested with real testers. `day18.md` is the lab brief (6 "chặng"/stages, 5 GATEs); read it when the task concerns what a deliverable must contain.

All docs and UI text are in Vietnamese — keep writing in Vietnamese and match the existing tone.

## Layout

- **Repo root** — group-level deliverables (`README.md`, `three-option-design-sheet.md`, `prototype-feedback-note.md`, `group-feedback-synthesis.md`, `ai-support-log.md`, `prototype-link.md`), Day 17 interview notes in `note/`, and `record/` (audio link — not public data).
  - `interactive_micro_prototype_vlearn_option_a_b_c.html` — single-file prototype with A/B/C as tabs (inline JS).
  - `prototype_phuongnam/` — another member's prototype (`index.html` + `app.js` + `style.css`).
- **`phanduythanh/`** — the individual submission of Phan Duy Thanh covering all 6 stages; its `README.md` maps each stage to its file and tracks GATE status.

Git history shows root files were deliberately restored to the upstream template state (e.g. `three-option-design-sheet.md`). Don't "sync" root files with `phanduythanh/` versions or delete other members' folders unless asked.

## Running the prototypes

No build, no dependencies, no server, no tests. Open the HTML file directly in a browser (double-click). All "AI" output is canned — there is no model/API call, and none should be added.

## `phanduythanh/` prototype architecture

- `shared/fixture.js` sets `window.VLEARN_DECK` — the 11-slide RAG lesson, learner persona, and simulated signals. Slide 7 is flagged `hard: true` (the stuck point all options revolve around).
- `shared/deck.js` exposes `window.VD.mount(root, hooks)`, which renders the slide frame/navigation and calls `hooks.onSlide(idx, slide, slotEl, actionsEl)` on every slide change. Returns `{goTo, index, total, reset}`.
- `shared/styles.css` — shared visual style; all three options must look equally polished.
- `options/option-{a,b,c}/index.html` — each loads fixture → deck → an inline script containing only that option's critical interaction and its own state + reset logic. `annotation.md` beside each is facilitator-only.
- `index.html` — hub page linking A/B/C.

Gotcha: `mount()` calls `goTo(0)` synchronously, so `onSlide` fires **before** `mount` returns. Don't reference the returned `deck` object inside `onSlide`; track the current index in a local variable (the options use `cur` / `TOTAL`). This was a real `TypeError` bug earlier.

Option mechanisms (keep them distinct — differing only in who decides is the point of the comparison):
- **A** — learner self-marks "Chưa hiểu"; AI does not infer (Don't Act).
- **B** — AI surfaces content-level difficulty, never flags a person; learner chooses whether to identify themself (Ask).
- **C** — AI builds a per-learner Support Queue; mentor reviews before any contact; learner can opt out (Act + human review).

Test-readiness rules (GATE 4): no A/B/C labels or option intent visible to testers inside option pages, every option has a "Bắt đầu lại" reset to the common starting context, and all three share the same context and task.

## Rules on AI-generated content (lab academic-integrity requirement)

- Never fabricate interview data, tester quotes, observations, or feedback. Leave such fields empty with `[điền]` / "CHƯA CÓ DỮ LIỆU".
- Never write the personal contribution or reflection sections (marked 🚫, e.g. `phanduythanh/contribution.md`, tester observations in feedback notes).
- Don't mark group decisions or tests as done/verified unless the user says so.
- When AI is used for a deliverable, it should be declared in the relevant `ai-support-log.md` (what AI did, where it was wrong, how it was fixed).
- Don't claim the problem hypothesis is validated or that users "confirmed" a solution — the lab explicitly forbids that conclusion.
