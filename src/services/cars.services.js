const {createCar, updateTotalPriceCar} = require("../repositories/cars.repository")

class CarsServices {
    static async createNewCar(newCar) {
        try {
            const car = await createCar(newCar)
            return car;
        } catch (e) {
            throw e;
        }
    }

    static async updateTotalPrice(price, id) {
        try {
            const car = await updateTotalPriceCar(price, id);
            return car;
        } catch (e) {
            throw e
        }
    }
}

module.exports = CarsServices