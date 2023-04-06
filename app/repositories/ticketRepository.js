const {ticket} = require('../models')

const getAllTicket = () => {
    return ticket.findAll()
}

const createTicket = (seat_number, booking_id) => {
    return ticket.create({
        seat_number, 
        booking_id
    })
}

const deleteTicket = (id) => {
    return ticket.destroy({
        where: {
            id
        }
    })
}


const updateTicket = (seat_number, booking_id) => {
    return ticket.update({ 
        seat_number, 
        booking_id
    }, {
        where: {
            id
        }
    })
}

module.exports = {
    getAllTicket,
    createTicket,
    deleteTicket,
    updateTicket
}