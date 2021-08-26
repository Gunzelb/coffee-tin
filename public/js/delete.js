const deleteBtn = document.querySelector('#delete')
const cancelBtn = document.querySelector('#cancel')
const projDeleted = document.querySelector('#projectDeleted')

const returnHome = () => {
    deleteBtn.classList.remove('is-loading')
    document.location.replace('/')
}

const projectDeleteHandler = async (event) => {
    event.preventDefault()

    const id = document.querySelector('#id').value.trim()

    const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE'
    })

    deleteBtn.classList.add('is-loading')
    cancelBtn.disabled = true
    projDeleted.classList.remove('hide')

    return setTimeout(returnHome, 3000);
}

deleteBtn.onclick = projectDeleteHandler;