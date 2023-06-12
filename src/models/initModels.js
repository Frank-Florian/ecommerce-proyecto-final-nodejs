// importar los modelos
const Users = require("./users.model");
const Cars = require("./cars.model")
const Products = require("./products.model")
const ProductInCar = require("./productInCar.model")
const Orders = require("./orders.model")
const ProductInOrder = require("./ProductInOrder.model")

const initModels = () => {

  Users.hasOne(Cars, {foreignKey:"userId"});

  Orders.belongsTo(Users, {foreignKey:"userId"});
  Users.hasMany(Orders, {foreignKey:"userId"});
  
  Products.belongsTo(Users, {foreignKey: "userId"});
  Users.hasMany(Products, {foreignKey: "userId"});
  
  ProductInOrder.belongsTo(Orders, {foreignKey: "orderId"});
  Orders.hasMany(ProductInOrder, {foreignKey: "orderId"});
  ProductInOrder.belongsTo(Products, {foreignKey:"productId"});
  Products.hasMany(ProductInOrder, {foreignKey: "productId"});

  ProductInCar.belongsTo(Cars, {foreignKey:"carId"});
  Cars.hasMany(ProductInCar, {foreignKey:"carId"});
  ProductInCar.belongsTo(Products, {foreignKey:"productId"});
  Products.hasMany(ProductInCar, {foreignKey:"productId"});
};

module.exports = initModels;

