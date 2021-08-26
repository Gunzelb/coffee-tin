const router = require('express').Router()
const { forceLogin, authenticate } = require('../../utils/auth')
const stripe = require('stripe')(
    'sk_test_51JPeAoBu0BpzrnK9JuyIKvV53ZCCOhJpCgZqqYVKG3jzgYeRQsF5SvxzIxNmDP5gGouCuRhLR1lfDYlS09B4u1AX008dqflHxY'
)

router.post('/create-checkout-session', forceLogin, async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    // TODO: replace this with the `price` of the product you want to sell
                    price: 'price_1JSjmMBu0BpzrnK9QPVF3htD',
                    quantity: 1,
                },
            ],
            payment_method_types: ['card'],
            mode: 'payment',
            success_url: `https://coffee-tin.herokuapp.com/thankyou`,
            cancel_url: `https://coffee-tin.herokuapp.com/`,
        })

        res.redirect(303, session.url)
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router
