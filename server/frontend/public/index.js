// console.log('Hello World!');
async function fetchProduct() {
  const response = await fetch("https://servers10.herokuapp.com/api");
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const products = await response.json();
  return products;
  console.log(products);
}
fetchProduct()
  .then((res) => {
    console.log(res, "***");
    const products = res.data;
    products.map((product) => {
      const productName = product.productName;
      const productDescription = product.productDescription;
      const color = product.color;
      const size = product.size;
      const price = product.price;
      const images = product.images;
      const productDetails = `
        <div class="card">
        <img src='${images}.png' alt="Denim Jeans" style="width:100%">
                <h1>${productName}</h1>
                <p> ${color} </p>
                <p> ${size} </p>
                <p> ₦ ${price} </p>
                <p>${productDescription}</p>
                <p><button>Add to Cart</button></p>
            </div>
        `;
      document.getElementById("grid").innerHTML += productDetails;
    });
  })
  .catch((error) => {
    console.log(error);
    // throw new Error(message);// 'An error has occurred: 404'
  });
