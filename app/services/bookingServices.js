const bookingRepository = require ('../repositories/bookingRepository');

const getAllBooking = async () => {
    try{
        const bookings = await bookingRepository.getAllBooking();
        return bookings;  
    }
    catch(err){
        return err;
    }
}

const createBooking = async (name, gender, email, id_card, phone_number, seat_number, activate_status, user_id) => {
    try{
        const booking = await bookingRepository.createBooking(name, gender, email, id_card, phone_number, seat_number, activate_status, user_id);
        return booking;
    }
    catch(err){
        return err;
    }
}

const deleteBooking = async (id) => {
    try{
        const booking = await bookingRepository.deleteBooking(id);
        return booking;
    }
    catch(err){
        return err;
    }
}

const updateBooking = async (name, gender, email, id_card, phone_number, seat_number, activate_status, user_id) => {  
    try{
        const booking = await bookingRepository.updateBooking(id, name, gender, email, id_card, phone_number, seat_number, activate_status, user_id);
        return booking;
    }
    catch(err){
        return err;
    }
}


module.exports = {  
    getAllBooking,
    createBooking,
    deleteBooking,
    updateBooking
}

