const express = require('express');
const mongoose = require('mongoose');
const items = require('./routes/api/items');
const fetch = require('node-fetch');

const app = express();
app.use(express.json());

const db = require('./config/keys').mongoURI;

//Connect to mongoDB
mongoose.connect(db).then(() => { console.log('mongoDBConnnected') }).catch(err => {
    console.log(err);
});

//Use routes
app.use('/api/items', items);
const port = process.env.port || 5000;

app.listen(port, () => { console.log(`Server started on port ${port}`) });

