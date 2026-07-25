// badCode.js
// Problem: Tightly coupled, deeply nested, poor error handling, unreadable variables.

const db = require('db');
const email = require('emailSender');

function processOrder(uId, iId, qty, cb) {
    db.query('SELECT * FROM users WHERE id = ' + uId, function(err, user) {
        if (err) {
            cb(err);
        } else {
            if (user.isActive) {
                db.query('SELECT * FROM inventory WHERE itemId = ' + iId, function(err, item) {
                    if (err) {
                        cb(err);
                    } else {
                        if (item.stock >= qty) {
                            let newStock = item.stock - qty;
                            db.query('UPDATE inventory SET stock = ' + newStock + ' WHERE itemId = ' + iId, function(err) {
                                if (err) {
                                    cb(err);
                                } else {
                                    db.query('INSERT INTO orders (userId, itemId, qty) VALUES (' + uId + ',' + iId + ',' + qty + ')', function(err, order) {
                                        if (err) {
                                            cb(err);
                                        } else {
                                            email.send(user.email, 'Order placed!', function(err) {
                                                if (err) console.log(err); // Fails silently
                                                cb(null, order);
                                            });
                                        }
                                    });
                                }
                            });
                        } else {
                            cb(new Error("No stock"));
                        }
                    }
                });
            } else {
                cb(new Error("User not active"));
            }
        }
    });
}