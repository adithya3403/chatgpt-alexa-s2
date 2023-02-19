const mongoose = require('mongoose');

// Schema
const Data = new mongoose.Schema({
    "studentName": { "type": "String" },
    "topic": { "type": "String" },
    "question": { "type": "String" },
    "studentAns": { "type": "String" },
    "chatGPTAns": { "type": "String" },
    "rating": { "type": "Number" }
});

// Model
const DataModel = mongoose.model('Data', Data);
module.exports = DataModel;