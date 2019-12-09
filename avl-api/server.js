const express = require('express');
const cors = require('cors');
const path = require('path');


const bodyParser = require('body-parser');

// create express app
const app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
// mongoose.connect(dbConfig.url, {
// 	useNewUrlParser: true
// }).then(() => {
//     console.log("Successfully connected to the database");    
// }).catch(err => {
//     console.log('Could not connect to the database. Exiting now...', err);
//     process.exit();
// });

// define a simple route
app.get('/check', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

app.use(express.static(path.join(__dirname, 'build')))
app.get('/', function (req, res) {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});

//   res.sendFile(path.resolve(__dirname, 'build/index.html'));
  // res.end();
});

// Default every route except the above to serve the index.html
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '/build/index.html'));
// });

require('./app/routes/note.routes.js')(app);


// listen for requests
app.listen(3100, '0.0.0.0', () => {
    console.log("Server is listening on port 3100");
});