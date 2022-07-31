const express = require('express');
const router = express.Router();
const controller = require('../controllers/main');

//homepage
router.get('/', controller.boatSlipsList);

module.exports = router;