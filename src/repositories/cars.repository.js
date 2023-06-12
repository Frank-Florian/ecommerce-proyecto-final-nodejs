const Cars = require("../models/cars.model")

const createCar = async (newCar) => {
    const car = await Cars.create(newCar)
    return car;
}

const updateTotalPriceCar = async (price, id) => {
    if(price === 0) {
        const car = await Cars.update({totalPrice: price},{
            where: {id}
        })
        return car;
    }
    const car = await Cars.increment({totalPrice: price}, {
        where: {id}
    })
    return car;
}

module.exports = {
    createCar,
    updateTotalPriceCar
}

