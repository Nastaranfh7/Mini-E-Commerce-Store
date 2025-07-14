# 🛍️ Simple JavaScript Store

---

## 🚀 Live Demo

Check it out 👉 [Live Demo](https://nastaranfh7.github.io/Mini-E-Commerce-Store/)


---

A lightweight and modular mini-store built with **Vanilla JavaScript**, **HTML**, and **CSS** — ideal for learning DOM manipulation, modular JS structure, and browser storage.

## ✨ Features

- 🛒 Add to cart functionality  
- 📦 Cart count display  
- 🔍 Live product search  
- 🧩 Category-based filtering  
- 💾 Cart state saved in LocalStorage  
- 🌙 Light/Dark mode with persistence  
- 🧱 Modular code using ES Modules  

---

## 📁 Folder Structure

```plaintext
project/
│
├── index.html                 # Main HTML layout
├── style.css                  # Stylesheet
├── js/
│   ├── main.js                # Entry point
│   ├── products.js            # Product list & render logic
│   ├── cart.js                # Cart management
│   └── ui.js                  # UI utilities (e.g. theme toggle)



🚀 How to Run
Clone or download the project

Open index.html in a browser (or use Live Server)

No build tools or frameworks needed!

🌙 Dark Mode
Click the "Toggle Theme" button to switch between Light and Dark modes

Preference is automatically stored in localStorage

Example snippet: document.body.classList.toggle('dark-mode');
localStorage.setItem('theme', 'dark');  // or 'light'


🔍 Live Search + Category Filter
Dynamically filters products based on:

✅ Selected category

✅ Text typed into the search bar (live search)

Example logic:

product.title.toLowerCase().includes(searchQuery.toLowerCase());
product.category === activeCategory;


🧠 Created by Nastaran Fazli Haravi
Feel free to fork, customize, or contribute 💙
GitHub Profile


