/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Countries, conn } = require('../../src/db.js');


const agent = session(app);
const Country = {
  name: 'Argentina'
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Countries.sync({ force: false })
    .then(() => Countries.findAll(Country)));
  describe('GET /api/countries?name=argentina', () => {
    it('should get 200', () =>
      agent.get('/api/countries?name=argentina').expect(200)
    );
  });
});