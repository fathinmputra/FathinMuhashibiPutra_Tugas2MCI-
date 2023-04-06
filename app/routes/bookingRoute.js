const router = require('express').Router();
const bookingController = require('../controllers/bookingController');

router.get('/', bookingController.getAllBooking);

router.post('/create', bookingController.createBooking);

router.delete('/:id', bookingController.deleteBooking);

router.put('/:id', bookingController.updateBooking);


module.exports = router;