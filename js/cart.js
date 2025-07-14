export let cart = JSON.parse(localStorage.getItem('cart')) || [];

export function saveCartToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(product) {
  if (!cart.find(item => item.id === product.id)) {
    cart.push(product);
    saveCartToLocalStorage();
  }
}

export function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCartToLocalStorage();
}
