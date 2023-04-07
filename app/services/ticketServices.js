const ticketRepository = require ('../repositories/ticketRepository');

const getAllTicket = async () => {
    try{
        const tickets = await ticketRepository.getAllTicket();
        return tickets;  
    }
    catch(err){
        return err;
    }
}

const createTicket = async (seat_number, booking_id) => {
    try{
        const ticket = await ticketRepository.createTicket(seat_number, booking_id);
        return ticket;
    }
    catch(err){
        return err;
    }
}

const deleteTicket = async (id) => {
    try{
        const ticket = await ticketRepository.deleteTicket(id);
        return ticket;
    }
    catch(err){
        return err;
    }
}

const updateTicket = async (id, seat_number, booking_id) => {  
    try{
        const ticket = await ticketRepository.updateTicket(id, seat_number, booking_id);
        return ticket;
    }
    catch(err){
        return err;
    }
}

module.exports = {  
    getAllTicket,
    createTicket,
    deleteTicket,
    updateTicket
}

