function generateProductCards(data) {
  const productContainer = document.getElementById("products");
  data.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.name}" class="gadgets">
            <h2 >${product.title}</h2>
            <div class='productPrice'>
            <p>$ ${product.price}</p>
            <button class = "cart">ADD TO CART</button>
            </div>
        `;
    productContainer.appendChild(card);
  });
}
function fetchProducts() {
  fetch("https://dummyjson.com/products?limit=4")
    .then((response) => response.json())
    .then((data) => {
      const returnedData = data.products.slice(0, 10);
      generateProductCards(returnedData);
  });
}
fetchProducts()




