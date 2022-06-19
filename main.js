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
  let createArea4 = createArea("600,250,800,350");
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

  createArea4.addEventListener("click", () => {
    let createDivList = document.createElement("div");
    createDivList.classList.add("divList");
    let createDivTitleWithClose = document.createElement("div");
    createDivTitleWithClose.classList.add("titleList");
    let createButton = document.createElement("button");
    createButton.classList.add("btn", "btn-primary", "btnPopUp");
    createButton.innerHTML = "X";
    createDivTitleWithClose.appendChild(createButton);
    let createTitle = document.createElement("h2");
    createTitle.innerHTML = "Liste des choses à faire";
    createDivTitleWithClose.appendChild(createTitle);
    let createList = document.createElement("div");
    createList.classList.add("listItem");

    let div1 = createDivInputLabel(
      "checkbox",
      "input1",
      "input",
      "Mon Facebook doit être privé"
    );
    let div2 = createDivInputLabel(
      "checkbox",
      "input2",
      "input",
      "Un compte LinkedIn est mieux pour publier des choses personnelles"
    );
    let div3 = createDivInputLabel(
      "checkbox",
      "input3",
      "input",
      "Je dois être dans le numérique pour ouvrir un compte LinkedIn"
    );
    let div4 = createDivInputLabel(
      "checkbox",
      "input4",
      "input",
      "Une photo bien faite sur mon compte professionnel et sur mon CV est bien mieux qu'une photo en soirée"
    );
    let div5 = createDivInputLabel(
      "checkbox",
      "input5",
      "input",
      "Mon compte Facebook n'intéresse pas les recruteurs"
    );
    let div6 = createDivInputLabel(
      "checkbox",
      "input6",
      "input",
      "Une description courte de moi est mieux qu'une description longue"
    );
    createList.appendChild(div1);
    createList.appendChild(div2);
    createList.appendChild(div3);
    createList.appendChild(div4);
    createList.appendChild(div5);
    createList.appendChild(div6);
    let createButtonVerify = document.createElement("button");
    createButtonVerify.classList.add("btn", "btn-primary", "btnVerify");
    createButtonVerify.innerHTML = "Vérifier";
    createDivList.appendChild(createDivTitleWithClose);
    createDivList.appendChild(createList);
    createDivList.appendChild(createButtonVerify);
    createDiv.appendChild(createDivList);
    let getCrossPopUp = document.getElementsByClassName("btnPopUp");
    for (let cross of getCrossPopUp) {
      cross.addEventListener("click", () => {
        cross.parentNode.parentNode.remove();
      });
    }
    document
      .getElementsByClassName("btnVerify")[0]
      .addEventListener("click", () => {
        let error = false;
        let responses = ["input1", "input4"];
        let checkboxes = document.querySelectorAll(
          'input[name="input"]:checked'
        );
        let output = [];
        checkboxes.forEach((checkbox) => {
          output.push(checkbox.id);
        });
        if (responses.length === output.length) {
          for (let i = 0; i < responses.length; i++) {
            if (output[i] !== responses[i]) {
              error = true;
            }
          }
        } else {
          error = true;
        }
        if (!error) {
          anime({
            targets: ".app",
            translateX: "350px",
            easing: "easeInOutQuad",
            direction: "alternate",
          });
          setTimeout(() => {
            clearScreen();
            roomFour();
          }, 1000);
        }
      });
  });
}

function roomThree() {
  //Tout ce truc là c'est à afficher
  const createDiv = document.createElement("div");
  createDiv.classList.add("room3");
  const createImage = document.createElement("img");
  createImage.setAttribute("src", "./img/room3.jpg");
  createImage.setAttribute("usemap", "#room3");
  const createMap = document.createElement("map");
  createMap.setAttribute("name", "room3");
  let createArea1 = createArea("180,400,250,470"); //tasse
  createMap.appendChild(createArea1);
  let createArea2 = createArea("730,410,850,480"); //bloc note
  createMap.appendChild(createArea2);
  let createArea3 = createArea("650,650,750,500"); //poubelle lol
  createMap.appendChild(createArea3);
  let createArea4 = createArea("1200,580,1250,700", "test"); // cadre droite a replacer
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

function roomFour() {
  //Tout ce truc là c'est à afficher
  const createDiv = document.createElement("div");
  createDiv.classList.add("room4");
  const createImage = document.createElement("img");
  createImage.setAttribute("src", "./img/room4.jpg");
  createImage.setAttribute("usemap", "#room4");
  const createMap = document.createElement("map");
  createMap.setAttribute("name", "room4");
  createDiv.appendChild(createImage);
  let createArea1 = createArea("100,300,200,400");
  let createArea2 = createArea("850,500,980,650");
  let createArea3 = createArea("1250,500,1350,600");
  let createArea4 = createArea("1300,200,1400,350");
  createMap.appendChild(createArea1);
  createMap.appendChild(createArea2);
  createMap.appendChild(createArea3);
  createMap.appendChild(createArea4);
  createDiv.appendChild(createMap);

  app.appendChild(createDiv);

  createArea1.addEventListener("click", () => {
    createPopUp("Vous avez trouvé une note avec écrit '16-1-18'");
    checkPopUpClose();
  });
  createArea2.addEventListener("click", () => {
    createPopUp("Vous avez trouvé une note avec écrit '20-1-7'");
    checkPopUpClose();
  });
  createArea3.addEventListener("click", () => {
    createPopUp("Vous avez trouvé une note avec écrit '5-18'");
    checkPopUpClose();
  });
  createArea4.addEventListener("click", () => {
    let createDivInput = document.createElement("div");
    createDivInput.classList.add("inputShare");
    let createDivTitleWithClose = document.createElement("div");
    createDivTitleWithClose.classList.add("titleList");
    let createButton = document.createElement("button");
    createButton.classList.add("btn", "btn-primary", "btnPopUp");
    createButton.innerHTML = "X";

    let createTitle = document.createElement("h2");
    createTitle.innerHTML = "MOT-CLE A TROUVER";
    createDivTitleWithClose.appendChild(createTitle);
    createDivTitleWithClose.appendChild(createButton);
    createDivInput.appendChild(createDivTitleWithClose);
    let createInput = createDivInputLabel(
      "text",
      "toFind",
      "toFind",
      "Réponse"
    );
    let createButtonVerify = document.createElement("button");
    createButtonVerify.classList.add("btn", "btn-primary", "btnVerify");
    createButtonVerify.innerHTML = "Vérifier";
    createDivInput.appendChild(createInput);
    createDivInput.appendChild(createButtonVerify);
    createDiv.appendChild(createDivInput);
    let getCrossPopUp = document.getElementsByClassName("btnPopUp");
    for (let cross of getCrossPopUp) {
      cross.addEventListener("click", () => {
        cross.parentNode.parentNode.remove();
      });
    }
    document
      .getElementsByClassName("btnVerify")[0]
      .addEventListener("click", () => {
        let inputShare = document.getElementsByTagName("input")[0].value;
        if (inputShare.toUpperCase() === "PARTAGER") {
          endRoomFour();
        }
      });
  });
}

function endRoomFour() {
  anime({
    targets: ".app",
    translateX: "350px",
    easing: "easeInOutQuad",
    direction: "alternate",
  });
  setTimeout(() => {
    clearScreen();
    roomFive();
  }, 1000);
}

function roomFive() {
  const createDiv = document.createElement("div");
  createDiv.classList.add("room5");
  const createImage = document.createElement("img");
  createImage.setAttribute("src", "./img/room5.jpg");
  createImage.setAttribute("usemap", "#room5");
  const createMap = document.createElement("map");
  createMap.setAttribute("name", "room5");
  createDiv.appendChild(createImage);
  let createArea1 = createArea("50,200,370,800");
  let createArea2 = createArea("500,200,820,800");
  let createArea3 = createArea("1050,200,1370,800");
  createMap.appendChild(createArea1);
  createMap.appendChild(createArea2);
  createMap.appendChild(createArea3);
  createDiv.appendChild(createMap);

  app.appendChild(createDiv);

  createArea1.addEventListener("click", () => {
    createFinalsDiv(
      [
        "Très présent sur LinkedIn",
        "Compte Facebook en public",
        "Photo de profil correct",
        "Se décrit sur 2 lignes",
        "S'y connait en informatique",
      ],
      "Gaetan"
    );
  });
  createArea2.addEventListener("click", () => {
    createFinalsDiv(
      [
        "Très peu présente sur LinkedIn",
        "Publie toute sa vie sur Facebook",
        "N'a pas de photo d'elle sur ses réseaux professionnel",
        "Se décrit sur 1 paragraphe entier",
        "A du mal à s'exprimer",
      ],
      "Marine"
    );
  });
  createArea3.addEventListener("click", () => {
    createFinalsDiv(
      [
        "Publie régulièrement sur LinkedIn",
        "Son compte Facebook est privé",
        "Photo d'elle souriante avec fond uni",
        "N'a pas d'expérience dans la vente",
        "S'exprime très bien",
        "A déjà travaillé dans le développement informatique",
      ],
      "Naomie"
    );
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
function createDivInputLabel(type, id, name, text) {
  let div = document.createElement("div");
  div.classList.add("divInput");
  let input = document.createElement("input");
  input.setAttribute("type", type);
  input.setAttribute("name", name);
  input.setAttribute("id", id);
  let label = document.createElement("label");
  label.setAttribute("name", name);
  label.innerHTML = text;
  div.appendChild(input);
  div.appendChild(label);

  return div;
}
function createFinalsDiv(elements, characterName) {
  let createDiv = document.createElement("div");
  createDiv.classList.add("divCharacters");
  let title = document.createElement("h1");
  title.innerHTML = characterName;
  createDiv.appendChild(title);

  let createUl = document.createElement("ul");
  for (let elem of elements) {
    let createLi = document.createElement("li");
    createLi.innerHTML = elem;
    createUl.appendChild(createLi);
  }
  createDiv.appendChild(createUl);
  let createDivButton = document.createElement("div");
  createDivButton.classList.add("divButtons");
  let createButtonChoose = document.createElement("button");
  createButtonChoose.classList.add("btn", "btn-success");
  createButtonChoose.innerHTML = "Choisir " + characterName;
  createDivButton.appendChild(createButtonChoose);
  let createButtonClose = document.createElement("button");
  createButtonClose.classList.add("btn", "btn-danger");
  createButtonClose.innerHTML = "Trouver un autre candidat";
  createDivButton.appendChild(createButtonClose);
  createDiv.appendChild(createDivButton);
  createButtonChoose.addEventListener("click", () => {
    if (characterName !== "Naomie") {
      anime({
        targets: ".app",
        translateX: "350px",
        easing: "easeInOutQuad",
        direction: "alternate",
      });
      setTimeout(() => {
        clearScreen();
        roomLoose();
      }, 1000);
    } else {
      anime({
        targets: ".app",
        translateX: "350px",
        easing: "easeInOutQuad",
        direction: "alternate",
      });
      setTimeout(() => {
        clearScreen();
        roomWin();
      }, 1001);
    }
  });
  createButtonClose.addEventListener("click", () => {
    createButtonClose.parentNode.parentNode.remove();
  });
  app.appendChild(createDiv);
}

function roomLoose() {
  let divTitle = document.createElement("div");
  divTitle.classList.add("divTitleLoose");
  let title = document.createElement("h1");
  title.innerHTML = "PERDU";
  divTitle.appendChild(title);
  app.appendChild(divTitle);
}

function roomWin() {
  let divTitle = document.createElement("div");
  divTitle.classList.add("divTitleWin");
  let title = document.createElement("h1");
  title.innerHTML = "GAGNÉ";
  divTitle.appendChild(title);
  app.appendChild(divTitle);
}
