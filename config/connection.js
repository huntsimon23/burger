// * Inside the `connection.js` file, setup the code to connect Node to MySQL.
// Set up MySQL connection.
var mysql = require("mysql");
var dotenv = require('dotenv').config()


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.DBPASSWORD,
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
//    * Export the connection.

