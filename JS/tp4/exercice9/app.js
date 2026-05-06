const input = document.querySelector("input");
const btn = document.querySelector("#add");
const list = document.querySelector("#list");

function save() {
    localStorage.setItem("tasks", list.innerHTML);
}

function load() {
    list.innerHTML = localStorage.getItem("tasks") || "";
}

btn.addEventListener("click", () => {
    const tache = input.value.trim();
    if (tache !== "") {
        const li = document.createElement("li");
        li.textContent = tache;
        list.appendChild(li);
        input.value = "";
        save();
    } else {
        alert("Veuillez saisir une tâche.");
    }
});

load();