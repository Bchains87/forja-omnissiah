/**
 * FORJA DEL OMNISSIAH — cart.js
 * Lógica del carrito de presupuesto
 */

const Cart = (() => {
  let items = []; // { id, name, faction, price, qty }

  // ── HELPERS ──
  function formatPrice(n) {
    return '$' + n.toLocaleString('es-CL');
  }

  function generateId(faction, name) {
    return `${faction}__${name}`.replace(/\s+/g, '_');
  }

  // ── CRUD ──
  function add(faction, name, price) {
    const id = generateId(faction, name);
    const existing = items.find(i => i.id === id);
    if (existing) {
      existing.qty++;
    } else {
      const factionName = FACTIONS[faction]?.name || faction;
      items.push({ id, name, faction: factionName, price, qty: 1 });
    }
    render();
    showPanel();
    updateFloatingBtn();
    flashBtn(id);
  }

  function remove(id) {
    items = items.filter(i => i.id !== id);
    render();
    updateFloatingBtn();
    if (items.length === 0) animateEmpty();
  }

  function updateQty(id, delta) {
    const item = items.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) { remove(id); return; }
    render();
    updateFloatingBtn();
  }

  function clear() {
    items = [];
    render();
    updateFloatingBtn();
    animateEmpty();
  }

  function getTotal() {
    return items.reduce((sum, i) => sum + i.price * i.qty, 0);
  }

  function getTotalItems() {
    return items.reduce((sum, i) => sum + i.qty, 0);
  }

  // ── PANEL TOGGLE ──
  function showPanel() {
    const panel = document.getElementById('cartPanel');
    const overlay = document.getElementById('cartOverlay');
    panel.classList.add('open');
    overlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
  }

  function hidePanel() {
    const panel = document.getElementById('cartPanel');
    const overlay = document.getElementById('cartOverlay');
    panel.classList.remove('open');
    overlay.classList.remove('visible');
    document.body.style.overflow = '';
  }

  function togglePanel() {
    const panel = document.getElementById('cartPanel');
    if (panel.classList.contains('open')) hidePanel();
    else showPanel();
  }

  // ── FLOATING BUTTON ──
  function updateFloatingBtn() {
    const badge = document.getElementById('cartBadge');
    const count = getTotalItems();
    if (count > 0) {
      badge.textContent = count;
      badge.style.display = 'flex';
    } else {
      badge.style.display = 'none';
    }
  }

  function flashBtn(id) {
    // Flash the card's add button to give feedback
    const btn = document.querySelector(`[data-cart-id="${id}"]`);
    if (btn) {
      btn.classList.add('cart-added');
      btn.textContent = '✓ AGREGADO';
      setTimeout(() => {
        btn.classList.remove('cart-added');
        btn.textContent = '🛒 AL PRESUPUESTO';
      }, 1200);
    }
  }

  function animateEmpty() {
    const emptyEl = document.getElementById('cartEmpty');
    if (emptyEl) {
      emptyEl.style.animation = 'none';
      void emptyEl.offsetWidth;
      emptyEl.style.animation = 'fadeIn 0.4s ease';
    }
  }

  // ── RENDER ──
  function render() {
    const listEl    = document.getElementById('cartItems');
    const totalEl   = document.getElementById('cartTotal');
    const totalRow  = document.getElementById('cartTotalRow');
    const emptyEl   = document.getElementById('cartEmpty');
    const actionsEl = document.getElementById('cartActions');
    const countEl   = document.getElementById('cartCount');

    if (!listEl) return;

    countEl.textContent = getTotalItems() + ' item(s)';

    if (items.length === 0) {
      listEl.innerHTML = '';
      emptyEl.style.display = 'flex';
      actionsEl.style.display = 'none';
      if (totalRow) totalRow.style.display = 'none';
      return;
    }

    emptyEl.style.display = 'none';
    actionsEl.style.display = 'flex';
    if (totalRow) totalRow.style.display = 'flex';

    listEl.innerHTML = items.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-faction">${item.faction}</div>
        </div>
        <div class="cart-item-controls">
          <button class="cart-qty-btn" onclick="Cart.updateQty('${item.id}', -1)">−</button>
          <span class="cart-qty">${item.qty}</span>
          <button class="cart-qty-btn" onclick="Cart.updateQty('${item.id}', 1)">+</button>
        </div>
        <div class="cart-item-price">
          <div class="cart-item-subtotal">${formatPrice(item.price * item.qty)}</div>
          <div class="cart-item-unit">${formatPrice(item.price)} c/u</div>
        </div>
        <button class="cart-remove" onclick="Cart.remove('${item.id}')" title="Eliminar">✕</button>
      </div>
    `).join('');

    totalEl.textContent = formatPrice(getTotal());
  }

  // ── EXPORT ──
  function exportWhatsApp(waNumber) {
    if (items.length === 0) return;
    const lines = ['*🛡 FORJA DEL OMNISSIAH — Presupuesto*', ''];
    items.forEach(item => {
      lines.push(`• ${item.name} ×${item.qty} — ${formatPrice(item.price * item.qty)}`);
    });
    lines.push('');
    lines.push(`*TOTAL: ${formatPrice(getTotal())}*`);
    lines.push('');
    lines.push('_Precios referenciales en CLP. Sujetos a disponibilidad._');
    const msg = encodeURIComponent(lines.join('\n'));
    const num = (waNumber || '56900000000').replace(/\D/g, '');
    window.open(`https://wa.me/${num}?text=${msg}`, '_blank');
  }

  function exportText() {
    if (items.length === 0) return;
    const lines = ['FORJA DEL OMNISSIAH — Presupuesto', '=' .repeat(40), ''];
    items.forEach(item => {
      lines.push(`${item.name}`);
      lines.push(`  Facción: ${item.faction}`);
      lines.push(`  Cantidad: ${item.qty}  ×  ${formatPrice(item.price)} = ${formatPrice(item.price * item.qty)}`);
      lines.push('');
    });
    lines.push('-'.repeat(40));
    lines.push(`TOTAL: ${formatPrice(getTotal())}`);
    lines.push('');
    lines.push('Precios referenciales en CLP.');

    const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'presupuesto-forja-omnissiah.txt';
    a.click();
    URL.revokeObjectURL(url);
  }

  // ── PUBLIC API ──
  return { add, remove, updateQty, clear, togglePanel, hidePanel, showPanel, exportWhatsApp, exportText, render };
})();
