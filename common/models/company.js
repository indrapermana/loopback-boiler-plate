'use strict';

module.exports = function(Company) {
    Company.greet = function(msg, cb){
        cb(null, msg);
    }

    Company.listCompanies = function(cb) {
        Company.find()
            .then(companies => {
                cb(null, companies);
            })
            .catch(err => {
                cb(err);
            });
    }

    /**
     * say hai
     * @param {string} msg message for greeting
     * @param {Function(Error, string)} callback
     */

    Company.myGreet = function(msg, callback) {
        // TODO
        callback(null, msg);
    };

    Company.remoteMethod('greet', {
        accepts : {
            arg: 'msg',
            type: 'string'
        },
        returns : {
            arg: 'greeting',
            type: 'string'
        },
        http : {
            verb : 'get'
        }
    });
};
