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

// Simple lightbox for product images
const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.id = 'lightbox';
        overlay.style.position = 'fixed';
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0,0,0,0.8)';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.cursor = 'pointer';
        overlay.innerHTML = `<img src="${img.src}" style="max-width:90%; max-height:90%;">`;
        document.body.appendChild(overlay);
        
        overlay.addEventListener('click', () => overlay.remove());
    });
});