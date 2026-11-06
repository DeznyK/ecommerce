const cartCount = document.querySelector(".cart__count");
let count = 0;

document.querySelectorAll(".card__add").forEach((button) => {
  button.addEventListener("click", () => {
    count++;
    cartCount.textContent = count;

    const original = button.textContent;
    button.textContent = "Added ✓";
    setTimeout(() => (button.textContent = original), 1200);
  });
});