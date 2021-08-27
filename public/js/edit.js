const projEdited = document.querySelector('#projectEdited')
const editBtn = document.querySelector('#edit')

const returnHome = () => {
    editBtn.classList.remove('is-loading')
    document.location.replace('/')
}

const projectEditHandler = async (event) => {
    event.preventDefault()

    const name = document.querySelector('#projectName').value.trim()
    const details = document.querySelector('#projectDetails').value.trim()
    const goal = document.querySelector('#projectGoal').value.trim()
    const deadline = document.querySelector('#projectDeadline').value.trim()
    const tier = document.querySelector('#rewardTier').value.trim()
    const description = document.querySelector('#rewardDescription').value.trim()
    const id = document.querySelector('#id').value.trim()

    const response = await fetch(`/api/projects/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            project: { name, details, goal, deadline },
            rewards: { tier, description },
        }),
        headers: { 'Content-Type': 'application/json' },
    })

    editBtn.classList.add('is-loading')
    projEdited.classList.remove('hide')

    return setTimeout(returnHome, 3000);
}

document
    .querySelector('#editForm')
    .addEventListener('submit', projectEditHandler)
