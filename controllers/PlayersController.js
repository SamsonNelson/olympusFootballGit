var Player = require('../models/Player');

module.exports = {

  create: function(req, res) {
    console.log("hit" + req.body)
    Player.create(req.body, function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  },

  read: function(req, res) {
      Player.find().exec(function(err, result) {
        if (err) return res.status(500).send(err);
        res.json(result);
      });
  },

  show: function(req, res) {
    Player.findById(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  },

  update: function(req, res) {
    Player.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  },

  destroy: function(req, res) {
    Player.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  }

};
