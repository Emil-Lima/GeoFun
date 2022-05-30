const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const appRouter = function (collection) {

    const router = express.Router();

    router.get('/', (request, response) => {
        collection.find()
            .toArray()
            .then(documents => response.json(documents))
    });

    router.post('/', (request, response) => {
        const newUser = request.body;
        collection.insertOne(newUser)
                  .then(result => {
                      response.json(result.ops[0])
                  })
    })

    return router;
};


module.exports = appRouter;



