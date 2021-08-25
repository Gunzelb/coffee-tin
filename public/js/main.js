//DOM element variables
const menuNavEl = document.querySelector('#navbarMenu');
const burgerNavEl = document.querySelector('#navbarBurger');
const logoutNavEl = document.querySelector('#logout');
const userNavEl = document.querySelector('#userProjects');
const createNavEl = document.querySelector('#newProject');
const projListEl = document.querySelector('#projectList');

let toggleMenu = (event) => {
    event.preventDefault();
    menuNavEl.classList.toggle('is-active');
};

const logoutHandler = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    })

    return window.location.reload();
}

burgerNavEl.onclick = toggleMenu;
if (logoutNavEl) {
    logoutNavEl.onclick = logoutHandler;
}
