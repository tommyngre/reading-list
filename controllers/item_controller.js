let express = require('express');
//let item = require('../models/item.js');
let orm = require('../config/orm.js');


//create the router and export

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/api/all", function(req, res) {

    orm.all(function(data) {
      res.json(data);
    });

  });

  app.post("/list", function(req, res) {

    console.log(req.body);

    orm.add(
      [item_name,is_complete],
      [req.body.itemName,req.body.isComplete],
      function(result){
        res.json(result);
      });

  });

};