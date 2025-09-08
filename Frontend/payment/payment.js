const productName = localStorage.getItem('productName');
const productPrice = parseFloat(localStorage.getItem('productPrice'));
const productQuantity = parseInt(localStorage.getItem('productQuantity'));
const productTotalPrice = parseFloat(localStorage.getItem('productTotalPrice'));
const selectedItems = JSON.parse(localStorage.getItem('selectedCartItems')) || [];
const deliveryCharge = 100;

function displayPaymentSummary() {
    const paymentItemsContainer = document.getElementById('payment-items');
    const totalAmountElement = document.getElementById('totalAmount');
    let totalPrice = 0;

    if (selectedItems.length > 0) {
        selectedItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('payment-item');
            itemElement.innerHTML = `
                <p><strong>${item.productName}</strong> - ${item.quantity} x ${item.price} BDT</p>
                <p>Total: ${item.totalPrice.toFixed(2)} BDT</p>
            `;
            paymentItemsContainer.appendChild(itemElement);
            totalPrice += item.totalPrice;
        });
    } else if (productName && productQuantity) {
        const itemElement = document.createElement('div');
        itemElement.classList.add('payment-item');
        itemElement.innerHTML = `
            <p><strong>${productName}</strong> - ${productQuantity} x ${productPrice} BDT</p>
            <p>Total: ${productTotalPrice.toFixed(2)} BDT</p>
        `;
        paymentItemsContainer.appendChild(itemElement);
        totalPrice = productTotalPrice;
    } else {
        paymentItemsContainer.innerHTML = '<p>No items selected for payment.</p>';
        totalAmountElement.innerText = '0.00';
        return;
    }

    const totalAmount = totalPrice + deliveryCharge;
    totalAmountElement.innerText = totalAmount.toFixed(2);
}

function proceedToPay() {
    const totalAmount = document.getElementById('totalAmount').innerText;
    const selectedItems = JSON.parse(localStorage.getItem('selectedCartItems')) || [];

    if (!productName && selectedItems.length === 0) {
        alert('No items selected for payment.');
        return;
    }

    localStorage.setItem('totalPaid', totalAmount);
    window.location.href = "../Proceed_TO_Pay/proceed.html";
}

displayPaymentSummary();