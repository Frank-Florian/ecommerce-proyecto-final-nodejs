const { Router } = require('express');

const {  addProductsToCar } = require('../controllers/productInCar.controlles');
const { addToCarValidator } = require('../validators/cars.validators');
const authenticate = require("../middlewares/auth.middleware");

const router = Router();

router.post("/productInCar/products", authenticate, addToCarValidator, addProductsToCar);

module.exports = router;

