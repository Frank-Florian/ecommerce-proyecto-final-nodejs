const { Op } = require("sequelize");
const ProductInCar = require("../models/productInCar.model");

const createProductInCar = async (dataProductInCar) => {
  const productInCar = await ProductInCar.create(dataProductInCar);
  return productInCar;
}

const updateTotal = async (price, productId) => {
  const productInCar = await ProductInCar.increment({ price: price }, {
    where: { productId }
  })
  return productInCar;
}

const getOneProduct = async (productId) => {
  const product = await ProductInCar.findOne({
    where: { productId }
  });
  return product;
}

const updateQantity = async (productId) => {
  const product = await ProductInCar.increment({
    quantity: 1
  }, { where: { productId } })
  return product;
}

const getProductInCar = async () => {
  const productInCar = await ProductInCar.findAll();
  return productInCar;
}
const pourchaseProduct = async (dataProduct) => {
  const order = await ProductInCar.update({
    status: true
  }, {
    where: { carId: dataProduct.carId }
  })
  return order;
}

const clearProductInCar = async (carId) => {
  const productInCar = await ProductInCar.findAll({
    where: {
      [Op.and]: [{ carId: carId }, { status: false }],
    }
  })
  return productInCar;
}





module.exports = { createProductInCar, updateTotal, getOneProduct, updateQantity, getProductInCar, pourchaseProduct, clearProductInCar }