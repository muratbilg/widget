const CUSTOMERS = [
  { name: "Golden Fry Fish Bar", phone: "02081234567", credit: "Approved", lastOrder: "2 days ago", address: "14 Station Road, London" },
  { name: "Urban Brew Cafe", phone: "02087654321", credit: "Review", lastOrder: "6 days ago", address: "22 Oak Avenue, London" },
  { name: "Sultan Grill", phone: "02083445566", credit: "Approved", lastOrder: "Yesterday", address: "8 Market Street, London" },
  { name: "Lucky House Chinese", phone: "02089997711", credit: "On Hold", lastOrder: "14 days ago", address: "67 Bridge Lane, London" }
];

const PRODUCTS = [
  { name: "Cod Fillets 5kg", price: 42.5 },
  { name: "Chips 10kg", price: 18.75 },
  { name: "Doner Meat 10kg", price: 51.0 },
  { name: "Coffee Beans 1kg", price: 14.2 },
  { name: "Rapeseed Oil 20L", price: 31.4 },
  { name: "Naan Bread 24 pack", price: 12.8 }
];

const state = {
  selectedCustomer: null,
  orderItems: []
};

const customerSearch = document.getElementById("customerSearch");
const customerList = document.getElementById("customerList");
const customerCard = document.getElementById("customerCard");
const productSelect = document.getElementById("productSelect");
const quantityInput = document.getElementById("quantityInput");
const priceInput = document.getElementById("priceInput");
const orderBody = document.getElementById("orderBody");
const orderTotal = document.getElementById("orderTotal");

function gbp(value) {
  return `£${value.toFixed(2)}`;
}

function populateProducts() {
  PRODUCTS.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = `${product.name} (${gbp(product.price)})`;
    productSelect.appendChild(option);
  });
}

function renderCustomerList(filterText = "") {
  customerList.innerHTML = "";
  const q = filterText.trim().toLowerCase();
  const rows = CUSTOMERS.filter((c) => !q || c.name.toLowerCase().includes(q) || c.phone.includes(q));

  rows.slice(0, 6).forEach((customer) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = `${customer.name} • ${customer.phone}`;
    button.addEventListener("click", () => selectCustomer(customer));
    li.appendChild(button);
    customerList.appendChild(li);
  });
}

function selectCustomer(customer) {
  state.selectedCustomer = customer;
  document.getElementById("customerName").textContent = customer.name;
  document.getElementById("customerPhone").textContent = customer.phone;
  document.getElementById("customerCredit").textContent = customer.credit;
  document.getElementById("customerLastOrder").textContent = customer.lastOrder;
  document.getElementById("customerAddress").textContent = customer.address;
  customerCard.classList.remove("hidden");
}

function renderOrder() {
  orderBody.innerHTML = "";

  if (!state.orderItems.length) {
    orderBody.innerHTML = '<tr><td colspan="5" class="empty-cell">No items added yet.</td></tr>';
    orderTotal.textContent = gbp(0);
    return;
  }

  let total = 0;
  state.orderItems.forEach((item, index) => {
    const lineTotal = item.qty * item.price;
    total += lineTotal;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.qty}</td>
      <td>${gbp(item.price)}</td>
      <td>${gbp(lineTotal)}</td>
      <td><button type="button" class="remove-btn" data-index="${index}" aria-label="Remove ${item.name}">✕</button></td>
    `;
    orderBody.appendChild(row);
  });

  orderTotal.textContent = gbp(total);
}

function addItem() {
  const productName = productSelect.value;
  const qty = Number(quantityInput.value);
  const price = Number(priceInput.value);

  if (!productName || qty < 1 || price < 0) {
    alert("Please choose a product and enter valid quantity/price.");
    return;
  }

  state.orderItems.push({ name: productName, qty, price });
  renderOrder();
}

function clearAll() {
  state.orderItems = [];
  renderOrder();
  document.getElementById("callNotes").value = "";
}

document.getElementById("findCustomerBtn").addEventListener("click", () => {
  renderCustomerList(customerSearch.value);
});

customerSearch.addEventListener("input", (event) => {
  renderCustomerList(event.target.value);
});

productSelect.addEventListener("change", (event) => {
  const selected = PRODUCTS.find((p) => p.name === event.target.value);
  if (selected) {
    priceInput.value = selected.price.toFixed(2);
  }
});

document.getElementById("addItemBtn").addEventListener("click", addItem);
document.getElementById("clearBtn").addEventListener("click", clearAll);

document.getElementById("submitBtn").addEventListener("click", () => {
  if (!state.selectedCustomer) {
    alert("Select a customer before creating invoice.");
    return;
  }

  if (!state.orderItems.length) {
    alert("Add at least one item to continue.");
    return;
  }

  alert("Invoice draft created successfully.");
});

orderBody.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }

  if (target.classList.contains("remove-btn")) {
    const idx = Number(target.dataset.index);
    state.orderItems.splice(idx, 1);
    renderOrder();
  }
});

populateProducts();
renderCustomerList();
renderOrder();
