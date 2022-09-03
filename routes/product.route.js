const router = require('express').Router();
const {addProduct} = require("../controllers/product");

router.post("/add", addProduct);

module.exports = router;