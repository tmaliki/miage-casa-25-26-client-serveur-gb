// récuperation de l'élement div par son id
const elementDiv = document.querySelector("#card");
console.log(elementDiv);

// récupération de l'élément button par son id
const elementButton = document.querySelector("#mode");
console.log(elementButton);

// Ecoutons l'évenement de click sur le button
elementButton.addEventListener("click", () => {
    // elementDiv.classList.add("dark"); // ajout la classe dark
    // elementDiv.classList.remove("dark"); // supprime la classe dark

    // Ajout ou suppression de la classe "dark"
    elementDiv.classList.toggle("dark");
});