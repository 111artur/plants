const burgerMenu = document.querySelector(".burger-menu");
const headerBurgerMenu = document.querySelector(".header_burger-menu");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active-burger-menu");
  headerBurgerMenu.classList.toggle("active-header_burger-menu");
});

console.log(burgerMenu);
