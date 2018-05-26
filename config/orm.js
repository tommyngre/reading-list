let connection = require('./connection.js')

function colQMarks(cols) {
  let str = '';

  cols.forEach(col => function () {
    str += "??,";
  });

  str = str.substring(0, str.length);
  console.log(str);
  return str;
};

function questionMarks(vals) {
  let valsAry = vals.map(x => "?").join(",");
  console.log(vals);
  return valsAry;
}


let orm = {
  all: function (cb) {

    connection.query("select * from list", function (err, data) {

      if (err) throw err;

      cb(data);
    });
  },

  add: function (cols, vals, cb) {

    let valQuestionMarks = questionMarks(vals);

    let query = "insert into list ";
    query += "(" + cols + ") values ";
    query += "(" + valQuestionMarks + ");"

    console.log(query);

    connection.query(query, vals, function (err, data) {
      if (err) throw err;

      cb(data);
    });
  },
  update: function (cols, vals, cb) {
    let query = 'update list set item_name=? where id=?';

    console.log(query);

    connection.query(query, [item.name, item.id], function (err, data) {
      if (err) throw err;

      cb(data);
    });

  }
}

module.exports = orm;