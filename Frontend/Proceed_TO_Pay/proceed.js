const selectedItems = JSON.parse(localStorage.getItem('selectedCartItems')) || [];
const singleProductName = localStorage.getItem('productName');
const singleProductPrice = parseFloat(localStorage.getItem('productPrice'));
const totalPaid = parseFloat(localStorage.getItem('totalPaid'));

function displayOrderDetails() {
    const productNameElement = document.getElementById('productName');
    const totalPriceElement = document.getElementById('totalPrice');

    let productNames = '';
    let totalPrice = 0;

    if (singleProductName && singleProductPrice) {
        productNames = singleProductName;
        totalPrice = singleProductPrice;
    } else if (selectedItems.length > 0) {
        selectedItems.forEach(item => {
            productNames += `${item.productName}, `;
            totalPrice += item.price;
        });
        productNames = productNames.slice(0, -2);
    } else {
        productNameElement.innerText = 'No products found.';
        totalPriceElement.innerText = '0.00';
        return;
    }

    productNameElement.innerText = productNames;
    totalPriceElement.innerText = totalPaid ? totalPaid.toFixed(2) : totalPrice.toFixed(2);
}

function submitAddress() {
    const addressInput = document.getElementById('addressInput').value.trim();

    if (!addressInput) {
        alert('Please enter your delivery address.');
        return;
    }

    alert('Thank you! Your order has been placed successfully.\nDelivery Address: ' + addressInput);

    localStorage.removeItem('selectedCartItems');
    localStorage.removeItem('productName');
    localStorage.removeItem('productPrice');
    localStorage.removeItem('totalPaid');

    window.location.href = "../Home_page/KriShop.html";
}

displayOrderDetails();