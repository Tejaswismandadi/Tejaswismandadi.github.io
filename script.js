// Subtle scroll-reveal animation, applied site-wide.
// Fades and lifts each major section into view as the user scrolls to it.
document.addEventListener('DOMContentLoaded', function () {
  var targets = document.querySelectorAll(
    'section.block, .proj-row, .cap-cell, .case-card, .about-side .mv-block'
  );

  if (!('IntersectionObserver' in window) || targets.length === 0) {
    targets.forEach(function (el) { el.classList.add('revealed'); });
    return;
  }

  targets.forEach(function (el) { el.classList.add('reveal'); });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );

  targets.forEach(function (el) { observer.observe(el); });
});
