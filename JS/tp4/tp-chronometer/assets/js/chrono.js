// Déclaration des variables
let timerId = 0;
let heurs = 0;
let minutes = 0;
let secondes = 0;
let msecondes = 0;

// Sélection des élements
const chronoSpan = document.getElementById("chronoId");
const btnStart = document.querySelector("#startId");
const btnStop = document.querySelector("#stopId");
const btnReset = document.querySelector("#resetId");

// fonction de formattage des nombres à un chiffre
function formatTime(value) {
    // return value < 10 ? `0${value}` : value;
    return value.toString().padStart(2, '0');
}

// btn start chron - event
btnStart.addEventListener("click", startChrono);
function startChrono() {
    timerId = setInterval(() => {
        // Affichage du temps
        chronoSpan.textContent = `${formatTime(heurs)} : ${formatTime(minutes)} : ${formatTime(secondes)} : ${formatTime(msecondes)}`;

        // logique de calcul
        msecondes += 1;
        if (msecondes >= 100) {
            msecondes = 0;
            secondes += 1;
        }

        if (secondes >= 60) {
            secondes = 0;
            minutes += 1;
        }

        if (minutes >= 60) {
            minutes = 0;
            heurs += 1;
        }
    }, 10);

    // Désactivation du bouton start
    btnStart.setAttribute("disabled", "true");
}

// btn stop chron - event
btnStop.addEventListener("click", stopChrono);
function stopChrono() {
    // Arrêt du chronomètre
    clearInterval(timerId);

    // Réactivation du bouton start
    btnStart.removeAttribute("disabled");
}

// btn reset chron - event
btnReset.addEventListener("click", resetChrono);
function resetChrono() {
    clearInterval(timerId);
    timerId = 0;
    heurs = 0;
    minutes = 0;
    secondes = 0;
    msecondes = 0;
    chronoSpan.textContent = "00 : 00 : 00 : 00";
    btnStart.removeAttribute("disabled");
}