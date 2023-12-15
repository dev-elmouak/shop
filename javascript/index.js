import { product } from "./data/product.js";
let products = document.querySelector(".products");
let html = "";
for (let i = 0; i < product.length; i++) {
  html += `
  <div class="card-product">
      <div class="card-img">
        <img src="${product[i].img}" alt="">
      </div>
      <div class="name-product">${product[i].name}</div>
      <div class="price-dh">${product[i].price}</div>
      <button>bay</button>
    </div>
  `
}
products.innerHTML += html;