"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModel = document.querySelector(".close-modal");
const btnOpenModel = document.querySelectorAll(".show-modal");
// console.log(modal);
// console.log(overlay);
// console.log(btnCloseModel);
// console.log(btnOpenModel);

for (let i = 0; i < btnOpenModel.length; i++) {
  btnOpenModel[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}
let closeModel = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModel.addEventListener("click", closeModel);
overlay.addEventListener("click", closeModel);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      closeModel();
    }
  }
});
