const buttons = document.querySelectorAll(".service__button");
const cards = document.querySelectorAll(".service__card");
const titles = document.querySelectorAll(".service__card_title");
let activeButtons = 0;

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    console.log(activeButtons);
    if (buttons[i].classList.contains("service__buttons-active")) {
      buttons[i].classList.remove("service__buttons-active");
      activeButtons--;
    } else if (
      buttons[i].classList.contains("service__buttons-active") == false &&
      activeButtons < 2
    ) {
      buttons[i].classList.add("service__buttons-active");
      activeButtons++;
    }
    if (buttons[i].textContent === "Gardens") {
      for (let j = 0; j < titles.length; j++) {
        if (titles[j].textContent !== "Garden care") {
          console.log(cards[j]);
          cards[j].classList.toggle("card-blur");
        }
      }
    }
    if (buttons[i].textContent === "Lawn") {
      for (let j = 0; j < titles.length; j++) {
        if (titles[j].textContent !== "Lawn care") {
          cards[j].classList.toggle("card-blur");
        }
      }
    }
    if (buttons[i].textContent === "Planting") {
      for (let j = 0; j < titles.length; j++) {
        if (titles[j].textContent !== "Planting") {
          cards[j].classList.toggle("card-blur");
        }
      }
    }
  });
}
