
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


// Accordion behaviour for Services
(function(){
  function togglePanel(btn, panel, open) {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if(open){
      panel.classList.add('is-open');
      // set max-height to scrollHeight for transition
      panel.style.maxHeight = panel.scrollHeight + 'px';
    } else {
      panel.classList.remove('is-open');
      panel.style.maxHeight = 0;
    }
  }

  document.querySelectorAll('.accordion-toggle').forEach(btn => {
    const panelId = btn.getAttribute('aria-controls');
    const panel = document.getElementById(panelId);
    if(!panel) return;
    // initialize collapsed
    panel.style.maxHeight = 0;
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      // close any other open panels (optional: keep multiple open - here we close others)
      document.querySelectorAll('.accordion-toggle[aria-expanded="true"]').forEach(other => {
        if(other !== btn){
          const otherPanel = document.getElementById(other.getAttribute('aria-controls'));
          togglePanel(other, otherPanel, false);
        }
      });
      togglePanel(btn, panel, !expanded);
    });
  });
})();


// Ensure clientele accordion buttons behave like other accordions
(function(){
  document.querySelectorAll('.clientele .accordion-toggle').forEach(btn => {
    const panel = document.getElementById(btn.getAttribute('aria-controls'));
    if(!panel) return;
    panel.style.maxHeight = 0;
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      // close others in clientele
      document.querySelectorAll('.clientele .accordion-toggle[aria-expanded="true"]').forEach(other => {
        if(other !== btn){
          const otherPanel = document.getElementById(other.getAttribute('aria-controls'));
          other.setAttribute('aria-expanded','false');
          if(otherPanel){ otherPanel.classList.remove('is-open'); otherPanel.style.maxHeight = 0; }
        }
      });
      btn.setAttribute('aria-expanded', !expanded ? 'true' : 'false');
      if(!expanded){ panel.classList.add('is-open'); panel.style.maxHeight = panel.scrollHeight + 'px'; }
      else { panel.classList.remove('is-open'); panel.style.maxHeight = 0; }
    });
  });
})();
