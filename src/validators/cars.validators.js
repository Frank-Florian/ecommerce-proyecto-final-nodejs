const { check } = require("express-validator");
const validateResult = require("../utils/validate");

const addToCarValidator = [
  check("carId", "Error en el campo de carId")
    .exists().withMessage("El carId  es obligatorio")
    .notEmpty().withMessage("El carId  no deve ir vacío")
    .isInt().withMessage("El carId deve ser un número entero"),
  check("productId", "Error en el campo de productId")
    .exists().withMessage("El productId  es obligatorio")
    .notEmpty().withMessage("El productId  no deve ir vacío")
    .isInt().withMessage("El productId deve ser un número entero"),
  check("price", "El campo de price tiene errores")
    .exists().withMessage("El price de description es obligatorio")
    .notEmpty().withMessage("El price de description no deve ir vacío")
    .isFloat().withMessage("El price deve ser un número Real"),
  validateResult
];

module.exports = {
  addToCarValidator
}