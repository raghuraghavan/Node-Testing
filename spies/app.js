const db = require('./db');

module.exports.handleSignup = (email, password) => {
    // check in email already exist
    //save it to database
    db.saveUser({ email, password });
    // sent an welcome message
}