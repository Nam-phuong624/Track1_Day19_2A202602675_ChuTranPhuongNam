/* Fixture dùng chung cho cả A/B/C.
   Toàn bộ nội dung là DỮ LIỆU MẪU (canned) — không có model hay API thật.
   Cả ba option đọc cùng deck, cùng thuật ngữ gây vướng, cùng persona learner. */
(function () {
  'use strict';

  window.VLEARN_DECK = {
    course: 'AI Thực Chiến · K4',
    lesson: 'Buổi 07 — Retrieval-Augmented Generation',
    learner: 'Minh Anh',

    slides: [
      { n: 1, title: 'Mục tiêu buổi học', body: [
        'Hiểu vì sao LLM cần tri thức bên ngoài.',
        'Nắm pipeline retrieval ở mức khái quát.',
        'Làm quiz cuối bài để tự kiểm tra.'
      ] },
      { n: 2, title: 'Vì sao LLM cần tri thức ngoài?', body: [
        'Mô hình chỉ biết dữ liệu đến thời điểm huấn luyện.',
        'Không tra được tài liệu nội bộ của bạn.',
        'Khi không biết, mô hình vẫn trả lời — và có thể bịa.'
      ] },
      { n: 3, title: 'Pipeline tổng quát', body: [
        'Tài liệu → chunk → embedding → vector store.',
        'Câu hỏi → embedding → tìm kiếm tương tự → ngữ cảnh.',
        'LLM sinh câu trả lời dựa trên ngữ cảnh lấy được.'
      ] },
      { n: 4, title: 'Embedding', body: [
        'Vector biểu diễn ngữ nghĩa của đoạn văn bản.',
        'Hai đoạn càng gần nhau trong không gian vector thì càng giống nghĩa.',
        'Không so khớp từ khoá — nên tìm được cả khi dùng từ khác.'
      ] },
      { n: 5, title: 'Vector store và tìm kiếm tương tự', body: [
        'Lưu vector kèm metadata của chunk.',
        'Truy vấn top-k theo độ tương đồng cosine.',
        'Chất lượng phụ thuộc mạnh vào embedding model.'
      ] },
      { n: 6, title: 'Chunking', body: [
        'Chia tài liệu dài thành các đoạn nhỏ.',
        'Quá nhỏ → mất ngữ cảnh; quá lớn → nhiễu.',
        'Cho các chunk overlap nhau để không cắt giữa ý.'
      ] },
      { n: 7, title: 'Retrieval-Augmented Generation (RAG)', hard: true, body: [
        'RAG = retrieval + generation.',
        'Lấy ngữ cảnh liên quan, nhét vào prompt, rồi mới sinh câu trả lời.',
        'Giảm bịa nhưng không loại bỏ hoàn toàn.',
        'Chất lượng câu trả lời không thể cao hơn chất lượng ngữ cảnh lấy được.'
      ] },
      { n: 8, title: 'Reranking', body: [
        'Sắp xếp lại top-k theo độ liên quan thật sự.',
        'Cross-encoder chính xác hơn nhưng chậm hơn.',
        'Dùng khi top-k ban đầu quá nhiễu.'
      ] },
      { n: 9, title: 'Đánh giá chất lượng', body: [
        'Faithfulness — trả lời có bám ngữ cảnh không.',
        'Answer relevance — có đúng câu hỏi không.',
        'Context recall — có lấy đủ tài liệu cần không.'
      ] },
      { n: 10, title: 'Lỗi thường gặp', body: [
        'Chunk cắt giữa ý nên ngữ cảnh lấy về bị rời.',
        'Embedding không hợp ngôn ngữ hoặc lĩnh vực.',
        'Prompt không nêu rõ phải bám ngữ cảnh.'
      ] },
      { n: 11, title: 'Tóm tắt', body: [
        'RAG nối retrieval với generation.',
        'Chất lượng phụ thuộc chunking và embedding.',
        'Luôn đánh giá bằng bộ ba faithfulness / relevance / recall.'
      ] }
    ],

    quiz: [
      { n: 1, q: 'Embedding dùng để làm gì?',
        options: ['Nén tài liệu cho nhẹ', 'Biểu diễn ngữ nghĩa thành vector', 'Sinh câu trả lời'],
        answer: 1 },
      { n: 2, q: 'RAG giảm hiện tượng bịa bằng cách nào?',
        options: ['Huấn luyện lại mô hình', 'Đưa ngữ cảnh lấy được vào prompt', 'Tắt chế độ sáng tạo'],
        answer: 1 },
      { n: 3, q: 'Reranking khác tìm kiếm vector ở điểm nào?',
        options: ['Sắp xếp lại kết quả theo độ liên quan', 'Bỏ qua bước embedding', 'Chỉ chạy khi offline'],
        answer: 0 }
    ],

    /* Tín hiệu hành vi giả lập — dùng cho prototype, không phải log thật */
    signals: {
      cohortSize: 48,
      slide7Revisit: 37,
      learnerSlide7DwellSeconds: 214,
      learnerQuizChanges: 2,
      learnerQuizChangedQuestion: 2,
      inferenceConfidence: 0.62
    }
  };
})();
