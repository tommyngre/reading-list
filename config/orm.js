let connection = require('./connection.js')

let orm = {
  all: function (cb) {
    connection.query("select * from list", function (err, data) {
      if (err) throw err;

      // test if workin
      // data.forEach(row => {
      //   console.log(row.item_name);
      // });

      cb(data);
    });
  },
  add: function (cols, vals, cb) {

    //let colQMarks = colQMarks();
    let valQMarks = valQMarks()

    let query = "insert into list ";
    query += "(" + cols.toString() + ") values";
    query += "(" + valQMarks + ");"

    console.log(query);

    // connection.query(query, function (err, data) {
    //   if (err) throw err;

    //   cb(data);
    // });
  },
  update: function (cols, vals, cb) {
    let query = '';

    connection.query(query, function (err, data) {
      if (err) throw err;

      cb(data);
    });

  }
}

function valQMarks(vals) {
  let str = '';

  for (let i=0; i<vals.length; i++) {
    str += "?";
  }

  return str;
}

function colQMarks(cols) {
  let str = '';

  cols.forEach(col => function () {
    str += "??,";
  });

  str = str.substring(0, str.length);
  console.log(str);
  return str;
};

module.exports = orm;