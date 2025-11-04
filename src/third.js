import { products } from "./data.js";
import productTemplate from "./template.hbs";

const container = document.getElementById("productContainer");

function renderProducts(items) {
  container.innerHTML = productTemplate(items);
}

renderProducts(products);

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(value)
  );

  renderProducts(filtered);
});
