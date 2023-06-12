const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const ProductInOrder = db.define(
  "product_in_order",
  {
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "order_id"
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "product_id"
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    price: {
      type: DataTypes.REAL,
      allowNull: false
    }
  }, {
  timestamps: false
}
)

module.exports = ProductInOrder