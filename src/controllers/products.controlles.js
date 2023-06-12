const ProductService = require("../services/products.services");

const createProductController = async (req, res, next) => {
  try {
    const { filename } = req.file;
    const { name, description, price, available, userId } = req.body;

    await ProductService.createNewProduct({ name, description, price, available, userId, productImage: filename });
    res.status(201).send();
  } catch (error) {
    next(error)
  }
};

const updateDescriptionController = async (req, res, next) => {
  try {
    const {id} = req.params;
    const { description } = req.body;
    await ProductService.updateProductDescriptioService(description, id);
    res.status(201).send();
  } catch (error) {
    next(error)
  }
};

const getProductUserMayorController = async (req, res, next) => {
  try {
    const product = await ProductService.getProductUserServices();
    res.json(product);
  } catch (error) {
    next(error)
  }
};

module.exports = {
  createProductController,
  updateDescriptionController,
  getProductUserMayorController
}