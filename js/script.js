const arrow = document.getElementById('arrow')
const nav = document.getElementById('nav-links')

function toggleMenu() {
    arrow.classList.toggle('arrow_toggle')
    nav.classList.toggle('nav_active')
}

arrow.addEventListener('click', toggleMenu)