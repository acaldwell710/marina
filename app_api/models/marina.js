const mongoose = require('mongoose');
const boatSlipSchema = new mongoose.Schema({
    code: {type: String, required: false, index: true},
    slipNumber: {type: Number, required: false, index: true},
    vacant: {type: Boolean, required: false, index: true},
    vesselName: {type: String, required: false, index: true}
});

mongoose.model('boatslips', boatSlipSchema);
