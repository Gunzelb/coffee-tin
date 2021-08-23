//DOM element variables
const menuNavEl = document.querySelector('#navbarMenu');
const burgerNavEl = document.querySelector('#navbarBurger');
const homeNavEl = document.querySelector('#homeA');
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



let displayProjects = () => {
    const allProjects = 'database route here'

    allProjects.forEach(function (project) {
        const projectEl = document.createElement('div');
        const h3 = document.createElement('h3');
        const pDetails = document.createElement('p');
        const pCurrFund = document.createElement('p');
        const pGoalFund = document.createElement('p');

        projectEl.setAttribute('class', '');
        projListEl.appendChild(projectEl);

        h3.textContent = project.name;
        projectEl.appendChild(h3);

        pDetails.textContent = project.details;
        projectEl.appendChild(pDetails);

        const currFund = project.funded;

        pCurrFund.textContent = `$${currFund} out of `
        projectEl.appendChild(pCurrFund);

        pGoalFund.textContent = project.goal;
        pCurrFund.appendChild(pGoalFund);
    });
}

burgerNavEl.onclick = toggleMenu;
isLoggedIn();