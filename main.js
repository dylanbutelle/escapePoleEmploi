import anime from "animejs/lib/anime.es.js";

const buttonStart = document.getElementsByTagName("button")[0];
const app = document.getElementsByClassName("app")[0];
buttonStart.addEventListener("click", () => {
  anime({
    targets: ".app",
    translateX: "350px",
    easing: "easeInOutQuad",
    direction: "alternate",
  });
  setTimeout(() => {
    clearScreen();
    intro();
  }, 1000);
});

function clearScreen() {
  app.innerHTML = "";
}

function intro() {
  const createDiv = document.createElement("div");
  createDiv.classList.add("textPresentation");
  const createP = document.createElement("p");
  createP.innerText =
    "Bienvenue dans Escape Emploi ! Vous êtes recruteur et votre patron vous a enfermé dans les locaux de votre société. Le seul moyen pour vous de sortir, est de trouver le/la candidat(e) parfait(e) pour devenir vendeur(se) de logiciel informatique. Vous vous baserez sur les indices laissés dans les bureaux de votre société pour trouver la meilleure personne à recruter pour votre patron.";
  createDiv.appendChild(createP);
  createDiv.appendChild(document.createElement("br"));
  const createButton = document.createElement("button");
  createButton.classList.add("btn", "btn-primary");
  createButton.innerText = "J'ai compris";
  createDiv.appendChild(createButton);
  app.appendChild(createDiv);

  createButton.addEventListener("click", () => {
    anime({
      targets: ".app",
      translateX: "350px",
      easing: "easeInOutQuad",
      direction: "alternate",
    });
    setTimeout(() => {
      clearScreen();
      roomOne();
    }, 1000);
  });
}
function roomOne() {
  const createDiv = document.createElement("div");
  createDiv.classList.add("room1");
  const createImage = document.createElement("img");
  createImage.setAttribute("src", "./img/room1.jpg");
  createDiv.appendChild(createImage);
  app.appendChild(createDiv);
}
function roomThree() {}
