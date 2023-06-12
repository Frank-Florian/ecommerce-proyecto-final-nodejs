const { Sequelize, Op } = require("sequelize");
const Products = require("../models/products.model");
const Users = require("../models/users.model");

const createProducts = async (newProduct) => {
  const produc = await Products.create(newProduct);
  return produc;
}

const updateDescription = async (description, id) => {
  const product = await Products.update({
    description: description
  }, {
    where: { id }
  })
  return product;
}

const getProductMajor = async () => {
  const product = await Products.findAll({
    where: {
      quantity: {
        [Op.gt]: 0
      }
    },
    include: [
      {
        model: Users,
        attributes: {
          exclude: ["password", "validUser"]
        }
      }
    ]
  })
  return product;
}

module.exports = { createProducts, updateDescription, getProductMajor }