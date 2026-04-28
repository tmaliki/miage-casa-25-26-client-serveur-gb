const message = document.getElementById("msg");
// const eltBtn = document.getElementsByName("button");
// const eltBtn = document.querySelector("button");
const btn = document.querySelector("#btn");
// console.log(btn);
const para = document.querySelector("#para");
const input = document.querySelector("#input");
const scrollBox = document.querySelector("#scrollBox");

// Evenement de Click
btn.addEventListener("click", fonctionClicDoubleClic);
function fonctionClicDoubleClic(evenement) {
    // console.log(evenement);
    // console.log("J'ai cliqué");
    message.textContent = "J'ai cliqué sur le bouton";
}

// Evenement de Double clic
btn.addEventListener("dblclick", () => {
    message.textContent = "Double clic détecté !";
});

// Evenement de survol
para.addEventListener("mouseover", () => {
    message.textContent = "Survol détecté !";
});

// Evenement saisi clavier
input.addEventListener("input", () => {
    message.textContent = input.value;
});

// Evenement de scroll
scrollBox.addEventListener("scroll", () => {
    message.textContent = "Scroll en cours...";
});
