const list = document.querySelector("#list");

list.addEventListener("click", (evt) => {
    if (evt.target.tagName === "BUTTON") {
        alert("Bouton cliqué dans : " + evt.target.parentElement.textContent);
    }
});