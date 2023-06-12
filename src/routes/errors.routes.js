const logError = require("../middlewares/logError.middleware");
const ormErroHandler = require("../middlewares/ormErrorHandler.middleware");
const errorHandler = require("../middlewares/errorHandler.middleware");

const errorRoutes = (app) => {
  app.use(logError); // mostramos el error
  app.use(ormErroHandler); // si es error del orm actuamos si no mandamos al general
  app.use(errorHandler);

  // manejar el 404
  app.use("*", (req, res) => {
    res.status(404).json({
      message: "Pronto tendremos esta ruta disponible para ti.",
    });
  });
};

module.exports = errorRoutes;
