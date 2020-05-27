const express = require('express');
const index = require('./routes/api/routes');
//const fetch = require('node-fetch');
const { MongoClient } = require('mongodb');

const app = express();
app.use(express.json());
//app.use(express.static(''));

//Use routes
app.use('/', index);

const port = process.env.port || 5000;
app.listen(port, () => { console.log(`Server started on port ${port}`) });

//Connect to mongoDB
const uri = require('./config/keys').mongoURI;

async function main() {
    //https://mongodb.github.io/node-mongodb-native/3.3/api/MongoClient.html
    const client = new MongoClient(uri);
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log('Connected correctly to ATLAS.');

        const db = client.db("sample_airbnb");

        // Make the appropriate DB calls
        await listDatabases(client);

        // Use the collection "listingsAndReviews"
        const col = db.collection("listingsAndReviews");

        // Find one document
        const myDoc = await col.findOne();

        // Print to the console
        //console.log(myDoc);

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
