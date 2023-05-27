const toggleMenu = document.querySelector(".toggle__menu");
const mobileNav = document.querySelector(".nav1");
const header = document.querySelector(".header");
toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
	mobileNav.classList.toggle("open");
    header.classList.toggle("open");
});