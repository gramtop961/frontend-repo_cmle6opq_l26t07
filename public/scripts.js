// Sticky header toggle and intersection reveals
(function(){
  const header = document.querySelector('.navbar');
  const onScroll = () => {
    if (!header) return;
    if (window.scrollY > 10) {
      header.classList.add('shadow-sm');
      header.style.background = '#0a0a0a';
    } else {
      header.classList.remove('shadow-sm');
      header.style.background = '#0a0a0a';
    }
  };
  window.addEventListener('scroll', onScroll);
})();

// Intersection Observer for reveal animations
(function(){
  const els = document.querySelectorAll('.reveal, .reason');
  if (!('IntersectionObserver' in window) || els.length === 0) return;
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        io.unobserve(e.target);
      }
    })
  }, { threshold: 0.18 });
  els.forEach(el=>io.observe(el));
})();

// Bootstrap: enable tooltips if any
(function(){
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
})();
