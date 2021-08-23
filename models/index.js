const User = require('./User')
const Project = require('./Project')
const Reward = require('./Reward')

User.hasMany(Project, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
})

Project.belongsTo(User, {
    foreignKey: 'user_id',
})

Project.hasMany(Reward, {
    foreignKey: 'project_id',
    onDelete: 'CASCADE',
})

Reward.belongsTo(Project, {
    foreignKey: 'project_id',
})

module.exports = { User, Project, Reward }
