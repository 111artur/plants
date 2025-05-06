const accordions = document.querySelectorAll(".prices__type");
console.log(accordions);
let f = 0;
let open = false;
let save_i = 0;
for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function () {
    if (f == 0) {
      if (open == false) {
        accordions[i].classList.add("active");
        open = true;
        save_i = i;
      } else {
        accordions[i].classList.remove("active");
        open = false;
        save_i = i;
      }
      f = 0;
    } else {
      if (open == false) {
        accordions[i].classList.add("active");
        open = true;
        save_i = i;
      } else {
        accordions[save_i].classList.remove("active");
        accordions[i].classList.add("active");
        open = false;
        save_i = i;
      }
    }
  });
}
