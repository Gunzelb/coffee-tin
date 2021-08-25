//DOM element variables
const menuNavEl = document.querySelector('#navbarMenu');
const burgerNavEl = document.querySelector('#navbarBurger');
const loginNavEl = document.querySelector('#login');
const userNavEl = document.querySelector('#userProjects');
const createNavEl = document.querySelector('#newProject');
const projListEl = document.querySelector('#projectList')

let toggleMenu = (event) => {
    event.preventDefault();
    menuNavEl.classList.toggle('is-active');
};

//Login State Boolean
let loggedIn = false;

let isLoggedIn = () => {
    if (loggedIn === true) {
        loginNavEl.classList.toggle('hide');

        userNavEl.classList.toggle('hide');

        createNavEl.classList.toggle('hide');
    }
};

burgerNavEl.onclick = toggleMenu;
isLoggedIn();