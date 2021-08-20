//DOM element variables
const homeNavEl = document.querySelector('#homeA');
const loginNavEl = document.querySelector('#login');
const userNavEl = document.querySelector('#userProjects');
const createNavEl = document.querySelector('#newProject');
const projListEl = document.querySelector('#projectList')

//Login State Boolean
let loggedIn = false;

let isLoggedIn = () => {
    if (loggedIn === true) {
        loginNavEl.setAttribute('class', 'hide');

        userNavEl.removeAttribute('class');
        userNavEl.setAttribute('class','');

        createNavEl.removeAttribute('class');
        createNavEl.setAttribute('class','');
    }
};

let displayProjects = () => {
    const allProjects = 'database route here'

    allProjects.forEach(function (project) {
        const project = document.createElement('div');
        const h3 = document.createElement('h3');
        const pDetails = document.createElement('p');
        const pCurrFund = document.createElement('p');
        const pGoalFund = document.createElement('p');

        project.setAttribute('class', '');
        projListEl.appendChild(project);

        

    });



}