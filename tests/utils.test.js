const utils = require('../utils/utils');
const expect = require('expect');

it('should add two numbers', () => {
    var res = utils.add(11, 12);
    /*
    // round about way of doing thinig.. 
    // if (res !== 23) {
    //     throw new Error(`expected 23, but got ${res}`);
    // }
    */
    expect(res)
        .toBe(23)
        .toBeA('number');
});

it('Should multiple two numbers', () => {
    var res = utils.multipy(10, 10);
    expect(res)
        .toBeA('number')
        .toBe(100);

});

it('Should divide two numbers', () => {
    var res = utils.divsion(100, 10);

    expect(res)
        .toBe(10)
        .toBeA('number');
});

it('Should square a number', () => {
    var res = utils.square(10);
    expect(res)
        .toBe(100)
        .toBeA('number');
});

it('expect value to be same', () => {
    // toBe is good for number, string, inorder to compare object we need to use toEqual methods.
    // expect({ name: 'raghu' }).toBe({ name: 'raghu' });
    //expect({ name: 'raghu' }).toEqual({ name: 'raghu' });
    //to check for any specific content, use toInclude method.
    //expect([2, 3, 4]).toInclude(5);  // this will fail as 5 is not in the array.
    //expect([2, 3, 4]).toInclude(4);  // this will pass as 4 is in the array; 
    // we can do the opposite of the above statement by usiing Exclude method.
    //expect([2, 3, 4]).toExclude(5);   // this will pass as 5 is not avaialbe in the array.
    // expect([2, 3, 4]).toExclude(4);   // this will fail as 4 is  avaialbe in the array.
    expect({
        name: 'Raghu',
        age: 41,
        location: 'mountion house'
    }).toInclude({ age: 41 })
});

it('expect first name & second name from the user object', () => {
    var user = {
        firstName: '', lastName: ''
    }
    var result = utils.setName(user, 'Nithya Raghu');
    expect(result)
        .toBeA('object')
        .toEqual({ firstName: 'Nithya', lastName: 'Raghu' })
});

// parameter "waitTillDone" is to tell mocha this is an async operation and has to wait till the 
// execution of the of method, otherwise async methods will be call & test will allways pass.
// note:--> "waitTillDone" -- is an custom name, it can be any thing.
it('it should add two number async', (waitTillDone) => {
    utils.addAsync(4, 3, (sum) => {
        expect(sum).toBeA('number').toBe(7);
        waitTillDone();
    });
});

it('Should square a number Async', (waitTillDone) => {
    utils.squareAsync(10, (sum) => {
        expect(sum)
            .toBeA('number')
            .toBe(100);
        waitTillDone();
    });
});

