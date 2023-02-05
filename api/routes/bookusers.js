const express = require('express');
const { addBooking, removeBookingusers, getUsers } = require('../controller/booked');

const router = express.Router();

router.get('/', getUsers)
router.post('/', addBooking);
router.delete('/:id', removeBookingusers);


module.exports = router;