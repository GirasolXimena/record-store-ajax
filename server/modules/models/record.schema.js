const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const recordSchema = new Schema({
    artist: {type: String, required: true, unique: true},
    album: {type: String, required: true, unique: true},
    year: {type: Date, required: true},
    genreList: {type: String}
});

module.exports = mongoose.model ('record', recordSchema);