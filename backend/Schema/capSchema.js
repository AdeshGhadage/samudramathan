const moongoose = require('mongoose');
const capSchema = new moongoose.Schema({
    name: { type: String },
    email: { type: String },
    sm_id: { type: String},
    college: { type: String },
    contact: { type: String },
    major: { type: String },
    yos: { type: String },
    sm: { type: String },
    idea: { type: String },
    experience: { type: String },
    whysm: { type: String },
    created_at: { type: Date, default: Date.now },
});
module.exports = moongoose.model('Cap', capSchema);