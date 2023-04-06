const ticketServices = require('../services/ticketServices');

const getAllTicket = async (req, res) => {
    ticketServices.getAllTicket()
    .then((tickets) => {
        if(!tickets){
            // set content type
            res.status(404).send({
                status : 'error',
                message : 'Data ticket tidak ditemukan',
                data : {}
        });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data ticket berhasil ditemukan',
                data : tickets    
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

const createTicket= async(req, res) => {
    try {
        const {seat_number, booking_id} = req.body;
        await ticketServices.createTicket(seat_number, booking_id);
        res.status(201).send({
            status : 'success',
            message : 'Data ticket berhasil ditambahkan',
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

const deleteTicket = async (req, res) => {
    try {
        const {id} = req.params;
        await ticketServices.deleteTicket(id);
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

const updateTicket = async (req, res) => {
    try {
        const {id} = req.params;
        const {seat_number, booking_id} = req.body;
        await ticketServices.updateTicket(id, seat_number, booking_id);
        res.status(200).send({
            status : 'success',
            message : 'Data ticket berhasil diupdate',
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
    getAllTicket,
    createTicket,
    deleteTicket,
    updateTicket
}
