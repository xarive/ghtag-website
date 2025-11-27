
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



// ---- Refined animation JS ----
(function(){
  // header show/hide on scroll (hide on scroll down, show on scroll up)
  const header = document.querySelector('.site-header');
  let lastScroll = window.pageYOffset || 0;
  let ticking = false;
  if(header){
    window.addEventListener('scroll', () => {
      if(ticking) return;
      window.requestAnimationFrame(() => {
        const current = window.pageYOffset || 0;
        if(current > lastScroll && current > 120){
          header.classList.add('hidden');
        } else {
          header.classList.remove('hidden');
        }
        lastScroll = current <= 0 ? 0 : current;
        ticking = false;
      });
      ticking = true;
    }, {passive:true});
  }

  // refined observer with staggered delays
  try {
    if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches){
      document.querySelectorAll('.fade-up').forEach(el => el.classList.add('is-visible'));
    } else if('IntersectionObserver' in window){
      const items = Array.from(document.querySelectorAll('.fade-up'));
      const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            const el = entry.target;
            // compute stagger: find index amongst siblings or among global order
            let idx = parseInt(el.getAttribute('data-anim-index') || '-1', 10);
            if(idx < 0){
              // fallback: use position in NodeList
              idx = items.indexOf(el);
            }
            const delay = (idx >= 0) ? ('calc(' + idx + ' * var(--stagger-step))') : '0ms';
            // set CSS custom property for stagger (works with transition-delay)
            el.style.setProperty('--stagger', (idx >= 0 ? (idx * 70) + 'ms' : '0ms'));
            el.classList.add('is-visible');
            observer.unobserve(el);
          }
        });
      }, {threshold: 0.08, rootMargin: '0px 0px -6% 0px'});
      items.forEach((el,i) => {
        // if element is a direct child of a data-stagger container, set index per container
        const parent = el.parentElement;
        const parentKey = parent && parent.hasAttribute && parent.hasAttribute('data-stagger') ? parent : null;
        // set a sensible index attribute for predictable staggering
        el.setAttribute('data-anim-index', i);
        io.observe(el);
      });
    } else {
      document.querySelectorAll('.fade-up').forEach(el => el.classList.add('is-visible'));
    }
  } catch(e){ console.warn('Animation system error', e); }

  // small entrance tweak: on load, add a 'is-loaded' class to body for CSS hooks
  window.addEventListener('load', () => {
    document.documentElement.classList.add('is-loaded');
  });
})();

// Optional: reduce motion toggle for testing in dev (uncomment to simulate)
// document.documentElement.style.scrollBehavior = 'smooth';
