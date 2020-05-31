const express = require('express');
const index = require('./routes/api/routes');
//const fetch = require('node-fetch');
const { MongoClient } = require('mongodb');

const app = express();
app.use(express.json());
//app.use(express.static('/client/public'));
//app.listen(3000);

const port = process.env.port || 5000;
app.listen(port, () => { console.log(`Server started on port ${port}`) });

//Connect to mongoDB
const uri = require('./config/keys').mongoURI;
const client = new MongoClient(uri);

//Use routes
app.use('/', index);

module.exports = client;