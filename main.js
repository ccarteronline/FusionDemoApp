var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose	= require('mongoose');
var http = require('http').Server(app);
//var _ = require('lodash');
var router = express.Router();
var port = (process.env.PORT || 7803);
var dbUrl = 'mongodb://localhost:27017/fusion';
var JsonModel = require('./server/models/jsonModel');
var Entry = new JsonModel();

mongoose.connect(dbUrl);

// Use body parser for json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', router);

//Load the application files that are in the public directory
app.use(express.static(__dirname + '/public'));

//So that bower components can be loaded in from the nested "public" directory
app.use('/bower_components', express.static(__dirname + '/bower_components'));

router.post('/sendToDB', function (req, res) {
    var data = req.body;
    if (!data || Object.keys(data).length === 0) {
        res.status(400).send({
            message: 'You must provide a valid JSON structure'
        });
    } else {
        Entry.authors = data.authors;
        Entry.teachers = data.teachers;
        Entry.save(function (err) {
            if (err) {
                res.status(500).send(err);
            } else {
                console.log('Added an entry');
                res.json({ message: 'Successfully added json entry to DB' });
            }
        });
    }
});

router.get('/findEntries', function (req, res) {

    mongoose.model('Entry').find({}, function (err, data) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(data);
        }
    });
});

router.delete('/dropDatabase', function (req, res) {
	mongoose.connect(dbUrl, function (){
		//Drop the DB
		mongoose.connection.db.dropDatabase();
		res.json({ message: 'DBs were dropped' });
	});
});


http.listen(port, function(){
    console.log('listening on: ' + port);
});
