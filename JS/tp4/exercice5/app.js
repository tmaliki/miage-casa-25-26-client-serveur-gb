// Sélection des élements
const input = document.querySelector('input'); // par son nom
const btn = document.querySelector('#add'); // son id
const list = document.querySelector('#list'); // par son id

// Création de l'évement
btn.addEventListener('click', () => {
    const tache = input.value.trim();

    // Vérifions que le champs input n'est pas vide
    if (tache !== "") {
        // création d'un élément li enfant de ul
        const li = document.createElement('li');

        li.textContent = tache; // on lui affecte le texte de l'input

        list.appendChild(li); // on ajoute le li à la liste

        input.value = ""; // on vide le champs input
    } else {
        alert("Veuillez saisir une tâche avant de l'ajouter.");
    }
})