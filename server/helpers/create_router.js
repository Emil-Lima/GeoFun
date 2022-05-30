const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const appRouter = function (collection) {

    const router = express.Router();

    router.get('/', (request, response) => {
        collection.find()
            .toArray()
            .then(documents => response.json(documents))
    });

    return router;

};

module.exports = appRouter;



