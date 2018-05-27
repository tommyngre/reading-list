let express = require('express');

let item = require('../models/item.js');


//create the router and export

// Routes
// =============================================================
module.exports = function (app) {

  app.get("/", function (req, res) {

    item.all(function (data) {
      let obj = {
        items: data
      };
      console.log(obj);
      res.render("index", obj);
    });

  });

  app.get("/api/list", function (req, res) {

    item.all(function (data) {
      let obj = {
        items: data
      };

      res.json(obj);
    });

  });

  app.post("/api/new", function (req, res) {

    item.add(
      [
        "item_name",
        "is_complete"
      ], [
        req.body.itemName,
        Boolean(req.body.isComplete)
      ],
      function (result) {
        console.log("result "+result);
        res.json({ id: result.insertId });
        console.log("result.insertId "+result.insertId);

      });
  });

  app.put("/api/list/:id", function (req, res) {
    let condition = "id = " + req.params.id;

    item.update({
      is_complete: req.body.isComplete
    }, condition, function (result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  app.delete("/api/list/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    item.delete(condition, function (result) {
      if (result.affectedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

};
