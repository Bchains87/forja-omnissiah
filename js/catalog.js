/**
 * FORJA DEL OMNISSIAH — catalog.js
 * Lógica del catálogo: render, búsqueda y navegación por facciones
 */

let currentFaction = 'space-marines';
let searchQuery = '';
const imgState = {};

const RETICLE = `<div class="card-zoom-hint"><div class="zoom-reticle"><span class="r-tl"></span><span class="r-tr"></span><span class="r-bl"></span><span class="r-br"></span><span class="r-dot"></span></div></div>`;

function formatPrice(n) {
  return n.toLocaleString('es-CL');
}

// ── LIGHTBOX ──
const Lightbox = (() => {
  let currentImgResina = '';
  let currentImgPintado = '';
  let showingPainted = false;

  function open(unit, factionKey) {
    showingPainted = false;
    currentImgResina  = unit.img       || '';
    currentImgPintado = unit.imgPainted || '';

    const lb            = document.getElementById('lightbox');
    const lbImg         = document.getElementById('lb-img');
    const lbPlaceholder = document.getElementById('lb-placeholder');
    const lbName        = document.getElementById('lb-name');
    const lbFaction     = document.getElementById('lb-faction');
    const lbToggle      = document.getElementById('lb-toggle');
    const lbLabel       = document.getElementById('lb-label');

    lbName.textContent    = unit.name;
    lbFaction.textContent = FACTIONS[factionKey]?.name || factionKey;
    lbLabel.textContent   = 'RESINA';

    _setLbImage(lbImg, lbPlaceholder, currentImgResina, FACTIONS[factionKey]?.name || '');

    if (currentImgPintado) {
      lbToggle.disabled    = false;
      lbToggle.textContent = '🎨 VER PINTADO';
    } else {
      lbToggle.disabled    = true;
      lbToggle.textContent = '🎨 Sin pintado';
    }

    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    document.getElementById('lightbox').classList.remove('open');
    document.body.style.overflow = '';
  }

  function toggle() {
    showingPainted = !showingPainted;
    const src = showingPainted ? currentImgPintado : currentImgResina;

    const lbImg         = document.getElementById('lb-img');
    const lbPlaceholder = document.getElementById('lb-placeholder');
    const lbToggle      = document.getElementById('lb-toggle');
    const lbLabel       = document.getElementById('lb-label');

    lbImg.style.opacity = '0';
    setTimeout(() => {
      _setLbImage(lbImg, lbPlaceholder, src, '');
      lbImg.style.opacity = '1';
    }, 180);

    lbLabel.textContent  = showingPainted ? 'PINTADO' : 'RESINA';
    lbToggle.textContent = showingPainted ? '🔩 VER RESINA' : '🎨 VER PINTADO';
  }

  function _setLbImage(imgEl, placeholderEl, src, factionName) {
    if (src) {
      imgEl.src = 'img/' + src;
      imgEl.style.display = 'block';
      placeholderEl.style.display = 'none';
    } else {
      imgEl.style.display = 'none';
      placeholderEl.style.display = 'flex';
      const txt = placeholderEl.querySelector('.lb-placeholder-text');
      if (txt) txt.textContent = factionName || 'Sin foto';
    }
  }

  return { open, close, toggle };
})();

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') Lightbox.close();
});

// ── RENDER FACTION ──
function renderFaction(factionKey) {
  const data = FACTIONS[factionKey];
  if (!data) return;

  const main = document.getElementById('mainContent');
  const filtered = searchQuery
    ? Object.fromEntries(
        Object.entries(data.subfactions)
          .map(([sub, units]) => [sub, units.filter(u => u.name.toLowerCase().includes(searchQuery))])
          .filter(([, units]) => units.length > 0)
      )
    : data.subfactions;

  let html = `
    <div class="faction-header">
      <div class="faction-header-icon">${data.icon}</div>
      <div class="faction-header-text">
        <h2>${data.name}</h2>
        <p>${data.lore}</p>
      </div>
    </div>`;

  if (Object.keys(filtered).length === 0) {
    html += `<div class="units-grid"><div class="empty-state">No se encontraron unidades para "<em>${searchQuery}</em>"</div></div>`;
  }

  Object.entries(filtered).forEach(([subfaction, units]) => {
    html += `<div class="subfaction-label">${subfaction}</div><div class="units-grid">`;
    units.forEach((unit, i) => {
      const tc     = TYPE_CONFIG[unit.type];
      const cartId = `${factionKey}__${unit.name}`.replace(/\s+/g, '_');
      html += buildCard(unit, tc, factionKey, subfaction, i, cartId);
    });
    html += `</div>`;
  });

  main.innerHTML = html;
}


// ── BUILD CARD HTML ──
function buildCard(unit, tc, factionKey, subfaction, i, cartId) {
  const safeSubfaction = subfaction.replace(/'/g, "\\'");
  const unitJson = JSON.stringify({ name: unit.name, img: unit.img || '', imgPainted: unit.imgPainted || '' }).replace(/'/g, "\\'");

  return `
  <div class="unit-card" style="animation-delay:${i * 0.05}s">
    <div class="avail-badge"></div>
    <div class="card-image" id="img-${factionKey}-${safeSubfaction}-${i}">
      <span class="card-image-label" id="lbl-${factionKey}-${safeSubfaction}-${i}">RESINA</span>

      <div class="card-image-inner card-image-clickable"
           id="inner-${factionKey}-${safeSubfaction}-${i}"
           onclick="Lightbox.open(${unitJson.replace(/"/g, "'")}, '${factionKey}')"
           title="Ver en grande">
        ${buildImageContent(unit, factionKey)}
        ${RETICLE}
      </div>

      <button class="card-image-toggle"
        onclick="toggleImg('${factionKey}','${safeSubfaction}',${i}, this, '${unit.img || ''}', '${unit.imgPainted || ''}')"
        ${!unit.imgPainted ? 'disabled title="Sin versión pintada disponible"' : ''}>
        ${unit.imgPainted ? '🎨 VER PINTADO' : '🎨 Sin pintado'}
      </button>
    </div>
    <div class="card-body">
      <div class="card-name">${unit.name}</div>
      <div class="card-meta">
        <div class="card-type">
          <div class="type-dot" style="background:${tc.color}"></div>
          <span style="color:${tc.color}">${tc.label}</span>
        </div>
        <div class="card-price"><span class="currency">$</span>${formatPrice(unit.price)}</div>
      </div>
      <button
        class="btn-cart"
        data-cart-id="${cartId}"
        onclick="Cart.add('${factionKey}', '${unit.name.replace(/'/g, "\\'")}', ${unit.price})">
        🛒 AL PRESUPUESTO
      </button>
      <div class="card-actions">
        <a class="btn-contact btn-whatsapp"
           href="https://wa.me/56900000000?text=Hola!%20Me%20interesa%20${encodeURIComponent(unit.name)}"
           target="_blank">📱 WhatsApp</a>
        <a class="btn-contact btn-instagram"
           href="https://instagram.com/TU_USUARIO"
           target="_blank">📷 Instagram</a>
      </div>
    </div>
  </div>`;
}

// ── IMAGE CONTENT ──
function buildImageContent(unit, factionKey) {
  if (unit.img) {
    return `<img src="img/${unit.img}" alt="${unit.name}" style="width:100%;height:100%;object-fit:cover;">`;
  }
  const faction = FACTIONS[factionKey];
  return `
    <div class="card-img-placeholder">
      <div class="placeholder-skull">☠</div>
      <div class="placeholder-text">${faction ? faction.name : 'Sin foto'}</div>
    </div>`;
}

// ── TOGGLE IMAGE (resina / pintado) on card ──
function toggleImg(faction, sub, i, btn, imgResina, imgPintado) {
  const key   = `${faction}-${sub}-${i}`;
  const inner = document.getElementById(`inner-${faction}-${sub}-${i}`);
  const lbl   = document.getElementById(`lbl-${faction}-${sub}-${i}`);

  imgState[key] = !imgState[key];
  const showingPainted = imgState[key];

  if (inner) {
    const src = showingPainted ? imgPintado : imgResina;
    if (src) {
      const existingImg = inner.querySelector('img');
      if (existingImg) {
        existingImg.style.opacity = '0';
        setTimeout(() => {
          existingImg.src = 'img/' + src;
          existingImg.style.opacity = '1';
        }, 160);
      } else {
        inner.innerHTML = `<img src="img/${src}" alt="" style="width:100%;height:100%;object-fit:cover;transition:opacity 0.35s;">${RETICLE}`;
      }
    }
    inner.style.opacity = '0';
    setTimeout(() => { inner.style.opacity = '1'; }, 50);
  }
  if (lbl) lbl.textContent = showingPainted ? 'PINTADO' : 'RESINA';
  if (btn) btn.textContent = showingPainted ? '🔩 VER RESINA' : '🎨 VER PINTADO';
}

// ── FACTION SWITCH ──
function showFaction(key, el) {
  currentFaction = key;
  searchQuery = '';
  document.getElementById('searchInput').value = '';
  document.querySelectorAll('.faction-btn').forEach(b => b.classList.remove('active'));
  if (el) el.classList.add('active');
  renderFaction(key);
  document.getElementById('mainContent').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── SEARCH ──
function initSearch() {
  document.getElementById('searchInput').addEventListener('input', function () {
    searchQuery = this.value.toLowerCase().trim();
    if (searchQuery.length === 0) { renderFaction(currentFaction); return; }
    renderGlobalSearch(searchQuery, this.value);
  });
}

function renderGlobalSearch(query, rawQuery) {
  const main = document.getElementById('mainContent');
  let html = `
    <div class="faction-header">
      <div class="faction-header-icon">🔍</div>
      <div class="faction-header-text">
        <h2>Resultados: "${rawQuery}"</h2>
        <p>Buscando en todo el catálogo...</p>
      </div>
    </div>
    <div class="subfaction-label">Coincidencias encontradas</div>
    <div class="units-grid">`;

  let found = 0;
  Object.entries(FACTIONS).forEach(([fKey, fData]) => {
    Object.entries(fData.subfactions).forEach(([sub, units]) => {
      units.filter(u => u.name.toLowerCase().includes(query)).forEach((unit, i) => {
        const tc     = TYPE_CONFIG[unit.type];
        const cartId = `${fKey}__${unit.name}`.replace(/\s+/g, '_');
        found++;
        html += buildCard(unit, tc, fKey, sub, i, cartId);
      });
    });
  });

  if (found === 0) html += `<div class="empty-state">No se encontraron resultados para "<em>${rawQuery}</em>"</div>`;
  html += `</div>`;
  main.innerHTML = html;
}

// ── BUILD SIDEBAR ──
function buildSidebar() {
  const aside = document.getElementById('sidebarNav');
  let html = '';
  Object.entries(SIDEBAR_GROUPS).forEach(([group, keys]) => {
    html += `<div class="sidebar-section-label">${group}</div>`;
    keys.forEach(key => {
      const f = FACTIONS[key];
      if (!f) return;
      const totalUnits = Object.values(f.subfactions).reduce((s, u) => s + u.length, 0);
      const isActive   = key === currentFaction ? ' active' : '';
      html += `
        <button class="faction-btn${isActive}" onclick="showFaction('${key}', this)">
          <span class="faction-icon">${f.icon}</span>
          <span>${f.name}</span>
          <span class="faction-count">${totalUnits}</span>
        </button>`;
    });
  });
  aside.innerHTML = html;
}

// ── INJECT LIGHTBOX HTML ──
function injectLightbox() {
  const lb = document.createElement('div');
  lb.id = 'lightbox';
  lb.innerHTML = `
    <div class="lb-backdrop" onclick="Lightbox.close()"></div>
    <div class="lb-modal">
      <div class="lb-header">
        <div class="lb-header-left">
          <span class="lb-label-badge" id="lb-label">RESINA</span>
          <div class="lb-title-wrap">
            <div class="lb-name"    id="lb-name">—</div>
            <div class="lb-faction" id="lb-faction">—</div>
          </div>
        </div>
        <button class="lb-close" onclick="Lightbox.close()" title="Cerrar (Esc)">✕</button>
      </div>
      <div class="lb-image-wrap">
        <img id="lb-img" src="" alt="" style="transition:opacity 0.18s;">
        <div id="lb-placeholder" style="display:none">
          <div class="placeholder-skull" style="font-size:80px;opacity:0.12">☠</div>
          <div class="lb-placeholder-text placeholder-text">Sin foto</div>
        </div>
      </div>
      <div class="lb-footer">
        <button id="lb-toggle" class="lb-toggle-btn" onclick="Lightbox.toggle()">🎨 VER PINTADO</button>
        <button class="lb-close-btn" onclick="Lightbox.close()">✕ CERRAR</button>
      </div>
    </div>
  `;
  document.body.appendChild(lb);
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  injectLightbox();
  buildSidebar();
  initSearch();
  renderFaction(currentFaction);
});