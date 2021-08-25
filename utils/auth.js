const { User } = require('../models')

const authenticate = async (req, res, next) => {
    // If the user is not logged in, redirect the request to the login route
    if (!req.session.logged_in) {
        res.redirect('/login')

        return next()
    }
}

module.exports = authenticate
