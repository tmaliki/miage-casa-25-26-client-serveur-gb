// Affichage du document
console.log(window) // super objet de javascript
console.log(window.document) // affichage de l'objet document
console.log(document)  // affichage de l'objet document

// Solution de l'exercice1

// const elementsH1 = document.querySelectorAll("h1");
// console.log(elementsH1);

// Sélection de l'élément h1 par son nom
const elementH1 = document.querySelector("h1");
console.log(elementH1);

// Sélection de l'élement button par son id
// const elementButton = document.getElementById("btn");
const elementButton = document.querySelector("#btn");
console.log(elementButton);

// Gestion des évements (evenement de click)
elementButton.addEventListener("click", traitement);
function traitement(evt) {
    // console.log(evt);
    elementH1.textContent = "Titre modifié";
    elementH1.style.color = "blue";
}