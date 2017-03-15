const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//module.exports = mongoose.connect('mongodb://mdbtodo:27017')
module.exports = mongoose.connect('mongodb://felipe:12345@mdbtodo:27017/tododb');
