const Product = require("../models/product");
const { makeResponse } = require("../utils/response");
const {productRegister} = require("../services/product.service");

const addProduct = async (req, res) => {
    console.log(req.body);
  const result = await productRegister(req.body);
  if (!result) {
    return makeResponse({ res, status: 500, message: "Registration failed" });
  }
  return makeResponse({
    res,
    status: 200,
    message: "Product registered successfully",
  });
};

module.exports = {
    addProduct,
}
