const express = require('express');
const { getAll, served, addRec } = require('../controller/serve');
const router = express.Router();

router.get('/', getAll);
router.post('/:id', addRec);
router.delete('/:id', served);

module.exports = router;