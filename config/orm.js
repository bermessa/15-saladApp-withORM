var connection = require("../config/connection.js");

var orm = {

    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);

        });
    },

    insertOne: function(table, column, value, cb) {
        var queryString = ("INSERT INTO ?? (??) VALUES (?)");

        connection.query(queryString, [table, column, value], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },


    updateOne: function(tableName, setColumn, setValue, idColumn, idValue, cb) {
        var queryString = "UPDATE ?? SET ??=? WHERE ?? = ?";
        connection.query(queryString, [tableName, setColumn, setValue, idColumn, idValue], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;
