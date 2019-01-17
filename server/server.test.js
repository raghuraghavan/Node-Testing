const request = require('supertest');
const expected = require('expect');
var app = require('./server').app;

// we need to call the end () to tell supertest that the wait has been called. same as expect library.
it('should return hello world response', (waitTillDone) => {
    request(app)
        .get('/')
        //.expect(404)  // this expect is part of the supertest library.
        .expect((res) => {
            //console.log(JSON.stringify(res));
            expected(res.status).toBe(404)
            // we have included expect library through expected constant, this is just to differicate.
            expected(res.body).toInclude({
                error: 'page not found.'
            });
        })
        .end(waitTillDone);
});

it('should test about page response', (waitTillDone) => {
    request(app)
        .get('/about')
        .expect(200)
        .expect((res) => {
            expected(res.status).toBe(200)
            expected(res.body).toInclude({
                title: 'About Page'
            });
        })
        .end(waitTillDone); // if the end is not specifed we will get an Error: Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves.
});

it('should test user response', (waitTillDone) => {
    request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
            expected(res.status).toBe(200)
            expected(res.body).toInclude({
                name: 'raghavan',
                age: 25
            });
        })
        .end(waitTillDone); // if the end is not specifed we will get an Error: Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves.
});