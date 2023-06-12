const { Router } = require("express");
const { createProductController, updateDescriptionController, getProductUserMayorController } = require("../controllers/products.controlles");
const upload = require("../middlewares/multer.middleware");
const { createProductValidator, updateDescriptionValidator } = require("../validators/products.validators");

const authenticate = require("../middlewares/auth.middleware");


const router = Router();

router.post("/products", authenticate, upload, createProductController);
router.post("/products", authenticate, upload, createProductController);
router.put("/products", authenticate, updateDescriptionController);
router.post("/products", upload, createProductController);
router.put("/products", updateDescriptionValidator, updateDescriptionController);
router.get("/products", authenticate, getProductUserMayorController);
router.put("/products/:id", updateDescriptionValidator, updateDescriptionController);
router.get("/products", getProductUserMayorController);

module.exports = router;

