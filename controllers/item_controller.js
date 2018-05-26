let express = require('express');
let orm = require('../config/orm.js');


//create the router and export

// Routes
// =============================================================
module.exports = function (app) {

  app.get("/", function (req, res) {

    orm.all(function (data) {
      let obj = {
        items: data
      };
      console.log(obj);
      res.render("index", obj);
    });

  });

  app.get("/api/list", function (req, res) {

    orm.all(function (data) {
      let obj = {
        items: data
      };
      console.log(obj);
      res.json(obj);
    });

  });

  app.post("/api/new", function (req, res) {

    console.log("posted " + req.body);

    orm.add([
      "item_name", "is_complete"
    ],[
      req.body.itemName, req.body.isComplete
    ],function (result) {
        res.end();
      });

  });

};