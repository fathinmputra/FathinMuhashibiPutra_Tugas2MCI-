const {booking} = require('../models')

const getAllBooking = () => {
    return booking.findAll()
}

const createBooking = (name, gender, email, id_card, phone_number, seat_number, activate_status, user_id) => {
    return booking.create({
        name, 
        gender, 
        email, 
        id_card, 
        phone_number, 
        seat_number, 
        activate_status, 
        user_id
    })
}

const deleteBooking = (id) => {
    return booking.destroy({
        where: {
            id
        }
    })
}


const updateBooking = (id, name, gender, email, id_card, phone_number, seat_number, activate_status, user_id) => {
    return booking.update({
        name, 
        gender, 
        email, 
        id_card, 
        phone_number, 
        seat_number,
        activate_status, 
        user_id
    }, {
        where: {
            id
        }
    })
}

module.exports = {
    getAllBooking,
    createBooking,
    deleteBooking,
    updateBooking
}