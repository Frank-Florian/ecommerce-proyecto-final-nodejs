const Users = require("../models/users.model");
const Cars = require("../models/cars.model");
const ProductsInCar = require("../models/productInCar.model")
const Products = require("../models/products.model")
const Orders = require("../models/orders.model")

const createUser = async (newUser) => {
    const user = await Users.create(newUser);
    return user;
}

const loginUser = async (email) => {
    const user = await Users.findOne({
        where: {email}
    });
    return user;
}

const updateUser = async (filename, username, id) =>{
    const user = await Users.update({
        username:username,
        avatar: filename
     },{
       where: {id}
     })
    return user;
}

const getUserbyIdAndProductsInCar = async (id) => {
    const user = await Users.findByPk(id,{
        attributes: {exclude: ["password", "validUser","avatar","firstname","lastname"]},
        include: [
            {
                model: Cars,
                attributes: ["id", "totalPrice"],
                include: [
                    {
                        model: ProductsInCar,
                        where: {status: false},
                        attributes: ["quantity","price","status"],
                        include: [
                            {
                                model: Products,
                                attributes: {exclude:["available","userId"]}
                            }
                        ]
                    }
                ]
            }
        ]
    });
    return user;
}

const getOrdersByUserId = async (id) => {
    const user = await Users.findByPk(id,{
        attributes: {exclude: ["password", "validUser", "firstname", "lastname", "id","avatar"]},
        include: [
            {
                model: Orders
            }
        ]
    })
    return user;
}

module.exports = {
    createUser,
    loginUser,
    updateUser,
    getUserbyIdAndProductsInCar,
    getOrdersByUserId
}