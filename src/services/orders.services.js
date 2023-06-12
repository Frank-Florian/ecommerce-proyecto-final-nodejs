const { getOrderByUser, createOrder, updateStatusOrder, updateTotalPriceOrder } = require("../repositories/orders.repositories");

class OrderServices {
  static async createOrderService(orderData) {
    try {
      
      
      return await createOrder(orderData);
    } catch (error) {
      throw error
    }
  }
  static async updateStatusService(id) {
    try{
      const order = await updateStatusOrder(id)
    } catch (error) {
      throw error
    }
  }

  static async updateTotalPriceInOrder(price, id) {
    try {
        const car = await updateTotalPriceOrder(price, id);
        return car;
    } catch (e) {
        throw e
    }
}
}

module.exports = OrderServices