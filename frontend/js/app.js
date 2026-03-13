// Common frontend utility functions

function checkAuth() {
    const user = localStorage.getItem('user');
    if (!user) {
        window.location.href = 'login.html';
    }
}

function logout() {
    localStorage.removeItem('user');
    window.location.href = 'login.html';
}

// Central API base for frontend fetches
window.API_BASE = localStorage.getItem('apiBase') || 'http://localhost:5000';

// Theme handling
function applyTheme(theme) {
    const root = document.documentElement;
    if (theme === 'dark') {
        root.setAttribute('data-theme', 'dark');
        return;
    }
    root.removeAttribute('data-theme');
}

function initTheme() {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
        applyTheme(stored);
        return;
    }
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
}

function toggleTheme() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    applyTheme(next);
}

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    const toggles = document.querySelectorAll('[data-theme-toggle]');
    toggles.forEach(btn => {
        btn.addEventListener('click', toggleTheme);
    });
});
