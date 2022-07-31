const req = require('express/lib/request');
const res = require('express/lib/response');
const mongoose = require('mongoose');
const request = require('request');
const BoatSlip = mongoose.model('boatslips');


// GET /boat-slips
const boatSlipsList = async (req, res) => {
    BoatSlip
        .find({})
        .exec((err, boatslips) => {
            if (!boatslips) {
                return res
                    .status(404) //not found
                    .json({ "message": "boat slips not found" });
            } else if (err) {
                return res
                    .status(404) //not found for some other reason
                    .json(err);
            } else {
                return res
                    .status(200) //success
                    .json(boatslips);
            }
        });
};


//POST /boat-slips
const boatSlipsAddSlips = async (req, res) => {
    BoatSlip
        .create({ 
            vesselName: req.body.vesselName,
            slipNumber: req.body.slipNumber,
            vacant: req.body.vacant
        }),
        (err, post) => {
        if (err) {
            return res
                .status(409) //conflict - not available
                .json(err);
        } else {
            return res
                .status(200) //success
                .json(boatslips);
        }
    };     
};



// PUT /boat-slips/:slipnumber/vacate **updating to VACANT**
const boatSlipsUpdate = async (req, res) => {
    BoatSlip
        .FindOneAndUpdate({ 'slipNumber': req.params.slipNumber }, {
            vacant: req.body.vacant,
        }, {new:true})
        .then(boatslip => {
            if (!boatslip) {
                return res
                    .status(409) //conflict - not available
                    .json({ "message": "Boat slip "+ req.params.slipNumber + " is currently vacant" });
            }
            res.send(boatslip);
        }).catch(err => {
            if (err.kind === 'ObjecttId') {
                return res
                    .status(404) // not found -- other reason
                    .json(err);
            }
            return res
                .status(204)
                .json({}) //already vacant
        }); 
};
 


module.exports = {
    boatSlipsList,
    boatSlipsUpdate,
    boatSlipsAddSlips
};