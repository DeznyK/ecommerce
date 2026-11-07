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

const form = document.querySelector("#newsletter");
const message = document.querySelector("#newsletter-msg");

form.addEventListener("submit", (event) => {
  event.preventDefault();                      // stop the page reloading
  message.textContent = "Thank you, you're on the list ✓";
  form.reset();                                // clear the input
});