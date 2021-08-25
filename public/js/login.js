const loginFailed = document.querySelector('#loginFailed');

const loginFormHandler = async (event) => {
    event.preventDefault()
    loginFailed.classList.add('hide')

    const email = document.querySelector('#email').value.trim()
    const password = document.querySelector('#password').value.trim()

    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
        return loginFailed.classList.remove('hide');
    };

    return document.location.replace('/');
}

document
    .querySelector('#loginForm')
    .addEventListener('submit', loginFormHandler)
