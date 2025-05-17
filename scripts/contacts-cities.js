const data = {
  yonkers: {
    city: "Yonkers, NY",
    phone: "+1	914	678 0003",
    adress: "511 Warburton Ave",
  },

  canandaigua: {
    city: "Canandaigua, NY",
    phone: "+1	585	393 0001",
    adress: "151 Charlotte Street",
  },

  sherrill: {
    city: "Sherrill, NY",
    phone: "+1	315	908 0004",
    adress: "14 WEST Noyes BLVD",
  },

  newYorkCity: {
    city: "New York City",
    phone: "+1	212	456 0002",
    adress: "9 East 91st Street",
  },
};

const choice = document.querySelector(".contacts__choice");
const choiceText = document.querySelector(".contacts__choice_text");
const arrow = document.querySelector(".contacts__choice_arrow");
const list = document.querySelector(".contacts__cities");
const menuCity = document.querySelectorAll(".contacts__city");
const card = document.querySelector(".contacts__adress");
const city = document.querySelector(".contacts__adress_city");
const phone = document.querySelector(".contacts__adress_phone");
const adress = document.querySelector(".contacts__adress_adress");

const cityClickHandler = (e) => {
  let elem = e.target;
  list.classList.remove("contacts__cities_active");
  choice.classList.remove("contacts__choice_active");
  arrow.classList.remove("arrow__active");
  card.classList.add("contacts__adress_active");
  choiceText.innerHTML = data[elem.classList[1]].city;
  city.innerHTML = data[elem.classList[1]].city;
  phone.innerHTML = data[elem.classList[1]].phone;
  adress.innerHTML = data[elem.classList[1]].adress;

  menuCity.forEach((el) => {
    el.removeEventListener("click", cityClickHandler);
  });
};

choice.addEventListener("click", () => {
  if (choice.classList.contains("contacts__choice_active")) {
    list.classList.remove("contacts__cities_active");
    choice.classList.remove("contacts__choice_active");
    arrow.classList.remove("arrow__active");
    menuCity.forEach((el) => {
      el.addEventListener("click", cityClickHandler);
    });
  } else {
    list.classList.add("contacts__cities_active");
    choice.classList.add("contacts__choice_active");
    arrow.classList.add("arrow__active");
    card.classList.remove("contacts__adress_active");
    menuCity.forEach((el) => {
      el.addEventListener("click", cityClickHandler);
    });
  }
  if (!card.classList.contains("contacts__adress_active")) {
    choiceText.innerHTML = "City";
  }
});
