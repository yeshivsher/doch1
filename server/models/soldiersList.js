const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create geolocation Schema
const SoldierSchema = new Schema({
    name: String,
    personalNumber: Number,
    commanderPN: Number,
    mador: String
});

const Soldier = mongoose.model('soldier', SoldierSchema);

module.exports = Soldier;
