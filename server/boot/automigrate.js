'use strict';

module.exports = function(app) {
    app.dataSources.mongoproduct.automigrate(['Product', 'company', 'category', 'account'], err => {
        if (err) throw err;
        console.log('Model synced!');
    })
}