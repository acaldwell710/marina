const express = require('express');
const router = express.Router();
const boatSlipsController = require('../controllers/boatslips');

router
    .route('/boat-slips')
    .get(boatSlipsController.boatSlipsList)
    .post(boatSlipsController.boatSlipsAddSlips);

router
    .route('/boat-slips/:slipnumber/vacate')
    .put(boatSlipsController.boatSlipsUpdate);


module.exports = router;