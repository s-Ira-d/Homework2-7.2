import { products } from "./data.js";
import productCard from "./templates/productCard.hbs";

const container = document.getElementById("result");
const form = document.getElementById("add-form");

let productList = [...products]; // копія початкових даних

// Функція рендеру шаблону
function render() {
  container.innerHTML = productCard({ products: productList });
}

// Додавання товару
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const price = Number(document.getElementById("price").value);
  const description = document.getElementById("description").value.trim();

  if (!name || !price || !description) return;

  const newProduct = {
    id: Date.now(),
    name,
    price,
    description,
  };

  productList.push(newProduct);
  render();
  form.reset();
});

// Видалення товару
container.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const id = Number(e.target.closest("li").dataset.id);
    productList = productList.filter((p) => p.id !== id);
    render();
  }
});

render();
