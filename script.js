
/* GH TAG — production script.js */
/* Mobile menu toggle, progressive animations, smooth scrolling */

document.addEventListener('DOMContentLoaded', function(){
  // current year
  const yr = document.getElementById('yr');
  if(yr) yr.textContent = new Date().getFullYear();

  // Mobile menu toggle
  const toggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  if(toggle && mobileNav){
    toggle.addEventListener('click', function(e){
      const open = mobileNav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      mobileNav.setAttribute('aria-hidden', open ? 'false' : 'true');
      if(open){ mobileNav.querySelector('a')?.focus(); }
    });

    // close when clicking outside
    document.addEventListener('click', (e)=>{
      if(!mobileNav.classList.contains('open')) return;
      if(!mobileNav.contains(e.target) && !toggle.contains(e.target)){
        mobileNav.classList.remove('open');
        toggle.setAttribute('aria-expanded','false');
        mobileNav.setAttribute('aria-hidden','true');
      }
    });
  }

  // IntersectionObserver for fade-up animations (respect reduced motion)
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(prefersReduced){
    document.querySelectorAll('.fade-up').forEach(el => el.classList.add('is-loaded'));
  } else if('IntersectionObserver' in window){
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('is-loaded');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: 0.08});
    document.querySelectorAll('.fade-up').forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('.fade-up').forEach(el => el.classList.add('is-loaded'));
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });
});
