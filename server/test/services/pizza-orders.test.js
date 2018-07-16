const assert = require('assert');
const app = require('../../src/app');

describe('\'pizza-orders\' service', () => {
  it('registered the service', () => {
    const service = app.service('pizza-orders');

    assert.ok(service, 'Registered the service');
  });
});
