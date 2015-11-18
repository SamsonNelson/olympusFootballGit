// Definitions and Requires

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');
var router = express.Router();
// var uploadManager = require('./routes/UploadManager')(router);
var AWS = require('aws-sdk'); // AWS
var app = express();

// Middleware

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(session({
  secret: 'footballisawesome',
  resave: false,
  savUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());


// Controllers

var PlayersController = require('./controllers/PlayersController');
var ImageController = require('./controllers/ImageController');

// Models

var Player = require('./models/Player');

// Database

var mongoUri = "mongodb://localhost:27017/olympusFootball";
mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
  console.log("Connected on " + mongoUri);
});

// Port

var port = 9000;

app.listen(port, function(){
  console.log("Olympus is not failing on ", port);
});

// Static

app.use(express.static(__dirname + "/public"));

app.post('/api/newperson', PlayersController.create);
app.get('/api/getpeople', PlayersController.read);

app.get('/images', ImageController.read);
app.post('/images', ImageController.create);
















// end
