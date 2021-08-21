const sequelize = require('../config/connection')
const { User, Project, Reward } = require('../models')

const userData = require('./fakeUsers.json')
const projectData = require('./fakeProjects.json')
const rewardData = require('./fakeRewards.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: true })

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    })

    for (const project of projectData) {
        await Project.create({
            ...project,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        })
    }

    for (const reward of rewardData) {
        await Reward.create({
            ...reward,
            project_id: Math.random() * (15 - 1) + 1,
        })
    }

    process.exit(0)
}

seedDatabase()
