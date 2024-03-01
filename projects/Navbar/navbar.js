const nav_btn = document.getElementById("nav-btn");
const nav_menu = document.getElementById("mobile-menu");

nav_btn.addEventListener("click", ()=> {
    nav_menu.classList.toggle("hidden")
})