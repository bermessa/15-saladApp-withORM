var orm = require("../config/orm.js");

var salad = {

    select: function(cb) {
        orm.selectAll("salads", function(res) {
            cb(res);
        });
    },

    insert: function(newTopping, cb) {
        orm.insertOne("salads", "topping", newTopping, function(res) {
            cb(res);
        });
    },

    update: function(toppingID, cb) {
        orm.updateOne("salads", "devoured", true, "id", toppingID, function(res) {
            cb(res);
        });
    }
};

module.exports = salad;
