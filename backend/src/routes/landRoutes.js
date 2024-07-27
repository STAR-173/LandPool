const express = require('express');
const router = express.Router();
const { landVerify } = require('../controllers/landController');

router.get('/landVerify', landVerify);

module.exports = router;