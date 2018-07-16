const pizzaOrders = require('./pizza-orders/pizza-orders.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(pizzaOrders);
};
