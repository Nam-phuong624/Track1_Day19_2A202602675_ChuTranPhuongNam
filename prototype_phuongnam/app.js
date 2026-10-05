/**
 * VLearn AI Support Radar Prototype (Case C · Lab 18)
 * Designed for Generalized In-situ Explanation & Testing 3 Solution Mechanisms
 */

document.addEventListener('DOMContentLoaded', () => {
    // State management
    let currentOption = 'B'; // Default active option
    let slideSeconds = 5;
    let timerInterval = null;
    let proactiveTriggered = false;
    let optionCDismissed = false;
    let lastSelectedText = '';
    let currentTermInFocus = 'Augmentation (Bổ sung ngữ cảnh)';

    // DOM Elements
    const optionBtns = document.querySelectorAll('.opt-btn');
    const currentOptionTag = document.getElementById('currentOptionTag');
    const currentOptionDesc = document.getElementById('currentOptionDesc');
    const annotationBanner = document.getElementById('annotationBanner');
    const toggleBannerBtn = document.getElementById('toggleBannerBtn');
    const resetBtn = document.getElementById('resetBtn');
    const slideTimer = document.getElementById('slideTimer');
    const slideCanvas = document.getElementById('slideCanvas');

    // Action panels
    const optAPanel = document.getElementById('optAPanel');
    const optBPanel = document.getElementById('optBPanel');
    const optCPanel = document.getElementById('optCPanel');

    // Floating text selection popup
    const textSelectionPopup = document.getElementById('textSelectionPopup');
    const btnExplainSelection = document.getElementById('btnExplainSelection');
    const btnMarkSelectionA = document.getElementById('btnMarkSelectionA');

    // Assistant Drawer (Option B)
    const assistantDrawerB = document.getElementById('assistantDrawerB');
    const btnOpenAssistantB = document.getElementById('btnOpenAssistantB');
    const btnCloseDrawerB = document.getElementById('btnCloseDrawerB');
    const chatContainerB = document.getElementById('chatContainerB');
    const chatMessagesB = document.getElementById('chatMessagesB');
    const welcomeBoxB = document.getElementById('welcomeBoxB');
    const chatFormB = document.getElementById('chatFormB');
    const chatInputB = document.getElementById('chatInputB');

    // Modals
    const modalOptionA = document.getElementById('modalOptionA');
    const btnMarkOptionA = document.getElementById('btnMarkOptionA');
    const btnSubmitOptionA = document.getElementById('btnSubmitOptionA');
    const modalEscalationB = document.getElementById('modalEscalationB');
    const btnSubmitTicketB = document.getElementById('btnSubmitTicketB');
    const ticketSubjectB = document.getElementById('ticketSubjectB');
    const ticketQuestionB = document.getElementById('ticketQuestionB');

    // Proactive Popup (Option C)
    const proactivePopupC = document.getElementById('proactivePopupC');
    const btnSimulateStuckC = document.getElementById('btnSimulateStuckC');
    const btnClosePopupC = document.getElementById('btnClosePopupC');
    const btnAcceptPopupC = document.getElementById('btnAcceptPopupC');
    const btnEscalatePopupC = document.getElementById('btnEscalatePopupC');
    const btnDismissPopupC = document.getElementById('btnDismissPopupC');
    const btnWhyAskC = document.getElementById('btnWhyAskC');

    // Quiz elements
    const btnSubmitQuiz = document.getElementById('btnSubmitQuiz');
    const btnRetryQuiz = document.getElementById('btnRetryQuiz');
    const quizFeedback = document.getElementById('quizFeedback');
    const quizStatus = document.getElementById('quizStatus');
    const quizSection = document.getElementById('quizSection');

    // Toast Container
    const toastContainer = document.getElementById('toastContainer');

    // Comprehensive Generalized In-situ Knowledge Base
    const CONCEPTS_DB = {
        'augmentation (bổ sung ngữ cảnh)': {
            term: 'Augmentation (Bổ sung ngữ cảnh)',
            confidence: 'CAO',
            sources: 'Slide 6 (Giai đoạn 2: Augmentation) & Slide 7',
            plainAnalogy: 'Tương tự như việc trước khi làm bài thi mở, bạn kẹp thêm tài liệu tham khảo chính xác vào đề bài để tra cứu.',
            inContextRole: 'Hệ thống tự động lấy các đoạn tài liệu tìm được từ bước Retrieval để ghép trực tiếp vào khung Prompt (Context Window) của người dùng trước khi gửi tới LLM.',
            boundaryWarning: '💡 Đây là mấu chốt để trả lời đúng câu Quiz bên dưới Slide 6.',
            coachDraft: 'Em đã đọc phần Augmentation nhưng chưa hình dung được cách hệ thống ghép tài liệu vào prompt mà không làm nhiễu câu hỏi ban đầu. Nhờ Coach cho em ví dụ cụ thể dạng text prompt thực tế ạ.'
        },
        'retrieval (truy xuất)': {
            term: 'Retrieval (Truy xuất)',
            confidence: 'CAO',
            sources: 'Slide 6 (Giai đoạn 1) & Kiến thức Vector Search',
            plainAnalogy: 'Giống như thủ thư tra cứu nhanh các cuốn sách liên quan nhất theo từ khoá trong thư viện.',
            inContextRole: 'Quá trình chuyển đổi câu hỏi của người dùng thành vector số để tìm kiếm trong cơ sở tri thức các đoạn văn bản có độ tương đồng ngữ nghĩa cao nhất.',
            boundaryWarning: '⚠️ Lưu ý: Slide 6 chỉ trình bày luồng cơ bản; thuật toán tính khoảng cách vector (Cosine Similarity) nằm ở Bài 5.',
            coachDraft: 'Em chưa rõ bước Retrieval đánh giá độ tương đồng của văn bản như thế nào để chọn ra tài liệu đúng nhất. Nhờ Coach giải thích thêm ạ.'
        },
        'generation (tạo sinh có căn cứ)': {
            term: 'Generation (Tạo sinh có căn cứ)',
            confidence: 'CAO',
            sources: 'Slide 6 (Giai đoạn 3)',
            plainAnalogy: 'Mô hình đóng vai trò như người phát ngôn chỉ đọc tài liệu được cấp và trả lời, không tự ý suy diễn ngoài đời thực.',
            inContextRole: 'Mô hình ngôn ngữ (LLM) nhận Prompt đã chứa tài liệu thực tế và tổng hợp thành câu trả lời tự nhiên, chính xác, kèm trích dẫn nguồn.',
            boundaryWarning: 'Độ chính xác của câu trả lời phụ thuộc 100% vào chất lượng tài liệu được nạp ở bước Augmentation.',
            coachDraft: 'Em muốn hỏi làm sao để ép LLM chỉ trả lời dựa trên tài liệu được nạp mà không dùng kiến thức huấn luyện cũ của nó ạ?'
        },
        'hallucination (ảo giác ai)': {
            term: 'Hallucination (Ảo giác AI)',
            confidence: 'CAO',
            sources: 'Slide 6 (Mục 1: Vấn đề cốt lõi)',
            plainAnalogy: 'Hiện tượng AI "chém gió" rất tự tin về một thông tin hoàn toàn không có thật hoặc bịa đặt dữ liệu.',
            inContextRole: 'Xảy ra khi LLM cố gắng trả lời những câu hỏi về dữ liệu mà nó chưa từng được huấn luyện. Kiến trúc trên slide giải quyết triệt để lỗi này bằng cách cung cấp dữ liệu ngoài làm căn cứ.',
            boundaryWarning: 'Kiến trúc này giúp giảm thiểu 95% ảo giác nhưng vẫn có thể sai nếu bước Retrieval lấy nhầm tài liệu.',
            coachDraft: 'Nhờ Coach giải thích vì sao đưa tài liệu vào prompt lại triệt tiêu được hiện tượng ảo giác của AI ạ?'
        },
        'vector embedding': {
            term: 'Vector Embedding',
            confidence: 'TRUNG BÌNH',
            sources: 'Slide 6 (Mục Giai đoạn 1)',
            plainAnalogy: 'Biến một câu văn thành một toạ độ số nhiều chiều sao cho các câu có ý nghĩa giống nhau sẽ nằm gần nhau trong không gian.',
            inContextRole: 'Dùng để biểu diễn ngữ nghĩa của tài liệu để máy tính so khớp và tìm kiếm nhanh chóng.',
            boundaryWarning: '⚠️ Cảnh báo: Cách chuyển đổi văn bản thành Vector Embedding thuộc phạm vi bài học tuần sau.',
            coachDraft: 'Em chưa hiểu rõ khái niệm Vector Embedding được tạo ra và lưu trữ như thế nào trong hệ thống ạ.'
        },
        'fine-tuning': {
            term: 'Fine-tuning (Tái huấn luyện)',
            confidence: 'CAO',
            sources: 'Slide 6 (Điểm mấu chốt)',
            plainAnalogy: 'Giống như việc bạn phải học lại toàn bộ một khoá học để cập nhật một vài thông tin mới, rất tốn kém và mất thời gian.',
            inContextRole: 'Kỹ thuật cập nhật trọng số nơ-ron của LLM. Kỹ thuật đưa dữ liệu vào ngữ cảnh (trên slide) là giải pháp thay thế rẻ hơn hàng trăm lần so với Fine-tuning khi chỉ cần cập nhật kiến thức động.',
            boundaryWarning: 'Fine-tuning phù hợp để dạy AI cách hành xử/văn phong, còn RAG/Context phù hợp để nạp kiến thức mới.',
            coachDraft: 'Nhờ Coach so sánh giúp em khi nào dự án thực tế nên chọn Fine-tuning và khi nào nên dùng tích hợp ngữ cảnh như slide 6 ạ?'
        },
        'knowledge cutoff': {
            term: 'Knowledge Cutoff (Mốc đóng băng tri thức)',
            confidence: 'CAO',
            sources: 'Slide 6 (Mục 1)',
            plainAnalogy: 'Giống như một cuốn bách khoa toàn thư in năm 2023 thì không thể biết sự kiện xảy ra năm 2024.',
            inContextRole: 'Giới hạn thời điểm kết thúc dữ liệu huấn luyện của LLM. Tích hợp dữ liệu ngoài giúp mô hình vượt qua giới hạn này mà không cần huấn luyện lại.',
            boundaryWarning: 'Thông tin cơ bản, dễ hiểu.',
            coachDraft: 'Em đã hiểu khái niệm Knowledge Cutoff ạ.'
        },
        'context window (cửa sổ ngữ cảnh)': {
            term: 'Context Window (Cửa sổ ngữ cảnh)',
            confidence: 'CAO',
            sources: 'Slide 6 (Mục Giai đoạn 2)',
            plainAnalogy: 'Giống như bộ nhớ ngắn hạn của con người, chỉ nhớ được một lượng từ ngữ nhất định trong một cuộc trò chuyện.',
            inContextRole: 'Độ dài tối đa của Prompt mà mô hình có thể đọc được trong 1 lượt. Bước Augment phải chọn lọc tài liệu gọn gàng để không vượt quá giới hạn này.',
            boundaryWarning: 'Mỗi mô hình có độ dài Context Window khác nhau (ví dụ: 8k, 32k, 128k tokens).',
            coachDraft: 'Nhờ Coach giải thích nếu tài liệu tìm được quá dài vượt quá Context Window thì xử lý thế nào ạ?'
        }
    };

    // --- 1. OPTION SWITCHING LOGIC ---
    function setOption(opt) {
        currentOption = opt;

        optionBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.option === opt);
        });

        optAPanel.classList.add('hidden');
        optBPanel.classList.add('hidden');
        optCPanel.classList.add('hidden');
        proactivePopupC.classList.add('hidden');
        textSelectionPopup.classList.add('hidden');
        assistantDrawerB.classList.add('hidden');

        // Reset timer & proactive state when entering C so tester gets natural 20s window
        if (opt === 'C') {
            slideSeconds = 5;
            proactiveTriggered = false;
            optionCDismissed = false;
        }

        if (opt === 'A') {
            currentOptionTag.textContent = 'OPTION A (Phan Duy Thanh)';
            currentOptionDesc.innerHTML = '<strong>Cơ chế:</strong> User-Led / No-Inference. Học viên tự đánh dấu điểm khó hiểu trên slide hoặc bôi đen đoạn văn bản và gửi câu hỏi cho Coach thủ công (hỗ trợ gửi ẩn danh).';
            optAPanel.classList.remove('hidden');
        } else if (opt === 'B') {
            currentOptionTag.textContent = 'OPTION B (Chử Trần Phương Nam)';
            currentOptionDesc.innerHTML = '<strong>Cơ chế:</strong> In-situ Grounded AI. Học viên click vào bất kỳ từ khoá nào hoặc bôi đen văn bản để AI giải thích tại chỗ; nếu vẫn chưa hiểu sẽ tự tạo Structured Ticket gửi Coach ẩn danh.';
            optBPanel.classList.remove('hidden');
            assistantDrawerB.classList.remove('hidden');
        } else if (opt === 'C') {
            currentOptionTag.textContent = 'OPTION C (Bùi Hải Nam + Phùng Gia Khánh)';
            currentOptionDesc.innerHTML = '<strong>Cơ chế:</strong> Behavioral Proactive AI. Hệ thống đo lường thời gian dừng ở đoạn khó (>20s), tự động hiển thị gợi ý mở lời hỏi thăm kèm giải trình "Vì sao mình hỏi?".';
            optCPanel.classList.remove('hidden');
        }
    }

    optionBtns.forEach(btn => {
        btn.addEventListener('click', () => setOption(btn.dataset.option));
    });

    toggleBannerBtn.addEventListener('click', () => {
        annotationBanner.classList.toggle('collapsed');
        toggleBannerBtn.textContent = annotationBanner.classList.contains('collapsed') ? 'Mở rộng' : 'Thu gọn';
    });

    // --- 2. TIMER & PROACTIVE BEHAVIOR (Option C) ---
    function startTimer() {
        if (timerInterval) clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            slideSeconds++;
            const mins = String(Math.floor(slideSeconds / 60)).padStart(2, '0');
            const secs = String(slideSeconds % 60).padStart(2, '0');
            slideTimer.textContent = `⏱️ ${mins}:${secs}`;

            if (currentOption === 'C' && slideSeconds >= 20 && !proactiveTriggered && !optionCDismissed) {
                triggerProactiveC();
            }
        }, 1000);
    }
    startTimer();

    document.getElementById('prevSlideBtn').addEventListener('click', () => {
        showToast('ℹ️ Prototype đang cố định tại Slide 6 để thử nghiệm fixture chung.');
    });
    document.getElementById('nextSlideBtn').addEventListener('click', () => {
        showToast('ℹ️ Prototype đang cố định tại Slide 6 để thử nghiệm fixture chung.');
    });

    // --- 3. TEXT SELECTION & INTERACTIVE TERM HIGHLIGHTING ---
    // Listen to mouse selection on slide
    document.addEventListener('selectionchange', () => {
        const selection = window.getSelection();
        const selectedText = selection.toString().trim();

        if (selectedText.length > 2 && slideCanvas.contains(selection.anchorNode)) {
            lastSelectedText = selectedText;
            const range = selection.getRangeAt(0);
            const rect = range.getBoundingClientRect();
            const canvasRect = slideCanvas.getBoundingClientRect();

            textSelectionPopup.style.top = `${rect.top - canvasRect.top - 40}px`;
            textSelectionPopup.style.left = `${rect.left - canvasRect.left}px`;
            textSelectionPopup.classList.remove('hidden');
        } else {
            // Do not hide immediately if clicking inside the popup
        }
    });

    document.addEventListener('mousedown', (e) => {
        if (!textSelectionPopup.contains(e.target) && !e.target.classList.contains('interactive-term')) {
            textSelectionPopup.classList.add('hidden');
        }
    });

    // Floating action: Explain selected text
    btnExplainSelection.addEventListener('click', () => {
        textSelectionPopup.classList.add('hidden');
        assistantDrawerB.classList.remove('hidden');
        handleExplanationRequest(lastSelectedText);
    });

    // Floating action: Mark selected text for Option A
    btnMarkSelectionA.addEventListener('click', () => {
        textSelectionPopup.classList.add('hidden');
        document.getElementById('optADesc').value = `Em chưa hiểu đoạn văn bản này trên Slide 6: "${lastSelectedText}"`;
        modalOptionA.classList.remove('hidden');
    });

    // Click on any interactive term or card
    document.querySelectorAll('.interactive-term, .interactive-card').forEach(elem => {
        elem.addEventListener('click', (e) => {
            e.stopPropagation();
            const term = elem.dataset.term || elem.textContent.trim();
            if (currentOption === 'B') {
                assistantDrawerB.classList.remove('hidden');
                handleExplanationRequest(term);
            } else if (currentOption === 'A') {
                document.getElementById('optADesc').value = `Em chưa hiểu khái niệm "${term}" trên Slide 6.`;
                modalOptionA.classList.remove('hidden');
            } else if (currentOption === 'C') {
                assistantDrawerB.classList.remove('hidden');
                handleExplanationRequest(term);
            }
        });
    });

    // Concept chips in Option B footer
    document.querySelectorAll('#conceptChipsContainer .chip').forEach(chip => {
        chip.addEventListener('click', () => {
            assistantDrawerB.classList.remove('hidden');
            handleExplanationRequest(chip.dataset.term);
        });
    });

    // Quick questions in drawer
    document.querySelectorAll('.quick-q-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            handleExplanationRequest(btn.dataset.term);
        });
    });

    // Open/Close Drawer
    btnOpenAssistantB.addEventListener('click', () => {
        assistantDrawerB.classList.remove('hidden');
        chatInputB.focus();
    });

    btnCloseDrawerB.addEventListener('click', () => {
        assistantDrawerB.classList.add('hidden');
    });

    chatFormB.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = chatInputB.value.trim();
        if (query) {
            handleExplanationRequest(query);
            chatInputB.value = '';
        }
    });

    // --- 4. GENERALIZED EXPLANATION ENGINE (Option B) ---
    function handleExplanationRequest(queryText) {
        welcomeBoxB.classList.add('hidden');

        // Append User Question
        const userMsg = document.createElement('div');
        userMsg.className = 'message user-message';
        userMsg.innerHTML = `<div class="user-bubble">❓ Giải thích giúp mình: <strong>${escapeHtml(queryText)}</strong></div>`;
        chatMessagesB.appendChild(userMsg);
        scrollChatToBottom();

        // Search in Knowledge Base or generate structured fallback
        setTimeout(() => {
            const matchKey = findBestMatch(queryText);
            const data = matchKey ? CONCEPTS_DB[matchKey] : generateDynamicExplanation(queryText);

            currentTermInFocus = data.term;

            const botMsg = document.createElement('div');
            botMsg.className = 'message bot-message';
            botMsg.innerHTML = `
                <div class="bot-bubble">
                    <div class="uncertainty-tag">🛡️ Mức độ chắc chắn: ${data.confidence}</div>
                    
                    <div style="font-size: 0.92rem; font-weight: 700; color: #1e293b; margin-bottom: 6px;">
                        📌 Khái niệm: ${escapeHtml(data.term)}
                    </div>
                    
                    <div style="background: #f8fafc; border-left: 3px solid #3b82f6; padding: 8px 10px; border-radius: 4px; font-size: 0.82rem; margin-bottom: 8px;">
                        <strong>💡 Hiểu đơn giản (Analogy):</strong> ${data.plainAnalogy}
                    </div>

                    <div style="font-size: 0.83rem; line-height: 1.5; color: #334155; margin-bottom: 8px;">
                        <strong>🎯 Ý nghĩa trong bài giảng:</strong> ${data.inContextRole}
                    </div>

                    <div style="font-size: 0.78rem; color: #b45309; background: #fffbeb; padding: 6px 10px; border-radius: 4px;">
                        ${data.boundaryWarning}
                    </div>

                    <span class="grounding-source">📚 Dẫn chứng: ${data.sources}</span>
                    
                    <div class="bot-actions-row">
                        <button class="btn btn-success btn-sm btn-done-quiz">✅ Đã hiểu (Làm Quiz củng cố)</button>
                        <button class="btn btn-outline-secondary btn-sm btn-need-coach">❓ Vẫn chưa thông (Nhờ Coach)</button>
                    </div>
                </div>
            `;
            chatMessagesB.appendChild(botMsg);
            scrollChatToBottom();

            // Actions on explanation card
            botMsg.querySelector('.btn-done-quiz').addEventListener('click', () => {
                showToast('🎯 Tuyệt vời! Bạn hãy kiểm tra mức độ hiểu bài qua câu Quiz bên dưới.');
                quizSection.scrollIntoView({ behavior: 'smooth' });
            });

            botMsg.querySelector('.btn-need-coach').addEventListener('click', () => {
                openEscalationModalB(data);
            });

        }, 350);
    }

    function findBestMatch(text) {
        const lower = text.toLowerCase();
        for (const key in CONCEPTS_DB) {
            const shortKey = key.split('(')[0].trim();
            if (lower.includes(shortKey) || lower.includes(key)) {
                return key;
            }
        }
        return null;
    }

    function generateDynamicExplanation(text) {
        return {
            term: text.length > 40 ? text.substring(0, 40) + '...' : text,
            confidence: 'TRUNG BÌNH',
            sources: 'Slide 6 — Trích xuất trực tiếp từ đoạn bạn chọn trên bài giảng',
            plainAnalogy: 'Đây là một thông tin chuyên ngành nằm trong quy trình xử lý dữ liệu của mô hình.',
            inContextRole: `Đoạn thông tin "<em>${escapeHtml(text)}</em>" bổ sung chi tiết cho việc liên kết giữa dữ liệu bên ngoài và câu trả lời của AI.`,
            boundaryWarning: '⚠️ Nếu đoạn này còn trừu tượng, bạn có thể gửi nhanh câu hỏi tới Coach bên dưới.',
            coachDraft: `Em đang đọc đoạn trên Slide 6: "${text}" nhưng chưa hiểu rõ ý nghĩa thực tế. Nhờ Coach giải thích thêm giúp em với ạ.`
        };
    }

    function scrollChatToBottom() {
        chatContainerB.scrollTop = chatContainerB.scrollHeight;
    }

    // --- 5. ESCALATION MODALS (Option A & Option B) ---
    function openEscalationModalB(conceptData) {
        ticketSubjectB.innerHTML = `<strong>🎯 Khái niệm đang hỏi:</strong> ${escapeHtml(conceptData.term)}`;
        ticketQuestionB.value = conceptData.coachDraft || `Em đã đọc giải thích về "${conceptData.term}" trên Slide 6 nhưng vẫn chưa rõ cách áp dụng thực tế. Nhờ Coach hướng dẫn thêm ạ.`;
        modalEscalationB.classList.remove('hidden');
    }

    btnSubmitTicketB.addEventListener('click', () => {
        const isAnon = document.querySelector('input[name="optB_identity"]:checked').value === 'anonymous';
        modalEscalationB.classList.add('hidden');
        showToast(`📤 Đã tạo Structured Ticket gửi Coach (${isAnon ? 'Ẩn danh' : 'Kèm tên'}). Coach sẽ nhận được đầy đủ ngữ cảnh Slide 6 và khái niệm "${currentTermInFocus}".`);
    });

    btnMarkOptionA.addEventListener('click', () => {
        modalOptionA.classList.remove('hidden');
    });

    btnSubmitOptionA.addEventListener('click', () => {
        const isAnon = document.querySelector('input[name="optA_identity"]:checked').value === 'anonymous';
        modalOptionA.classList.add('hidden');
        showToast(`🚩 Đã gửi vướng mắc tới Coach (${isAnon ? 'Ẩn danh' : 'Kèm tên'}). Hệ thống đã gắn số Slide 6.`);
        document.getElementById('optADesc').value = '';
    });

    // --- 6. OPTION C PROACTIVE BEHAVIOR ---
    function triggerProactiveC() {
        proactiveTriggered = true;
        proactivePopupC.classList.remove('hidden');
    }

    btnSimulateStuckC.addEventListener('click', () => {
        triggerProactiveC();
    });

    btnClosePopupC.addEventListener('click', () => {
        proactivePopupC.classList.add('hidden');
        optionCDismissed = true;
    });

    btnDismissPopupC.addEventListener('click', () => {
        proactivePopupC.classList.add('hidden');
        showToast('Đã tắt gợi ý trong phiên học này.');
        optionCDismissed = true;
    });

    btnAcceptPopupC.addEventListener('click', () => {
        proactivePopupC.classList.add('hidden');
        assistantDrawerB.classList.remove('hidden');
        handleExplanationRequest('Augmentation (Bổ sung ngữ cảnh)');
    });

    btnEscalatePopupC.addEventListener('click', () => {
        proactivePopupC.classList.add('hidden');
        const matchData = CONCEPTS_DB['augmentation (bổ sung ngữ cảnh)'];
        openEscalationModalB(matchData);
    });

    btnWhyAskC.addEventListener('click', () => {
        showToast('ℹ️ Radar đo thời gian dừng ở Slide 6 (>20s). Không đọc dữ liệu cá nhân hay tin nhắn riêng.');
    });

    // Modal close buttons
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.dataset.modal;
            if (modalId) {
                document.getElementById(modalId).classList.add('hidden');
            }
        });
    });

    // --- 7. QUIZ VERIFICATION LOGIC ---
    btnSubmitQuiz.addEventListener('click', () => {
        const selected = document.querySelector('input[name="rag_quiz"]:checked');
        if (!selected) {
            showToast('⚠️ Vui lòng chọn một đáp án trước khi bấm kiểm tra.');
            return;
        }

        document.querySelectorAll('.quiz-option-label').forEach(lbl => {
            lbl.classList.remove('correct', 'incorrect');
        });

        const chosenVal = selected.value;
        const chosenLabel = selected.closest('.quiz-option-label');
        const correctLabel = document.getElementById('correctOptionLabel');

        quizFeedback.classList.remove('hidden', 'success', 'error');

        if (chosenVal === 'B') {
            chosenLabel.classList.add('correct');
            quizFeedback.classList.add('success');
            quizFeedback.innerHTML = `
                <strong>🎉 Hoàn toàn chính xác!</strong> 
                Bước <em>Augmentation</em> thực chất là đưa tài liệu truy xuất được vào làm Context của Prompt gửi tới LLM. Bạn đã nắm vững cơ chế hoạt động của bài học.
            `;
            quizStatus.textContent = '✅ Đã thông hiểu';
            quizStatus.style.color = '#16a34a';
        } else {
            chosenLabel.classList.add('incorrect');
            correctLabel.classList.add('correct');
            quizFeedback.classList.add('error');
            quizFeedback.innerHTML = `
                <strong>Chưa chính xác!</strong> 
                Đáp án đúng là <strong>B</strong>. Augmentation không phải là Fine-tune lại mô hình hay dịch thuật, mà là bổ sung tài liệu vào ngữ cảnh Prompt trước khi sinh câu trả lời.
            `;
            quizStatus.textContent = '❌ Chưa đúng';
            quizStatus.style.color = '#dc2626';
        }

        btnSubmitQuiz.classList.add('hidden');
        btnRetryQuiz.classList.remove('hidden');
    });

    btnRetryQuiz.addEventListener('click', () => {
        document.querySelectorAll('input[name="rag_quiz"]').forEach(r => r.checked = false);
        document.querySelectorAll('.quiz-option-label').forEach(lbl => lbl.classList.remove('correct', 'incorrect'));
        quizFeedback.classList.add('hidden');
        quizStatus.textContent = 'Chưa nộp bài';
        quizStatus.style.color = 'var(--text-muted)';
        btnSubmitQuiz.classList.remove('hidden');
        btnRetryQuiz.classList.add('hidden');
    });

    document.querySelectorAll('.quiz-option-label').forEach(label => {
        label.addEventListener('click', () => {
            document.querySelectorAll('.quiz-option-label').forEach(l => l.classList.remove('selected'));
            label.classList.add('selected');
        });
    });

    // --- 8. RESET PATH LOGIC (≤ 5s) ---
    resetBtn.addEventListener('click', () => {
        slideSeconds = 5;
        proactiveTriggered = false;
        optionCDismissed = false;

        chatMessagesB.innerHTML = '';
        welcomeBoxB.classList.remove('hidden');
        assistantDrawerB.classList.add('hidden');
        textSelectionPopup.classList.add('hidden');

        modalOptionA.classList.add('hidden');
        modalEscalationB.classList.add('hidden');
        proactivePopupC.classList.add('hidden');

        btnRetryQuiz.click();
        setOption('B');

        showToast('🔄 Prototype đã được Reset về trạng thái ban đầu.');
    });

    // Helper: Toast notification
    function showToast(msg) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<span>${escapeHtml(msg)}</span>`;
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 200);
        }, 3500);
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Initialize
    setOption('B');
});
