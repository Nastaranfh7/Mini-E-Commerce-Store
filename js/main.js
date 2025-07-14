import { products } from './products.js';
import { addToCart, saveCartToLocalStorage } from './cart.js';
import { renderCart, updateCartCount, setupThemeToggle } from './ui.js';

const productList = document.getElementById('product-list');
const searchInput = document.getElementById('search-input');
const filterButtons = document.querySelectorAll('#filters button');

let activeCategory = 'all';
let searchQuery = '';

function renderProducts() {
  productList.innerHTML = '';

  const filtered = products.filter(p => {
    const matchCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  filtered.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}" />
      <h3>${product.title}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <small>${product.category}</small>
      <button data-id="${product.id}">Add to Cart</button>
    `;
    productList.appendChild(card);
  });

  productList.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      const item = products.find(p => p.id === id);
      addToCart(item);
      updateCartCount();
      renderCart();
    });
  });
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    activeCategory = button.dataset.category;
    renderProducts();
  });
});

searchInput.addEventListener('input', () => {
  searchQuery = searchInput.value;
  renderProducts();
});

renderProducts();
renderCart();
updateCartCount();
setupThemeToggle();
