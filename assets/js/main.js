// (function ($) {
//   "use strict";

// jQuery(document).ready(function ($) {
//   const buttons = Array.from(document.querySelectorAll(".button"));
//   const count = buttons.length;
//   const increase = (Math.PI * 2) / buttons.length;
//   const radius = 350;

//   buttons.forEach((button, i) => {
//     button.style.top = Math.sin(-Math.PI / 2 + i * increase) * radius + "px";
//     button.style.left = Math.cos(-Math.PI / 2 + i * increase) * radius + "px";
//     button.addEventListener("click", move);
//   });

//   function move(e) {
//     const n = buttons.indexOf(e.target);
//     buttons.forEach((button, i) => {
//       button.style.top =
//         Math.sin(-Math.PI / 2 + (i - (n % count)) * increase) * radius + "px";
//       button.style.left =
//         Math.cos(-Math.PI / 2 + (i - (n % count)) * increase) * radius + "px";
//     });
//   }
// });

// jQuery(window).load(function () {});
// })(jQuery);

const mainCircel = document.querySelector(".center");

const arrowButton = document.querySelector(".arrow__button");

const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
const box6 = document.querySelector(".box6");
const box7 = document.querySelector(".box7");
const box8 = document.querySelector(".box8");
const box9 = document.querySelector(".box9");
const box10 = document.querySelector(".box10");
const box11 = document.querySelector(".box11");
const box12 = document.querySelector(".box12");

let blockValue;

arrowButton.addEventListener("click", () => {
  document.querySelector(".display__block h1").innerHTML = blockValue;
});

box1.addEventListener("click", () => {
  mainCircel.classList.remove("click1");
  mainCircel.classList.remove("click2");
  mainCircel.classList.remove("click3");
  mainCircel.classList.remove("click4");
  mainCircel.classList.remove("click5");
  mainCircel.classList.remove("click6");
  mainCircel.classList.remove("click7");
  mainCircel.classList.remove("click8");
  mainCircel.classList.remove("click9");
  mainCircel.classList.remove("click10");
  mainCircel.classList.remove("click11");
  mainCircel.classList.remove("click12");

  setTimeout(() => {
    mainCircel.classList.add("click1");
    blockValue = 1;
  }, 0.0000000000000001);
});
box2.addEventListener("click", () => {
  mainCircel.classList.remove("click1");
  mainCircel.classList.remove("click2");
  mainCircel.classList.remove("click3");
  mainCircel.classList.remove("click4");
  mainCircel.classList.remove("click5");
  mainCircel.classList.remove("click6");
  mainCircel.classList.remove("click7");
  mainCircel.classList.remove("click8");
  mainCircel.classList.remove("click9");
  mainCircel.classList.remove("click10");
  mainCircel.classList.remove("click11");
  mainCircel.classList.remove("click12");

  setTimeout(() => {
    mainCircel.classList.add("click2");
    blockValue = 2;
  }, 0.0000000000000001);
});
box3.addEventListener("click", () => {
  mainCircel.classList.remove("click1");
  mainCircel.classList.remove("click2");
  mainCircel.classList.remove("click3");
  mainCircel.classList.remove("click4");
  mainCircel.classList.remove("click5");
  mainCircel.classList.remove("click6");
  mainCircel.classList.remove("click7");
  mainCircel.classList.remove("click8");
  mainCircel.classList.remove("click9");
  mainCircel.classList.remove("click10");
  mainCircel.classList.remove("click11");
  mainCircel.classList.remove("click12");

  setTimeout(() => {
    mainCircel.classList.add("click3");
    blockValue = 3;
  }, 0.0000000000000001);
});

box4.addEventListener("click", () => {
  mainCircel.classList.remove("click1");
  mainCircel.classList.remove("click2");
  mainCircel.classList.remove("click3");
  mainCircel.classList.remove("click4");
  mainCircel.classList.remove("click5");
  mainCircel.classList.remove("click6");
  mainCircel.classList.remove("click7");
  mainCircel.classList.remove("click8");
  mainCircel.classList.remove("click9");
  mainCircel.classList.remove("click10");
  mainCircel.classList.remove("click11");
  mainCircel.classList.remove("click12");

  setTimeout(() => {
    mainCircel.classList.add("click4");
    blockValue = 4;
  }, 0.0000000000000001);
});

box5.addEventListener("click", () => {
  mainCircel.classList.remove("click1");
  mainCircel.classList.remove("click2");
  mainCircel.classList.remove("click3");
  mainCircel.classList.remove("click4");
  mainCircel.classList.remove("click5");
  mainCircel.classList.remove("click6");
  mainCircel.classList.remove("click7");
  mainCircel.classList.remove("click8");
  mainCircel.classList.remove("click9");
  mainCircel.classList.remove("click10");
  mainCircel.classList.remove("click11");
  mainCircel.classList.remove("click12");

  setTimeout(() => {
    mainCircel.classList.add("click5");
    blockValue = 5;
  }, 0.0000000000000001);
});

box6.addEventListener("click", () => {
  mainCircel.classList.remove("click1");
  mainCircel.classList.remove("click2");
  mainCircel.classList.remove("click3");
  mainCircel.classList.remove("click4");
  mainCircel.classList.remove("click5");
  mainCircel.classList.remove("click6");
  mainCircel.classList.remove("click7");
  mainCircel.classList.remove("click8");
  mainCircel.classList.remove("click9");
  mainCircel.classList.remove("click10");
  mainCircel.classList.remove("click11");
  mainCircel.classList.remove("click12");

  setTimeout(() => {
    mainCircel.classList.add("click6");
    blockValue = 6;
  }, 0.0000000000000001);
});

box7.addEventListener("click", () => {
  mainCircel.classList.remove("click1");
  mainCircel.classList.remove("click2");
  mainCircel.classList.remove("click3");
  mainCircel.classList.remove("click4");
  mainCircel.classList.remove("click5");
  mainCircel.classList.remove("click6");
  mainCircel.classList.remove("click7");
  mainCircel.classList.remove("click8");
  mainCircel.classList.remove("click9");
  mainCircel.classList.remove("click10");
  mainCircel.classList.remove("click11");
  mainCircel.classList.remove("click12");

  setTimeout(() => {
    mainCircel.classList.add("click7");
    blockValue = 7;
  }, 0.0000000000000001);
});

box8.addEventListener("click", () => {
  mainCircel.classList.remove("click1");
  mainCircel.classList.remove("click2");
  mainCircel.classList.remove("click3");
  mainCircel.classList.remove("click4");
  mainCircel.classList.remove("click5");
  mainCircel.classList.remove("click6");
  mainCircel.classList.remove("click7");
  mainCircel.classList.remove("click8");
  mainCircel.classList.remove("click9");
  mainCircel.classList.remove("click10");
  mainCircel.classList.remove("click11");
  mainCircel.classList.remove("click12");

  setTimeout(() => {
    mainCircel.classList.add("click8");
    blockValue = 8;
  }, 0.0000000000000001);
});
box9.addEventListener("click", () => {
  mainCircel.classList.remove("click1");
  mainCircel.classList.remove("click2");
  mainCircel.classList.remove("click3");
  mainCircel.classList.remove("click4");
  mainCircel.classList.remove("click5");
  mainCircel.classList.remove("click6");
  mainCircel.classList.remove("click7");
  mainCircel.classList.remove("click8");
  mainCircel.classList.remove("click9");
  mainCircel.classList.remove("click10");
  mainCircel.classList.remove("click11");
  mainCircel.classList.remove("click12");

  setTimeout(() => {
    mainCircel.classList.add("click9");
    blockValue = 9;
  }, 0.0000000000000001);
});

box10.addEventListener("click", () => {
  mainCircel.classList.remove("click1");
  mainCircel.classList.remove("click2");
  mainCircel.classList.remove("click3");
  mainCircel.classList.remove("click4");
  mainCircel.classList.remove("click5");
  mainCircel.classList.remove("click6");
  mainCircel.classList.remove("click7");
  mainCircel.classList.remove("click8");
  mainCircel.classList.remove("click9");
  mainCircel.classList.remove("click10");
  mainCircel.classList.remove("click11");
  mainCircel.classList.remove("click12");

  setTimeout(() => {
    mainCircel.classList.add("click10");
    blockValue = 10;
  }, 0.0000000000000001);
});

box11.addEventListener("click", () => {
  mainCircel.classList.remove("click1");
  mainCircel.classList.remove("click2");
  mainCircel.classList.remove("click3");
  mainCircel.classList.remove("click4");
  mainCircel.classList.remove("click5");
  mainCircel.classList.remove("click6");
  mainCircel.classList.remove("click7");
  mainCircel.classList.remove("click8");
  mainCircel.classList.remove("click9");
  mainCircel.classList.remove("click10");
  mainCircel.classList.remove("click11");
  mainCircel.classList.remove("click12");

  setTimeout(() => {
    mainCircel.classList.add("click11");
    blockValue = 11;
  }, 0.0000000000000001);
});

box12.addEventListener("click", () => {
  mainCircel.classList.remove("click1");
  mainCircel.classList.remove("click2");
  mainCircel.classList.remove("click3");
  mainCircel.classList.remove("click4");
  mainCircel.classList.remove("click5");
  mainCircel.classList.remove("click6");
  mainCircel.classList.remove("click7");
  mainCircel.classList.remove("click8");
  mainCircel.classList.remove("click9");
  mainCircel.classList.remove("click10");
  mainCircel.classList.remove("click11");
  mainCircel.classList.remove("click12");

  setTimeout(() => {
    mainCircel.classList.add("click12");
    blockValue = 12;
  }, 0.0000000000000001);
});
