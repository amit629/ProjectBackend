const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
    txnid: {
        type: String,
    },
    amount: {
        type:Number,
    },
    productInfo: {
        type:String  
    },
    orderedProducts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Product'
        }
    ]
}, { timestamps: true });


const Order = mongoose.model('Order', orderSchema);
1
module.exports = Order;

