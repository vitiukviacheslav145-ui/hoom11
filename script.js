```javascript
const modal = document.getElementById("productModal");
const openButton = document.querySelector(".open-modal");
const closeButton = document.querySelector(".close-modal");

// Відкриття модального вікна
openButton.addEventListener("click", () => {
    modal.classList.add("active");
});

// Закриття кнопкою X
closeButton.addEventListener("click", () => {
    modal.classList.remove("active");
});

// Закриття кліком поза вікном
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.remove("active");
    }
});

// Закриття клавішею Escape
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        modal.classList.remove("active");
    }
});

// Повідомлення при натисканні "Додати в кошик"
document.querySelector(".cart-button").addEventListener("click", () => {
    alert("Товар додано в кошик!");
});