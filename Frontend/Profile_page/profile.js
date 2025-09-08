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

loadProfile();