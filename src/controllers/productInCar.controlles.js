const ProductInCarServices = require("../services/productInCar.services");
const CarsServices = require("../services/cars.services")


const addProductsToCar = async (req, res, next) => {
  try {
    const { carId, productId, quantity, price } = req.body;
    await ProductInCarServices.addNewProducts({
      carId,
      productId,
      price,
      quantity,
    })
    res.status(201).send()
    await CarsServices.updateTotalPrice(price, carId);
  } catch (error) {
    next(error)
  }
};

module.exports = {
  addProductsToCar,
}