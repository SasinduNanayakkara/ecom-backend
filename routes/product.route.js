const router = require("express").Router();
const {
  addProduct,
  updateProduct,
  getAllProducts,
  getOneProduct,
  deleteProduct,
  getFavoriteProducts,
  getProductsByName,
} = require("../controllers/product");

router.post("/add", addProduct);
router.put("/update/:id", updateProduct);
router.get("/fav", getFavoriteProducts);
router.get("/search", getProductsByName);
router.get("/", getAllProducts);
router.get("/:id", getOneProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
