
// show current year
const yr = document.getElementById('yr');
if(yr) yr.textContent = new Date().getFullYear();

// basic static form behavior
(function(){
  const form = document.getElementById('contactForm');
  if(!form) return;
  const msg = document.getElementById('formMsg');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if(!name || !email || !message){
      alert('Please complete name, email and message.');
      return;
    }
    msg.style.display = 'block';
    msg.textContent = 'Thanks! This is a static demo — your message is not sent from this page. Please use admin@ghtag.com to email us directly.';
    form.reset();
    setTimeout(()=> msg.style.display='none', 6000);
  });
})();

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const target = document.querySelector(a.getAttribute('href'));
    if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth',block:'start'}); }
  });
});


// Add 'is-loaded' to body for CSS entrance animations after load
window.addEventListener('load', function() {
  document.body.classList.add('is-loaded');
});

// IntersectionObserver to add 'is-visible' for elements (progressive reveal)
(function(){
  if(!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('is-loaded');
        io.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12});
  document.querySelectorAll('.fade-up').forEach(el => io.observe(el));
})();
