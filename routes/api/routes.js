const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const { MongoClient } = require('mongodb');

//Connect to mongoDB
const uri = require('../../config/keys').mongoURI;
const client = new MongoClient(uri);

router.get('/jj', async (req, res) => {
    //res.send('hola ke ase');
    async function main() {
        //https://mongodb.github.io/node-mongodb-native/3.3/api/MongoClient.html

        try {
            // Connect to the MongoDB cluster
            await client.connect();
            console.log('Connected correctly to ATLAS.');

            const db = client.db("sample_airbnb");

            // Make the appropriate DB calls
            await listDatabases(client);

            // Use the collection "listingsAndReviews"
            const col = db.collection("listingsAndReviews");

            // Find one documentc
            const myDoc = await col.findOne();

            // Print to the console
            //console.log(myDoc);
            res.send(myDoc);
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

});


module.exports = router;