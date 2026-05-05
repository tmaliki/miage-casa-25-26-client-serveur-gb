// Sélection des élements
const input = document.querySelector("input");
const btn = document.querySelector("#add");
const list = document.querySelector("#list");

// Evenement d'ajout d'une tâche
btn.addEventListener("click", addTask);

// Evenement de gestion d'une tâche (complétion/suppression)
list.addEventListener("click", manageTask);

// Fonction d'ajout d'une tâche
function addTask(evt) {
    const tache = input.value.trim();
    if (tache !== "") {
        const li = document.createElement("li");
        li.innerHTML = `${tache}
        <button class="done">Terminer</button>
        <button class="del">Supprimer</button>
        `;
        list.appendChild(li);
        input.value = "";
    } else {
        alert("Veuillez saisir une tâche.");
    }
}

// Fonction de gestion d'une tâche (complétion/suppression)
function manageTask(evt) {
    // Termner une tâche
    if (evt.target.classList.contains("done")) {
        evt.target.parentElement.classList.toggle("completed");
    }

    // Suppimer une tâche
    if (evt.target.classList.contains("del")) {
        evt.target.parentElement.remove();
    }
}