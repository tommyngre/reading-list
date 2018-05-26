let connection = require('./connection.js')

function valQMarks(vals) {
  console.log('valqmarks')
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
    let valQMarks = valQMarks(vals);
    console.log('valqmarks' + valQMarks);
    let query = "insert into list ";
    query += "(" + cols.toString() + ") values";
    query += "(" + valQMarks + ");"

    console.log(query);

    connection.query(query, function (err, data) {
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