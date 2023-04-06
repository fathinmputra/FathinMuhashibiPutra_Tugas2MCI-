const paymentServices = require('../services/paymentServices');

const getAllPayment = async (req, res) => {
    paymentServices.getAllPayment()
    .then((payments) => {
        if(!payments){
            // set content type
            res.status(404).send({
                status : 'error',
                message : 'Data payment tidak ditemukan',
                data : {}
        });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data payment berhasil ditemukan',
                data : payments    
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

const createPayment= async(req, res) => {
    try {
        const {bank_name, account_name, payment_proof, booking_id} = req.body;
        await paymentServices.createPayment(bank_name, account_name, payment_proof, booking_id);
        res.status(201).send({
            status : 'success',
            message : 'Data payment berhasil ditambahkan',
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

const deletePayment = async (req, res) => {
    try {
        const {id} = req.params;
        await paymentServices.deletePayment(id);
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

const updatePayment = async (req, res) => {
    try {
        const {id} = req.params;
        const {bank_name, account_name, payment_proof, booking_id} = req.body;
        await paymentServices.updatePayment(id, bank_name, account_name, payment_proof, booking_id);
        res.status(200).send({
            status : 'success',
            message : 'Data payment berhasil diupdate',
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
    getAllPayment,
    createPayment,
    deletePayment,
    updatePayment
}
