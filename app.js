
// ==========================================
// DO'STLIK ONLINE STORE - APP.JS
// ==========================================

// 1. TELEFONLAR MA'LUMOTLARI

const products = [
    {
        id: 1,
        name: "iPhone 17 Pro Max",
        brand: "Apple",
        price: 18500000,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
        storage: [256, 512, 1024]
    },
    {
        id: 2,
        name: "iPhone 17 Pro",
        brand: "Apple",
        price: 16500000,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
        storage: [256, 512, 1024]
    },
    {
        id: 3,
        name: "iPhone 17",
        brand: "Apple",
        price: 12500000,
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
        storage: [128, 256, 512]
    },
    {
        id: 4,
        name: "iPhone 16 Pro Max",
        brand: "Apple",
        price: 16500000,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
        storage: [256, 512, 1024]
    },
    {
        id: 5,
        name: "iPhone 16 Pro",
        brand: "Apple",
        price: 14500000,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
        storage: [128, 256, 512]
    },
    {
        id: 6,
        name: "iPhone 16",
        brand: "Apple",
        price: 11500000,
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
        storage: [128, 256, 512]
    },
    {
        id: 7,
        name: "iPhone 15 Pro Max",
        brand: "Apple",
        price: 14500000,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
        storage: [256, 512, 1024]
    },
    {
        id: 8,
        name: "iPhone 15 Pro",
        brand: "Apple",
        price: 12500000,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
        storage: [128, 256, 512]
    },
    {
        id: 9,
        name: "iPhone 15",
        brand: "Apple",
        price: 9500000,
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
        storage: [128, 256, 512]
    },
    {
        id: 10,
        name: "Samsung Galaxy S25 Ultra",
        brand: "Samsung",
        price: 15500000,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500",
        storage: [256, 512, 1024]
    },
    {
        id: 11,
        name: "Samsung Galaxy S25+",
        brand: "Samsung",
        price: 12500000,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500",
        storage: [256, 512]
    },
    {
        id: 12,
        name: "Samsung Galaxy S25",
        brand: "Samsung",
        price: 10500000,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500",
        storage: [128, 256, 512]
    },
    {
        id: 13,
        name: "Samsung Galaxy S24 Ultra",
        brand: "Samsung",
        price: 12500000,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500",
        storage: [256, 512, 1024]
    },
    {
        id: 14,
        name: "Samsung Galaxy Z Fold",
        brand: "Samsung",
        price: 17500000,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500",
        storage: [256, 512, 1024]
    },
    {
        id: 15,
        name: "Samsung Galaxy Z Flip",
        brand: "Samsung",
        price: 10500000,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500",
        storage: [256, 512]
    },
    {
        id: 16,
        name: "Xiaomi 15 Ultra",
        brand: "Xiaomi",
        price: 13500000,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500",
        storage: [256, 512, 1024]
    },
    {
        id: 17,
        name: "Xiaomi 15 Pro",
        brand: "Xiaomi",
        price: 11500000,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500",
        storage: [256, 512]
    },
    {
        id: 18,
        name: "Xiaomi 15",
        brand: "Xiaomi",
        price: 9500000,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500",
        storage: [256, 512]
    },
    {
        id: 19,
        name: "Redmi Note 14 Pro+",
        brand: "Redmi",
        price: 5500000,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500",
        storage: [256, 512]
    },
    {
        id: 20,
        name: "Redmi Note 14 Pro",
        brand: "Redmi",
        price: 4500000,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500",
        storage: [128, 256, 512]
    }
];


// 2. NARXLARNI SOZLASH

// Bu narxlar namunaviy. Haqiqiy do'kon narxlariga
// qarab o'zgartirishingiz mumkin.

const storageExtra = {
    128: 0,
    256: 500000,
    512: 1500000,
    1024: 3000000
};

function formatPrice(price) {
    return new Intl.NumberFormat("uz-UZ").format(price) + " so‘m";
}

function getProductPrice(product, storage) {
    return product.price + (storageExtra[storage] || 0);
}


// 3. SAVATNI SAQLASH

let cart = [];

try {
    const savedCart = JSON.parse(localStorage.getItem("dostlikCart"));

    if (Array.isArray(savedCart)) {
        cart = savedCart.filter(item => {
            return products.some(product =>
                product.id === item.id
            ) &&
            Number.isInteger(item.storage) &&
            Number.isInteger(item.qty) &&
            item.qty > 0;
        });
    }
} catch (error) {
    cart = [];
}

function saveCart() {
    localStorage.setItem("dostlikCart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.qty, 0);

    document.querySelectorAll("#cart-count").forEach(element => {
        element.textContent = count;
    });
}


// 4. TELEFON KARTALARINI YARATISH

function createProductCard(product) {

    const storageOptions = product.storage.map(storage => {
        return `<option value="${storage}">${storage} GB</option>`;
    }).join("");

    return `
        <div class="product-card">

            <div class="product-image">
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="this.onerror=null;this.src='https://placehold.co/400x400/f5f5f5/e60023?text=DO%27STLIK'"
                >
            </div>

            <div class="product-info">

                <h3>${product.name}</h3>

                <p>${product.brand} | Original smartfon</p>

                <select
                    class="variant-select"
                    id="storage-${product.id}"
                    onchange="changeProductPrice(${product.id})"
                >
                    ${storageOptions}
                </select>

                <span
                    class="product-price"
                    id="price-${product.id}"
                >
                    ${formatPrice(product.price)}
                </span>

                <div class="product-buttons">

                    <button
                        class="buy-btn"
                        onclick="buyProduct(${product.id})"
                    >
                        Xarid qilish
                    </button>

                    <button
                        class="details-btn"
                        onclick="showDetails(${product.id})"
                    >
                        Batafsil
                    </button>

                </div>

            </div>

        </div>
    `;
}


// 5. KATALOGNI CHIQARISH

function renderProducts(list = products) {

    const container = document.getElementById("products-list");

    if (!container) return;

    if (list.length === 0) {
        container.innerHTML = `
            <div class="no-products">
                <h3>Telefon topilmadi!</h3>
                <p>Boshqa nom bilan qidirib ko‘ring.</p>
            </div>
        `;

        return;
    }

    container.innerHTML = list.map(createProductCard).join("");

    const count = document.getElementById("product-count");

    if (count) {
        count.textContent = list.length + " ta telefon";
    }
}


// 6. MAHSULOT NARXINI O'ZGARTIRISH

function changeProductPrice(id) {

    const product = products.find(item => item.id === id);

    const storageElement = document.getElementById("storage-" + id);
    const priceElement = document.getElementById("price-" + id);

    if (!product || !storageElement || !priceElement) return;

    const storage = Number(storageElement.value);

    priceElement.textContent = formatPrice(
        getProductPrice(product, storage)
    );
}


// 7. SAVATGA QO'SHISH

function addToCart(id, storage, quantity = 1) {

    const product = products.find(item => item.id === id);

    if (!product) return;

    if (!product.storage.includes(Number(storage))) return;

    const existing = cart.find(item =>
        item.id === id &&
        item.storage === Number(storage)
    );

    if (existing) {
        existing.qty += quantity;
    } else {
        cart.push({
            id: id,
            storage: Number(storage),
            qty: quantity
        });
    }

    saveCart();

    alert(product.name + " savatga qo‘shildi!");
}


// 8. XARID QILISH

function buyProduct(id) {

    const product = products.find(item => item.id === id);

    if (!product) return;

    const storageElement = document.getElementById("storage-" + id);

    const storage = storageElement
        ? Number(storageElement.value)
        : product.storage[0];

    addToCart(id, storage);

    window.location.href = "index3.html";
}


// 9. BATAFSIL

function showDetails(id) {

    const product = products.find(item => item.id === id);

    if (!product) return;

    alert(
        "DO‘STLIK ONLINE STORE\n\n" +
        "Telefon: " + product.name + "\n" +
        "Brend: " + product.brand + "\n" +
        "Xotira variantlari: " +
        product.storage.map(item => item + " GB").join(", ") +
        "\nBoshlang‘ich narx: " + formatPrice(product.price)
    );
}


// 10. QIDIRUV VA SARALASH

function filterProducts() {

    const searchElement = document.getElementById("search");
    const brandElement = document.getElementById("brand-filter");
    const sortElement = document.getElementById("sort-filter");

    let filtered = [...products];

    if (searchElement) {
        const search = searchElement.value.toLowerCase().trim();

        filtered = filtered.filter(product =>
            product.name.toLowerCase().includes(search) ||
            product.brand.toLowerCase().includes(search)
        );
    }

    if (brandElement && brandElement.value !== "all") {
        filtered = filtered.filter(product =>
            product.brand === brandElement.value
        );
    }

    if (sortElement) {

        if (sortElement.value === "low") {
            filtered.sort((a, b) => a.price - b.price);
        }

        if (sortElement.value === "high") {
            filtered.sort((a, b) => b.price - a.price);
        }
    }

    renderProducts(filtered);
}


// 11. SAVATDAGI MAHSULOTLAR

function renderCart() {

    const container = document.getElementById("cart-items");

    if (!container) return;

    if (cart.length === 0) {

        container.innerHTML = `
            <p class="empty-cart">
                Savatingiz hozircha bo‘sh.
                <a href="index2.html">Telefonlarni ko‘rish</a>
            </p>
        `;

        return;
    }

    container.innerHTML = cart.map((item, index) => {

        const product = products.find(p => p.id === item.id);

        if (!product) return "";

        const price = getProductPrice(product, item.storage);
        const total = price * item.qty;

        return `
            <div class="cart-item">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    onerror="this.onerror=null;this.src='https://placehold.co/200x200?text=Phone'"
                >

                <div class="cart-item-info">

                    <h3>${product.name}</h3>

                    <p>Xotira: ${item.storage} GB</p>

                    <p class="cart-item-price">
                        ${formatPrice(total)}
                    </p>

                    <div class="quantity-control">

                        <button onclick="changeQuantity(${index}, -1)">
                            −
                        </button>

                        <span>${item.qty}</span>

                        <button onclick="changeQuantity(${index}, 1)">
                            +
                        </button>

                    </div>

                </div>

                <button
                    class="remove-item"
                    onclick="removeFromCart(${index})"
                >
                    O‘chirish
                </button>

            </div>
        `;

    }).join("");
}


// 12. MAHSULOT SONINI O'ZGARTIRISH

function changeQuantity(index, amount) {

    if (!cart[index]) return;

    cart[index].qty += amount;

    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }

    saveCart();
    renderCart();
    updateTotal();
}


// 13. SAVATDAN O'CHIRISH

function removeFromCart(index) {

    if (!cart[index]) return;

    cart.splice(index, 1);

    saveCart();
    renderCart();
    updateTotal();
}


// 14. KAROBKA NARXLARI

const boxPrices = {
    small: 15000,
    medium: 25000,
    large: 40000
};

function getSelectedBoxPrice() {

    const selected = document.querySelector(
        'input[name="box"]:checked'
    );

    if (!selected) return boxPrices.small;

    return boxPrices[selected.value] || boxPrices.small;
}


// 15. JAMI NARXNI HISOBLASH

function updateTotal() {

    const productsTotal = cart.reduce((sum, item) => {

        const product = products.find(p => p.id === item.id);

        if (!product) return sum;

        return sum + getProductPrice(product, item.storage) * item.qty;

    }, 0);

    const boxTotal = cart.length > 0
        ? getSelectedBoxPrice()
        : 0;

    const grandTotal = productsTotal + boxTotal;

    const productsElement = document.getElementById("products-total");
    const boxElement = document.getElementById("box-total");
    const grandElement = document.getElementById("grand-total");

    if (productsElement) {
        productsElement.textContent = formatPrice(productsTotal);
    }

    if (boxElement) {
        boxElement.textContent = formatPrice(boxTotal);
    }

    if (grandElement) {
        grandElement.textContent = formatPrice(grandTotal);
    }

    return grandTotal;
}


// 16. BUYURTMA BERISH

function setupOrderForm() {

    const form = document.getElementById("order-form");

    if (!form) return;

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        if (cart.length === 0) {
            alert("Avval savatga telefon qo‘shing!");
            return;
        }

        if (!form.reportValidity()) return;

        const name = document.getElementById("customer-name").value.trim();
        const phone = document.getElementById("customer-phone").value.trim();
        const address = document.getElementById("customer-address").value.trim();

        if (!name || !phone || !address) {
            alert("Barcha ma'lumotlarni to‘ldiring!");
            return;
        }

        const total = updateTotal();

        const successTotal = document.getElementById("success-total");
        const modal = document.getElementById("success-modal");

        if (successTotal) {
            successTotal.textContent = formatPrice(total);
        }

        if (modal) {
            modal.classList.add("show");
        }

        // Hozircha buyurtma faqat brauzerda tasdiqlanadi.
        // Haqiqiy yuborish uchun backend yoki Telegram bot kerak.

        const order = {
            name: name,
            phone: phone,
            address: address,
            products: [...cart],
            box: document.querySelector('input[name="box"]:checked')?.value || "small",
            total: total,
            date: new Date().toISOString()
        };

        localStorage.setItem("lastDostlikOrder", JSON.stringify(order));

        cart = [];
        saveCart();
        renderCart();
        updateTotal();

        form.reset();

    });
}


// 17. BARCHA FUNKSIYALARNI ISHGA TUSHIRISH

document.addEventListener("DOMContentLoaded", function() {

    // Savat soni
    updateCartCount();

    // Telefonlar katalogi
    renderProducts();

    // Bosh sahifadagi mashhur telefonlar
    const featured = document.getElementById("featured-products");

    if (featured) {
        featured.innerHTML = products
            .slice(0, 4)
            .map(createProductCard)
            .join("");
    }

    // Qidiruv
    const search = document.getElementById("search");

    if (search) {
        search.addEventListener("input", filterProducts);
    }

    // Brend filtri
    const brand = document.getElementById("brand-filter");

    if (brand) {
        brand.addEventListener("change", filterProducts);
    }

    // Narx bo'yicha saralash
    const sort = document.getElementById("sort-filter");

    if (sort) {
        sort.addEventListener("change", filterProducts);
    }

    // Savatni chiqarish
    renderCart();

    // Karobka tanlanganda narxni yangilash
    document.querySelectorAll('input[name="box"]').forEach(input => {

        input.addEventListener("change", updateTotal);

    });

    // Jami summa
    updateTotal();

    // Buyurtma formasi
    setupOrderForm();

});
