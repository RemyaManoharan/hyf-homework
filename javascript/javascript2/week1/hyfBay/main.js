console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

function renderProducts(products) {
  const ulTag = document.querySelector("ul");
  for (let product of products) {
    //add li,h4,p tags
    const liTag = document.createElement("li");
    const h4Tag = document.createElement("h4");
    const pTag = document.createElement("p");
    // add data to tags
    h4Tag.innerHTML = product.name;
    liTag.appendChild(h4Tag);
    pTag.innerHTML = `price:${product.price}<br> rating: ${product.rating}`;
    // Workspace manipulation
    liTag.appendChild(pTag);
    ulTag.appendChild(liTag);
  }
  // DOM manipulation
  document.body.appendChild(ulTag);
}
renderProducts(products);
