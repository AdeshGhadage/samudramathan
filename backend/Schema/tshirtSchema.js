const moongoose = require('mongoose');
const tshirtSchema = new moongoose.Schema({
    name: String,
    email: String,
    contact: String,
    college: String,
    smId : String,
    size: String,
    orderId: String,
    paymentId: String,
    created_at: { type: Date, default: Date.now },
});
module.exports = moongoose.model('Tshirt', tshirtSchema);