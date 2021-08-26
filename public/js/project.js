//Dom Element Variables
const progressBar = document.querySelector('.progress');
const percentFunded = document.querySelector('#percentFunded')


let setProgress = () => {
    const currFund = parseInt(document.querySelector('#funded').textContent, 10);
    const goalFund = parseInt(document.querySelector('#goal').textContent, 10);

    const currPercent = ((currFund/goalFund)*100).toFixed(0);
    console.log(currPercent);

    progressBar.value = currPercent
    percentFunded.textContent = currPercent
}

setProgress();