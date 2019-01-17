const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'page not found.'
    });
});

app.get('/about', (req, res) => {
    res.status(200).send({
        title: 'About Page',
        body: 'this is body content of about page'
    });
});

app.get('/users', (req, res) => {
    res.status(200).send([{
        name: 'raghu',
        age: 41
    }, {
        name: 'raghavan',
        age: 25
    }
    ]);
})

app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});

module.exports.app = app;