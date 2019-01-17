module.exports.add = (a, b) => a + b;

module.exports.multipy = (a, b) => {
    return a * b;
}

module.exports.divsion = (a, b) => {
    return a / b
}

module.exports.square = (a) => a * a;

module.exports.setName = (user, fullName) => {
    var names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
}

// async function
module.exports.addAsync = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 1000);
};

module.exports.squareAsync = (a, callback) => {
    setTimeout(() => {
        callback(a * a);
    }, 1000);
}; 