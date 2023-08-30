import chai from 'chai';
import supertest from 'supertest';
import app from '../app.js';

const expect = chai.expect;
const request = supertest(app);

describe('User API Endpoints', () => {
  it('GET /users should return a list of users', async () => {
    const response = await request.get('/users');
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');
  });

  it('GET /users/:id should return a specific user', async () => {
    const response = await request.get('/users/1');
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('object');
  });

  it('GET /users/:id should return "USER NOT FOUND" for non-existent user', async () => {
    const response = await request.get('/users/999');
    expect(response.status).to.equal(200);
    expect(response.body.message).to.equal('User Not Found');
  });

  it('POST /users should create a new user', async () => {
    const newUser = { name: 'Abdallh Ibrahim', email: 'abdallah@gmail.com' };
    const response = await request.post('/users').send(newUser);
    expect(response.status).to.equal(201);
    expect(response.text).to.equal('User Added successfully');
  });

});
