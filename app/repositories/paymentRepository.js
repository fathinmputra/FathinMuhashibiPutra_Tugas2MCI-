const {payment} = require('../models')

const getAllPayment = () => {
    return payment.findAll()
}

const createPayment = (bank_name, account_name, payment_proof, booking_id) => {
    return payment.create({
        bank_name, 
        account_name, 
        payment_proof,
        booking_id
    })
}

const deletePayment = (id) => {
    return payment.destroy({
        where: {
            id
        }
    })
}


const updatePayment= (id, bank_name, account_name, payment_proof, booking_id) => {
    return payment.update({ 
        bank_name, 
        account_name, 
        payment_proof,
        booking_id
    }, {
        where: {
            id
        }
    })
}

module.exports = {
    getAllPayment,
    createPayment,
    deletePayment,
    updatePayment
}