// Sélection de tous les éléments li
const listItems = document.querySelectorAll('li');

let cumul = 0;

listItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        const price = Number(item.dataset.price);
        document.querySelector("#price").textContent = `${price} MAD`;

        cumul += price;
        document.querySelector("#cumul").textContent = `${cumul} MAD`;
    });
})