
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('yr').textContent = new Date().getFullYear();

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  toggle.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  });
});


// IntersectionObserver for fade-up elements (staggered reveal)
(function(){
  try {
    if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches){
      document.querySelectorAll('.fade-up').forEach(el => el.classList.add('is-visible'));
      return;
    }
    const els = document.querySelectorAll('.fade-up');
    if('IntersectionObserver' in window && els.length){
      const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, {threshold: 0.12});
      els.forEach(el => io.observe(el));
    } else {
      // fallback: show immediately
      els.forEach(el => el.classList.add('is-visible'));
    }
  } catch(e){ console.warn('Animation observer failed', e); }
})();
