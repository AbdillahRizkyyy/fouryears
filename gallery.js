/**
 * gallery.js — Masonry Polaroid Scrapbook
 * "4 Tahun, Tetap Kamu"
 */
document.addEventListener('DOMContentLoaded', () => {

  // ─── DOM ──────────────────────────────────────────────
  const scrapboard        = document.getElementById('scrapboard');
  const filterContainer   = document.getElementById('filter-container');
  const photoCountBadge   = document.getElementById('photo-count-badge');

  // Lightbox
  const lightbox      = document.getElementById('lightbox-modal');
  const lbImgWrapper  = document.getElementById('lb-img-wrapper');
  const lbClose       = document.getElementById('lb-close');
  const lbPrev        = document.getElementById('lb-prev');
  const lbNext        = document.getElementById('lb-next');

  // ─── State ────────────────────────────────────────────
  let currentCategory   = 'all';
  let filteredPhotos    = [...galleryPhotos];
  let activeLightboxIdx = 0;

  // Update badge count
  if (photoCountBadge) {
    photoCountBadge.textContent = `${galleryPhotos.length} Kenangan`;
  }

  // ─── Helper: seeded pseudo-random (stable tilt per photo id) ───
  function seededRand(seed) {
    const x = Math.sin(seed + 1) * 43758.5453123;
    return x - Math.floor(x);
  }

  // ─── Render Masonry Scrapboard ────────────────────────
  function renderScrapboard() {
    scrapboard.innerHTML = '';

    if (!filteredPhotos.length) {
      scrapboard.innerHTML = `
        <div style="text-align:center; color:#c0a898; padding:4rem 2rem; font-family:var(--font-hand); font-size:1.4rem;">
          Belum ada kenangan di kategori ini…
        </div>`;
      return;
    }

    const grid = document.createElement('div');
    grid.className = 'masonry-grid';

    filteredPhotos.forEach((photo, idx) => {
      const card = buildPolaroidCard(photo, idx);
      grid.appendChild(card);
    });

    scrapboard.appendChild(grid);

    // Trigger stagger entrance animation
    requestAnimationFrame(() => {
      const cards = grid.querySelectorAll('.polaroid-card');
      cards.forEach((card, i) => {
        card.style.animationDelay = `${Math.min(i * 28, 600)}ms`;
        card.classList.add('card-enter');
      });
    });
  }

  // ─── Build one Polaroid Card ──────────────────────────
  function buildPolaroidCard(photo, idx) {
    const card = document.createElement('article');
    card.className = 'polaroid-card';
    card.dataset.index = idx;

    // Stable random tilt: −6° to +6° using photo id as seed
    const seed   = photo.id || idx;
    const rand   = seededRand(seed);
    const tilt   = (rand * 12) - 6;

    card.style.transform = `rotate(${tilt.toFixed(2)}deg)`;

    // Tape strip (random position: left/center/right)
    const tapeOffset = (seededRand(seed + 7) * 60) + 15; // 15% – 75%
    const tapeRot    = (seededRand(seed + 13) * 10) - 5; // −5° to +5°

    card.innerHTML = `
      <div class="polaroid-tape" style="left:${tapeOffset.toFixed(1)}%; transform:translateX(-50%) rotate(${tapeRot.toFixed(1)}deg);"></div>
      <div class="polaroid-frame">
        <div class="photo-area" style="background-color:${photo.color || '#e8ddd0'};">
          <img
            src="${photo.src}"
            alt="${photo.title}"
            loading="lazy"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
          />
          <div class="photo-placeholder" style="display:none; background-color:${photo.color || '#e8ddd0'};">
            <span class="ph-icon">📷</span>
          </div>
        </div>
      </div>
    `;

    // Hover: straighten and lift
    card.addEventListener('mouseenter', () => {
      card.style.transform = `rotate(0deg) scale(1.06) translateY(-6px)`;
      card.style.zIndex    = '30';
      card.style.transition = 'transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = `rotate(${tilt.toFixed(2)}deg)`;
      card.style.zIndex    = '';
    });

    // Click → lightbox
    card.addEventListener('click', () => openLightbox(idx));

    return card;
  }

  // ─── Lightbox ────────────────────────────────────────
  function openLightbox(idx) {
    activeLightboxIdx = idx;
    updateLightbox();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateLightbox() {
    const photo = filteredPhotos[activeLightboxIdx];
    if (!photo) return;

    lbImgWrapper.innerHTML = `
      <img
        src="${photo.src}"
        alt="${photo.title}"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
      />
      <div class="lightbox-placeholder" style="display:none; background-color:${photo.color || '#2b1a1f'};">
        <span class="lb-icon">📷</span>
      </div>
    `;
  }

  function showNext() {
    activeLightboxIdx = (activeLightboxIdx + 1) % filteredPhotos.length;
    updateLightbox();
  }
  function showPrev() {
    activeLightboxIdx = (activeLightboxIdx - 1 + filteredPhotos.length) % filteredPhotos.length;
    updateLightbox();
  }

  lbClose.addEventListener('click', closeLightbox);
  lbNext.addEventListener('click', (e) => { e.stopPropagation(); showNext(); });
  lbPrev.addEventListener('click', (e) => { e.stopPropagation(); showPrev(); });
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowRight')  showNext();
    if (e.key === 'ArrowLeft')   showPrev();
  });

  // Touch swipe in lightbox
  let tsX = 0;
  lightbox.addEventListener('touchstart', (e) => { tsX = e.changedTouches[0].screenX; }, { passive: true });
  lightbox.addEventListener('touchend',   (e) => {
    const dx = e.changedTouches[0].screenX - tsX;
    if (dx < -50) showNext();
    if (dx >  50) showPrev();
  }, { passive: true });

  // ─── Category Filters ────────────────────────────────
  function renderFilters() {
    filterContainer.innerHTML = '';

    galleryCategories.forEach(cat => {
      const count = cat.id === 'all'
        ? galleryPhotos.length
        : galleryPhotos.filter(p => p.category === cat.id).length;

      const btn = document.createElement('button');
      btn.className = `filter-btn ${cat.id === currentCategory ? 'active' : ''}`;
      btn.dataset.category = cat.id;
      btn.innerHTML = `<span>${cat.name}</span><span class="count-tag">${count}</span>`;

      btn.addEventListener('click', () => {
        if (currentCategory === cat.id) return;
        currentCategory = cat.id;
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        applyFilter();
      });

      filterContainer.appendChild(btn);
    });
  }

  function applyFilter() {
    filteredPhotos = currentCategory === 'all'
      ? [...galleryPhotos]
      : galleryPhotos.filter(p => p.category === currentCategory);
    renderScrapboard();
  }

  // ─── Entrance animation (CSS injected) ──────────────
  const style = document.createElement('style');
  style.textContent = `
    @keyframes cardEnter {
      from { opacity: 0; transform: rotate(var(--tilt,0deg)) scale(0.85) translateY(20px); }
      to   { opacity: 1; transform: rotate(var(--tilt,0deg)) scale(1) translateY(0); }
    }
    .polaroid-card.card-enter {
      animation: cardEnter 0.45s cubic-bezier(0.34,1.36,0.64,1) both;
    }
  `;
  document.head.appendChild(style);

  // ─── Init ─────────────────────────────────────────────
  renderFilters();
  renderScrapboard();
});
