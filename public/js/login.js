const loginFailed = document.querySelector('#loginFailed')
const repeatEmail = document.querySelector('#repeatEmail')
const confirmFailed = document.querySelector('#confirmFailed')

const loginFormHandler = async (event) => {
    event.preventDefault();
    loginFailed.classList.add('hide');

    const email = document.querySelector('#email').value.trim()
    const password = document.querySelector('#password').value.trim()

    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
    })

    if (!response.ok) {
        return loginFailed.classList.remove('hide')
    }

    return document.location.replace('/')
}

const registerFormHandler = async (event) => {
    event.preventDefault();
    repeatEmail.classList.add('hide');
    confirmFailed.classList.add('hide');

    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#newEmail').value.trim();
    const password = document.querySelector('#newPassword').value.trim();
    const confirmPass = document.querySelector('#confirmPassword').value.trim();

    if (password !== confirmPass) {
        return confirmFailed.classList.remove('hide');
    }

    const response = await fetch('/api/users/', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
    })

    if (!response.ok) {
        return repeatEmail.classList.remove('hide')
    }

    return document.location.replace('/')
}

document
    .querySelector('#loginForm')
    .addEventListener('submit', loginFormHandler)

document
    .querySelector('#registerForm')
    .addEventListener('submit', registerFormHandler)
