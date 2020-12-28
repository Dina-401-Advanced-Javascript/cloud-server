'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

// I commented out all of the .catches because they were causing JEST to
// think that the test passed even when it failed (despite the console error being logged)!
describe('web server tests', () => {
  it('Should respond with 404 status on an invalid route', () => {
    return mockRequest
      .get('/blah')
      .then(result => {
        expect(result.status).toBe(404);
      })
    //.catch(err => console.error(err));
  })

  it('Should respond with 404 status on bad method', () => {
    return mockRequest
      .put('/blah')
      .then(result => {
        expect(result.status).toBe(404);
      })
    //.catch(err => console.error(err));
  })

  it('Should respond with 500 if no name on query string', () => {
    return mockRequest
      .get('/person')
      .then(result => {
        expect(result.status).toBe(500);
      })
    //.catch(err => console.error(err));
  })

  it('Should respond with 200 if name is given in the query string', () => {
    return mockRequest
      .get('/person?name=dina')
      .then(result => {
        expect(result.status).toBe(200);
      })
    //.catch(err => console.error(err));
  })

  it('Should respond with the correct name given in the query string', () => {
    return mockRequest
      .get('/person?name=dina')
      .then(result => {
        expect(result.body).toEqual({ name: 'dina' });
      })


  })
});
