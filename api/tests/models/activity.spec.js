const { Activities, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Activity model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validaciones', () => {
    beforeEach(() => Activities.sync({ force: false }));
    describe('Model', () => {
      it('should throw an error if difficulty is more than 5', (done) => {
        Activities.create({id:'666',name:"dance", difficulty:"6",duration:2,season:"Winter"})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Activities.create({ name: 'Dance', difficulty:"1",duration:2,season:"Winter"});
      });
    });
  });
});