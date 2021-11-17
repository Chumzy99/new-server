const button = [...document.querySelectorAll("button")];
const description = document.querySelector(".description");
const title = document.querySelector(".title");
const container = document.querySelector(".productscontainer");
const cart = document.querySelector(".cart");
let html = "";

addEventListener("DOMContentLoaded", () => {
  async function fetchData() {
    const response = await fetch(
      `https://ecommerce-bare-node.herokuapp.com/api`
    );
    console.log(response);
    const { data } = await response.json();

    data.forEach((product) => {
      console.log(product);

      html += `<figure class="card">
            <img
            src=${product.images}
            class=""
            alt="shirts"
            />
            <p class="size">size: ${product.size}</p>
            <p class="color">color: ${product.color}</p>
            <p class="quantity">quantity: ${product.quantity}</p>
            <p class="price">price: #${product.price}</p>
            <button class="btn">Add to Cart</button>
            </figure>
            `;
    });

    console.log("The DOM is fully loaded.");
    container.insertAdjacentHTML("beforeend", html);
    // return data.data;
  }

  fetchData();

  button.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("PPPPPPPPPPP");
    })
  );
});

// const render = function () {};
// button.concat;
// addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("PPPPPPPPPPP");
// });
