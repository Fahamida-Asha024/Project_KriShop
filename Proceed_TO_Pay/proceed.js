const product = localStorage.getItem('productName');
const price = parseFloat(localStorage.getItem('productPrice'));
const delivery = 100;
const total = (price + delivery).toFixed(2);

document.getElementById('productName').innerText = product;
document.getElementById('totalPrice').innerText = total;

function submitAddress() {
  const address = document.getElementById('addressInput').value.trim();
  if (address === '') {
    alert("Please enter your delivery address.");
  } else {
    localStorage.setItem('deliveryAddress', address);
    alert("✅ Address submitted successfully. Your order will arrive soon!");
  }
}
