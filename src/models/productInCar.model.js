const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const ProductInCar = db.define(
  "product_in_car",
  {
    carId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "car_id"
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "product_id"
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    price: {
      type: DataTypes.REAL,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
  {
    timestamps: false
  }
)

module.exports = ProductInCar