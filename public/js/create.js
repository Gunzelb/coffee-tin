const projCreated = document.querySelector('#projectCreated')
const createBtn = document.querySelector('#create')

const returnHome = () => {
    createBtn.classList.remove('is-loading')
    document.location.replace('/')
}

const projectCreationHandler = async (event) => {
    event.preventDefault()

    const name = document.querySelector('#projectName').value.trim()
    const details = document.querySelector('#projectDetails').value.trim()
    const goal = document.querySelector('#projectGoal').value.trim()
    const deadline = document.querySelector('#projectDeadline').value.trim()
    const tier = document.querySelector('#rewardTier').value.trim()
    const description = document.querySelector('#rewardDescription').value.trim()

    const response = await fetch('/api/projects/', {
        method: 'POST',
        body: JSON.stringify({
            project: { name, details, goal, deadline },
            rewards: { tier, description },
        }),
        headers: { 'Content-Type': 'application/json' },
    })

    createBtn.classList.add('is-loading')
    projCreated.classList.remove('hide')

    return setTimeout(returnHome, 3000);
}

document
    .querySelector('#projectForm')
    .addEventListener('submit', projectCreationHandler)
