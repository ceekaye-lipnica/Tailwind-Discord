const toggleMenu = document.querySelector(".toggle__menu");
const mobileNav = document.querySelector(".nav1");
const header = document.querySelector(".header");
const blurr = document.querySelector(".blur");
const body = document.querySelector("body");
toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
	mobileNav.classList.toggle("open");
    header.classList.toggle("open");
    blurr.classList.toggle("open");
	body.style="overflow:hidden;"
});


const links = document.querySelectorAll(".drop-item h4");
links.forEach((baba) => {
	baba.addEventListener("click", () => {
		baba.nextElementSibling.classList.toggle("open");
		baba.querySelector("i").classList.toggle("open");
	});
});