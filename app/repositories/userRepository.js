const {user} = require('../models')

const getAllUser = () => {
    return user.findAll()
}

const createUser = (user_name, email, password) => {
    return user.create({
        user_name,
        email,
        password
    })
}

const deleteUser = (id) => {
    return user.destroy({
        where: {
            id
        }
    })
}


const updateUser = (id, user_name, email, password) => {
    return user.update({ // user.update() is a sequelize method that updates the data in the database based on the id
        user_name,
        email,
        password
    }, {
        where: {
            id
        }
    })
}

module.exports = {
    getAllUser,
    createUser,
    deleteUser,
    updateUser
}