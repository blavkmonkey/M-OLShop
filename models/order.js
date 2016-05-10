'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new mongoose.Schema({
    orderno: String,
    orderdate: Date,
    username: String,
    shippingaddr: String,
    billingaddr: String,
    shipping: String,
    subtotal: Number,
    total: Number,
    status: String,
    paymenttype: Boolean,
    creditcardno: String,
    created_at: {type: Date, default: Date.now}
});

mongoose.model('Order', orderSchema);