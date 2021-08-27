const router = require('express').Router()
const { Project, User, Reward } = require('../models')
const { forceLogin, authenticate } = require('../utils/auth')

router.get('/', authenticate, async (req, res) => {
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

        res.render('homepage', {
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

        res.render('project', {
            ...project,
            logged_in: req.session.logged_in,
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/project/edit/:id', async (req, res) => {
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
        res.render('edit', {
            ...project,
            logged_in: true,
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/project/delete/:id', async (req, res) => {
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
        res.render('delete', {
            ...project,
            logged_in: true,
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/create', forceLogin, authenticate, async (req, res) => {
    try {
        const userData = await User.findByPk(req.user.id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Project }],
        })

        const user = userData.get({ plain: true })

        res.render('create', {
            ...user,
            logged_in: true,
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/profile', forceLogin, authenticate, async (req, res) => {
    try {
        const userData = await User.findByPk(req.user.id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Project }],
        })

        const user = userData.get({ plain: true })

        res.render('profile', {
            ...user,
            logged_in: true,
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/login', authenticate, (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/profile')
        return
    }

    res.render('login')
})

module.exports = router
