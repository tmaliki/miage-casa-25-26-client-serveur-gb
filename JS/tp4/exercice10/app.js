const input = document.querySelector("input");
const btn = document.querySelector("#add");
const list = document.querySelector("#list");
const mode = document.querySelector("#mode");

function save() {
    localStorage.setItem("tasks", list.innerHTML);
}

function load() {
    list.innerHTML = localStorage.getItem("tasks") || "";
}

// Changement de mode
mode.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Ajout d'une tâche
btn.addEventListener("click", () => {
    const tache = input.value.trim();
    if (tache !== "") {
        const li = document.createElement("li");
        li.innerHTML = `${tache}
        <button class="done">Terminer</button>
        <button class="del">Supprimer</button>
        `;
        list.appendChild(li);
        input.value = "";
        save();
    } else {
        alert("Veuillez saisir une tâche.");
    }
});

// Terminer/Supprimer une tâche
list.addEventListener("click", (evt) => {
    // Termner une tâche
    if (evt.target.classList.contains("done")) {
        evt.target.parentElement.classList.toggle("completed");
    }

    // Suppimer une tâche
    if (evt.target.classList.contains("del")) {
        evt.target.parentElement.remove();
    }

    save();
});

load();