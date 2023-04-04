const {user} = require('../models')

const getAllUser = () => {
    return user.findAll()
}

module.exports = {
    getAllUser
}