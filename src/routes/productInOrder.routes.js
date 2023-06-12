const { Router } = require('express');
const { addProductsToOrder } = require('../controllers/productInOrder.controlles');
const { addOrderDetailtValidator } = require('../validators/orders.validators');
const authenticate = require("../middlewares/auth.middleware");

const router = Router();

router.post("/productInOrder/orders", authenticate, addOrderDetailtValidator, addProductsToOrder);

module.exports = router;