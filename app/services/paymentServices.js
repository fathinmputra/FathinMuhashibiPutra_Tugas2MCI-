const paymentRepository = require ('../repositories/paymentRepository');

const getAllPayment = async () => {
    try{
        const payments = await paymentRepository.getAllPayment();
        return payments;  
    }
    catch(err){
        return err;
    }
}

const createPayment = async (bank_name, account_name, payment_proof, booking_id) => {
    try{
        const payment = await paymentRepository.createPayment(bank_name, account_name, payment_proof, booking_id);
        return payment;
    }
    catch(err){
        return err;
    }
}

const deletePayment = async (id) => {
    try{
        const payment = await paymentRepository.deletePayment(id);
        return payment;
    }
    catch(err){
        return err;
    }
}

const updatePayment = async (id, bank_name, account_name, payment_proof, booking_id) => {  
    try{
        const payment = await paymentRepository.updatePayment(id, bank_name, account_name, payment_proof, booking_id);
        return payment;
    }
    catch(err){
        return err;
    }
}


module.exports = {  
    getAllPayment,
    createPayment,
    deletePayment,
    updatePayment
}

