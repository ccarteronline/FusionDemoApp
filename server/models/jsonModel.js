var mongoose	= require('mongoose');
var Schema		= mongoose.Schema;

var jsonSchema	= new Schema({
	authors: Array,
	teachers: Array
});

module.exports = mongoose.model('Entry', jsonSchema);
