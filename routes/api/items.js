const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const { MongoClient } = require('mongodb');
//Item model

const Item = require('../../models/item');

// @router get api/items
//@desc Get all items
//@access Public
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => {
            res.json(items);
        });
});

// @router POST api/items
//@desc Create a post
/*@access Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save().then(item => res.json(item));
});*/



module.exports = router;