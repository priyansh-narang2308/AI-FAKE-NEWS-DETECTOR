const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    text: { type: String, required: true },
    url: { type: String },
    trustScore: { type: Number, required: true },
    analysis: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('News', newsSchema);