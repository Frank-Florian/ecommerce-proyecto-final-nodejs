const userRoutes = require("./users.routes");
const productRoute = require("./products.routes");
const orderRoute = require('./orders.routes');
const productInCarRouter = require('./productInCar.routes');
const productInOrderRouter = require('./productInOrder.routes')
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('../swagger.json');

// recibe como parametro una instancia de express
const apiRoutes = (app) => {
  app.use(userRoutes);
  app.use(productRoute);
  app.use(orderRoute);
  app.use(productInCarRouter);
  app.use(productInOrderRouter);
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

  // TODO una ruta para las categorias
};

module.exports = apiRoutes;
