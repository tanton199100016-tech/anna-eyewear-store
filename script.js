const fallbackProducts = [
  {
    id: 'an221393', collection: 'best', category: 'frames', sku: 'AN221393',
    image: 'best-1.jpg', name: 'GK.M GỌNG NHỰA AN221393 (50.18.145)', price: 350000,
    measurements: '50 · 18 · 145', material: 'Nhựa acetate', shape: 'Vuông mềm', fit: 'Mặt nhỏ đến vừa',
    colors: ['Havana trong', 'Nâu trà'], badge: 'Bán chạy',
    description: 'Một dáng kính cân bằng giữa nét mềm và đường nét hiện đại. Phần cầu kính thấp giúp gọng ngồi ổn định, nhẹ mặt trong cả ngày.'
  },
  {
    id: 'an086', collection: 'best', category: 'frames', sku: 'AN086',
    image: 'best-2.jpg', name: 'GK. GỌNG NHỰA CỨNG AN086 (52.17.146)', price: 800000,
    measurements: '52 · 17 · 146', material: 'Acetate vân khói', shape: 'Chữ nhật', fit: 'Mặt vừa đến rộng',
    colors: ['Đen khói', 'Nâu đồi'], badge: 'Được yêu thích',
    description: 'Dáng chữ nhật cổ điển, càng kính chắc tay và bảng màu khói dễ phối. Lựa chọn sáng cho người thích vẻ gọn gàng, có cấu trúc.'
  },
  {
    id: 'an226825', collection: 'best', category: 'frames', sku: 'AN226825',
    image: 'best-3.jpg', name: 'GK. GỌNG CỐT KIM LOẠI AN226825 (50.22.150)', price: 550000,
    measurements: '50 · 22 · 150', material: 'Kim loại mảnh', shape: 'Browline', fit: 'Mặt nhỏ đến vừa',
    colors: ['Vàng champagne', 'Bạc'], badge: 'Nhẹ mặt',
    description: 'Cốt kim loại thanh, tạo cảm giác thoáng trên gương mặt. Màu champagne làm dịu tổng thể và hợp cả phong cách tối giản lẫn nữ tính.'
  },
  {
    id: 'an221415', collection: 'best', category: 'frames', sku: 'AN221415',
    image: 'best-4.jpg', name: 'GK.M GỌNG CÀNG KIM LOẠI AN221415 (51.19.145)', price: 400000,
    measurements: '51 · 19 · 145', material: 'Nhựa pha kim loại', shape: 'Mắt mèo nhẹ', fit: 'Mặt nhỏ đến vừa',
    colors: ['Nâu hồng', 'Đen'], badge: 'Mới về',
    description: 'Mắt kính hơi vát lên ở đuôi, đủ tạo điểm nhấn nhưng vẫn dễ đeo hằng ngày. Càng kim loại giúp tổng thể thanh hơn.'
  },
  {
    id: 'tr8076', collection: 'best', category: 'frames', sku: 'TR8076',
    image: 'best-5.jpg', name: 'GK. GỌNG NHỰA TR8076 (0876) (52.20.145)', price: 300000,
    measurements: '52 · 20 · 145', material: 'Nhựa dẻo', shape: 'Bo vuông', fit: 'Mặt vừa',
    colors: ['Đen trong', 'Xám khói'], badge: 'Giá tốt',
    description: 'Khung bo vuông vừa vặn với nhịp sống hàng ngày. Chất nhựa dẻo nhẹ, phù hợp khi bạn cần một chiếc gọng dễ đeo và dễ chăm.'
  },
  {
    id: 'sm21007', collection: 'best', category: 'frames', sku: 'SM21007',
    image: 'best-6.jpg', name: 'GK. GỌNG KHOAN SM21007 (53.17.145)', price: 450000,
    measurements: '53 · 17 · 145', material: 'Titan mảnh', shape: 'Không viền', fit: 'Mặt vừa đến rộng',
    colors: ['Xám bạc', 'Nâu đồng'], badge: 'Không viền',
    description: 'Thiết kế khoan mở giúp khuôn mặt nhẹ và sáng. Đây là dáng kính dành cho người thích phụ kiện tinh tế, gần như không chiếm chỗ.'
  },
  {
    id: 'tr27075', collection: 'new', category: 'frames', sku: 'TR27075',
    image: 'new-1.jpg', name: 'Gọng kính thời trang, mã hàng: TR27075', price: 280000,
    measurements: '51 · 19 · 144', material: 'Nhựa bóng', shape: 'Mắt mèo', fit: 'Mặt nhỏ đến vừa',
    colors: ['Đen bóng', 'Nâu cacao'], badge: 'Sản phẩm mới',
    description: 'Một dáng mắt mèo gọn, sắc nhưng không kén mặt. Phần sống mũi được cân chỉnh để tạo cảm giác cao và thoáng.'
  },
  {
    id: 'tn3284', collection: 'new', category: 'frames', sku: 'TN3284',
    image: 'new-2.jpg', name: 'Gọng kính thời trang, mã hàng: TN3284', price: 1600000,
    measurements: '53 · 18 · 146', material: 'Titan cao cấp', shape: 'Vuông bo', fit: 'Mặt vừa đến rộng',
    colors: ['Đen than', 'Nâu trà'], badge: 'Premium',
    description: 'Dòng gọng cao cấp với phần cốt titan bền, nhẹ và giữ dáng tốt. Các đường cong được tiết chế để đeo lâu vẫn thoải mái.'
  },
  {
    id: 'tittc041', collection: 'new', category: 'frames', sku: 'TITTC-041',
    image: 'new-3.jpg', name: 'Gọng kính thời trang, mã hàng: TITTC-041 (TC-041)', price: 580000,
    measurements: '50 · 20 · 145', material: 'Titan', shape: 'Panto', fit: 'Mặt nhỏ đến vừa',
    colors: ['Vàng nhạt', 'Bạc'], badge: 'Titan',
    description: 'Dáng panto tròn vừa đủ, kết hợp cùng chất titan nhẹ. Một lựa chọn cân bằng cho tủ kính tối giản.'
  },
  {
    id: 's01010', collection: 'new', category: 'frames', sku: 'S01010',
    image: 'new-4.jpg', name: 'Gọng kính thời trang, mã hàng: S01010', price: 580000,
    measurements: '51 · 18 · 143', material: 'Nhựa dẻo', shape: 'Bầu dục', fit: 'Mặt nhỏ đến vừa',
    colors: ['Havana mật ong', 'Đen'], badge: 'Sản phẩm mới',
    description: 'Khung bầu dục thân thiện với gương mặt nhỏ. Hoạ tiết Havana đem lại chút ấm áp cho những bộ đồ đơn sắc.'
  },
  {
    id: 's0958', collection: 'new', category: 'frames', sku: 'S0958',
    image: 'new-5.jpg', name: 'Gọng kính thời trang, mã hàng: S0958', price: 580000,
    measurements: '52 · 17 · 145', material: 'Nhựa acetate', shape: 'Chữ nhật mềm', fit: 'Mặt vừa',
    colors: ['Xám trong', 'Nâu hổ phách'], badge: 'Sản phẩm mới',
    description: 'Dáng chữ nhật mềm với phần viền vừa phải, dễ phối cùng sơ mi, blazer và đồ casual.'
  },
  {
    id: 's868', collection: 'new', category: 'frames', sku: 'S868',
    image: 'new-6.jpg', name: 'Gọng kính thời trang, mã hàng: 868 (S868)', price: 680000,
    measurements: '52 · 19 · 145', material: 'Kim loại phủ màu', shape: 'Mắt mèo vuông', fit: 'Mặt vừa',
    colors: ['Đỏ rượu', 'Đen'], badge: 'Sản phẩm mới',
    description: 'Một chút cá tính nằm ở đường viền mắt mèo vuông. Gọng mảnh giúp màu sắc nổi lên vừa đủ, không làm nặng gương mặt.'
  }
];

const feedback = [
  ['feedback-1.jpg', 'Gọng kính thời trang 1111100057', 880000],
  ['feedback-2.jpg', 'Gọng titan cao cấp NA240208', 1600000],
  ['feedback-3.jpg', 'Gọng kính thời trang 1111100021', 880000],
  ['feedback-4.jpg', 'Gọng càng titan 1386-1', 550000]
];

const asset = (name) => /^https?:\/\//i.test(String(name || '')) ? name : `public/assets/${name || 'no-image.jpg'}`;
const money = (value) => `${new Intl.NumberFormat('vi-VN').format(Number(value) || 0)}đ`;
const escapeHtml = (value) => String(value ?? '').replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
const byId = (id) => document.getElementById(id);

let catalog = [...fallbackProducts];
let cart = loadCart();
let detailQuantity = 1;
let toastTimer;
let supabaseClient = null;

function normalizeProduct(row) {
  const fallback = fallbackProducts.find((product) => product.id === row.id || product.sku === row.sku);
  return {
    ...(fallback || {}),
    ...row,
    id: String(row.id || row.sku || fallback?.id || `product-${Date.now()}`),
    collection: row.collection || fallback?.collection || 'best',
    category: row.category || fallback?.category || 'frames',
    price: Number(row.price ?? fallback?.price ?? 0),
    image: row.image || fallback?.image || 'no-image.jpg',
    colors: Array.isArray(row.colors) ? row.colors : (fallback?.colors || []),
    description: row.description || fallback?.description || 'Thiết kế được Anna chọn lọc để bạn đeo thoải mái mỗi ngày.'
  };
}

function productById(id) {
  return catalog.find((product) => product.id === id) || fallbackProducts.find((product) => product.id === id);
}

function productListFor(track, category = 'all') {
  const collection = catalog.filter((product) => product.collection === track);
  return category === 'all' ? collection : collection.filter((product) => product.category === category);
}

function renderProductCard(product) {
  const label = escapeHtml(product.name);
  return `
    <article class="product-card">
      <button class="product-image" type="button" data-open-product="${escapeHtml(product.id)}" aria-label="Xem chi tiết ${label}">
        <img src="${escapeHtml(asset(product.image))}" alt="${label}" loading="lazy" />
        <span class="product-quick" aria-hidden="true">+</span>
      </button>
      <button class="product-name" type="button" data-open-product="${escapeHtml(product.id)}">${label}</button>
      <div class="product-meta-line"><span class="product-price">${money(product.price)}</span></div>
    </article>`;
}

function renderTrack(track) {
  const list = productListFor(track.dataset.track, track.dataset.categoryFilter || 'all');
  track.innerHTML = list.map(renderProductCard).join('') || '<p class="product-empty">Anna đang bổ sung thêm mẫu cho danh mục này.</p>';
}

function renderProducts() {
  document.querySelectorAll('[data-track]').forEach(renderTrack);
}

function renderFeedback() {
  const rail = byId('feedbackRail');
  if (!rail) return;
  rail.innerHTML = feedback.map(([image, name, price]) => `
    <article class="feedback-card">
      <img src="${asset(image)}" alt="Feedback ${escapeHtml(name)}" loading="lazy" />
      <button type="button" data-open-product="${escapeHtml(catalog.find((product) => product.price === price)?.id || catalog[0].id)}">${escapeHtml(name)}</button>
      <small>${money(price)}</small>
    </article>`).join('');
}

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem('anna-cart-v1') || '[]');
    return Array.isArray(saved) ? saved.filter((item) => item && item.id && Number(item.qty) > 0).map((item) => ({ id: String(item.id), qty: Math.min(20, Math.max(1, Number(item.qty))) })) : [];
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem('anna-cart-v1', JSON.stringify(cart));
}

function cartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function cartLines() {
  return cart.map((item) => ({ ...item, product: productById(item.id) })).filter((item) => item.product);
}

function cartTotals() {
  const subtotal = cartLines().reduce((sum, item) => sum + (item.product.price * item.qty), 0);
  const shipping = subtotal === 0 || subtotal >= 700000 ? 0 : 30000;
  return { subtotal, shipping, total: subtotal + shipping };
}

function renderCart() {
  const itemsElement = byId('cartItems');
  if (!itemsElement) return;
  const lines = cartLines();
  const totals = cartTotals();
  const count = cartCount();
  const cartCountBadge = byId('cartCount');
  cartCountBadge.textContent = count;
  cartCountBadge.hidden = count === 0;
  byId('cartHeaderCount').textContent = count;
  byId('cartSubtotal').textContent = money(totals.subtotal);
  byId('cartShipping').textContent = totals.shipping ? money(totals.shipping) : (totals.subtotal ? 'Miễn phí' : '—');
  byId('cartTotal').textContent = money(totals.total);
  byId('cartEmpty').hidden = lines.length > 0;
  byId('cartFooter').hidden = lines.length === 0;

  if (!lines.length) {
    itemsElement.innerHTML = '';
    byId('cartShippingNote').textContent = 'Miễn phí vận chuyển cho đơn từ 700.000đ';
    return;
  }

  const remaining = Math.max(0, 700000 - totals.subtotal);
  byId('cartShippingNote').textContent = remaining ? `Mua thêm ${money(remaining)} để được miễn phí vận chuyển` : 'Đơn hàng của bạn được miễn phí vận chuyển';
  itemsElement.innerHTML = lines.map(({ product, qty }) => `
    <article class="cart-line">
      <button class="cart-line-image" type="button" data-open-product="${escapeHtml(product.id)}" aria-label="Xem ${escapeHtml(product.name)}"><img src="${escapeHtml(asset(product.image))}" alt="" /></button>
      <div class="cart-line-copy">
        <button class="cart-line-name" type="button" data-open-product="${escapeHtml(product.id)}">${escapeHtml(product.name)}</button>
        <span class="cart-line-sku">${escapeHtml(product.sku || '')}</span>
        <div class="cart-line-bottom">
          <div class="quantity-control small" aria-label="Số lượng">
            <button type="button" data-cart-action="decrease" data-product-id="${escapeHtml(product.id)}" aria-label="Giảm số lượng">−</button>
            <span>${qty}</span>
            <button type="button" data-cart-action="increase" data-product-id="${escapeHtml(product.id)}" aria-label="Tăng số lượng">+</button>
          </div>
          <strong>${money(product.price * qty)}</strong>
        </div>
      </div>
      <button class="cart-line-remove" type="button" data-cart-action="remove" data-product-id="${escapeHtml(product.id)}" aria-label="Xoá ${escapeHtml(product.name)}">×</button>
    </article>`).join('');
}

function showToast(message) {
  const toast = byId('cartToast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

function addToCart(id, quantity = 1) {
  const product = productById(id);
  if (!product) return;
  const line = cart.find((item) => item.id === id);
  if (line) line.qty = Math.min(20, line.qty + quantity);
  else cart.push({ id, qty: Math.min(20, Math.max(1, quantity)) });
  saveCart();
  renderCart();
  showToast(`${product.name} đã thêm vào giỏ`);
}

function updateCartQuantity(id, nextQuantity) {
  const line = cart.find((item) => item.id === id);
  if (!line) return;
  if (nextQuantity <= 0) cart = cart.filter((item) => item.id !== id);
  else line.qty = Math.min(20, nextQuantity);
  saveCart();
  renderCart();
}

const drawer = byId('drawer');
const menuTrigger = document.querySelector('.menu-trigger');
const closeDrawer = () => {
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
  menuTrigger?.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('locked');
};
menuTrigger?.addEventListener('click', () => {
  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
  menuTrigger.setAttribute('aria-expanded', 'true');
  document.body.classList.add('locked');
});
drawer?.querySelectorAll('[data-close-drawer], nav a').forEach((element) => element.addEventListener('click', closeDrawer));

const searchPanel = byId('searchPanel');
const searchTrigger = document.querySelector('.search-trigger');
const closeSearch = () => {
  searchPanel?.classList.remove('open');
  searchPanel?.setAttribute('aria-hidden', 'true');
  searchTrigger?.setAttribute('aria-expanded', 'false');
};
searchTrigger?.addEventListener('click', () => {
  const open = searchPanel.classList.toggle('open');
  searchPanel.setAttribute('aria-hidden', String(!open));
  searchTrigger.setAttribute('aria-expanded', String(open));
  if (open) byId('searchInput')?.focus();
});
byId('searchClose')?.addEventListener('click', closeSearch);
function submitSearch() {
  const value = byId('searchInput').value.trim().toLowerCase();
  if (!value) return;
  const match = catalog.find((product) => `${product.name} ${product.sku}`.toLowerCase().includes(value));
  if (match) openProduct(match.id);
  else showToast('Anna chưa tìm thấy mẫu kính này');
  closeSearch();
}
byId('searchSubmit')?.addEventListener('click', submitSearch);
byId('searchInput')?.addEventListener('keydown', (event) => { if (event.key === 'Enter') submitSearch(); });

const heroSlides = [...document.querySelectorAll('.hero-slide')];
const heroDots = [...document.querySelectorAll('.hero-dot')];
let heroIndex = 0;
function setHero(index) {
  heroIndex = (index + heroSlides.length) % heroSlides.length;
  heroSlides.forEach((slide, i) => slide.classList.toggle('is-active', i === heroIndex));
  heroDots.forEach((dot, i) => dot.classList.toggle('is-active', i === heroIndex));
}
heroDots.forEach((dot) => dot.addEventListener('click', () => setHero(Number(dot.dataset.slide))));
setInterval(() => setHero(heroIndex + 1), 6000);

const promoTrack = byId('promoTrack');
let promoIndex = 0;
function setPromo(next) {
  promoIndex = (promoIndex + next + 4) % 4;
  promoTrack.style.transform = `translateX(-${promoIndex * 100}%)`;
}
document.querySelectorAll('[data-promo-direction]').forEach((button) => button.addEventListener('click', () => setPromo(button.dataset.promoDirection === 'next' ? 1 : -1)));
setInterval(() => setPromo(1), 4200);

document.querySelectorAll('.category-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    const group = tab.closest('.section-heading');
    const track = group?.parentElement.querySelector('[data-track]');
    const category = tab.dataset.category || 'all';
    group?.querySelectorAll('.category-tab').forEach((item) => {
      item.classList.toggle('active', item === tab);
      item.setAttribute('aria-selected', String(item === tab));
    });
    if (track) {
      track.dataset.categoryFilter = category;
      renderTrack(track);
    }
  });
});

const feedbackRail = byId('feedbackRail');
document.querySelectorAll('[data-feedback]').forEach((button) => button.addEventListener('click', () => feedbackRail.scrollBy({ left: button.dataset.feedback === 'next' ? feedbackRail.clientWidth * .75 : -feedbackRail.clientWidth * .75, behavior: 'smooth' })));

const feedbackModal = byId('feedbackModal');
const closeFeedbackModal = () => { feedbackModal.classList.remove('open'); feedbackModal.setAttribute('aria-hidden', 'true'); document.body.classList.remove('locked'); };
document.querySelectorAll('.feedback-trigger').forEach((button) => button.addEventListener('click', () => { feedbackModal.classList.add('open'); feedbackModal.setAttribute('aria-hidden', 'false'); document.body.classList.add('locked'); feedbackModal.querySelector('input')?.focus(); }));
feedbackModal?.querySelectorAll('[data-close-feedback]').forEach((element) => element.addEventListener('click', closeFeedbackModal));
byId('feedbackForm')?.addEventListener('submit', (event) => { event.preventDefault(); byId('formSuccess').hidden = false; event.currentTarget.reset(); });

const cartDrawer = byId('cartDrawer');
function openCart({ updateHash = true } = {}) {
  closeProduct({ updateHash: false });
  cartDrawer.classList.add('open');
  cartDrawer.setAttribute('aria-hidden', 'false');
  document.querySelector('.cart-trigger')?.setAttribute('aria-expanded', 'true');
  document.body.classList.add('locked');
  if (updateHash && location.hash !== '#gio-hang') history.pushState({ cart: true }, '', '#gio-hang');
}
function closeCart({ updateHash = true } = {}) {
  cartDrawer.classList.remove('open');
  cartDrawer.setAttribute('aria-hidden', 'true');
  document.querySelector('.cart-trigger')?.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('locked');
  if (updateHash && location.hash === '#gio-hang') history.pushState({}, '', `${location.pathname}${location.search}`);
}
cartDrawer?.querySelectorAll('[data-close-cart]').forEach((element) => element.addEventListener('click', () => closeCart()));
document.querySelector('.cart-trigger')?.addEventListener('click', () => openCart());

function renderProductDetail(product) {
  const colors = (product.colors || []).map((color) => `<span>${escapeHtml(color)}</span>`).join('');
  const content = byId('productDetailContent');
  content.innerHTML = `
    <div class="product-detail-layout">
      <div class="product-detail-media">
        <div class="detail-image-wrap">
          ${product.badge ? `<span class="detail-badge">${escapeHtml(product.badge)}</span>` : ''}
          <img src="${escapeHtml(asset(product.image))}" alt="${escapeHtml(product.name)}" />
        </div>
        <div class="detail-image-caption"><span>ANNA EYEWEAR</span><span>${escapeHtml(product.sku || '')}</span></div>
      </div>
      <div class="product-detail-copy">
        <p class="product-kicker">GỌNG KÍNH · ${escapeHtml(product.sku || '')}</p>
        <h1 id="productDetailTitle">${escapeHtml(product.name)}</h1>
        <div class="detail-price-row"><strong>${money(product.price)}</strong><span>Đã gồm VAT</span></div>
        <p class="detail-description">${escapeHtml(product.description)}</p>
        <dl class="product-spec-grid">
          <div><dt>Kích thước</dt><dd>${escapeHtml(product.measurements || '—')}</dd></div>
          <div><dt>Chất liệu</dt><dd>${escapeHtml(product.material || '—')}</dd></div>
          <div><dt>Dáng kính</dt><dd>${escapeHtml(product.shape || '—')}</dd></div>
          <div><dt>Khuôn mặt</dt><dd>${escapeHtml(product.fit || '—')}</dd></div>
        </dl>
        <div class="detail-colors"><span>Màu có sẵn</span><div>${colors || '<span>Liên hệ Anna</span>'}</div></div>
        <div class="detail-actions">
          <div class="quantity-control" aria-label="Số lượng">
            <button type="button" data-detail-quantity="decrease" aria-label="Giảm số lượng">−</button>
            <span id="detailQuantity">${detailQuantity}</span>
            <button type="button" data-detail-quantity="increase" aria-label="Tăng số lượng">+</button>
          </div>
          <button class="solid-button detail-add-button" type="button" data-detail-add="${escapeHtml(product.id)}">THÊM VÀO GIỎ <span>+</span></button>
        </div>
        <div class="detail-perks"><span>⌁</span><p>Đo mắt và tư vấn miễn phí tại cửa hàng Anna.</p><span>↺</span><p>Đổi gọng trong 7 ngày nếu chưa phù hợp.</p></div>
      </div>
    </div>
    <div class="detail-notes">
      <details open><summary>Về sản phẩm</summary><p>${escapeHtml(product.description)} Anna kiểm tra từng gọng kính trước khi gửi đi.</p></details>
      <details><summary>Đo và lắp tròng</summary><p>Bạn có thể mang đơn kính đến cửa hàng Anna gần nhất để được tư vấn tròng phù hợp.</p></details>
      <details><summary>Giao hàng và đổi trả</summary><p>Miễn phí vận chuyển từ 700.000đ. Hỗ trợ đổi trong 7 ngày với sản phẩm còn nguyên trạng.</p></details>
    </div>`;
}

const productDetailModal = byId('productDetailModal');
function openProduct(id, { updateHash = true } = {}) {
  const product = productById(id);
  if (!product) return;
  closeCart({ updateHash: false });
  detailQuantity = 1;
  renderProductDetail(product);
  productDetailModal.classList.add('open');
  productDetailModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('locked');
  if (updateHash && location.hash !== `#san-pham/${id}`) history.pushState({ product: id }, '', `#san-pham/${id}`);
}
function closeProduct({ updateHash = true } = {}) {
  productDetailModal?.classList.remove('open');
  productDetailModal?.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('locked');
  if (updateHash && location.hash.startsWith('#san-pham/')) history.pushState({}, '', `${location.pathname}${location.search}`);
}
productDetailModal?.querySelectorAll('[data-close-product]').forEach((element) => element.addEventListener('click', () => closeProduct()));

function openCheckout() {
  if (!cart.length) {
    showToast('Hãy thêm một sản phẩm trước khi đặt hàng');
    return;
  }
  const totals = cartTotals();
  byId('checkoutSummary').innerHTML = `${cartCount()} sản phẩm · Tổng cộng <strong>${money(totals.total)}</strong>`;
  byId('checkoutSuccess').hidden = true;
  byId('checkoutModal').classList.add('open');
  byId('checkoutModal').setAttribute('aria-hidden', 'false');
  document.body.classList.add('locked');
  byId('checkoutModal').querySelector('input')?.focus();
}
function closeCheckout() {
  byId('checkoutModal').classList.remove('open');
  byId('checkoutModal').setAttribute('aria-hidden', 'true');
  if (cartDrawer?.classList.contains('open') || productDetailModal?.classList.contains('open')) document.body.classList.add('locked');
  else document.body.classList.remove('locked');
}
byId('checkoutTrigger')?.addEventListener('click', openCheckout);
byId('checkoutModal')?.querySelectorAll('[data-close-checkout]').forEach((element) => element.addEventListener('click', closeCheckout));

function createSupabaseClient() {
  const config = window.ANNA_SUPABASE_CONFIG || {};
  if (!config.url || !config.anonKey || !window.supabase?.createClient) return null;
  try { return window.supabase.createClient(config.url, config.anonKey); } catch { return null; }
}

async function loadRemoteCatalog() {
  supabaseClient = createSupabaseClient();
  if (!supabaseClient) return;
  const { data, error } = await supabaseClient.from('products').select('*').eq('is_active', true).order('created_at', { ascending: false });
  if (error || !data?.length) return;
  catalog = data.map(normalizeProduct);
  renderProducts();
  renderFeedback();
}

async function sendOrder(customer) {
  const totals = cartTotals();
  const lines = cartLines();
  if (!supabaseClient) {
    localStorage.setItem('anna-last-order', JSON.stringify({ ...customer, ...totals, items: lines, created_at: new Date().toISOString() }));
    return { local: true };
  }
  const orderId = crypto.randomUUID();
  const { error: orderError } = await supabaseClient.from('orders').insert({ id: orderId, customer_name: customer.customer_name, phone: customer.phone, address: customer.address, note: customer.note || null, subtotal: totals.subtotal, shipping: totals.shipping, total: totals.total });
  if (orderError) throw orderError;
  const { error: itemsError } = await supabaseClient.from('order_items').insert(lines.map(({ product, qty }) => ({ order_id: orderId, product_id: product.id, product_name: product.name, unit_price: product.price, quantity: qty })));
  if (itemsError) throw itemsError;
  return { local: false, orderId };
}

byId('checkoutForm')?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const button = form.querySelector('button[type="submit"]');
  button.disabled = true;
  button.classList.add('is-loading');
  try {
    const result = await sendOrder(Object.fromEntries(new FormData(form).entries()));
    const success = byId('checkoutSuccess');
    success.textContent = result.local ? 'Đơn hàng đã được lưu. Anna sẽ liên hệ với bạn sớm.' : `Đã nhận đơn ${result.orderId.slice(0, 8).toUpperCase()}. Anna sẽ liên hệ với bạn sớm.`;
    success.hidden = false;
    cart = [];
    saveCart();
    renderCart();
    form.reset();
  } catch (error) {
    showToast('Chưa thể gửi đơn. Vui lòng thử lại sau ít phút.');
    console.error('Anna order error', error);
  } finally {
    button.disabled = false;
    button.classList.remove('is-loading');
  }
});

document.addEventListener('click', (event) => {
  const open = event.target.closest('[data-open-product]');
  if (open) {
    event.preventDefault();
    openProduct(open.dataset.openProduct);
    return;
  }
  const add = event.target.closest('[data-add-product]');
  if (add) {
    event.preventDefault();
    addToCart(add.dataset.addProduct);
    return;
  }
  const cartAction = event.target.closest('[data-cart-action]');
  if (cartAction) {
    const line = cart.find((item) => item.id === cartAction.dataset.productId);
    if (!line) return;
    const action = cartAction.dataset.cartAction;
    updateCartQuantity(line.id, action === 'increase' ? line.qty + 1 : action === 'decrease' ? line.qty - 1 : 0);
    return;
  }
  const detailQuantityButton = event.target.closest('[data-detail-quantity]');
  if (detailQuantityButton) {
    detailQuantity = Math.min(20, Math.max(1, detailQuantity + (detailQuantityButton.dataset.detailQuantity === 'increase' ? 1 : -1)));
    byId('detailQuantity').textContent = detailQuantity;
    return;
  }
  const detailAdd = event.target.closest('[data-detail-add]');
  if (detailAdd) addToCart(detailAdd.dataset.detailAdd, detailQuantity);
});

function syncHash() {
  if (location.hash.startsWith('#san-pham/')) {
    openProduct(decodeURIComponent(location.hash.replace('#san-pham/', '')), { updateHash: false });
  } else if (location.hash === '#gio-hang') {
    openCart({ updateHash: false });
  } else {
    closeProduct({ updateHash: false });
    closeCart({ updateHash: false });
  }
}
window.addEventListener('hashchange', syncHash);
window.addEventListener('popstate', syncHash);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeDrawer(); closeSearch(); closeFeedbackModal(); closeCheckout(); closeProduct(); closeCart();
  }
});

renderProducts();
renderFeedback();
renderCart();
loadRemoteCatalog();
syncHash();
