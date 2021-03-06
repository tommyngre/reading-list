let orm = require('../config/orm.js');

var item = {
  all: function(cb) {
    orm.all("list", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  add: function(cols, vals, cb) {
    orm.add("list", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(colVals, condition, cb) {
    orm.update("list", colVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("list", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = item;