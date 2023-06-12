const { getOneOrder } = require("../repositories/orders.repositories");
const { createProductInOrder, getOneProductInOrder, updateTotalInOrder, updateQantityInOrder, getOrderDetailsByOrderId } = require("../repositories/productInOrder.repository")


class ProductInOrderServices {
  static async createProductInOrderService(dataProductInCar) {
    try {
      const product = await getOneProductInOrder(dataProductInCar);
      await updateTotalInOrder(dataProductInCar.price, dataProductInCar.orderId);
      if (!product ) {
        return await createProductInOrder(dataProductInCar);
      }
      return await updateQantityInOrder(dataProductInCar.productId,dataProductInCar.orderId);
    } catch (error) {
      throw error
    }
  }

  
  static async getProductDetailsServices(orderId) {
    try {
      return await getOrderDetailsByOrderId(orderId);
    } catch (error) {
      throw error;
    }

  }
}
module.exports = ProductInOrderServices