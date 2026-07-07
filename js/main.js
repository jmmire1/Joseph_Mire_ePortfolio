/* ============================================================
   main.js — scroll reveals + small niceties
   ============================================================ */

(function () {
  // Respect users who prefer reduced motion: show everything immediately
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('in');
    });
    return;
  }

  // Scroll-triggered reveals, staggered in groups of four
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(function (el, i) {
    el.style.transitionDelay = (i % 4) * 90 + 'ms';
    io.observe(el);
  });

  // If profile.jpg hasn't been uploaded yet, hide the photo frame gracefully
  var photo = document.querySelector('.plate img');
  if (photo) {
    photo.addEventListener('error', function () {
      document.querySelector('.plate').style.display = 'none';
    });
  }
})();