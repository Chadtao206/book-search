// Require the models directory to access the Book schema
const db = require("../models");

// Set up CRUD methods to connect with the database
module.exports = {
    search: function(req, res) {
      db.Book
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.json(err));
    },
    findById: function(req, res) {
      console.log(req.params.id)
      db.Book
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.json(err));
    },
    create: function(req, res) {
      db.Book
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.json(err));
    },
    update: function(req, res) {
      db.Book
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.json(err));
    },
    delete: function(req, res) {
      db.Book
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.json(err));
    }
  };