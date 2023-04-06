const router = require('express').Router();
const ticketController = require('../controllers/ticketController');

router.get('/', ticketController.getAllTicket);

router.post('/create', ticketController.createTicket);

router.delete('/:id', ticketController.deleteTicket);

router.put('/:id', ticketController.updateTicket);


module.exports = router;