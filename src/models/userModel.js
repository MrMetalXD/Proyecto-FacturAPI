const mongoose = require('mongoose');

userSchema = new mongoose.Schema({
    fullName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    address: {type: String, required: true},
    phone: {type: String, required: true},
    registrationDate: {type: Date, default: Date.now},
    userType: {type: String, required: true},
    preferredPayMethod: {type: String, enum: ['Tarjeta', 'Paypal'] ,required: true},
    facturapiid: {type: String, required: true}
});

module.exports = mongoose.model('User', userSchema)