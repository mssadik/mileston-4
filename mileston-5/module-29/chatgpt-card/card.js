// Select elements from the DOM
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const clearCart = document.getElementById('clear-cart');
const productList = document.getElementById('product-list');

// Initialize the cart items array and total cost
let items = [];
let total = 0;

// Add event listeners to the add to cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

// Function to add item to cart
function addToCart(event) {
  const button = event.target;
  const product = button.parentElement;
  const name = product.querySelector('h3').innerText;
  const price = product.querySelector('p').innerText.replace('$', '');
  const item = { name: name, price: price };
  items.push(item);
  updateCart();
}

// Function to update cart display
function updateCart() {
  cartItems.innerHTML = '';
  items.forEach(item => {
    const li = document.createElement('li');
    li.innerText = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
    total += parseInt(item.price);
  });
  cartTotal.innerText = total;
}

// Function to clear the cart
function clearCartItems() {
  items = [];
  total = 0;
  updateCart();
}

// Add event listener to the clear cart button
clearCart.addEventListener('click', clearCartItems);
