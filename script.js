
const foods = [
  ["Lavash", "Lavash", 28000, "photo-1568901346375-23c9450c58cd"],
  ["Mini Lavash", "Lavash", 22000, "photo-1550547660-d9450f859349"],
  ["Pishloqli Lavash", "Lavash", 32000, "photo-1553979459-d2229ba7433a"],
  ["Tovuq Lavash", "Lavash", 30000, "photo-1561758033-d89a9ad46330"],
  ["Mol go‘shtli Lavash", "Lavash", 35000, "photo-1568901346375-23c9450c58cd"],

  ["Classic Burger", "Burger", 30000, "photo-1568901346375-23c9450c58cd"],
  ["Cheeseburger", "Burger", 35000, "photo-1550547660-d9450f859349"],
  ["Double Burger", "Burger", 45000, "photo-1571091718767-18b5b1457add"],
  ["Chicken Burger", "Burger", 32000, "photo-1561758033-d89a9ad46330"],
  ["Big Burger", "Burger", 50000, "photo-1568901346375-23c9450c58cd"],

  ["Margarita Pizza", "Pizza", 65000, "photo-1571407970349-bc81e7e96d47"],
  ["Pepperoni Pizza", "Pizza", 75000, "photo-1628840042765-356cda07504e"],
  ["Cheese Pizza", "Pizza", 70000, "photo-1513104890138-7c749659a591"],
  ["Chicken Pizza", "Pizza", 72000, "photo-1571407970349-bc81e7e96d47"],
  ["Mix Pizza", "Pizza", 85000, "photo-1571407970349-bc81e7e96d47"],

  ["Classic Hot-dog", "Hot-dog", 18000, "photo-1612392062798-2dbaa1b3f8d5"],
  ["Cheese Hot-dog", "Hot-dog", 22000, "photo-1612392062798-2dbaa1b3f8d5"],
  ["Double Hot-dog", "Hot-dog", 28000, "photo-1612392062798-2dbaa1b3f8d5"],

  ["French Fries", "Fries", 15000, "photo-1573080496219-bb080dd4f877"],
  ["Cheese Fries", "Fries", 22000, "photo-1573080496219-bb080dd4f877"],
  ["Chicken Nuggets", "Chicken", 25000, "photo-1562967914-608f82629710"],
  ["Chicken Wings", "Chicken", 35000, "photo-1527477396000-e27163b481c2"],
  ["Crispy Chicken", "Chicken", 38000, "photo-1626082927389-6cd097cdc6ec"],

  ["Coca-Cola", "Drinks", 10000, "photo-1554866585-cd94860890b7"],
  ["Pepsi", "Drinks", 10000, "photo-1629203851122-3726ecdf080e"],
  ["Fanta", "Drinks", 10000, "photo-1624517452488-04869289c4ca"],
  ["Sprite", "Drinks", 10000, "photo-1625772299848-391b6a87d7b3"],
  ["Ice Tea", "Drinks", 12000, "photo-1556679343-c7306c1976bc"],
  ["Limonad", "Drinks", 15000, "photo-1513558161293-cdaf765edfd4"],

  ["Mineral Water", "Water", 5000, "photo-1523362628745-0c100150b504"],
  ["Still Water", "Water", 4000, "photo-1523362628745-0c100150b504"],
  ["Sparkling Water", "Water", 6000, "photo-1523362628745-0c100150b504"],

  ["Caesar Salad", "Salad", 28000, "photo-1512621776951-a57141f2eefd"],
  ["Fresh Salad", "Salad", 18000, "photo-1512621776951-a57141f2eefd"],
  ["Greek Salad", "Salad", 25000, "photo-1540420773420-3366772f4999"],

  ["Cheesecake", "Dessert", 25000, "photo-1533134242443-d4fd215305ad"],
  ["Chocolate Cake", "Dessert", 22000, "photo-1578985545062-69928b1d9587"],
  ["Donut", "Dessert", 12000, "photo-1551024506-0bccd828d307"],
  ["Ice Cream", "Dessert", 15000, "photo-1563805042-7684c019e1cb"],

  ["Combo 1", "Combo", 55000, "photo-1568901346375-23c9450c58cd"],
  ["Combo 2", "Combo", 65000, "photo-1550547660-d9450f859349"],
  ["Family Combo", "Combo", 120000, "photo-1571407970349-bc81e7e96d47"],
  ["Chicken Combo", "Combo", 60000, "photo-1562967914-608f82629710"],

  ["Club Sandwich", "Sandwich", 28000, "photo-1528735602780-2552fd46c7af"],
  ["Chicken Sandwich", "Sandwich", 30000, "photo-1553909489-cd47e0ef937f"],
  ["Toast Sandwich", "Sandwich", 22000, "photo-1528735602780-2552fd46c7af"],

  ["Onion Rings", "Fries", 18000, "photo-1639024471283-03518883512d"],
  ["Mozzarella Sticks", "Fries", 25000, "photo-1531749668029-2db88e4276c7"],
  ["BBQ Wings", "Chicken", 38000, "photo-1527477396000-e27163b481c2"],
  ["Spicy Wings", "Chicken", 36000, "photo-1527477396000-e27163b481c2"],
  ["Double Cheese Pizza", "Pizza", 90000, "photo-1513104890138-7c749659a591"],
  ["Vegetable Pizza", "Pizza", 68000, "photo-1571407970349-bc81e7e96d47"],
  ["Strawberry Milkshake", "Drinks", 20000, "photo-1572490122747-3968b75cc699"],
  ["Chocolate Milkshake", "Drinks", 22000, "photo-1572490122747-3968b75cc699"],
  ["Orange Juice", "Drinks", 16000, "photo-1600271886742-f049cd451bba"],
  ["Apple Juice", "Drinks", 16000, "photo-1600271886742-f049cd451bba"],
  ["Brownie", "Dessert", 18000, "photo-1606313564200-e75d5e30476c"],
  ["Fruit Cake", "Dessert", 25000, "photo-1565958011703-44f9829ba187"]
];

const imageURL = id =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=85`;

let cart = JSON.parse(localStorage.getItem("foodCart") || "[]");
let favorites = JSON.parse(localStorage.getItem("foodFavorites") || "[]");
let currentCategory = "all";

const products = document.getElementById("products");

function saveData() {
  localStorage.setItem("foodCart", JSON.stringify(cart));
  localStorage.setItem("foodFavorites", JSON.stringify(favorites));
}

function renderProducts() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const sort = document.getElementById("sortSelect").value;

  let filtered = foods.map((food, id) => ({
    id, name: food[0], category: food[1],
    price: food[2], image: food[3]
  }));

  if (currentCategory !== "all") {
    filtered = filtered.filter(p => p.category === currentCategory);
  }

  filtered = filtered.filter(p =>
    p.name.toLowerCase().includes(search)
  );

  if (sort === "low") filtered.sort((a, b) => a.price - b.price);
  if (sort === "high") filtered.sort((a, b) => b.price - a.price);

  products.innerHTML = filtered.map(p => `
    <article class="product-card">
      <img src="${imageURL(p.image)}" alt="${p.name}"
        loading="lazy" onclick="showProduct(${p.id})">
      <div class="product-info">
        <h3>${p.name}</h3>
        <p>${p.price.toLocaleString("uz-UZ")} so‘m</p>
        <div class="product-actions">
          <button class="add-btn" onclick="addToCart(${p.id})">🛒 Savatga</button>
          <button class="favorite-btn" onclick="toggleFavorite(${p.id})">
            ${favorites.includes(p.id) ? "❤️" : "♡"}
          </button>
          <button class="details-btn" onclick="showProduct(${p.id})">👁</button>
        </div>
      </div>
    </article>
  `).join("");
}

function addToCart(id) {
  const item = cart.find(x => x.id === id);
  if (item) item.quantity++;
  else cart.push({ id, quantity: 1 });

  saveData();
  updateCart();
}

function updateCart() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cartCount").textContent = count;

  const cartItems = document.getElementById("cartItems");
  let total = 0;

  cartItems.innerHTML = cart.map(item => {
    const food = foods[item.id];
    const subtotal = food[2] * item.quantity;
    total += subtotal;

    return `
      <div class="cart-row">
        <span>${food[0]} × ${item.quantity}</span>
        <span>${subtotal.toLocaleString("uz-UZ")} so‘m</span>
        <button onclick="changeQuantity(${item.id}, -1)">−</button>
        <button onclick="changeQuantity(${item.id}, 1)">+</button>
      </div>
    `;
  }).join("") || "<p>Savat hozircha bo‘sh.</p>";

  document.getElementById("cartTotal").textContent =
    total.toLocaleString("uz-UZ");
}

function changeQuantity(id, amount) {
  const item = cart.find(x => x.id === id);
  if (!item) return;

  item.quantity += amount;
  if (item.quantity <= 0) {
    cart = cart.filter(x => x.id !== id);
  }

  saveData();
  updateCart();
}

function toggleFavorite(id) {
  favorites = favorites.includes(id)
    ? favorites.filter(x => x !== id)
    : [...favorites, id];

  saveData();
  renderProducts();
}

function showProduct(id) {
  const food = foods[id];

  document.getElementById("productDetails").innerHTML = `
    <img src="${imageURL(food[3])}" alt="${food[0]}"
      style="width:100%;height:230px;object-fit:cover;border-radius:12px">
    <h2>${food[0]}</h2>
    <p>${food[2].toLocaleString("uz-UZ")} so‘m</p>
    <button class="main-btn" onclick="addToCart(${id})">Savatga qo‘shish</button>
  `;

  document.getElementById("productModal").classList.add("show");
}

document.getElementById("categories").addEventListener("click", e => {
  if (!e.target.classList.contains("category")) return;

  document.querySelectorAll(".category").forEach(btn =>
    btn.classList.remove("active")
  );

  e.target.classList.add("active");
  currentCategory = e.target.dataset.category;
  renderProducts();
});

document.getElementById("searchInput").addEventListener("input", renderProducts);
document.getElementById("sortSelect").addEventListener("change", renderProducts);

document.getElementById("cartBtn").onclick = () => {
  document.getElementById("cartModal").classList.add("show");
};

document.getElementById("closeCart").onclick = () =>
  document.getElementById("cartModal").classList.remove("show");

document.getElementById("closeProduct").onclick = () =>
  document.getElementById("productModal").classList.remove("show");

document.getElementById("themeBtn").onclick = () => {
  document.body.classList.toggle("dark");
  const dark = document.body.classList.contains("dark");
  localStorage.setItem("foodTheme", dark ? "dark" : "light");
  document.getElementById("themeBtn").textContent = dark ? "☀️" : "🌙";
};

if (localStorage.getItem("foodTheme") === "dark") {
  document.body.classList.add("dark");
  document.getElementById("themeBtn").textContent = "☀️";
}

document.getElementById("registerForm").addEventListener("submit", e => {
  e.preventDefault();

  const user = {
    name: document.getElementById("fullName").value.trim(),
    email: document.getElementById("email").value.trim(),
    phone: document.getElementById("phone").value.trim()
  };

  if (!user.name || !user.email || !user.phone) return;

  localStorage.setItem("foodUser", JSON.stringify(user));
  document.getElementById("formMessage").textContent =
    "Muvaffaqiyatli ro‘yxatdan o‘tdingiz! ❤️";

  e.target.reset();
});

document.getElementById("checkoutBtn").onclick = () => {
  if (!cart.length) {
    alert("Savat bo‘sh!");
    return;
  }

  const phone = prompt("Telefon raqamingizni kiriting:");
  if (!phone || !phone.trim()) return;

  const order = {
    phone: phone.trim(),
    items: cart,
    date: new Date().toISOString()
  };

  const orders = JSON.parse(localStorage.getItem("foodOrders") || "[]");
  orders.push(order);
  localStorage.setItem("foodOrders", JSON.stringify(orders));

  cart = [];
  saveData();
  updateCart();

  document.getElementById("cartModal").classList.remove("show");
  alert("Buyurtmangiz demo tarzida saqlandi!");
};

const translations = {
  uz: {
    title: "Eng mazali taomlar bir joyda!",
    menu: "Menyuni ko‘rish"
  },
  ru: {
    title: "Самая вкусная еда в одном месте!",
    menu: "Посмотреть меню"
  },
  en: {
    title: "The tastiest food in one place!",
    menu: "View menu"
  }
};

document.getElementById("language").addEventListener("change", e => {
  const lang = e.target.value;
  document.querySelectorAll("[data-uz]").forEach(el => {
    el.textContent = el.dataset[lang];
  });

  document.querySelector(".hero h1").textContent =
    translations[lang].title;

  document.querySelector(".hero .main-btn").textContent =
    translations[lang].menu;
});

renderProducts();
updateCart();
