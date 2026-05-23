// ============================================================
//  🛒 PRODUCTS DATABASE (DO NOT CHANGE STRUCTURE — SAFE EDIT SYSTEM)
//
//  HOW TO ADD PRODUCTS:
//  1. Copy one product object { ... }
//  2. Give it a unique id (e.g., "p009")
//  3. Fill in all fields
//  4. Add to the array below
//  5. images[] supports unlimited entries
//  6. affiliateLink should point to Shopee/Lazada/Amazon/brand
//
// ============================================================

const products = [
  {
    id: "p001",
    name: "Apple AirPods Pro 2nd Generation",
    description: "The AirPods Pro 2nd Gen deliver up to 2x more Active Noise Cancellation than the previous generation. With Adaptive Audio, they seamlessly blend the outside world into your listening experience based on your environment. Transparency mode is so natural you can hear conversations around you without removing them.",
    price: "₱14,990",
    category: "Electronics",
    brand: "Apple",
    featured: true,
    highlights: [
      "Up to 2x Active Noise Cancellation",
      "Adaptive Transparency mode",
      "Up to 30 hours total battery life",
      "H2 chip for unreal sound quality",
      "MagSafe & Apple Watch Charging"
    ],
    images: [
      "Products/products1 image/item1_image1.jpg",
      "Products/products1 image/item1_image2.jpg",
      "Products/products1 image/item1_image3.jpg",
      "Products/products1 image/item1_image4.jpg",
      "Products/products1 image/item1_image5.jpg",
      "Products/products1 image/item1_image6.jpg",
      "Products/products1 image/item1_image7.jpg",
      "Products/products1 image/item1_image8.jpg",
      "Products/products1 image/item1_image9.jpg",
      "Products/products1 image/item1_image10.jpg",
      "Products/products1 image/item1_image11.jpg",
      "Products/products1 image/item1_image12.jpg"
    ],
    affiliateLink: "https://shopee.ph"
  },
  {
    id: "p002",
    name: "O.TWO.O Matte Lipstick Misty Kiss Lock Color Silky 24H Long Lasting Lip Makeup",
    description: "Comfortable on your lips Non-Stick Cup",
    price: "₱179.00",
    category: "Beauty",
    brand: "O.TWO.O PH Official Store",
    featured: false,
    highlights: [
      "Powder Matte Texture",
      "24 Hours Intense Color",
      "Transfer-Proof & Water Proof"
    ],
    images: [
      "Products/products2 image/item2_image1.jpg",
      "Products/products2 image/item2_image2.jpg",
      "Products/products2 image/item2_image3.jpg",
      "Products/products2 image/item2_image4.jpg",
      "Products/products2 image/item2_image5.jpg",
      "Products/products2 image/item2_image6.jpg",
      "Products/products2 image/item2_image7.jpg",
      "Products/products2 image/item2_image8.jpg",
      "Products/products2 image/item2_image9.jpg",
      "Products/products2 image/item2_image10.jpg",
      "Products/products2 image/item2_image11.jpg",
      "Products/products2 image/item2_image12.jpg",
      "Products/products2 image/item2_image13.jpg",
      "Products/products2 image/item2_image14.jpg",
      "Products/products2 image/item2_image15.jpg"
    ],
    affiliateLink: "https://s.shopee.ph/809iZJl58f"
  },
  {
    id: "p003",
    name: "Samsung Galaxy Watch 6 Classic",
    description: "The Galaxy Watch 6 Classic brings back the iconic rotating bezel with a bold, sophisticated design. Track your health with advanced sleep coaching, body composition analysis, and continuous heart rate monitoring. The biggest battery yet means you can wear it all day and night without worry.",
    price: "₱19,990",
    category: "Electronics",
    brand: "Samsung",
    featured: true,
    highlights: [
      "Iconic rotating physical bezel",
      "Advanced sleep tracking & coaching",
      "Body composition analysis",
      "BP & ECG monitoring",
      "Wear OS with Samsung One UI"
    ],
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80",
      "https://images.unsplash.com/photo-1617625802912-cde586faf749?w=800&q=80"
    ],
    affiliateLink: "https://shopee.ph"
  },
  {
    id: "p004",
    name: "Samsung Galaxy Watch 6 Classic",
    description: "The Galaxy Watch 6 Classic brings back the iconic rotating bezel with a bold, sophisticated design. Track your health with advanced sleep coaching, body composition analysis, and continuous heart rate monitoring. The biggest battery yet means you can wear it all day and night without worry.",
    price: "₱19,990",
    category: "Electronics",
    brand: "Samsung",
    featured: true,
    highlights: [
      "Iconic rotating physical bezel",
      "Advanced sleep tracking & coaching",
      "Body composition analysis",
      "BP & ECG monitoring",
      "Wear OS with Samsung One UI"
    ],
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80",
      "https://images.unsplash.com/photo-1617625802912-cde586faf749?w=800&q=80"
    ],
    affiliateLink: "https://shopee.ph"
  },
  {
    id: "p005",
    name: "Anker MagSafe Wireless Charger Pad",
    description: "Charge your iPhone at top speed with this Qi2-certified charger. Made for all MagSafe-compatible devices, this slim charger delivers 15W of wireless power with precise magnetic alignment. The premium braided cable and travel-friendly design make it the perfect companion whether you're at home or on the go.",
    price: "₱2,499",
    category: "Electronics",
    brand: "Anker",
    featured: false,
    highlights: [
      "Qi2 certified — 15W fast charging",
      "Magnetic alignment for iPhone",
      "Ultra-slim compact design",
      "Premium braided cable included",
      "Compatible with AirPods & Apple Watch"
    ],
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80",
      "https://images.unsplash.com/photo-1603539947678-cd3954ed515d?w=800&q=80"
    ],
    affiliateLink: "https://lazada.com.ph"
  },
  {
    id: "p006",
    name: "Xiaomi Redmi Note 13 Pro+",
    description: "The Redmi Note 13 Pro+ redefines what's possible in mid-range smartphones. A 200MP camera system captures stunning detail, while the 120Hz AMOLED display makes everything look incredible. With 120W HyperCharge, you can fully charge from 0 to 100% in just 19 minutes.",
    price: "₱23,499",
    category: "Electronics",
    brand: "Xiaomi",
    featured: false,
    highlights: [
      "200MP Light Fusion 800 camera",
      "120W HyperCharge — full charge in 19 min",
      "6.67\" AMOLED 120Hz display",
      "Dimensity 7200 Ultra processor",
      "IP68 water & dust resistance"
    ],
    images: [
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=800&q=80",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80"
    ],
    affiliateLink: "https://shopee.ph"
  },
  {
    id: "p007",
    name: "Dyson Supersonic Hair Dryer",
    description: "Engineered to protect hair from extreme heat damage. The Dyson digital motor V9 is small enough to fit in the handle, producing a high-pressure, high-velocity jet of air for fast drying. Intelligent heat control measures air temperature over 40 times a second, so the temperature is never too high.",
    price: "₱29,990",
    category: "Beauty",
    brand: "Dyson",
    featured: true,
    highlights: [
      "Intelligent heat control (40x/sec)",
      "Fast drying — no extreme heat damage",
      "Magnetic attachments included",
      "3 speeds, 4 heat settings",
      "Cold shot button for shine"
    ],
    images: [
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=80"
    ],
    affiliateLink: "https://lazada.com.ph"
  },
  {
    id: "p008",
    name: "The Ordinary Serum Foundation",
    description: "A water-based, medium-to-full coverage foundation with a serum-like consistency. The formula contains 17 skin-beneficial and protective technologies to offer coverage while treating and improving the skin. Suitable for all skin types and available in a wide range of shades.",
    price: "₱890",
    category: "Beauty",
    brand: "The Ordinary",
    featured: false,
    highlights: [
      "Medium-to-full buildable coverage",
      "Serum consistency — lightweight feel",
      "17 skin-beneficial ingredients",
      "Suitable for all skin types",
      "Wide shade range available"
    ],
    images: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=80",
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80"
    ],
    affiliateLink: "https://shopee.ph"
  },
  {
    id: "p009",
    name: "Uniqlo AIRism Ultra Seamless Shorts",
    description: "Lightweight, breathable AIRism shorts designed for all-day comfort. The seamless construction eliminates chafing and irritation, while the moisture-wicking fabric keeps you dry. Perfect for lounging at home, working out, or wearing under other clothes as base-layer shorts.",
    price: "₱990",
    category: "Fashion",
    brand: "Uniqlo",
    featured: false,
    highlights: [
      "Ultra-soft AIRism fabric",
      "Seamless construction — zero chafing",
      "Moisture-wicking & quick-dry",
      "Odor-resistant technology",
      "Can wear as base layer or standalone"
    ],
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80"
    ],
    affiliateLink: "https://lazada.com.ph"
  },
  {
    id: "p0010",
    name: "New Balance 990v5 Running Shoes",
    description: "A legendary silhouette that's been refined over decades, the 990v5 is the pinnacle of the New Balance franchise. Made in the USA with premium ENCAP midsole technology for the perfect balance of cushioning and stability. Ideal for daily training or casual street wear with an iconic aesthetic.",
    price: "₱11,995",
    category: "Fashion",
    brand: "New Balance",
    featured: false,
    highlights: [
      "Made in USA with premium materials",
      "ENCAP midsole — cushioning + stability",
      "Pigskin & mesh upper for durability",
      "Durable rubber outsole",
      "Available in multiple colorways"
    ],
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
      "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=800&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80"
    ],
    affiliateLink: "https://shopee.ph"
  },
  {
    id: "p011",
    name: "Logitech MX Master 3S Mouse",
    description: "The most advanced Master Series mouse ever built. With a new Quiet Click feature that reduces click sound by 90%, an 8K DPI sensor that tracks on any surface including glass, and an electromagnetic scroll wheel for ultra-fast or precise scrolling. Connect to up to 3 devices and switch instantly.",
    price: "₱7,495",
    category: "Electronics",
    brand: "Logitech",
    featured: false,
    highlights: [
      "Quiet Click — 90% sound reduction",
      "8,000 DPI on any surface including glass",
      "MagSpeed electromagnetic scroll wheel",
      "Connect up to 3 devices",
      "70-day battery life"
    ],
    images: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80",
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800&q=80",
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&q=80"
    ],
    affiliateLink: "https://lazada.com.ph"
  },
  {
    id: "p012",
    name: "PlayStation 5 DualSense Controller",
    description: "Experience a new era of gaming with the DualSense wireless controller. Featuring haptic feedback that allows you to feel the tension of a bowstring or the rumble of a vehicle, and adaptive triggers that convey the feeling of resistance when you pull a trigger or aim a weapon. Immersion at a whole new level.",
    price: "₱4,090",
    category: "Gaming",
    brand: "Sony PlayStation",
    featured: true,
    highlights: [
      "Haptic feedback — feel every moment",
      "Adaptive triggers with resistance",
      "Built-in microphone & speaker",
      "USB-C charging",
      "3D audio integration"
    ],
    images: [
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&q=80",
      "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?w=800&q=80",
      "https://images.unsplash.com/photo-1595241028945-4d6bbc9cb9b4?w=800&q=80"
    ],
    affiliateLink: "https://shopee.ph"
  },
  {
    id: "p013",
    name: "Razer DeathAdder V3 Pro",
    description: "Wireless esports mouse engineered for elite performance. The Focus Pro 30K Optical Sensor delivers tournament-grade accuracy, while the HyperSpeed wireless technology offers a lightning-fast connection with up to 90 hours of battery life. At just 64g, it's one of the lightest wireless mice ever made.",
    price: "₱6,795",
    category: "Gaming",
    brand: "Razer",
    featured: false,
    highlights: [
      "Focus Pro 30K optical sensor",
      "HyperSpeed wireless — ultra-low latency",
      "90 hour battery life",
      "Ultra-lightweight at 64g",
      "Razer Chroma RGB lighting"
    ],
    images: [
      "https://images.unsplash.com/photo-1613141411244-0e4ac259d45f?w=800&q=80",
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&q=80",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80"
    ],
    affiliateLink: "https://lazada.com.ph"
  },
  {
    id: "p014",
    name: "Philips Hue Smart LED Starter Kit",
    description: "Transform your home with millions of colors and shades of white light. The Philips Hue Starter Kit includes 3 A19 smart bulbs and a Bridge hub to control them via the Hue app or your voice with Alexa, Google Home, or Apple HomeKit. Create scenes, schedules, and automations for any mood.",
    price: "₱5,999",
    category: "Home",
    brand: "Philips Hue",
    featured: false,
    highlights: [
      "16 million colors + warm to cool white",
      "Control via app, Alexa, Google, HomeKit",
      "Create scenes & automations",
      "Sync with music, movies & games",
      "Energy-saving LED technology"
    ],
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
    ],
    affiliateLink: "https://shopee.ph"
  },
  {
    id: "p015",
    name: "Nespresso Vertuo Pop Coffee Machine",
    description: "Meet Nespresso's most compact Vertuo system yet. The Vertuo Pop uses Centrifusion technology to brew a perfect cup in seconds — just insert a Vertuo capsule, close the lever, and press the button. Brew espresso, double espresso, gran lungo, or a full mug of coffee with the same easy process.",
    price: "₱5,490",
    category: "Home",
    brand: "Nespresso",
    featured: false,
    highlights: [
      "5 cup sizes — espresso to mug",
      "Centrifusion brew technology",
      "Fast heat-up time (25 seconds)",
      "Automatic capsule ejection",
      "Energy-saving auto off after 2 mins"
    ],
    images: [
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80"
    ],
    affiliateLink: "https://lazada.com.ph"
  }
];

// ============================================================
//  APPLICATION STATE (NEVER MUTATE products[] DIRECTLY)
// ============================================================
const state = {
  filteredProducts: [...products],
  activeCategory: 'All',
  sortOrder: 'default',
  searchQuery: '',
  wishlist: new Set(),
  currentProduct: null,
  sliderIndex: 0,
  sliderImages: [],
  sliderTimer: null,
  isModalOpen: false,
  touchStartX: 0,
  touchStartY: 0
};

// ============================================================
//  UTILITY FUNCTIONS
// ============================================================

function safe(value, fallback = '') {
  return (value !== undefined && value !== null) ? value : fallback;
}

function parsePrice(priceStr) {
  if (!priceStr) return 0;
  const num = parseFloat(String(priceStr).replace(/[^\d.]/g, ''));
  return isNaN(num) ? 0 : num;
}

function getFirstImage(product) {
  return (product.images && product.images.length > 0) ? product.images[0] : null;
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = String(str || '');
  return div.innerHTML;
}

function animateCounter(el, target) {
  if (!el) return;
  let start = 0;
  const duration = 1200;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(ease * target);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// ============================================================
//  TOAST NOTIFICATIONS
// ============================================================
function showToast(message, type = 'info', duration = 3200) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = 'toast';

  const iconMap = {
    success: '✓',
    info: '↗',
    warn: '!'
  };

  toast.innerHTML = `
    <div class="toast-icon ${type}" aria-hidden="true">${iconMap[type] || iconMap.info}</div>
    <span>${escapeHtml(message)}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('removing');
    setTimeout(() => { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 350);
  }, duration);
}

// ============================================================
//  RIPPLE EFFECT
// ============================================================
function addRipple(e, el) {
  el = el || e.currentTarget;
  const rect = el.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const size = Math.max(rect.width, rect.height) * 2;
  const ripple = document.createElement('span');
  ripple.className = 'ripple-wave';
  ripple.style.cssText = `width:${size}px;height:${size}px;left:${x - size/2}px;top:${y - size/2}px`;
  el.appendChild(ripple);
  setTimeout(() => { if (ripple.parentNode) ripple.parentNode.removeChild(ripple); }, 700);
}

// ============================================================
//  CATEGORY FILTER CHIPS
// ============================================================
function buildCategoryFilters() {
  const categories = ['All', ...new Set(products.map(p => safe(p.category, 'Other')))];
  const container = document.getElementById('categoryFilters');
  if (!container) return;
  
  container.innerHTML = '';

  const icons = {
    All: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>',
    Electronics: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/></svg>',
    Fashion: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.57a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.57a2 2 0 00-1.34-2.23z"/></svg>',
    Beauty: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 007-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 007 7z"/></svg>',
    Home: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    Gaming: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><circle cx="15" cy="13" r=".5" fill="currentColor"/><circle cx="18" cy="11" r=".5" fill="currentColor"/><path d="M17 12C17 8.13 13.87 5 10 5H7.69C4.52 5 2 7.52 2 10.69 2 13.57 4 16.09 6.8 16.78L12 22l5.2-5.22C19.88 16.1 22 13.55 22 10.66 22 7.52 19.76 5 17.31 5H15"/></svg>'
  };

  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filter-chip' + (cat === state.activeCategory ? ' active' : '');
    btn.setAttribute('aria-pressed', cat === state.activeCategory);
    btn.setAttribute('data-category', cat);
    btn.innerHTML = (icons[cat] || '') + escapeHtml(cat);
    btn.addEventListener('click', (e) => {
      addRipple(e, btn);
      handleCategoryFilter(cat);
    });
    container.appendChild(btn);
  });
}

// ============================================================
//  FILTER & SORT LOGIC
// ============================================================
function handleCategoryFilter(category) {
  state.activeCategory = category;
  document.querySelectorAll('.filter-chip').forEach(chip => {
    const active = chip.getAttribute('data-category') === category;
    chip.classList.toggle('active', active);
    chip.setAttribute('aria-pressed', active);
  });
  applyFiltersAndSort();
}

function handleSearch(query) {
  state.searchQuery = query.toLowerCase().trim();
  applyFiltersAndSort();
}

function handleSort(order) {
  state.sortOrder = order;
  applyFiltersAndSort();
}

function applyFiltersAndSort() {
  let result = [...products];

  if (state.activeCategory !== 'All') {
    result = result.filter(p => safe(p.category, 'Other') === state.activeCategory);
  }

  if (state.searchQuery) {
    result = result.filter(p => {
      const name = safe(p.name).toLowerCase();
      const desc = safe(p.description).toLowerCase();
      const brand = safe(p.brand).toLowerCase();
      const cat = safe(p.category).toLowerCase();
      return name.includes(state.searchQuery) ||
             desc.includes(state.searchQuery) ||
             brand.includes(state.searchQuery) ||
             cat.includes(state.searchQuery);
    });
  }

  switch (state.sortOrder) {
    case 'price-asc':
      result.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
      break;
    case 'price-desc':
      result.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
      break;
    case 'name-asc':
      result.sort((a, b) => safe(a.name).localeCompare(safe(b.name)));
      break;
    default:
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  state.filteredProducts = result;
  renderProducts();
}

// ============================================================
//  RENDER PRODUCTS
// ============================================================
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const count = document.getElementById('resultsCount');

  if (!grid || !count) return;

  count.textContent = `${state.filteredProducts.length} product${state.filteredProducts.length !== 1 ? 's' : ''}`;

  if (state.filteredProducts.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" role="status">
        <div class="empty-state-icon" aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            <path d="M8 11h6"/></svg>
        </div>
        <h3>No products found</h3>
        <p>Try adjusting your search or filter</p>
        <button class="empty-state-btn" onclick="resetFilters()">Reset Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = '';
  state.filteredProducts.forEach((product, index) => {
    const card = createProductCard(product, index);
    grid.appendChild(card);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const delay = parseInt(card.getAttribute('data-delay') || 0);
        setTimeout(() => {
          card.classList.add('revealed');
        }, delay);
        observer.unobserve(card);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  grid.querySelectorAll('.product-card').forEach(card => observer.observe(card));
}

function createProductCard(product, index) {
  const id = safe(product.id, `p${index}`);
  const name = safe(product.name, 'Unnamed Product');
  const price = safe(product.price, 'Price N/A');
  const category = safe(product.category, 'Other');
  const brand = safe(product.brand, '');
  const highlights = Array.isArray(product.highlights) ? product.highlights : [];
  const images = Array.isArray(product.images) ? product.images : [];
  const isFeatured = !!product.featured;

  const card = document.createElement('article');
  card.className = 'product-card';
  card.setAttribute('role', 'listitem');
  card.setAttribute('data-id', id);
  card.setAttribute('data-delay', Math.min(index % 4, 3) * 80);
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `${name} — ${price}`);

  const imgTag = images[0]
    ? `<img src="${encodeURI(images[0])}" alt="${escapeHtml(name)}" loading="lazy" onerror="this.parentNode.innerHTML='<div class=\\'card-image-placeholder\\'><svg viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'1\\'><rect x=\\'3\\' y=\\'3\\' width=\\'18\\' height=\\'18\\' rx=\\'2\\'/><circle cx=\\'8.5\\' cy=\\'8.5\\' r=\\'1.5\\'/><polyline points=\\'21 15 16 10 5 21\\'/></svg></div>'" />`
    : `<div class="card-image-placeholder" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></div>`;

  const imageCount = images.length > 1 ? `<span class="slider-counter" style="position:absolute;bottom:8px;right:8px;font-size:10px;padding:3px 8px">${images.length} photos</span>` : '';

  const highlightHTML = highlights.length > 0
    ? `<p class="card-highlight">${escapeHtml(highlights[0])}</p>`
    : '';

  card.innerHTML = `
    ${isFeatured ? '<div class="featured-badge" aria-label="Featured">⚡ Featured</div>' : ''}
    <div class="card-image">
      ${imgTag}
      ${imageCount}
    </div>
    <div class="card-body">
      <div class="card-meta">
        <span class="card-category">${escapeHtml(category)}</span>
        ${brand ? `<span class="card-brand">${escapeHtml(brand)}</span>` : ''}
      </div>
      <h3 class="card-name">${escapeHtml(name)}</h3>
      ${highlightHTML}
      <div class="card-footer">
        <div>
          <div class="card-price">${escapeHtml(price)}</div>
          <div class="card-price-label">Affiliate Price • No extra cost</div>
        </div>
        <button class="card-view-btn ripple-container" data-id="${id}" aria-label="Visit official store for ${escapeHtml(name)}">
          Buy Now
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
      <div class="affiliate-note">Affiliate Price • No extra cost</div>
    </div>
  `;

  card.addEventListener('click', (e) => {
    if (e.target.closest('.card-view-btn')) return;
    openModal(product);
  });

  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(product);
    }
  });

  const viewBtn = card.querySelector('.card-view-btn');
  viewBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    addRipple(e, viewBtn);
    openModal(product);
  });

  return card;
}

function resetFilters() {
  state.activeCategory = 'All';
  state.searchQuery = '';
  state.sortOrder = 'default';
  const searchInput = document.getElementById('searchInput');
  const sortSelect = document.getElementById('sortSelect');
  if (searchInput) searchInput.value = '';
  if (sortSelect) sortSelect.value = 'default';
  buildCategoryFilters();
  applyFiltersAndSort();
}

// ============================================================
//  IMAGE SLIDER
// ============================================================
function resetSlider() {
  clearInterval(state.sliderTimer);
  state.sliderTimer = null;
  state.sliderIndex = 0;
}

function initSlider(images) {
  resetSlider();
  state.sliderImages = (Array.isArray(images) && images.length > 0) ? images : [];

  const track = document.getElementById('sliderTrack');
  const dots = document.getElementById('sliderDots');
  if (!track || !dots) return;
  
  track.innerHTML = '';
  dots.innerHTML = '';

  if (state.sliderImages.length === 0) {
    track.innerHTML = `
      <div class="slide active">
        <div class="slide-placeholder" aria-label="No image available">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </div>
      </div>`;
    updateSliderCounter(0, 0);
    return;
  }

  state.sliderImages.forEach((src, i) => {
    const slide = document.createElement('div');
    slide.className = 'slide' + (i === 0 ? ' active' : '');
    slide.setAttribute('role', 'tabpanel');
    slide.setAttribute('aria-label', `Image ${i + 1} of ${state.sliderImages.length}`);
    slide.setAttribute('aria-hidden', i !== 0);
    slide.innerHTML = `<img src="${encodeURI(src)}" alt="Product image ${i + 1}" loading="${i === 0 ? 'eager' : 'lazy'}" onerror="this.parentNode.innerHTML='<div class=\\'slide-placeholder\\'><svg viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'1\\'><rect x=\\'3\\' y=\\'3\\' width=\\'18\\' height=\\'18\\' rx=\\'2\\'/><circle cx=\\'8.5\\' cy=\\'8.5\\' r=\\'1.5\\'/><polyline points=\\'21 15 16 10 5 21\\'/></svg></div>'" />`;
    track.appendChild(slide);

    const dot = document.createElement('button');
    dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-selected', i === 0);
    dot.setAttribute('aria-label', `Go to image ${i + 1}`);
    dot.addEventListener('click', () => goToSlide(i));
    dots.appendChild(dot);
  });

  updateSliderCounter(0, state.sliderImages.length);
  showHideArrows();
  startAutoSlide();
}

function goToSlide(index) {
  const slides = document.querySelectorAll('#sliderTrack .slide');
  const dotEls = document.querySelectorAll('#sliderDots .slider-dot');

  if (!slides.length) return;
  const newIndex = ((index % slides.length) + slides.length) % slides.length;

  slides[state.sliderIndex]?.classList.remove('active');
  slides[state.sliderIndex]?.setAttribute('aria-hidden', 'true');
  dotEls[state.sliderIndex]?.classList.remove('active');
  dotEls[state.sliderIndex]?.setAttribute('aria-selected', 'false');

  state.sliderIndex = newIndex;

  slides[state.sliderIndex]?.classList.add('active');
  slides[state.sliderIndex]?.setAttribute('aria-hidden', 'false');
  dotEls[state.sliderIndex]?.classList.add('active');
  dotEls[state.sliderIndex]?.setAttribute('aria-selected', 'true');

  updateSliderCounter(state.sliderIndex, slides.length);
}

function updateSliderCounter(current, total) {
  const counter = document.getElementById('sliderCounter');
  if (!counter) return;
  
  if (total === 0) {
    counter.textContent = '';
    counter.style.display = 'none';
    return;
  }
  counter.style.display = '';
  counter.textContent = `${current + 1} / ${total}`;
}

function showHideArrows() {
  const show = state.sliderImages.length > 1;
  const prev = document.getElementById('sliderPrev');
  const next = document.getElementById('sliderNext');
  const dotsEl = document.getElementById('sliderDots');
  
  if (prev) prev.style.display = show ? '' : 'none';
  if (next) next.style.display = show ? '' : 'none';
  if (dotsEl) dotsEl.style.display = show ? '' : 'none';
}

function startAutoSlide() {
  if (state.sliderImages.length <= 1) return;
  clearInterval(state.sliderTimer);
  state.sliderTimer = setInterval(() => {
    goToSlide(state.sliderIndex + 1);
  }, 4000);
}

function stopAutoSlide() {
  clearInterval(state.sliderTimer);
  state.sliderTimer = null;
}

// ============================================================
//  MODAL
// ============================================================
function openModal(product) {
  state.currentProduct = product;

  const name = safe(product.name, 'Unknown Product');
  const desc = safe(product.description, 'No description available.');
  const price = safe(product.price, 'N/A');
  const category = safe(product.category, 'Other');
  const brand = safe(product.brand, '');
  const highlights = Array.isArray(product.highlights) ? product.highlights : [];
  const link = safe(product.affiliateLink, '#');
  const id = safe(product.id, '');

  const detailsEl = document.getElementById('modalDetails');
  if (!detailsEl) return;
  
  detailsEl.innerHTML = `
    <div class="modal-tags">
      <span class="modal-category-tag">${escapeHtml(category)}</span>
      ${brand ? `<span class="modal-brand-tag">${escapeHtml(brand)}</span>` : ''}
    </div>

    <h2 class="modal-name">${escapeHtml(name)}</h2>

    <div class="modal-price-block">
      <span class="modal-price">${escapeHtml(price)}</span>
      <span class="modal-price-note">Affiliate Price · No extra cost</span>
    </div>

    <p class="modal-description">${escapeHtml(desc)}</p>

    ${highlights.length > 0 ? `
    <div class="modal-highlights">
      <h4>Key Highlights</h4>
      <ul>
        ${highlights.map(h => `<li><span class="highlight-dot" aria-hidden="true"></span>${escapeHtml(h)}</li>`).join('')}
      </ul>
    </div>` : ''}

    <button
      class="modal-buy-btn ripple-container"
      id="modalBuyBtn"
      aria-label="Buy ${escapeHtml(name)} — opens in new tab"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      Buy Now — Visit Official Store
    </button>

    <p class="redirect-notice">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      You will be redirected to an official partner store to complete your purchase.
    </p>
  `;

  const buyBtn = document.getElementById('modalBuyBtn');
  if (buyBtn) {
    buyBtn.addEventListener('click', (e) => {
      addRipple(e, buyBtn);
      showToast('Redirecting to official store…', 'info');
      setTimeout(() => window.open(link, '_blank', 'noopener,noreferrer'), 400);
    });
  }

  initSlider(product.images);

  const overlay = document.getElementById('modalOverlay');
  if (overlay) {
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
  }
  state.isModalOpen = true;
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    const closeBtn = document.getElementById('modalClose');
    if (closeBtn) closeBtn.focus();
  }, 100);
}

function closeModal() {
  if (!state.isModalOpen) return;
  stopAutoSlide();

  const overlay = document.getElementById('modalOverlay');
  if (overlay) {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
  }
  state.isModalOpen = false;
  document.body.style.overflow = '';
  state.currentProduct = null;
}

// ============================================================
//  THEME TOGGLE
// ============================================================
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  
  const darkIcon = document.getElementById('themeIconDark');
  const lightIcon = document.getElementById('themeIconLight');
  if (darkIcon) darkIcon.style.display = isDark ? 'none' : '';
  if (lightIcon) lightIcon.style.display = isDark ? '' : 'none';
  
  showToast(isDark ? 'Light mode on' : 'Dark mode on', 'info', 1800);
}

// ============================================================
//  HERO STATS ANIMATION
// ============================================================
function animateHeroStats() {
  const productCount = products.length;
  const statP = document.getElementById('statProducts');

  if (!statP) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(statP, productCount);
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });
  observer.observe(statP);
}

// ============================================================
//  SKELETON LOADER
// ============================================================
function showSkeletons(count = 8) {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  
  grid.innerHTML = '';
  for (let i = 0; i < count; i++) {
    grid.innerHTML += `
      <div class="skeleton-card" aria-hidden="true">
        <div class="skeleton skeleton-img"></div>
        <div class="skeleton-body">
          <div class="skeleton skeleton-line w-40"></div>
          <div class="skeleton skeleton-line w-80 h-20"></div>
          <div class="skeleton skeleton-line w-60"></div>
          <div class="skeleton skeleton-line w-100"></div>
        </div>
      </div>`;
  }
}

// ============================================================
//  EVENT LISTENERS
// ============================================================
function bindEvents() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    let searchDebounce;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchDebounce);
      searchDebounce = setTimeout(() => handleSearch(e.target.value), 280);
    });
  }

  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      handleSort(e.target.value);
    });
  }

  const modalClose = document.getElementById('modalClose');
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  const modalBackdrop = document.getElementById('modalBackdrop');
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', closeModal);
  }

  const sliderPrev = document.getElementById('sliderPrev');
  if (sliderPrev) {
    sliderPrev.addEventListener('click', () => {
      stopAutoSlide();
      goToSlide(state.sliderIndex - 1);
      startAutoSlide();
    });
  }

  const sliderNext = document.getElementById('sliderNext');
  if (sliderNext) {
    sliderNext.addEventListener('click', () => {
      stopAutoSlide();
      goToSlide(state.sliderIndex + 1);
      startAutoSlide();
    });
  }

  const sliderWrap = document.getElementById('sliderWrap');
  if (sliderWrap) {
    sliderWrap.addEventListener('mouseenter', stopAutoSlide);
    sliderWrap.addEventListener('mouseleave', startAutoSlide);

    sliderWrap.addEventListener('touchstart', (e) => {
      state.touchStartX = e.changedTouches[0].screenX;
      state.touchStartY = e.changedTouches[0].screenY;
      stopAutoSlide();
    }, { passive: true });
    
    sliderWrap.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].screenX - state.touchStartX;
      const dy = e.changedTouches[0].screenY - state.touchStartY;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        goToSlide(dx > 0 ? state.sliderIndex - 1 : state.sliderIndex + 1);
      }
      startAutoSlide();
    }, { passive: true });
  }

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', (e) => {
      addRipple(e, e.currentTarget);
      toggleTheme();
    });
  }

  const heroCta = document.querySelector('.hero-cta');
  if (heroCta) {
    heroCta.addEventListener('click', (e) => {
      addRipple(e, e.currentTarget);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && state.isModalOpen) {
      closeModal();
    }
  });

  const backTop = document.getElementById('backTop');
  if (backTop) {
    window.addEventListener('scroll', () => {
      backTop.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    backTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const logo = document.querySelector('.logo');
  if (logo) {
    logo.addEventListener('click', (e) => {
      if (window.innerWidth < 680) {
        e.preventDefault();
        const section = document.getElementById('productsSection');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

// ============================================================
//  INITIALISATION
// ============================================================
function init() {
  showSkeletons(8);
  buildCategoryFilters();
  bindEvents();
  animateHeroStats();

  setTimeout(() => {
    applyFiltersAndSort();
  }, 600);
}

document.addEventListener('DOMContentLoaded', init);

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    const update = () => {
      const light = document.documentElement.getAttribute('data-theme') === 'light';
      toggle.title = light ? 'Switch to Dark Mode' : 'Switch to Light Mode';
    };
    update();
    toggle.addEventListener('click', () => setTimeout(update, 50));
  }
});
