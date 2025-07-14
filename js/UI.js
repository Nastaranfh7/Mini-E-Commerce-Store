import { cart, removeFromCart } from './cart.js';

export function updateCartCount() {
  const cartCount = document.getElementById('cart-count');
  cartCount.textContent = `Cart: ${cart.length} item${cart.length !== 1 ? 's' : ''}`;
}

export function renderCart() {
  const container = document.getElementById('cart-items');
  const emptyMsg = document.getElementById('empty-message');
  const totalPrice = document.getElementById('total-price');

  container.innerHTML = '';

  if (cart.length === 0) {
    emptyMsg.style.display = 'block';
    totalPrice.textContent = 'قیمت کل: ۰ دلار';
    return;
  }

  emptyMsg.style.display = 'none';

  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <span>${item.title} - $${item.price}</span>
      <button data-id="${item.id}">حذف</button>
    `;
    container.appendChild(div);
  });

  totalPrice.textContent = `قیمت کل: ${cart.reduce((sum, i) => sum + i.price, 0).toFixed(2)} دلار`;

  container.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      removeFromCart(parseInt(btn.dataset.id));
      renderCart();
      updateCartCount();
    });
  });
}

export function setupThemeToggle() {
  const button = document.getElementById('theme-toggle');
  const dark = localStorage.getItem('theme') === 'dark';
  if (dark) document.body.classList.add('dark');

  button.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const mode = document.body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', mode);
  });
}
