
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


// Ensure new clientele accordion behaves same as other accordions
(function(){
  document.querySelectorAll('.clientele .accordion-toggle').forEach(btn => {
    const panel = document.getElementById(btn.getAttribute('aria-controls'));
    if(!panel) return;
    panel.style.maxHeight = 0;
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
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


/* Smooth scroll with header offset for anchor links (graceful, respects reduced motion) */
(function(){
  const header = document.querySelector('.site-header');
  const headerHeight = header ? header.offsetHeight : 80;

  function prefersReduced() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function scrollToHash(hash) {
    const target = document.querySelector(hash);
    if(!target) return;
    const rect = target.getBoundingClientRect();
    const absoluteTop = window.pageYOffset + rect.top;
    const offset = Math.max(0, headerHeight + 8); // small gap
    const top = absoluteTop - offset;
    if(prefersReduced()){
      window.scrollTo(0, top);
    } else {
      window.scrollTo({ top: top, behavior: 'smooth' });
    }
  }

  // Attach to all in-page links in header/nav and elsewhere
  document.addEventListener('click', function(e){
    const a = e.target.closest('a[href^="#"]');
    if(!a) return;
    // allow links with just "#" to behave normally
    if(a.getAttribute('href') === '#') return;
    const href = a.getAttribute('href');
    if(!href.startsWith('#')) return;
    const target = document.querySelector(href);
    if(!target) return;
    e.preventDefault();
    // update URL hash without jumping
    history.pushState(null, '', href);
    scrollToHash(href);
  });

  // On load, if URL has hash, scroll to it with offset
  window.addEventListener('load', function(){
    if(location.hash){
      setTimeout(()=> scrollToHash(location.hash), 80);
    }
  });
})();
