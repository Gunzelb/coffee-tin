const router = require('express').Router()
const { Project, Reward } = require('../../models')
const { authenticate } = require('../../utils/auth')

router.post('/', authenticate, async (req, res) => {
    try {
        const newProject = await Project.create({
            ...req.body.project,
            user_id: req.session.user_id,
        })

        const newRewards = await Reward.create({
            ...req.body.rewards,
            project_id: newProject.id,
        })

        res.status(200).json({ newProject, newRewards })
    } catch (err) {
        res.status(400).json(err)
    }
})

router.put('/:id', authenticate, async (req, res) => {
    try {
        const updatedProject = await Project.update(
            {
                name: req.body.project.name,
                details: req.body.project.details,
                goal: req.body.project.goal,
                deadline: req.body.project.deadline,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        )
        console.log(updatedProject);

        const updatedRewards = await Reward.update(
            {
                tier: req.body.rewards.tier,
                description: req.body.rewards.description,
            },
            {
                where: {
                    project_id: req.params.id,
                },
            }
        )
        res.status(200).json({ updatedProject, updatedRewards })
    } catch (err) {
        res.status(400).json(err)
    }
})

router.delete('/:id', authenticate, async (req, res) => {
    try {
        const projectData = await Project.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        })

        if (!projectData) {
            res.status(404).json({ message: 'No project found with this id!' })
            return
        }

        res.status(200).json(projectData)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router
