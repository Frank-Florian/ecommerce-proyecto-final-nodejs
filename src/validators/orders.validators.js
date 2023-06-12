const { check } = require("express-validator");
const validateResult = require("../utils/validate");

const createOrderValidator = [
  check("userId", "El campo de userId tiene errores")
    .exists().withMessage("El price de description es obligatorio")
    .notEmpty().withMessage("El userId de description no deve ir vacío")
    .isInt().withMessage("El userId deve ser un número entero"),
  check("totalPrice", "Error con el campo de totalPrice")
    .exists().withMessage("El totalPrice de description es obligatorio")
    .notEmpty().withMessage("El totalPrice de description no deve ir vacío")
    .isFloat().withMessage("El totalPrice deve ser un número Real"),
  validateResult
]

const completedOrderValidator = [
  check("carId", "Error en el campo carId")
    .exists().withMessage("El carId de description es obligatorio")
    .notEmpty().withMessage("El carId de description no deve ir vacío")
    .isInt().withMessage("El carId deve ser un número entero"),
  validateResult

]

const addOrderDetailtValidator = [
  check("orderId", "El campo orderId esta con errores")
    .exists().withMessage("El orderId  es obligatorio")
    .notEmpty().withMessage("El orderId  no deve ir vacío")
    .isInt().withMessage("El orderId deve ser un número entero"),
  check("productId", "Error en el campo productId")
    .exists().withMessage("El productId   es obligatorio")
    .notEmpty().withMessage("El productId  no deve ir vacío")
    .isInt().withMessage("El productId deve ser un número entero"),
  check("price", "Error en el campo price")
    .exists().withMessage("El price de description es obligatorio")
    .notEmpty().withMessage("El price de description no deve ir vacío")
    .isFloat().withMessage("El price deve ser un número Real"),
  validateResult

]

module.exports = {
  createOrderValidator,
  completedOrderValidator,
  addOrderDetailtValidator
}