const Name = localStorage.getItem('productName');
const price = parseFloat(localStorage.getItem('productPrice'));
const delivery = 100;

document.getElementById('productName').innerText = Name;
document.getElementById('productPrice').innerText = price.toFixed(2);
document.getElementById('total').innerText = (price + delivery).toFixed(2);
