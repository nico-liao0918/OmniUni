// Global.js

// DARK MODE TOGGLE
const darkToggleBtn = document.getElementById('dark-toggle');
darkToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
});

const popup = document.getElementById('popup');

function openPopup() {
    popup.classList.remove('popup_hidden');
}

function closePopup() {
    popup.classList.add('popup_hidden');
}

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(openPopup, 5000);
});

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}