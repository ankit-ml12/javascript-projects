"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

///////////////////////////////////////////////////
// page navigation

// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     console.log("hello ankit");
//     const id = this.getAttribute("href");

//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

//it is ok for three button but let suppose if we have 1000 button then it is not good practice
// to add 1000 even listner or may be million
//which impect our performance

//so we put even handller on grand parent and user click on the that element then even is generated
//and bubbles up and then we catch the event because we also know where the event originated
// by looking at event.target property

//==> event delegation steps
//1. add event to the common parent element
//2. determine what element originated the event

document.querySelector(".nav__links").addEventListener("click", function (e) {
  //and that event store inthe e.target
  console.log(e.target);
  e.preventDefault();
  //apply matching stretegy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//even delegation is more efficient and effective
/*

// selecting
const header = document.querySelector("header");
// creating and inserting element

const message = document.createElement("div");
message.classList.add("cookie-message");

message.innerHTML = `We use cookie for better functionally and Analytics. <button class="btn btn--close-cookie">Got it!</button>`;

header.append(message);

//delete or remove the element
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
  });

// learn about style
message.style.backgroundColor = "#37383d";
message.style.width = "120%";
//also need to include the % or unit with the " "
//remeber this all style go into the inline
// if we try to access the css external or internal style this way we can't get.

// so we use different way of computedstyle like this
console.log(getComputedStyle(message).color); // we get the actual color from here
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

//we can set some root propety on css page like this
/*:root {
    it is similar to variable declaration 
    --color-primary: #5ec576;
    --color-secondary: #ffcb03;
    --color-tertiary: #ff585f;
    --color-primary-darker: #4bbb7d;
    --color-secondary-darker: #ffbb00;
    --color-tertiary-darker: #fd424b;
    --color-primary-opacity: #5ec5763a;
    --color-secondary-opacity: #ffcd0331;
    --color-tertiary-opacity: #ff58602d;
    --gradient-primary: linear-gradient(to top left, #39b385, #9be15d);
    --gradient-secondary: linear-gradient(to top left, #ffb003, #ffcb03);
  }

//which we can able to access and modified using  javascript
//to change this property we use
// document.documentElement.style.setProperty("--color-primary", "orangered");
//so we can't do this with the custome property we have to use setPropety

//attribute
const logo = document.querySelector(".nav__logo");
console.log(logo.alt); //Bankist logo
console.log(logo.src); //http://127.0.0.1:5501/05%20bankist%20marketing/img/logo.png

//using this methode we can only access the standard propety not the define by us
//we can also able to set them
logo.alt = "Bankist logo";

//so to access non stand we use get attribute method
console.log(logo.getAttribute("designer")); //ankit
//to set notstandard we use setattribute
logo.setAttribute("designer", "ankitml");

// boundary cases in case of standard
console.log(logo.src); //http://127.0.0.1:5501/05%20bankist%20marketing/img/logo.png
console.log(logo.getAttribute("src")); //img/logo.png

//special attribute data attribute
//we learn more about letter
console.log(logo.dataset.versionNumber);

//classes
logo.classList.add("a"); //you can pass multiple
logo.classList.remove("a"); //you can pass multiple
logo.classList.toggle("a"); //you can pass multiple
logo.classList.contains("a"); //you can pass multiple
console.log(logo.className); // return all the name contain in the class

//but don't use like this and we can set only one class here
// logo.className = "ankit"; //it remove all the existing classes
*/

//implemention smooth scrolling
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  //below function give the coordinate of section 1
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  //DOMRect {x: 0, y: 397.3333435058594, width: 1688, height: 1822.25, top: 397.3333435058594, …}
  // x is the distance of element from the left of the page
  // y is the distance of element from the top  of the page

  // to check the distance from left and top of the current view portDOMRect {x: 0, y: 397.3333435058594, width: 1688, height: 1822.25, top: 397.3333435058594, …} we use offset
  console.log(`Current Scroll (X/Y)`, window.pageXOffset, window.pageYOffset); //Current Scroll (X/Y) 0 0
  console.log(e);

  //to check the height and width of client viewport
  console.log(
    "height & width of viewPort",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //now to scroll window we use scroll method and provide the location
  window.scrollTo(s1coords.left, s1coords.top);
  // but it will not work in case of page is scroll then left and top point change
  //so solve that issue we use

  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );
  //scorlling is not smooth of above methode so we use this method
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: "smooth",
  });

  //but there is even better methode
  //select the section and apply scrollTo methode on it
  section1.scrollIntoView({ behavior: "smooth" });
});

//events and types of events
//read more about event on the mdn

//first and modern way
const h1 = document.querySelector("h1");

// h1.addEventListener("mouseenter", function (e) {
//   alert("hello ankit");
//   console.log("ankit");
// });

// old way
// h1.onmouseenter = function (e) {
//   alert("temp");
// };

// using html
//like onclick

//advantage of modern way
//1. you can set multiple event in case of old second event override the first
//2. you can remove it if not required

// const temp = function () {
//   alert("hello testing with ankit");
//   h1.removeEventListener("mouseenter", temp);
// };
// h1.addEventListener("mouseenter", temp);
// we can also remove using setTimeOut function
