const express = require('express');
const mongoose = require('mongoose');
const items = require('./routes/api/items');
const fetch = require('node-fetch');
const { MongoClient } = require('mongodb');
const router = express.Router();

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

async function main() {
    //https://mongodb.github.io/node-mongodb-native/3.3/api/MongoClient.html
    const client = new MongoClient(db);
    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};