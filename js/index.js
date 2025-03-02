window.onload = function() {
    alert("Warning! The repo and the npm package is under dewelopement, so you cannot view now!!!!!");
};


document.getElementById("menu-btn").addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.toggle("open")
});

document.addEventListener("DOMContentLoaded", function () {
    if (!localStorage.getItem("cookiesAccepted")) {
        document.getElementById("cookie-banner").style.display = "flex"
    }

    document.getElementById("accept-cookies").addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true")
        document.getElementById("cookie-banner").style.display = "none"
    })
})
