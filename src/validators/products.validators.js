const { check, body } = require("express-validator");
const validateResult = require("../utils/validate");

const createProductValidator = [
  body('image')
    .custom((value, { req }) => {
      if (!req.file || !req.file.image) {
        throw new Error('La imagen es requerida');
      }
      return true;
    }),
  check("name", "Error con el campo de name")
    .exists().withMessage("El campo de name es obligatorio")
    .notEmpty().withMessage("El campo de name no deve ir vacío")
    .isString().withMessage("El tipo de dato debe ser string")
    .isLength({ min: 6, max: 30 }).withMessage("El name debe tener minimo 6 caracteres y máximo 30"),
  check("description", "Error en el campo de descripcion")
    .exists().withMessage("El campo de description es obligatorio")
    .notEmpty().withMessage("El campo de description no deve ir vacío")
    .isString().withMessage("el campo dedescription deve ser un string "),
  check("price", "error en el campo de price")
    .exists().withMessage("El price de description es obligatorio")
    .notEmpty().withMessage("El price de description no deve ir vacío")
    .isFloat().withMessage("El price deve ser un número Real"),
  check("userId", "Error en el campo de userId")
    .exists().withMessage("El userId de description es obligatorio")
    .notEmpty().withMessage("El userId de description no deve ir vacío")
    .isInt().withMessage("El userId deve ser un número entero"),
  validateResult
];


const updateDescriptionValidator = [
  check("description", "Error en el campo de description")
    .exists().withMessage("El campo de description es obligatorio")
    .notEmpty().withMessage("El campo de description no deve ir vacío")
    .isString().withMessage("el campo dedescription deve ser un string "),
  check("id", "Error en el campo de id")
    .exists().withMessage("El id de description es obligatorio")
    .notEmpty().withMessage("El id de description no deve ir vacío")
    .isInt().withMessage("El id deve ser un número entero"),
]

module.exports = { createProductValidator, updateDescriptionValidator }