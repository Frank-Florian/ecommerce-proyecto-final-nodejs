const OrderServices = require("../services/orders.services");
const ProductInCarServices = require("../services/productInCar.services")
const CarsServices = require("../services/cars.services");
const {sendPurchaseOrderMail} = require('../utils/sendMails');
const ProductInOrderServices = require("../services/productInOrder.services");


const createOrderController = async (req, res, next) => {
  try {
    const {userId,totalPrice } = req.body;

    await OrderServices.createOrderService({userId,totalPrice});
   
    res.status(201).send();
  } catch (error) {
    next(error)
  }
};

const completedOrder = async (req, res, next) => {
  try {
    const {id} = req.params;
    const {carId, email} = req.body;
    await OrderServices.updateStatusService(id);
    res.status(201).send();
    await ProductInCarServices.clearProductInCarServices({carId});
    await CarsServices.updateTotalPrice(0, carId);
    const detailsProduct = await ProductInOrderServices.getProductDetailsServices(id);
   sendPurchaseOrderMail(email, {detailsProduct});
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createOrderController,
  completedOrder
}