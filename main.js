import anime from "./node_modules/animejs/lib/anime.es.js";

const buttonStart = document.getElementsByTagName("button")[0];

buttonStart.addEventListener("click", () => {
  anime({
    targets: ".app",
    translateX: "350px",
    easing: "easeInOutQuad",
  });
  setTimeout(() => {
    document.location.href = "../rooms/room1/room1.html";
  }, 800);
});
