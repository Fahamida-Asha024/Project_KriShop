let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, price) {
    const existingItem = cart.find(item => item.productName === productName);

    if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * price;
    } else {
        cart.push({
            productName,
            price,
            quantity: 1,
            totalPrice: price
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} has been added to your cart.`);
}

function buyNow(productName, price) {
    localStorage.setItem('productName', productName);
    localStorage.setItem('productPrice', price);
    localStorage.setItem('productQuantity', 1);
    localStorage.setItem('productTotalPrice', price);


    localStorage.removeItem('selectedCartItems');

    window.location.href = "../payment/payment.html";
}

function viewCart() {
    const cartSection = document.getElementById('cart');
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>No items in the cart.</p>';
    } else {
        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <p><strong>${item.productName}</strong> - ${item.quantity} x ${item.price} BDT</p>
                <p>Total: ${item.totalPrice.toFixed(2)} BDT</p>
                <div class="quantity-controls">
                    <button onclick="decreaseQuantity(${index})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="increaseQuantity(${index})">+</button>
                </div>
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartItemsContainer.appendChild(itemElement);
        });
    }

    cartSection.style.display = 'block';
}

function closeCart() {
    document.getElementById('cart').style.display = 'none';
}

function increaseQuantity(index) {
    cart[index].quantity += 1;
    cart[index].totalPrice = cart[index].quantity * cart[index].price;
    localStorage.setItem('cart', JSON.stringify(cart));
    viewCart();
}

function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
        cart[index].totalPrice = cart[index].quantity * cart[index].price;
        localStorage.setItem('cart', JSON.stringify(cart));
        viewCart();
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    viewCart();
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }

    localStorage.setItem('selectedCartItems', JSON.stringify(cart));


    localStorage.removeItem('productName');
    localStorage.removeItem('productPrice');
    localStorage.removeItem('productQuantity');
    localStorage.removeItem('productTotalPrice');

    window.location.href = "../payment/payment.html";
}

function goToLogin() {
    window.location.href = "../login_page/login.html";
}

function goToContact() {
    window.location.href = "../Contact_us_page/contact.html";
}

function goToSignUP() {
    window.location.href = "../Signup_page/signup.html";
}

function goToProfile() {
    window.location.href = "../Profile_page/profile.html";
}