// Initializes the `pizza-orders` service on path `/pizza-orders`
const createService = require('feathers-nedb');
const createModel = require('../../models/pizza-orders.model');
const hooks = require('./pizza-orders.hooks');
const filters = require('./pizza-orders.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'pizza-orders',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/pizza-orders', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('pizza-orders');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
