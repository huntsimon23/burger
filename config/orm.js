// Import (require) `connection.js` into `orm.js`
var connection = require("../config/connection.js");

// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
//   * `selectAll()`
//   * `insertOne()`
//   * `updateOne()`
var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM" + table + ";";
        connection.query(queryString, function(err, res) {
            if (err) throw err; 
            cb(res);
        });
    },
    insertOne: function()
}

// * Export the ORM object in `module.exports`.