const { User } = require('../models')

const authenticate = async (req, res, next) => {
    if (req.session.logged_in) {
        const user = await User.findByPk(req.session.user_id, {
            attributes: {
                exclude: ['password'],
            },
        })

        req.user = user.get({ plain: true })

        return next()
    }

    // If the user is not logged in, redirect the request to the login route
    res.redirect('/login')

    return next()
}

module.exports = authenticate
