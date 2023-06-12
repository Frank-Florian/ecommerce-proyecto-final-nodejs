const db = require("../utils/database");
const { DataTypes } = require("sequelize");


const Products = db.define(
  "products",
  {
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'name no puede estar vacío'
        },
        notIn:{
          msg:"no se permiten numero"
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'la descripcion no puede estar vacío'
        }
      }
    },
    price: {
      type: DataTypes.REAL,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'la price no puede estar vacío'
        },
        isFloat:{
          msg: "el price deve ser real"
        }
      }
    },
    available: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    productImage: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: "product_image",
      validate: {
        notEmpty: {
          msg: 'la productImage no puede estar vacío'
        }
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "user_id",
      validate: {
        notEmpty: {
          msg: 'la imagen no puede estar vacío'
        }
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  },
  {
    timestamps: false,
  }
);

module.exports = Products
