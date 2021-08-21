const router = require('express').Router()
const { Project, User, Reward } = require('../models')
// const authenticate = require('../utils/auth')

router.get('/', async (req, res) => {
    try {
        const projectInfo = await Project.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        })

        const projects = projectInfo.map((info) => info.get({ plain: true }))
        res.render('home', {
            projects,
            logged_in: req.session.logged_in,
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/project/:id', async (req, res) => {
    try {
        const projectInfo = await Project.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                { model: Reward },
            ],
        })

        const project = projectInfo.get({ plain: true })
        res.json(project)
        // res.render('project', {
        //     ...project,
        //     logged_in: req.session.logged_in,
        // })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/profile/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Project }],
        })

        const user = userData.get({ plain: true })
        res.send(user)
        // res.render('profile', {
        //     ...user,
        //     logged_in: true,
        // })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/profile')
        return
    }

    res.render('login')
})

module.exports = router
