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
