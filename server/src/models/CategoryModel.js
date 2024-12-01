const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    path: { type: String, required: true},
    name: { type: String, required: true },
    },
    { timestamps: true });

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;