function loadProfile() {
    const userName = localStorage.getItem("userName");
    const userEmail = localStorage.getItem("userEmail");
    const userPhone = localStorage.getItem("userPhone");

    document.getElementById("userName").innerText = userName || "Guest";
    document.getElementById("userEmail").innerText = userEmail || "Not logged in";
    document.getElementById("userPhone").innerText = userPhone ? "📞 " + userPhone : "";
}

function logout() {
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPhone");
    alert("You have been logged out.");
    window.location.href = "../Home_page/KriShop.html";
}

function goToHome() {
    window.location.href = "../Home_page/KriShop.html";
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

function goToShipping() {
    window.location.href = "../Shipping_Policy_Page/policy.html";
}

function goToRefund() {
    window.location.href = "../Refund_Policy_Page/refund.html";
}

function goToTerms() {
    window.location.href = "../Terms_Page/terms.html"
}

function goToHome() {
    window.location.href = "../Home_page/KriShop.html";
}

loadProfile();