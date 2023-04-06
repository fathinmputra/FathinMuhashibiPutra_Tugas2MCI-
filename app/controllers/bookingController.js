const bookingServices = require('../services/bookingServices');

const getAllBooking = async (req, res) => {
    bookingServices.getAllBooking()
    .then((bookings) => {
        if(!bookings){
            // set content type
            res.status(404).send({
                status : 'error',
                message : 'Data booking tidak ditemukan',
                data : {}
        });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data booking berhasil ditemukan',
                data : bookings    
            });
        }
    })
    .catch((err) => {
        res.status(500).send({
            status : 'error',
            message : err.message,
            data : {}
        });
    })
}

const createBooking= async(req, res) => {
    try {
        const {name, gender, email, id_card, phone_number, seat_number, activate_status, user_id} = req.body;
        await bookingServices.createBooking(name, gender, email, id_card, phone_number, seat_number, activate_status, user_id);
        res.status(201).send({
            status : 'success',
            message : 'Data booking berhasil ditambahkan',
            data : ''
        });
    }
    catch(err) {
        res.status(500).send({
            status : 'error',
            message : err.message,
            data : {}
        });
    }
}

const deleteBooking = async (req, res) => {
    try {
        const {id} = req.params;
        await bookingrService.deleteBooking(id);
        res.status(200).send({
            status : 'success',
        });
    }
    catch(err) {
        res.status(500).send({
            status : 'error',
            message : err.message,
            data : {}
        }); 
    }
}

const updateBooking = async (req, res) => {
    try {
        const {id} = req.params;
        const {name, gender, email, id_card, phone_number, seat_number, activate_status, user_id} = req.body;
        await userService.updateUser(id, name, gender, email, id_card, phone_number, seat_number, activate_status, user_id);
        res.status(200).send({
            status : 'success',
            message : 'Data booking berhasil diupdate',
            data : ''
        });
    }
    catch(err) {
        res.status(500).send({
            status : 'error',
            message : err.message,
            data : {}
        });
    }
}

module.exports = { 
    getAllBooking,
    createBooking,
    deleteBooking,
    updateBooking
}
