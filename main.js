// ==========================
// MOCK DATA
// ==========================

const SHOP_TYPES = [
  "Fish and Chips Shop",
  "Kebab Shop",
  "Coffee Shop",
  "Chinese Takeaway",
  "Indian Takeaway"
];

const CUSTOMER_NAME_BANK = {
  "Fish and Chips Shop": [
    "Golden Fry Fish Bar",
    "Ocean Catch Fish & Chips",
    "Kingfisher Chippy",
    "Blue Sea Fish Bar",
    "The Codfather",
    "Harbour Fry",
    "Silver Haddock",
    "North Pier Fish Bar",
    "Captain Cod",
    "Atlantic Fry House"
  ],
  "Kebab Shop": [
    "Best Kebab House",
    "Istanbul Grill",
    "Anatolia Kebab",
    "Star Kebab and Pizza",
    "Sultan Grill",
    "Empire Kebab",
    "Bosphorus Grill",
    "City Kebab Centre",
    "Mangal Express",
    "Lava Grill House"
  ],
  "Coffee Shop": [
    "Bean Street Coffee",
    "Urban Brew Cafe",
    "Morning Roast",
    "Cafe Aroma",
    "The Coffee Corner",
    "Steam and Sip",
    "Velvet Bean",
    "Daily Grind Cafe",
    "Oak Street Coffee",
    "First Cup House"
  ],
  "Chinese Takeaway": [
    "Golden Dragon Takeaway",
    "Lucky House Chinese",
    "Dragon Wok",
    "Panda Garden",
    "Wok Express",
    "Jade Palace",
    "Red Lantern",
    "Happy Panda",
    "Lotus Wok",
    "Great Wall Kitchen"
  ],
  "Indian Takeaway": [
    "Spice Villa",
    "Bombay Bites",
    "Curry Express",
    "Tandoori Nights",
    "Taste of India",
    "Punjab Kitchen",
    "Royal Masala",
    "Maharaja Spice",
    "Saffron Curry House",
    "Delhi Oven"
  ]
};

const PRODUCT_GROUPS = {
  "Fish and Chips Shop": [
    ["Cod Fillets", "5kg"],
    ["Haddock Fillets", "5kg"],
    ["Fish Batter Mix", "5kg"],
    ["Chips 9/16", "10kg"],
    ["Curry Sauce", "4L"],
    ["Mushy Peas", "3kg"],
    ["Vinegar", "5L"],
    ["Sausage", "48 pack"],
    ["Fish Cake", "36 pack"],
    ["Fish and Chips Box", "10 inch"],
    ["Fish and Chips Box", "12 inch"],
    ["Tray Paper", "Large"]
  ],
  "Kebab Shop": [
    ["Doner Meat", "10kg"],
    ["Chicken Doner", "10kg"],
    ["Pitta Bread", "48 pack"],
    ["Garlic Sauce", "2L"],
    ["Chilli Sauce", "2L"],
    ["Burger Box", "Large"],
    ["Kebab Box", "Large"],
    ["Wrap Bread", "24 pack"],
    ["Mayonnaise", "5L"],
    ["Napkins", "500 pack"],
    ["Salad Box", "Medium"],
    ["Burger Bun", "24 pack"]
  ],
  "Coffee Shop": [
    ["Coffee Beans", "1kg"],
    ["Milk", "2L"],
    ["Oat Milk", "1L"],
    ["Sugar Sachets", "1000 pack"],
    ["Coffee Cups", "12oz"],
    ["Coffee Lids", "12oz"],
    ["Tea Bags", "1100 pack"],
    ["Hot Chocolate", "1kg"],
    ["Croissant", "48 pack"],
    ["Muffin", "24 pack"],
    ["Stirrer", "1000 pack"],
    ["Paper Cup Sleeve", "12oz"]
  ],
  "Chinese Takeaway": [
    ["Egg Fried Rice", "5kg"],
    ["Noodles", "5kg"],
    ["Soy Sauce", "5L"],
    ["Sweet and Sour Sauce", "5L"],
    ["Spring Rolls", "100 pack"],
    ["Duck Sauce", "2L"],
    ["Prawn Crackers", "24 pack"],
    ["Curry Sauce", "5L"],
    ["Rice Box", "Large"],
    ["Foil Container", "Large"],
    ["Sesame Oil", "2L"],
    ["Wok Oil", "20L"]
  ],
  "Indian Takeaway": [
    ["Basmati Rice", "10kg"],
    ["Tikka Sauce", "5L"],
    ["Korma Sauce", "5L"],
    ["Naan Bread", "24 pack"],
    ["Spice Mix", "1kg"],
    ["Onion Bhaji", "100 pack"],
    ["Samosa", "100 pack"],
    ["Poppadom", "200 pack"],
    ["Foil Tray", "Medium"],
    ["Mango Chutney", "2L"],
    ["Madras Sauce", "5L"],
    ["Pilau Rice", "5kg"]
  ]
};

const UNIVERSAL_PRODUCTS = [
  ["Rapeseed Oil", "20L"],
  ["Sunflower Oil", "20L"],
  ["Vegetable Oil", "20L"],
  ["Coca Cola", "24 pack"],
  ["Pepsi", "24 pack"],
  ["7UP", "24 pack"],
  ["Fanta Orange", "24 pack"],
  ["Salt", "25kg"],
  ["Black Pepper", "1kg"],
  ["Cleaning Spray", "750ml"],
  ["Paper Roll", "6 pack"],
  ["Bin Bags", "200 pack"],
  ["Gloves", "100 pack"],
  ["Napkins", "500 pack"],
  ["Toilet Roll", "40 pack"],
  ["Ketchup", "5L"],
  ["Mayonnaise", "5L"],
  ["Brown Sauce", "5L"]
];

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function money(value) {
  return `£${Number(value).toFixed(2)}`;
}

function slug(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function generateCustomers(count = 50) {
  const contactNames = [
    "Ali Khan",
    "John Smith",
    "Mehmet Yilmaz",
    "Sarah Jones",
    "David Brown",
    "Ahmed Hassan",
    "Emma Taylor",
    "Chris Wilson",
    "Fatma Kaya",
    "Daniel Green"
  ];

  const paymentTermsList = ["Cash", "7 Days", "14 Days", "30 Days", "COD"];
  const creditStatuses = ["OK", "Review", "Hold"];

  const list = [];

  for (let i = 1; i <= count; i++) {
    const type = SHOP_TYPES[(i - 1) % SHOP_TYPES.length];
    const namePool = CUSTOMER_NAME_BANK[type];
    const baseName = namePool[(i - 1) % namePool.length];
    const suffix = i > namePool.length ? ` ${Math.ceil(i / namePool.length)}` : "";
    const lastOrderDays = randomInt(0, 90);
    const balance = Number((randomInt(0, 25000) / 100).toFixed(2));
    const creditStatus = randomFrom(creditStatuses);

    list.push({
      id: i,
      name: `${baseName}${suffix}`,
      code: `CUST${String(i).padStart(3, "0")}`,
      phone: `0208${randomInt(1000000, 9999999)}`,
      type,
      address: `${randomInt(1, 220)} High Street, London`,
      status: creditStatus === "Hold" ? "Review" : "Credit OK",
      contactName: randomFrom(contactNames),
      contactPhone: `07${randomInt(100000000, 999999999)}`,
      balance,
      lastOrderDays,
      creditStatus,
      paymentTerms: randomFrom(paymentTermsList)
    });
  }

  return list;
}

function generateProducts() {
  const products = [];
  let idCounter = 1;

  SHOP_TYPES.forEach((shopType) => {
    PRODUCT_GROUPS[shopType].forEach(([product, variant]) => {
      for (let i = 0; i < 2; i++) {
        products.push({
          id: `p${idCounter++}`,
          product,
          variant,
          defaultPrice: Number((randomInt(300, 5000) / 100).toFixed(2)),
          sku: `${slug(product).substring(0, 3).toUpperCase()}${1000 + idCounter}`,
          shopType,
          category: "shop"
        });
      }
    });
  });

  UNIVERSAL_PRODUCTS.forEach(([product, variant]) => {
    for (let i = 0; i < 3; i++) {
      products.push({
        id: `p${idCounter++}`,
        product,
        variant,
        defaultPrice: Number((randomInt(250, 3000) / 100).toFixed(2)),
        sku: `${slug(product).substring(0, 3).toUpperCase()}${1000 + idCounter}`,
        shopType: null,
        category: "universal"
      });
    }
  });

  return products.slice(0, 200);
}

function uniqueRows(rows) {
  const seen = new Set();
  return rows.filter((row) => {
    const key = `${row.product}|${row.variant}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function makePurchaseRow(productObj) {
  const defaultPrice = Number(productObj.defaultPrice);
  const lastPrice = Number((defaultPrice - Math.random() * 0.8).toFixed(2));
  const prevLastPrice = Number((lastPrice - Math.random() * 0.6).toFixed(2));

  return {
    product: productObj.product,
    variant: productObj.variant,
    defaultPrice,
    lastPrice: Math.max(0.1, lastPrice),
    lastQty: randomInt(1, 12),
    prevLastPrice: Math.max(0.1, prevLastPrice),
    prevLastQty: randomInt(1, 12)
  };
}

function sampleProducts(source, count) {
  const copy = [...source];
  const result = [];

  while (copy.length && result.length < count) {
    const index = randomInt(0, copy.length - 1);
    result.push(copy.splice(index, 1)[0]);
  }

  return result;
}

function generateRecentPurchases(customersList, products) {
  const map = {};

  customersList.forEach((customer) => {
    const shopProducts = products.filter(
      (p) => p.shopType === customer.type && p.category === "shop"
    );
    const universalProducts = products.filter((p) => p.category === "universal");
    const otherShopProducts = products.filter(
      (p) => p.shopType !== customer.type && p.category === "shop"
    );

    map[customer.id] = {
      lastTwoWeeks: uniqueRows(sampleProducts(shopProducts, 8).map(makePurchaseRow)),
      otherProducts: uniqueRows(sampleProducts(otherShopProducts, 6).map(makePurchaseRow)),
      shopTypeProducts: uniqueRows(sampleProducts(shopProducts, 8).map(makePurchaseRow)),
      universalProducts: uniqueRows(sampleProducts(universalProducts, 6).map(makePurchaseRow))
    };
  });

  return map;
}

const customers = generateCustomers(50);
const allProducts = generateProducts();
const recentPurchasesByCustomer = generateRecentPurchases(customers, allProducts);

// ==========================
// STATE
// ==========================

let selectedCustomer = null;
let orderItems = [];
let currentCustomerMatches = [];
let currentProductMatches = [];
let activeCustomerIndex = -1;
let activeProductIndex = -1;
let latestAddedId = null;
let pendingProduct = null;

let confirmModalResolver = null;
let modalFocusIndex = 0;

// ==========================
// DOM
// ==========================

const customerSearchInput = document.getElementById("customerSearchInput");
const customerSearchBtn = document.getElementById("customerSearchBtn");
const customerResults = document.getElementById("customerResults");
const customerInfoPanel = document.getElementById("customerInfoPanel");

const customerContactName = document.getElementById("customerContactName");
const customerContactPhone = document.getElementById("customerContactPhone");
const customerBalance = document.getElementById("customerBalance");
const customerLastOrder = document.getElementById("customerLastOrder");
const customerCreditStatus = document.getElementById("customerCreditStatus");
const customerPaymentTerms = document.getElementById("customerPaymentTerms");
const customerAddress = document.getElementById("customerAddress");

const productSearchInput = document.getElementById("productSearchInput");
const productSearchBtn = document.getElementById("productSearchBtn");
const productResults = document.getElementById("productResults");

const quantityModeBox = document.getElementById("quantityModeBox");
const quantityModeProduct = document.getElementById("quantityModeProduct");
const quantityModeInput = document.getElementById("quantityModeInput");
const priceModeInput = document.getElementById("priceModeInput");
const qtyConfirmBtn = document.getElementById("qtyConfirmBtn");

const recentPurchasesBody = document.getElementById("recentPurchasesBody");

const orderItemsList = document.getElementById("orderItemsList");
const orderTotal = document.getElementById("orderTotal");
const clearOrderBtn = document.getElementById("clearOrderBtn");
const createInvoiceBtn = document.getElementById("createInvoiceBtn");

const deliveryDateInput = document.getElementById("deliveryDate");

const confirmModal = document.getElementById("confirmModal");
const confirmModalTitle = document.getElementById("confirmModalTitle");
const confirmModalMessage = document.getElementById("confirmModalMessage");
const confirmModalCancel = document.getElementById("confirmModalCancel");
const confirmModalSecondary = document.getElementById("confirmModalSecondary");
const confirmModalConfirm = document.getElementById("confirmModalConfirm");

// ==========================
// HELPERS
// ==========================

function ensureToastElement() {
  let toast = document.getElementById("appToast");
  if (toast) return toast;

  toast = document.createElement("div");
  toast.id = "appToast";
  toast.style.position = "fixed";
  toast.style.right = "20px";
  toast.style.bottom = "20px";
  toast.style.zIndex = "25000";
  toast.style.minWidth = "220px";
  toast.style.maxWidth = "360px";
  toast.style.padding = "12px 16px";
  toast.style.borderRadius = "14px";
  toast.style.background = "rgba(23, 50, 77, 0.96)";
  toast.style.color = "#fff";
  toast.style.boxShadow = "0 16px 32px rgba(17, 39, 70, 0.26)";
  toast.style.fontWeight = "700";
  toast.style.fontSize = "14px";
  toast.style.opacity = "0";
  toast.style.pointerEvents = "none";
  toast.style.transform = "translateY(10px)";
  toast.style.transition = "opacity 0.2s ease, transform 0.2s ease";
  document.body.appendChild(toast);
  return toast;
}

function showToast(message) {
  const toast = ensureToastElement();
  toast.textContent = message;
  toast.style.opacity = "1";
  toast.style.transform = "translateY(0)";

  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
  }, 1800);
}

function setTomorrowDate() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  deliveryDateInput.value = `${yyyy}-${mm}-${dd}`;
}

function formatLastOrderText(days) {
  if (days === 0) return "Today";
  if (days === 1) return "1 day ago";
  if (days < 7) return `${days} days ago`;
  if (days < 30) return `${Math.floor(days / 7)} week(s) ago`;
  return `${Math.floor(days / 30)} month(s) ago`;
}

function applyCreditStatusStyle(value) {
  customerCreditStatus.classList.remove("status-ok", "status-review", "status-hold");

  if (value === "OK") {
    customerCreditStatus.classList.add("status-ok");
  } else if (value === "Review") {
    customerCreditStatus.classList.add("status-review");
  } else if (value === "Hold") {
    customerCreditStatus.classList.add("status-hold");
  }
}

function moveActiveIndex(currentIndex, listLength, direction) {
  if (!listLength) return -1;

  if (currentIndex === -1) {
    return direction === "down" ? 0 : listLength - 1;
  }

  if (direction === "down") {
    return (currentIndex + 1) % listLength;
  }

  return (currentIndex - 1 + listLength) % listLength;
}

function setActiveOverlayItem(container, index) {
  const items = container.querySelectorAll(".overlay-item");

  items.forEach((item, i) => {
    item.classList.toggle("active", i === index);
  });

  const activeItem = items[index];
  if (!activeItem) return;

  const containerRect = container.getBoundingClientRect();
  const itemRect = activeItem.getBoundingClientRect();

  if (itemRect.top < containerRect.top) {
    activeItem.scrollIntoView({ block: "nearest" });
  } else if (itemRect.bottom > containerRect.bottom) {
    activeItem.scrollIntoView({ block: "nearest" });
  }
}

function parseSmartSearch(text) {
  const trimmed = text.trim();

  if (!trimmed) {
    return { query: "", qty: 1, hasQty: false };
  }

  const match = trimmed.match(/^(.*?)(?:\s+(\d+))?$/);
  const query = (match?.[1] || "").trim();
  const hasQty = !!match?.[2];
  const qty = hasQty ? parseInt(match[2], 10) : 1;

  return {
    query,
    qty: qty > 0 ? qty : 1,
    hasQty
  };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function searchRankCustomer(customer, q) {
  const name = (customer.name || "").toLowerCase();
  const code = (customer.code || "").toLowerCase();
  const phone = (customer.phone || "").toLowerCase();
  const type = (customer.type || "").toLowerCase();
  const contactName = (customer.contactName || "").toLowerCase();
  const address = (customer.address || "").toLowerCase();

  let score = 0;

  if (code === q) score += 1200;
  if (name === q) score += 1000;
  if (phone === q) score += 950;

  if (name.startsWith(q)) score += 700;
  if (code.startsWith(q)) score += 650;
  if (phone.startsWith(q)) score += 600;
  if (contactName.startsWith(q)) score += 420;

  if (name.includes(q)) score += 350;
  if (type.includes(q)) score += 260;
  if (contactName.includes(q)) score += 240;
  if (address.includes(q)) score += 120;

  return score;
}

function searchRankProduct(product, q, customerType) {
  const text = `${product.product} ${product.variant} ${product.sku}`.toLowerCase();
  const name = product.product.toLowerCase();
  const variant = product.variant.toLowerCase();
  const sku = product.sku.toLowerCase();

  let score = 0;

  if (sku === q) score += 1200;
  if (name === q) score += 1000;
  if (`${name} ${variant}` === q) score += 950;
  if (name.startsWith(q)) score += 700;
  if (variant.startsWith(q)) score += 400;
  if (sku.startsWith(q)) score += 850;
  if (text.includes(q)) score += 250;
  if (product.shopType === customerType) score += 180;
  if (product.category === "universal") score += 90;

  return score;
}

function ensureCustomerSelected() {
  if (selectedCustomer) return true;
  showToast("Select customer first");
  customerSearchInput.focus();
  return false;
}

function highlightQuickQty(value) {
  document.querySelectorAll(".qty-quick-btn[data-qty]").forEach((btn) => {
    btn.classList.toggle("active", String(btn.dataset.qty) === String(value || ""));
  });
}

// ==========================
// MODAL HELPERS
// ==========================

function getVisibleModalButtons() {
  return [confirmModalCancel, confirmModalSecondary, confirmModalConfirm].filter(
    (btn) => !btn.classList.contains("hidden")
  );
}

function applyModalButtonFocus() {
  const buttons = getVisibleModalButtons();

  buttons.forEach((btn) => btn.classList.remove("is-focused"));

  if (!buttons.length) return;

  if (modalFocusIndex < 0) modalFocusIndex = 0;
  if (modalFocusIndex >= buttons.length) modalFocusIndex = buttons.length - 1;

  const target = buttons[modalFocusIndex];
  target.classList.add("is-focused");
  target.focus();
}

function moveModalFocus(direction) {
  const buttons = getVisibleModalButtons();
  if (!buttons.length) return;

  if (direction === "right") {
    modalFocusIndex = (modalFocusIndex + 1) % buttons.length;
  } else {
    modalFocusIndex = (modalFocusIndex - 1 + buttons.length) % buttons.length;
  }

  applyModalButtonFocus();
}

function openConfirmModal({
  title = "Confirm Action",
  message = "Are you sure?",
  confirmText = "Confirm",
  secondaryText = "",
  showSecondary = false
}) {
  confirmModalTitle.textContent = title;
  confirmModalMessage.textContent = message;
  confirmModalConfirm.textContent = confirmText;
  confirmModalSecondary.textContent = secondaryText || "Secondary";

  if (showSecondary) {
    confirmModalSecondary.classList.remove("hidden");
  } else {
    confirmModalSecondary.classList.add("hidden");
  }

  confirmModal.classList.remove("hidden");

  const buttons = getVisibleModalButtons();
  modalFocusIndex = buttons.indexOf(confirmModalConfirm);
  if (modalFocusIndex < 0) modalFocusIndex = 0;

  setTimeout(() => {
    applyModalButtonFocus();
  }, 0);

  return new Promise((resolve) => {
    confirmModalResolver = resolve;
  });
}

function closeConfirmModal() {
  confirmModal.classList.add("hidden");
  confirmModalResolver = null;
}

function resolveConfirmModal(action) {
  if (confirmModalResolver) {
    confirmModalResolver(action);
  }
  closeConfirmModal();
}

// ==========================
// CUSTOMER SEARCH
// ==========================

function renderCustomerSuggestions(matches) {
  if (!matches.length) {
    customerResults.innerHTML = "";
    customerResults.classList.add("hidden");
    activeCustomerIndex = -1;
    return;
  }

  customerResults.innerHTML = matches
    .map(
      (c, index) => `
        <div class="overlay-item ${index === activeCustomerIndex ? "active" : ""}" data-customer-index="${index}">
          <div class="overlay-title">${escapeHtml(c.name)}</div>
          <div class="overlay-sub">${escapeHtml(c.code)} | ${escapeHtml(c.phone)} | ${escapeHtml(c.type)}</div>
        </div>
      `
    )
    .join("");

  customerResults.classList.remove("hidden");

  customerResults.querySelectorAll("[data-customer-index]").forEach((el) => {
    el.addEventListener("click", () => {
      const customer = matches[Number(el.dataset.customerIndex)];
      confirmCustomerChange(customer);
    });
  });

  if (activeCustomerIndex >= 0) {
    setActiveOverlayItem(customerResults, activeCustomerIndex);
  }
}

function handleCustomerSearchInput() {
  const q = customerSearchInput.value.trim().toLowerCase();

  if (!q) {
    customerResults.classList.add("hidden");
    customerResults.innerHTML = "";
    currentCustomerMatches = [];
    activeCustomerIndex = -1;
    return;
  }

  currentCustomerMatches = customers
    .map((c) => ({ ...c, _score: searchRankCustomer(c, q) }))
    .filter((c) => c._score > 0)
    .sort((a, b) => b._score - a._score)
    .slice(0, 30);

  activeCustomerIndex = currentCustomerMatches.length ? 0 : -1;
  renderCustomerSuggestions(currentCustomerMatches);
}

function selectCustomer(customer) {
  selectedCustomer = customer;

  customerSearchInput.value = customer.name;
  customerContactName.textContent = customer.contactName || "-";
  customerContactPhone.textContent = customer.contactPhone || "-";
  customerBalance.textContent = money(customer.balance || 0);
  customerLastOrder.textContent = formatLastOrderText(customer.lastOrderDays || 0);
  customerCreditStatus.textContent = customer.creditStatus || "-";
  customerPaymentTerms.textContent = customer.paymentTerms || "-";
  customerAddress.textContent = customer.address || "-";

  applyCreditStatusStyle(customer.creditStatus || "");

  customerInfoPanel.classList.remove("hidden");
  customerResults.classList.add("hidden");
  customerResults.innerHTML = "";
  currentCustomerMatches = [];
  activeCustomerIndex = -1;

  renderRecentPurchases();

  setTimeout(() => {
    productSearchInput.focus();
  }, 0);
}

async function confirmCustomerChange(newCustomer) {
  if (selectedCustomer && selectedCustomer.id === newCustomer.id) {
    selectCustomer(newCustomer);
    return;
  }

  if (!orderItems.length) {
    selectCustomer(newCustomer);
    return;
  }

  const action = await openConfirmModal({
    title: "Change Customer",
    message:
      "You already have items in the basket.\n\nChoose whether to keep the items or clear them before changing customer.",
    confirmText: "Keep Items",
    secondaryText: "Clear Items",
    showSecondary: true
  });

  if (action === "cancel") return;

  if (action === "secondary") {
    orderItems = [];
    renderOrderItems();
  }

  selectCustomer(newCustomer);
}

// ==========================
// PRODUCT SEARCH
// ==========================

function renderProductSuggestions(matches) {
  if (!matches.length) {
    productResults.innerHTML = "";
    productResults.classList.add("hidden");
    activeProductIndex = -1;
    return;
  }

  productResults.innerHTML = matches
    .map(
      (p, index) => `
        <div class="overlay-item ${index === activeProductIndex ? "active" : ""}" data-product-index="${index}">
          <div class="overlay-title">${escapeHtml(p.product)} (${escapeHtml(p.variant)})</div>
          <div class="overlay-sub">${escapeHtml(p.sku)} | ${escapeHtml(p.shopType || "Universal")} | Default ${money(p.defaultPrice)}</div>
        </div>
      `
    )
    .join("");

  productResults.classList.remove("hidden");

  productResults.querySelectorAll("[data-product-index]").forEach((el) => {
    el.addEventListener("click", () => {
      if (!ensureCustomerSelected()) return;

      const item = matches[Number(el.dataset.productIndex)];
      const parsed = parseSmartSearch(productSearchInput.value);

      if (parsed.hasQty) {
        addOrderItem({
          product: item.product,
          variant: item.variant,
          qty: parsed.qty,
          unitPrice: Number(item.defaultPrice)
        });
        resetProductSearch();
      } else {
        startQuantityMode(item);
      }
    });
  });

  if (activeProductIndex >= 0) {
    setActiveOverlayItem(productResults, activeProductIndex);
  }
}

function handleProductSearchInput() {
  const parsed = parseSmartSearch(productSearchInput.value);
  const q = parsed.query.toLowerCase();

  if (!q) {
    productResults.innerHTML = "";
    productResults.classList.add("hidden");
    currentProductMatches = [];
    activeProductIndex = -1;
    return;
  }

  const customerType = selectedCustomer ? selectedCustomer.type : null;

  currentProductMatches = allProducts
    .map((p) => ({ ...p, _score: searchRankProduct(p, q, customerType) }))
    .filter((p) => p._score > 0)
    .sort((a, b) => b._score - a._score)
    .slice(0, 40);

  activeProductIndex = currentProductMatches.length ? 0 : -1;
  renderProductSuggestions(currentProductMatches);
}

function resetProductSearch() {
  productSearchInput.value = "";
  productResults.innerHTML = "";
  productResults.classList.add("hidden");
  currentProductMatches = [];
  activeProductIndex = -1;

  setTimeout(() => {
    productSearchInput.focus();
  }, 0);
}

// ==========================
// QUANTITY MODE
// ==========================

function startQuantityMode(item) {
  if (!ensureCustomerSelected()) return;

  pendingProduct = item;

  quantityModeProduct.textContent = `${item.product} (${item.variant})`;
  quantityModeInput.value = "1";
  priceModeInput.value = Number(item.defaultPrice).toFixed(2);
  highlightQuickQty("1");

  quantityModeBox.classList.remove("hidden");

  productResults.innerHTML = "";
  productResults.classList.add("hidden");
  currentProductMatches = [];
  activeProductIndex = -1;

  setTimeout(() => {
    quantityModeInput.focus();
    quantityModeInput.select();
  }, 0);
}

function cancelQuantityMode() {
  pendingProduct = null;
  quantityModeBox.classList.add("hidden");
  quantityModeInput.value = "";
  priceModeInput.value = "";
  highlightQuickQty(null);

  setTimeout(() => {
    productSearchInput.focus();
  }, 0);
}

function confirmQuantityMode() {
  if (!pendingProduct) return;

  const qty = Math.max(1, parseInt(quantityModeInput.value, 10) || 1);
  const price = parseFloat(priceModeInput.value);

  addOrderItem({
    product: pendingProduct.product,
    variant: pendingProduct.variant,
    qty,
    unitPrice: !Number.isNaN(price) ? Number(price.toFixed(2)) : Number(pendingProduct.defaultPrice)
  });

  pendingProduct = null;
  quantityModeBox.classList.add("hidden");
  quantityModeInput.value = "";
  priceModeInput.value = "";
  highlightQuickQty(null);

  resetProductSearch();
}

// ==========================
// RECENT PURCHASES
// ==========================

function renderGroupHeader(label, cssClass) {
  return `
    <tr class="group-row ${cssClass}">
      <td colspan="8">${escapeHtml(label)}</td>
    </tr>
  `;
}

function renderRows(rows, rowClass) {
  return rows
    .map(
      (row) => `
        <tr class="${rowClass}">
          <td>${escapeHtml(row.product)}</td>
          <td>${escapeHtml(row.variant)}</td>
          <td>${money(row.defaultPrice)}</td>
          <td>${money(row.lastPrice)}</td>
          <td>${row.lastQty}</td>
          <td>${money(row.prevLastPrice)}</td>
          <td>${row.prevLastQty}</td>
          <td>
            <button
              class="small-add-btn"
              data-product="${escapeHtml(row.product)}"
              data-variant="${escapeHtml(row.variant)}"
              data-qty="${row.lastQty}"
              data-price="${row.lastPrice}"
            >+ Add</button>
          </td>
        </tr>
      `
    )
    .join("");
}

function renderRecentPurchases() {
  if (!selectedCustomer) {
    recentPurchasesBody.innerHTML = `
      <tr><td colspan="8" class="empty-state">Select a customer to view product suggestions</td></tr>
    `;
    return;
  }

  const data = recentPurchasesByCustomer[selectedCustomer.id] || {
    lastTwoWeeks: [],
    otherProducts: [],
    shopTypeProducts: [],
    universalProducts: []
  };

  let html = "";
  html += renderGroupHeader("Purchased in Last 2 Weeks", "group-recent");
  html += data.lastTwoWeeks.length
    ? renderRows(data.lastTwoWeeks, "row-recent")
    : `<tr class="row-recent"><td colspan="8">No rows</td></tr>`;

  html += renderGroupHeader("Other Products Not Purchased in Last 2 Weeks", "group-other");
  html += data.otherProducts.length
    ? renderRows(data.otherProducts, "row-other")
    : `<tr class="row-other"><td colspan="8">No rows</td></tr>`;

  html += renderGroupHeader(`${selectedCustomer.type} Products`, "group-shop");
  html += data.shopTypeProducts.length
    ? renderRows(data.shopTypeProducts, "row-shop")
    : `<tr class="row-shop"><td colspan="8">No rows</td></tr>`;

  html += renderGroupHeader("Universal Products", "group-universal");
  html += data.universalProducts.length
    ? renderRows(data.universalProducts, "row-universal")
    : `<tr class="row-universal"><td colspan="8">No rows</td></tr>`;

  recentPurchasesBody.innerHTML = html;

  recentPurchasesBody.querySelectorAll(".small-add-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      addOrderItem({
        product: btn.dataset.product,
        variant: btn.dataset.variant,
        qty: Number(btn.dataset.qty || 1),
        unitPrice: Number(btn.dataset.price || 0)
      });

      setTimeout(() => {
        productSearchInput.focus();
      }, 0);
    });
  });
}

// ==========================
// ORDER ITEMS
// ==========================

function addOrderItem(item) {
  if (!ensureCustomerSelected()) return;

  const existing = orderItems.find(
    (x) =>
      x.product === item.product &&
      x.variant === item.variant &&
      Number(x.unitPrice) === Number(item.unitPrice)
  );

  if (existing) {
    existing.qty += item.qty;
    latestAddedId = existing.id;
    orderItems = [existing, ...orderItems.filter((x) => x.id !== existing.id)];
  } else {
    const newItem = {
      id: `${item.product}-${item.variant}-${Date.now()}-${Math.random()}`,
      product: item.product,
      variant: item.variant,
      qty: item.qty,
      unitPrice: Number(item.unitPrice)
    };

    latestAddedId = newItem.id;
    orderItems = [newItem, ...orderItems];
  }

  renderOrderItems();

  setTimeout(() => {
    latestAddedId = null;
    renderOrderItems();
  }, 1800);
}

function changeQty(id, delta) {
  const item = orderItems.find((x) => x.id === id);
  if (!item) return;

  item.qty += delta;

  if (item.qty <= 0) {
    orderItems = orderItems.filter((x) => x.id !== id);
  }

  renderOrderItems();
}

function removeItem(id) {
  orderItems = orderItems.filter((x) => x.id !== id);
  renderOrderItems();
}

function changePrice(id, newValue) {
  const item = orderItems.find((x) => x.id === id);
  if (!item) return;

  const parsed = parseFloat(newValue);
  if (!Number.isNaN(parsed) && parsed >= 0) {
    item.unitPrice = Number(parsed.toFixed(2));
    renderOrderItems();
  }
}

function stepPrice(id, delta) {
  const item = orderItems.find((x) => x.id === id);
  if (!item) return;

  item.unitPrice = Math.max(0, Number((item.unitPrice + delta).toFixed(2)));
  renderOrderItems();
}

function renderOrderItems() {
  if (!orderItems.length) {
    orderItemsList.innerHTML = `<div class="empty-state">No items added yet</div>`;
    orderTotal.textContent = "£0.00";
    return;
  }

  orderItemsList.innerHTML = orderItems
    .map((item) => {
      const lineTotal = item.qty * item.unitPrice;

      return `
        <div class="order-row ${item.id === latestAddedId ? "latest-added" : ""}">
          <div>
            <div class="order-name">${escapeHtml(item.product)}</div>
            <div class="order-sub">${escapeHtml(item.variant)}</div>
          </div>

          <div class="qty-box">
            <button class="qty-btn" data-minus="${item.id}">-</button>
            <span>${item.qty}</span>
            <button class="qty-btn" data-plus="${item.id}">+</button>
          </div>

          <div class="price-edit-box">
            <input
              type="text"
              value="${item.unitPrice.toFixed(2)}"
              data-price-id="${item.id}"
              class="price-edit-input"
            />
            <div class="price-arrows">
              <button type="button" data-up="${item.id}">▲</button>
              <button type="button" data-down="${item.id}">▼</button>
            </div>
          </div>

          <div class="price-box">${money(lineTotal)}</div>

          <button class="remove-btn" data-remove="${item.id}">✕</button>
        </div>
      `;
    })
    .join("");

  orderItemsList.querySelectorAll("[data-minus]").forEach((btn) => {
    btn.addEventListener("click", () => changeQty(btn.dataset.minus, -1));
  });

  orderItemsList.querySelectorAll("[data-plus]").forEach((btn) => {
    btn.addEventListener("click", () => changeQty(btn.dataset.plus, 1));
  });

  orderItemsList.querySelectorAll("[data-remove]").forEach((btn) => {
    btn.addEventListener("click", () => removeItem(btn.dataset.remove));
  });

  orderItemsList.querySelectorAll("[data-price-id]").forEach((input) => {
    input.addEventListener("focus", () => input.select());
    input.addEventListener("change", () => changePrice(input.dataset.priceId, input.value));
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        changePrice(input.dataset.priceId, input.value);
      }
    });
  });

  orderItemsList.querySelectorAll("[data-up]").forEach((btn) => {
    btn.addEventListener("click", () => stepPrice(btn.dataset.up, 0.1));
  });

  orderItemsList.querySelectorAll("[data-down]").forEach((btn) => {
    btn.addEventListener("click", () => stepPrice(btn.dataset.down, -0.1));
  });

  const total = orderItems.reduce((sum, item) => sum + item.qty * item.unitPrice, 0);
  orderTotal.textContent = money(total);
}

// ==========================
// EVENTS
// ==========================

customerSearchInput.addEventListener("input", handleCustomerSearchInput);

customerSearchInput.addEventListener("focus", () => {
  if (customerSearchInput.value.trim()) {
    handleCustomerSearchInput();
  }
});

customerSearchInput.addEventListener("click", () => {
  if (customerSearchInput.value.trim()) {
    handleCustomerSearchInput();
  }
});

customerSearchInput.addEventListener("keydown", (e) => {
  if (!currentCustomerMatches.length) return;

  if (e.key === "ArrowDown") {
    e.preventDefault();
    activeCustomerIndex = moveActiveIndex(activeCustomerIndex, currentCustomerMatches.length, "down");
    renderCustomerSuggestions(currentCustomerMatches);
    setActiveOverlayItem(customerResults, activeCustomerIndex);
    return;
  }

  if (e.key === "ArrowUp") {
    e.preventDefault();
    activeCustomerIndex = moveActiveIndex(activeCustomerIndex, currentCustomerMatches.length, "up");
    renderCustomerSuggestions(currentCustomerMatches);
    setActiveOverlayItem(customerResults, activeCustomerIndex);
    return;
  }

  if (e.key === "Enter") {
    e.preventDefault();
    const indexToUse = activeCustomerIndex >= 0 ? activeCustomerIndex : 0;
    confirmCustomerChange(currentCustomerMatches[indexToUse]);
    return;
  }

  if (e.key === "Escape") {
    customerResults.classList.add("hidden");
    activeCustomerIndex = -1;
  }
});

customerSearchBtn.addEventListener("click", () => {
  handleCustomerSearchInput();
  if (currentCustomerMatches.length) {
    confirmCustomerChange(currentCustomerMatches[0]);
  }
});

productSearchInput.addEventListener("input", handleProductSearchInput);

productSearchInput.addEventListener("focus", () => {
  if (productSearchInput.value.trim()) {
    handleProductSearchInput();
  }
});

productSearchInput.addEventListener("click", () => {
  if (productSearchInput.value.trim()) {
    handleProductSearchInput();
  }
});

if (productSearchBtn) {
  productSearchBtn.addEventListener("click", () => {
    handleProductSearchInput();
    if (currentProductMatches.length === 1) {
      const parsed = parseSmartSearch(productSearchInput.value);
      addOrderItem({
        product: currentProductMatches[0].product,
        variant: currentProductMatches[0].variant,
        qty: parsed.qty,
        unitPrice: currentProductMatches[0].defaultPrice
      });
      resetProductSearch();
    }
  });
}

productSearchInput.addEventListener("keydown", (e) => {
  if (!currentProductMatches.length) return;

  if (e.key === "Enter") {
    e.preventDefault();

    const parsed = parseSmartSearch(productSearchInput.value);
    const qty = parsed.qty;

    if (currentProductMatches.length === 1) {
      addOrderItem({
        product: currentProductMatches[0].product,
        variant: currentProductMatches[0].variant,
        qty,
        unitPrice: currentProductMatches[0].defaultPrice
      });
      resetProductSearch();
      return;
    }

    const indexToUse = activeProductIndex >= 0 ? activeProductIndex : 0;
    const selected = currentProductMatches[indexToUse];

    if (parsed.hasQty) {
      addOrderItem({
        product: selected.product,
        variant: selected.variant,
        qty,
        unitPrice: selected.defaultPrice
      });
      resetProductSearch();
    } else {
      startQuantityMode(selected);
    }
    return;
  }

  if (e.key === "ArrowDown") {
    e.preventDefault();
    activeProductIndex = moveActiveIndex(activeProductIndex, currentProductMatches.length, "down");
    renderProductSuggestions(currentProductMatches);
    setActiveOverlayItem(productResults, activeProductIndex);
    return;
  }

  if (e.key === "ArrowUp") {
    e.preventDefault();
    activeProductIndex = moveActiveIndex(activeProductIndex, currentProductMatches.length, "up");
    renderProductSuggestions(currentProductMatches);
    setActiveOverlayItem(productResults, activeProductIndex);
    return;
  }

  if (e.key === "Escape") {
    productResults.classList.add("hidden");
    activeProductIndex = -1;
  }
});

quantityModeInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    confirmQuantityMode();
  }

  if (e.key === "Escape") {
    e.preventDefault();
    cancelQuantityMode();
  }
});

priceModeInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    confirmQuantityMode();
  }

  if (e.key === "Escape") {
    e.preventDefault();
    cancelQuantityMode();
  }
});

quantityModeInput.addEventListener("input", () => {
  quantityModeInput.value = quantityModeInput.value.replace(/[^0-9]/g, "");
  highlightQuickQty(quantityModeInput.value);
});

priceModeInput.addEventListener("input", () => {
  priceModeInput.value = priceModeInput.value.replace(/[^0-9.]/g, "");
});

document.querySelectorAll(".qty-quick-btn[data-qty]").forEach((btn) => {
  btn.addEventListener("click", () => {
    quantityModeInput.value = btn.dataset.qty;
    highlightQuickQty(btn.dataset.qty);
    quantityModeInput.focus();
  });
});

if (qtyConfirmBtn) {
  qtyConfirmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    confirmQuantityMode();
  });
}

clearOrderBtn.addEventListener("click", async () => {
  if (!orderItems.length) {
    showToast("Basket is already empty.");
    return;
  }

  const action = await openConfirmModal({
    title: "Clear Basket",
    message: "Remove all order items from the basket?",
    confirmText: "Clear Basket",
    showSecondary: false
  });

  if (action !== "confirm") return;

  orderItems = [];
  renderOrderItems();
  showToast("Basket cleared.");

  setTimeout(() => {
    productSearchInput.focus();
  }, 0);
});

createInvoiceBtn.addEventListener("click", () => {
  showToast("Prototype only. Invoice creation will connect later.");
});

confirmModalCancel.addEventListener("click", () => resolveConfirmModal("cancel"));
confirmModalSecondary.addEventListener("click", () => resolveConfirmModal("secondary"));
confirmModalConfirm.addEventListener("click", () => resolveConfirmModal("confirm"));

[confirmModalCancel, confirmModalSecondary, confirmModalConfirm].forEach((btn) => {
  btn.addEventListener("focus", () => {
    const buttons = getVisibleModalButtons();
    const idx = buttons.indexOf(btn);
    if (idx >= 0) {
      modalFocusIndex = idx;
      applyModalButtonFocus();
    }
  });
});

confirmModal.addEventListener("click", (e) => {
  if (e.target === confirmModal) {
    resolveConfirmModal("cancel");
  }
});

document.addEventListener("keydown", (e) => {
  if (confirmModal.classList.contains("hidden")) return;

  const buttons = getVisibleModalButtons();
  if (!buttons.length) return;

  if (e.key === "Escape") {
    e.preventDefault();
    resolveConfirmModal("cancel");
    return;
  }

  if (e.key === "Enter") {
    e.preventDefault();

    const focusedButton = buttons[modalFocusIndex];

    if (focusedButton === confirmModalCancel) {
      resolveConfirmModal("cancel");
      return;
    }

    if (focusedButton === confirmModalSecondary) {
      resolveConfirmModal("secondary");
      return;
    }

    if (focusedButton === confirmModalConfirm) {
      resolveConfirmModal("confirm");
      return;
    }
  }

  if (e.key === "ArrowRight") {
    e.preventDefault();
    moveModalFocus("right");
    return;
  }

  if (e.key === "ArrowLeft") {
    e.preventDefault();
    moveModalFocus("left");
    return;
  }

  if (e.key === "Tab") {
    e.preventDefault();

    if (e.shiftKey) {
      moveModalFocus("left");
    } else {
      moveModalFocus("right");
    }
  }
});

document.addEventListener("click", (e) => {
  if (!customerResults.contains(e.target) && e.target !== customerSearchInput && e.target !== customerSearchBtn) {
    customerResults.classList.add("hidden");
  }

  if (!productResults.contains(e.target) && e.target !== productSearchInput && e.target !== productSearchBtn) {
    productResults.classList.add("hidden");
  }
});

// ==========================
// INIT
// ==========================

setTomorrowDate();
highlightQuickQty(null);
renderOrderItems();

recentPurchasesBody.innerHTML = `
  <tr><td colspan="8" class="empty-state">Select a customer to view product suggestions</td></tr>
`;

selectCustomer(customers[0]);