//Dom Element Variables
const progressBar = document.querySelector('.progress');
const percentFunded = document.querySelector('#percentFunded')
const contributeBtn = document.querySelector('#contribute')
const stripeURL = 'https://checkout.stripe.com/pay/cs_test_a1XEsQrFRisdH2A2vnO2lWjORKnR1iY96UYoyum1QXuccbEYO6AYq0WrHp#fidkdWxOYHwnPyd1blpxYHZxWjA0T1VgRGpHcDVHdX93a048bVNgdGhOYFBMbHdTUUtPcXV8cXJnbm9CMVIyMW1TNktcMEYwQFVfVlBDUzVrVH8zanczMHxpY1I9YjA2M1ZAVUpMTGNUSEgyNTV8THBIYHVjUycpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl'

const setProgress = () => {
    const currFund = parseInt(document.querySelector('#funded').textContent, 10);
    const goalFund = parseInt(document.querySelector('#goal').textContent, 10);

    const currPercent = ((currFund/goalFund)*100).toFixed(0);

    progressBar.value = currPercent
    percentFunded.textContent = currPercent
}


const checkoutCreateHandler = async (event) => {
    event.preventDefault()

    const response = await fetch('/api/checkout/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    })
}

const checkoutWorkAround = async (event) => {
    event.preventDefault();
    document.location.replace(stripeURL);
}

setProgress();

contributeBtn.onclick = checkoutCreateHandler;

// contributeBtn.onclick = checkoutWorkAround;