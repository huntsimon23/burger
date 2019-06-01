// * In `models`, make a `burger.js` file.

//     * Inside `burger.js`, import `orm.js` into `burger.js`
var orm = require("../config/orm.js");
//     * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
  
    insertOne: function(columns, values, cb) {
      orm.insertOne("burgers", columns, values, function(res) {
        cb(res);
      });
    },
  
    updateOne: function(colName, newVal, condition, cb) {
      orm.updateOne("burgers", colName, newVal, condition, function(res) {
        cb(res);
      });
    }
  };

  module.exports = burger;
//     * Export at the end of the `burger.js` file.
