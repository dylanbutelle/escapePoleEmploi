import anime from "animejs/lib/anime.es.js";
//Cstte
const buttonStart = document.getElementsByTagName("button")[0];
const app = document.getElementsByClassName("app")[0];
//Tableau pour stocker les indices récupérés
let inventory = [];
//Click du début
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
  //Creation de nos éléments à afficher
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
  //Check le click sur le bouton avec animation animeJS
  createButton.addEventListener("click", () => {
    anime({
      targets: ".app",
      translateX: "350px",
      easing: "easeInOutQuad",
      direction: "alternate",
    });
    //On attend 1 seconde pour changer de salle (temps de l'anim et du clear environ)
    setTimeout(() => {
      clearScreen();
      roomOne();
    }, 1000);
  });
}
function roomOne() {
  //Tout ce truc là c'est à afficher
  const createDiv = document.createElement("div");
  createDiv.classList.add("room1");
  const createImage = document.createElement("img");
  createImage.setAttribute("src", "./img/room1.jpg");
  createImage.setAttribute("usemap", "#room1");
  const createMap = document.createElement("map");
  createMap.setAttribute("name", "room1");
  let createArea1 = createArea("500,380,700,500");
  createMap.appendChild(createArea1);
  let createArea2 = createArea("800,380,900,500");
  createMap.appendChild(createArea2);
  let createArea3 = createArea("100,380,200,500");
  createMap.appendChild(createArea3);
  let createArea4 = createArea("1200,580,1250,700");
  createMap.appendChild(createArea4);
  createDiv.appendChild(createImage);
  createDiv.appendChild(createMap);
  app.appendChild(createDiv);
  //On vérifie le click sur le PC, y'a que à ce moment qu'on peut récupérer les indices
  createArea1.addEventListener("click", () => {
    //On créé une popup avec un msg
    createPopUp(
      "Vous avez trouvé une note avec écrit 'Trouvez les 3 indices pour sortir de cette salle' "
    );
    //On vérifie si y'a un click sur la croix
    checkPopUpClose("room1");
    //Et là vérifie si il clique sur une zone indice
    createArea2.addEventListener("click", () => {
      createPopUp(
        "Vous avez trouvé un indice ! 'Une bonne photo c'est la clé !' "
      );
      //Opérateur ternaire (check google) si notre tableau ne contient PAS "indice1" on le met dans le tableau, sinon on fait rien
      //Ca évite de pouvoir cliquer 3 fois sur le même indice et de push 3 fois le même indice dans le tableau
      !inventory.includes("indice1") ? inventory.push("indice1") : null;
      //Si il a récupéré les 3 indices, on lui balance la fin de la salle

      checkPopUpClose("room1");
    });
    createArea3.addEventListener("click", () => {
      createPopUp(
        "Vous avez trouvé un indice ! 'Une bonne description c'est la clé !' "
      );
      !inventory.includes("indice2") ? inventory.push("indice2") : null;

      checkPopUpClose("room1");
    });
    createArea4.addEventListener("click", () => {
      createPopUp("Vous avez trouvé un indice ! 'Un beau CV c'est la clé !' ");
      !inventory.includes("indice3") ? inventory.push("indice3") : null;

      checkPopUpClose("room1");
    });
  });
}

function endRoom1() {
  anime({
    targets: ".app",
    translateX: "350px",
    easing: "easeInOutQuad",
    direction: "alternate",
  });
  setTimeout(() => {
    inventory = "";
    console.table(inventory);
    clearScreen();
    roomTwo();
  }, 1000);
}

function roomTwo() {
  //Tout ce truc là c'est à afficher
  const createDiv = document.createElement("div");
  createDiv.classList.add("room2");
  const createImage = document.createElement("img");
  createImage.setAttribute("src", "./img/room2.jpg");
  createImage.setAttribute("usemap", "#room2");
  const createMap = document.createElement("map");
  createMap.setAttribute("name", "room2");

  let createArea1 = createArea("170,380,220,450");
  createMap.appendChild(createArea1);
  let createArea2 = createArea("850,290,1100,400");
  createMap.appendChild(createArea2);
  let createArea3 = createArea("530,90,590,210");
  createMap.appendChild(createArea3);
  let createArea4 = createArea("600,150,850,280", "test");
  createMap.appendChild(createArea4);
  createDiv.appendChild(createImage);
  createDiv.appendChild(createMap);
  app.appendChild(createDiv);

  createArea1.addEventListener("click", () => {
    let createDivPhoto = document.createElement("div");
    createDivPhoto.classList.add("photos");
    let createImgBonne = document.createElement("img");
    let createImgMauvaise = document.createElement("img");
    createImgBonne.setAttribute("src", "./img/photoBonne.png");
    createImgMauvaise.setAttribute("src", "./img/photoMauvaise.png");
    createImgBonne.setAttribute("width", "150px");
    createImgMauvaise.setAttribute("width", "150px");
    let createButton = document.createElement("button");
    createButton.classList.add("btn", "btn-primary", "btnPopUp");
    createButton.innerHTML = "X";
    createDivPhoto.appendChild(createButton);
    createDivPhoto.appendChild(createImgBonne);
    createDivPhoto.appendChild(createImgMauvaise);
    createDiv.appendChild(createDivPhoto);
    checkPopUpClose("room2");
  });

  createArea2.addEventListener("click", () => {
    let createDivPhoto = document.createElement("div");
    createDivPhoto.classList.add("photos");
    let createImgFB = document.createElement("img");
    let createImgLKD = document.createElement("img");
    createImgFB.setAttribute("src", "./img/LogoFacebook.png");
    createImgLKD.setAttribute("src", "./img/LogoLKD.png");
    createImgFB.setAttribute("width", "150px");
    createImgLKD.setAttribute("width", "150px");
    let createButton = document.createElement("button");
    createButton.classList.add("btn", "btn-primary", "btnPopUp");
    createButton.innerHTML = "X";
    createDivPhoto.appendChild(createButton);
    createDivPhoto.appendChild(createImgFB);
    createDivPhoto.appendChild(createImgLKD);
    createDiv.appendChild(createDivPhoto);
    checkPopUpClose("room2");
  });

  createArea3.addEventListener("click", () => {
    let createDivPhoto = document.createElement("div");
    createDivPhoto.classList.add("photos");
    let createImgMeme = document.createElement("img");
    createImgMeme.setAttribute("src", "./img/Meme.jpg");
    createImgMeme.setAttribute("width", "150px");
    let createButton = document.createElement("button");
    createButton.classList.add("btn", "btn-primary", "btnPopUp");
    createButton.innerHTML = "X";
    createDivPhoto.appendChild(createButton);
    createDivPhoto.appendChild(createImgMeme);
    createDiv.appendChild(createDivPhoto);
    checkPopUpClose("room2");
  });
}

//Fonction de création de zone pour éviter les répétitions
function createArea(coord, link) {
  let area = document.createElement("area");
  area.setAttribute("shape", "rect");
  area.setAttribute("coords", coord);
  link != undefined ? area.setAttribute("href", link) : null;

  return area;
}

function checkPopUpClose(room) {
  let getCrossPopUp = document.getElementsByClassName("btnPopUp");
  for (let cross of getCrossPopUp) {
    cross.addEventListener("click", () => {
      cross.parentNode.remove();
      if (inventory.length >= 3) {
        if (room === "room1") {
          endRoom1();
        }
      }
    });
  }
}
function createPopUp(msg) {
  let createDiv = document.createElement("div");
  createDiv.classList.add("popUp");
  let createP = document.createElement("p");
  createP.innerHTML = msg;
  let createButton = document.createElement("button");
  createButton.classList.add("btn", "btn-primary", "btnPopUp");
  createButton.innerHTML = "X";
  createDiv.appendChild(createP);
  createDiv.appendChild(createButton);
  app.appendChild(createDiv);
}
