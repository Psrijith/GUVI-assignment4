let itemQuantity = 0; // Track the current quantity on the page (before adding to cart)
let cartQuantity = 0; // Track the total quantity in the cart

function updateDisplayQuantity() {
  document.querySelector(".current-qty").textContent = itemQuantity;
}

function updateCart() {
  cartQuantity += itemQuantity;
  document.getElementById("checkout-quantity").textContent = cartQuantity;
  document.getElementById("cart-total").textContent = `$${
    cartQuantity * 125
  }.00`; // Assuming $125 per item
  document.getElementById("checkout-button").style.display =
    cartQuantity > 0 ? "block" : "none";
  itemQuantity = 0; // Reset itemQuantity after adding to cart
  updateDisplayQuantity();
}

function addItem() {
  itemQuantity++;
  updateDisplayQuantity();
}

function subtractItem() {
  if (itemQuantity > 0) {
    itemQuantity--;
  }
  updateDisplayQuantity();
}

document.querySelector(".add").addEventListener("click", addItem);
document.querySelector(".sub").addEventListener("click", subtractItem);
document.querySelector(".add-to-cart").addEventListener("click", updateCart);

function toggleCartPopup(event) {
  const cartPopup = document.getElementById("cart-popup");
  cartPopup.classList.toggle("show");
  event.stopPropagation();
}

document.addEventListener("click", function (event) {
  const cartPopup = document.getElementById("cart-popup");
  const cartButton = document.querySelector(".cart-button");

  // Check if the click was outside the cart button and the cart popup
  if (!cartButton.contains(event.target) && !cartPopup.contains(event.target)) {
    cartPopup.classList.remove("show");
  }
});
