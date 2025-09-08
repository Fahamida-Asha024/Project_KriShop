// ==================== Navigation Functions ==================== //
function goToLogin() {
    window.location.href = "login.html"; 
}

function goToSignUP() {
    window.location.href = "signup.html"; 
}

function goToContact() {
    window.location.href = "contact.html"; 
}

// ==================== Cart Functions ==================== //
function viewCart() {
    document.getElementById("cart").style.display = "block";
}

function closeCart() {
    document.getElementById("cart").style.display = "none";
}

function checkout() {
    alert("✅ Checkout complete! ধন্যবাদ আমাদের সাথে কেনাকাটা করার জন্য।");
    document.getElementById("cart").style.display = "none";
}

// ==================== Add Item to Cart (Example) ==================== //
let cartItems = [];

function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    updateCartUI();
}

function updateCartUI() {
    const cartDiv = document.getElementById("cart-items");
    cartDiv.innerHTML = "";

    if (cartItems.length === 0) {
        cartDiv.innerHTML = "<p>No items in the cart.</p>";
        return;
    }

    let total = 0;
    cartItems.forEach((item, index) => {
        total += item.price;
        cartDiv.innerHTML += `
            <p>${item.name} - ${item.price} ৳ 
            <button onclick="removeFromCart(${index})">❌</button></p>
        `;
    });

    cartDiv.innerHTML += `<hr><p><b>Total: ${total} ৳</b></p>`;
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCartUI();
}
