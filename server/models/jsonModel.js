var mongoose	= require('mongoose');
var Schema		= mongoose.Schema;

var jsonSchema	= new Schema({
	authors: Array,
	teachers: Array
});

var Entry = mongoose.model('Entry', jsonSchema);

module.exports = Entry;
