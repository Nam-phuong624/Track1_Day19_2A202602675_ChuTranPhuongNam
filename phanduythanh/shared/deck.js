/* Deck renderer dùng chung — đọc window.VLEARN_DECK và dựng khung slide cho cả A/B/C.
   Chỉ điều hướng slide; mọi logic cơ chế nằm ở từng option. */
(function () {
  'use strict';

  function node(tag, className, text) {
    var el = document.createElement(tag);
    if (className) el.className = className;
    if (text != null) el.textContent = text;
    return el;
  }

  function mount(root, hooks) {
    hooks = hooks || {};
    var data = window.VLEARN_DECK;
    var slides = data.slides;
    var idx = 0;

    root.classList.add('deck');
    root.textContent = '';

    var head = node('div', 'deck__head');
    head.appendChild(node('span', 'deck__course', data.course));
    head.appendChild(node('span', 'deck__lesson', data.lesson));

    var progress = node('div', 'deck__progress');
    var progressBar = node('div', 'deck__progress-bar');
    progress.appendChild(progressBar);

    var slide = node('div', 'slide');
    var slideNo = node('div', 'slide__no');
    var slideTitle = node('h2', 'slide__title');
    var slideBody = node('ul', 'slide__body');
    var slideSlot = node('div', 'slide__slot');
    var slideActions = node('div', 'slide__actions');
    slide.appendChild(slideNo);
    slide.appendChild(slideTitle);
    slide.appendChild(slideBody);
    slide.appendChild(slideSlot);
    slide.appendChild(slideActions);

    var nav = node('div', 'deck__nav');
    var prev = node('button', 'btn btn--ghost', '← Trước');
    var next = node('button', 'btn btn--ghost', 'Sau →');
    var dots = node('div', 'deck__dots');
    prev.type = 'button';
    next.type = 'button';
    nav.appendChild(prev);
    nav.appendChild(dots);
    nav.appendChild(next);

    root.appendChild(head);
    root.appendChild(progress);
    root.appendChild(slide);
    root.appendChild(nav);

    var dotEls = slides.map(function (s, i) {
      var d = node('button', 'deck__dot');
      d.type = 'button';
      d.title = 'Slide ' + s.n;
      d.setAttribute('aria-label', 'Slide ' + s.n);
      d.addEventListener('click', function () { goTo(i); });
      dots.appendChild(d);
      return d;
    });

    function goTo(i) {
      idx = Math.max(0, Math.min(slides.length - 1, i));
      var s = slides[idx];

      slideNo.textContent = 'Slide ' + s.n + ' / ' + slides.length;
      slideTitle.textContent = s.title;
      slideBody.textContent = '';
      (s.body || []).forEach(function (line) {
        slideBody.appendChild(node('li', null, line));
      });
      slide.classList.toggle('slide--hard', !!s.hard);
      slideSlot.textContent = '';
      slideActions.textContent = '';
      progressBar.style.width = ((idx + 1) / slides.length * 100) + '%';
      dotEls.forEach(function (d, k) { d.classList.toggle('is-active', k === idx); });
      prev.disabled = idx === 0;
      next.disabled = idx === slides.length - 1;

      if (hooks.onSlide) hooks.onSlide(idx, s, slideSlot, slideActions);
    }

    prev.addEventListener('click', function () { goTo(idx - 1); });
    next.addEventListener('click', function () { goTo(idx + 1); });

    goTo(0);

    return {
      goTo: goTo,
      index: function () { return idx; },
      total: slides.length,
      reset: function () { goTo(0); }
    };
  }

  window.VD = { mount: mount };
})();
