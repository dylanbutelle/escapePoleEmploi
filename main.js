import anime from "animejs/lib/anime.es.js";

const buttonStart = document.getElementsByTagName("button")[0];

buttonStart.addEventListener("click", () => {
  anime({
    targets: ".app",
    translateX: "350px",
    easing: "easeInOutQuad",
  });
  setTimeout(() => {
    clearScreen();
  }, 800);
});

function clearScreen() {
  document.getElementsByClassName("app")[0].innerHTML = "";
}

function roomOne() {}
function roomTwo() {}
function roomThree() {}
