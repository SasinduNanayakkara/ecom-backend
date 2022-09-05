const router = require("express").Router();
const {
  addProduct,
  updateProduct,
  getAllProducts,
  getOneProduct,
  deleteProduct,
  getFavoriteProducts,
} = require("../controllers/product");

router.post("/add", addProduct);
router.put("/update/:id", updateProduct);
router.get("/", getAllProducts);
router.get("/fav", getFavoriteProducts);
router.get("/:id", getOneProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
