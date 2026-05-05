const form = document.getElementById("form");

form.addEventListener('submit', (evt) => {
    evt.preventDefault(); // Désactive le comportement par défaut du formulaire (rechargement de la page)

    // Sélection des champs
    const nom = document.querySelector("#nom");
    const email = document.querySelector("#email");

    // Sélection des élements span (pour les erreurs)
    const errNom = document.querySelector("#errNom");
    const errEmail = document.querySelector("#errEmail");

    // Initiasation du contenu des élements span
    errNom.textContent = "";
    errEmail.textContent = "";

    // Condtion de validation
    const valeurNom = nom.value.trim();
    const valeurEmail = email.value.trim();

    if (valeurNom === "") {
        errNom.textContent = "Le nom est requis.";
    }

    if (valeurEmail === "" || !valeurEmail.includes("@")) {
        errEmail.textContent = "Le format d'email est invalide.";
    }
});