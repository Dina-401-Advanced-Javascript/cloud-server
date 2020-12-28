'use strict';

const validatorMiddleware = require('../src/middleware/validator');

describe('validator middleware', () => {
  it('allow requests with a name', () => {
    let req = { query: { name: "Test" } };
    let res = {};
    let next = jest.fn(); //built into jest to spy on the next method
    validatorMiddleware(req,res,next);
    expect(next).toHaveBeenCalledWith(); //no parameters
  })

  it('reject requests without a name', () => {
    let req = { query: { } };
    let res = {};
    let next = jest.fn(); //built into jest to spy on the next method
    validatorMiddleware(req,res,next);
    expect(next).toHaveBeenCalledWith('No name provided'); //no parameters
  })
});
