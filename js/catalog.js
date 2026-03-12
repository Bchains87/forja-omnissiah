/**
 * FORJA DEL OMNISSIAH — catalog.js
 * Lógica del catálogo: render, búsqueda y navegación por facciones
 */

let currentFaction = 'space-marines';
let searchQuery = '';
const imgState = {};

function formatPrice(n) {
  return n.toLocaleString('es-CL');
}

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

  const hasLore = !!data.loreFull;

  let html = `
    <div class="faction-header">
      <div class="faction-header-icon">${data.icon}</div>
      <div class="faction-header-text">
        <h2>${data.name}</h2>
        <p>${data.lore}</p>
      </div>
      ${hasLore ? `
      <button class="btn-lore" onclick="toggleLore('lore-${factionKey}')" title="Ver lore de la facción">
        <span class="btn-lore-icon">📖</span>
        <span class="btn-lore-text">LORE</span>
      </button>` : ''}
    </div>
    ${hasLore ? `
    <div class="lore-panel" id="lore-${factionKey}">
      <div class="lore-panel-inner">
        <div class="lore-panel-header">
          <span class="lore-panel-title">☠ TRASFONDO · ${data.name.toUpperCase()} ☠</span>
          <button class="lore-close" onclick="toggleLore('lore-${factionKey}')">✕ CERRAR</button>
        </div>
        <div class="lore-panel-body">${data.loreFull}</div>
      </div>
    </div>` : ''}`;

  if (Object.keys(filtered).length === 0) {
    html += `<div class="units-grid"><div class="empty-state">No se encontraron unidades para "<em>${searchQuery}</em>"</div></div>`;
  }

  Object.entries(filtered).forEach(([subfaction, units]) => {
    html += `<div class="subfaction-label">${subfaction}</div><div class="units-grid">`;
    units.forEach((unit, i) => {
      const tc = TYPE_CONFIG[unit.type];
      const cartId = `${factionKey}__${unit.name}`.replace(/\s+/g, '_');
      html += buildCard(unit, tc, factionKey, subfaction, i, cartId);
    });
    html += `</div>`;
  });

  main.innerHTML = html;
}

// ── TOGGLE LORE PANEL ──
function toggleLore(panelId) {
  const panel = document.getElementById(panelId);
  if (!panel) return;
  const isOpen = panel.classList.contains('open');
  panel.classList.toggle('open');
  if (!isOpen) {
    setTimeout(() => panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 80);
  }
}

// ── BUILD CARD HTML ──
function buildCard(unit, tc, factionKey, subfaction, i, cartId) {
  const safeSubfaction = subfaction.replace(/'/g, "\\'");
  return `
  <div class="unit-card" style="animation-delay:${i * 0.05}s">
    <div class="avail-badge"></div>
    <div class="card-image" id="img-${factionKey}-${safeSubfaction}-${i}">
      <span class="card-image-label" id="lbl-${factionKey}-${safeSubfaction}-${i}">RESINA</span>
      <div class="card-image-inner" id="inner-${factionKey}-${safeSubfaction}-${i}">
        ${buildImageContent(unit, factionKey)}
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

// ── TOGGLE IMAGE (resina / pintado) ──
function toggleImg(faction, sub, i, btn, imgResina, imgPintado) {
  const key   = `${faction}-${sub}-${i}`;
  const inner = document.getElementById(`inner-${faction}-${sub}-${i}`);
  const lbl   = document.getElementById(`lbl-${faction}-${sub}-${i}`);

  imgState[key] = !imgState[key];
  const showingPainted = imgState[key];

  if (inner) {
    const src = showingPainted ? imgPintado : imgResina;
    if (src) {
      inner.innerHTML = `<img src="img/${src}" alt="" style="width:100%;height:100%;object-fit:cover;transition:opacity 0.35s;">`;
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
        const tc = TYPE_CONFIG[unit.type];
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
      const isActive = key === currentFaction ? ' active' : '';
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

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  buildSidebar();
  initSearch();
  renderFaction(currentFaction);
});
