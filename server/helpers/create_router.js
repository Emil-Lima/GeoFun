const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const appRouter = function (collection) {

    const router = express.Router();

    // Get all users
    router.get('/', (request, response) => {
        collection.find()
            .toArray()
            .then(documents => response.json(documents))
    });

    // Post one user
    router.post('/', (request, response) => {
        const newUser = request.body;
        collection.insertOne(newUser)
                  .then(result => {
                      response.json(result.ops[0])
                  })
    })

    // Patch one user (add country to savedCountries for a given user)
    router.patch ('/:id', (request, response) => {
        const id = request.params.id
        const newBody = request.body.savedCountries;
        collection.updateOne({_id:ObjectID(id)}, {$set:{newBody}})
                  .then(documents => response.json(documents))

    })

    return router;
};


module.exports = appRouter;



