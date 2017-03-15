const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//module.exports = mongoose.connect('mongodb://mdbtodo:27017')
module.exports = mongoose.connect('mongodb://userKH7:g8lr6gbKgg4iXojD@todomongodb:27017/todomdb');
