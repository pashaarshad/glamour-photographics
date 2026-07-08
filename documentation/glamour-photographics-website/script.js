'use strict';

// ─── CURSOR ──────────────────────────────────────────────
const dot  = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
let mx=0, my=0, rx=0, ry=0;
document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; });
(function animCursor(){
  dot.style.transform  = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
  rx += (mx-rx)*.12; ry += (my-ry)*.12;
  ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
  requestAnimationFrame(animCursor);
})();

// ─── LOADER ──────────────────────────────────────────────
window.addEventListener('load', () => {
  setTimeout(() => {
    const l = document.getElementById('loader');
    l.classList.add('out');
    setTimeout(() => l.style.display='none', 800);
  }, 2600);
});

// ─── NAV SCROLL ──────────────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ─── PAGE NAVIGATION ─────────────────────────────────────
let currentPage = 'home';
function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  currentPage = page;
  window.scrollTo({ top:0, behavior:'instant' });
  document.querySelectorAll('[data-page]').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });
  setTimeout(checkReveals, 100);
  closeMobile();
  return false;
}

// ─── MOBILE MENU ─────────────────────────────────────────
function toggleMobile(){
  document.getElementById('mobileMenu').classList.toggle('open');
}
function closeMobile(){
  document.getElementById('mobileMenu').classList.remove('open');
}

// ─── SCROLL REVEAL ───────────────────────────────────────
function checkReveals(){
  const page = document.getElementById('page-'+currentPage);
  if(!page) return;
  const vh = window.innerHeight;

  page.querySelectorAll('.reveal,.reveal-left,.reveal-scale').forEach(el => {
    if(el.getBoundingClientRect().top < vh*.88) el.classList.add('visible');
  });
  page.querySelectorAll('.stagger-children').forEach(el => {
    if(el.getBoundingClientRect().top < vh*.88) el.classList.add('visible');
  });
  page.querySelectorAll('.img-mask').forEach(el => {
    if(el.getBoundingClientRect().top < vh*.9) el.classList.add('visible');
  });
  page.querySelectorAll('.gold-line,.gold-line-short').forEach(el => {
    if(el.getBoundingClientRect().top < vh*.9) el.classList.add('visible');
  });
}
document.addEventListener('scroll', checkReveals, { passive:true });
setTimeout(checkReveals, 2400);

// ─── COUNTERS ────────────────────────────────────────────
function animateCounters(){
  document.querySelectorAll('.counter').forEach(el => {
    if(el.dataset.animated) return;
    if(el.getBoundingClientRect().top < window.innerHeight*.9){
      el.dataset.animated = true;
      const target = parseInt(el.dataset.target);
      const dur = 2000; const start = performance.now();
      function step(now){
        const t = Math.min((now-start)/dur,1);
        const ease = t<.5 ? 2*t*t : -1+(4-2*t)*t;
        el.textContent = Math.floor(ease*target);
        if(t<1) requestAnimationFrame(step);
        else el.textContent = target;
      }
      requestAnimationFrame(step);
    }
  });
}
document.addEventListener('scroll', animateCounters, { passive:true });
setTimeout(animateCounters, 2600);

// ─── PARALLAX ────────────────────────────────────────────
document.addEventListener('scroll', () => {
  const page = document.getElementById('page-'+currentPage);
  if(!page) return;
  const hero = page.querySelector('.hero-bg-img');
  if(hero) hero.style.transform = `translateY(${window.scrollY*.3}px)`;
}, { passive:true });

// ─── CONTACT FORM ────────────────────────────────────────
function handleSubmit(e){
  e.preventDefault();
  const msg = document.getElementById('form-msg');
  msg.textContent = 'Thank you — we\'ll be in touch shortly.';
  msg.style.opacity = '1';
  setTimeout(() => msg.style.opacity='0', 5000);
}



document.querySelectorAll('a[href="#"]').forEach(a => {
  a.addEventListener('click', e => e.preventDefault());
});

// ─── PORTFOLIO FILTER TABS ─────────────────────────────────
(function(){
  const tabs    = document.querySelectorAll('.portfolio-tab');
  const items   = document.querySelectorAll('.gallery-item');

  function filterGallery(filter){
    items.forEach(item => {
      const cat = item.dataset.cat;
      if(filter === 'all' || cat === filter){
        item.classList.remove('hidden');
        requestAnimationFrame(() => item.classList.remove('fading-out'));
      } else {
        item.classList.add('fading-out');
        setTimeout(() => item.classList.add('hidden'), 380);
      }
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      filterGallery(tab.dataset.filter);
    });
  });

  // Mobile: tap to reveal overlay, second tap = lightbox (reuse existing logic)
  items.forEach((item, i) => {
    item.addEventListener('touchstart', e => {
      if(!item.classList.contains('tapped')){
        items.forEach(x => x.classList.remove('tapped'));
        item.classList.add('tapped');
        e.preventDefault();
      } else {
        item.classList.remove('tapped');
        e.preventDefault();
      }
    }, { passive: false });
  });
})();

// ─── LIGHTBOX ────────────────────────────────────────────
(function(){
  const lb        = document.getElementById('lightbox');
  const lbWrap    = document.getElementById('lbImgWrap');
  const lbImg     = document.getElementById('lbImg');
  const lbClose   = document.getElementById('lbClose');
  const lbPrev    = document.getElementById('lbPrev');
  const lbNext    = document.getElementById('lbNext');
  const lbCat     = document.getElementById('lbCat');
  const lbTitle   = document.getElementById('lbTitle');
  const lbCounter = document.getElementById('lbCounter');

  if(!lb || !lbWrap || !lbImg) return; // guard: elements not found

  let items = [], current = 0;

  function buildItems(){
    items = [];
    document.querySelectorAll('.hero-strip-item').forEach(el => {
      const img   = el.querySelector('.strip-img img');
      const cat   = el.querySelector('.strip-label')  ? el.querySelector('.strip-label').textContent  : '';
      const title = el.querySelector('.strip-title') ? el.querySelector('.strip-title').textContent : '';
      if(img) items.push({ src: img.src, cat, title, el });
    });
  }

  function openLightbox(idx){
    buildItems();
    if(!items.length) return;
    current = idx;
    const { src, cat, title, el } = items[idx];
    const r = el.getBoundingClientRect();

    // show wrap, snap to source rect
    lbWrap.style.transition  = 'none';
    lbWrap.style.display     = 'block';
    lbWrap.style.top         = r.top + 'px';
    lbWrap.style.left        = r.left + 'px';
    lbWrap.style.width       = r.width + 'px';
    lbWrap.style.height      = r.height + 'px';
    lbWrap.style.borderRadius = '2px';
    lbImg.src = src;

    lbCat.textContent     = cat;
    lbTitle.textContent   = title;
    lbCounter.textContent = (idx + 1) + ' / ' + items.length;

    lb.classList.add('open');
    document.body.style.overflow = 'hidden';

    // animate to fullscreen
    requestAnimationFrame(() => requestAnimationFrame(() => {
      lbWrap.style.transition = '';
      const vw = window.innerWidth, vh = window.innerHeight;
      const w = Math.min(vw * 0.88, 1200);
      const h = vh * 0.82;
      lbWrap.style.top         = ((vh - h) / 2) + 'px';
      lbWrap.style.left        = ((vw - w) / 2) + 'px';
      lbWrap.style.width       = w + 'px';
      lbWrap.style.height      = h + 'px';
      lbWrap.style.borderRadius = '4px';
    }));
  }

  function closeLightbox(){
    if(!lb.classList.contains('open')) return;
    const { el } = items[current];
    const r = el.getBoundingClientRect();
    lbWrap.style.top          = r.top + 'px';
    lbWrap.style.left         = r.left + 'px';
    lbWrap.style.width        = r.width + 'px';
    lbWrap.style.height       = r.height + 'px';
    lbWrap.style.borderRadius = '2px';
    lb.classList.remove('open');
    document.body.style.overflow = '';
    // hide wrap after transition
    setTimeout(() => { lbWrap.style.display = 'none'; }, 480);
  }

  function goTo(idx){
    current = (idx + items.length) % items.length;
    const { src, cat, title } = items[current];
    lbImg.style.opacity = '0';
    setTimeout(() => {
      lbImg.src = src;
      lbCat.textContent     = cat;
      lbTitle.textContent   = title;
      lbCounter.textContent = (current + 1) + ' / ' + items.length;
      lbImg.style.opacity   = '1';
    }, 180);
  }

  lbImg.style.transition = 'opacity .18s ease';

  // attach to strip items
  document.querySelectorAll('.hero-strip-item').forEach((el, i) => {
    // Desktop click → open lightbox
    el.addEventListener('click', e => { e.stopPropagation(); openLightbox(i); });

    // Mobile: first tap expands, second opens lightbox
    el.addEventListener('touchstart', e => {
      if(!el.classList.contains('expanded')){
        document.querySelectorAll('.hero-strip-item').forEach(x => x.classList.remove('expanded'));
        el.classList.add('expanded');
        e.preventDefault();
      } else {
        el.classList.remove('expanded');
        openLightbox(i);
        e.preventDefault();
      }
    }, { passive: false });
  });

  lbClose.addEventListener('click', closeLightbox);
  lbPrev.addEventListener('click',  () => goTo(current - 1));
  lbNext.addEventListener('click',  () => goTo(current + 1));
  lb.addEventListener('click', e => { if(e.target === lb) closeLightbox(); });

  document.addEventListener('keydown', e => {
    if(!lb.classList.contains('open')) return;
    if(e.key === 'Escape')     closeLightbox();
    if(e.key === 'ArrowLeft')  goTo(current - 1);
    if(e.key === 'ArrowRight') goTo(current + 1);
  });
})();
