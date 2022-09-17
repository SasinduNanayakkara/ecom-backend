const Product = require("../models/product");
const { makeResponse } = require("../utils/response");
const {
  productRegister,
  productUpdate,
  getProducts,
  getProduct,
  productDelete,
  productFavorite,
  productByName,
} = require("../services/product.service");

const addProduct = async (req, res) => {
  const result = await productRegister(req.body);
  if (!result) {
    return makeResponse({ res, status: 500, message: "Registration failed" });
  }
  if (result.status) {
    return makeResponse({ res, ...result });
  }
  return makeResponse({
    res,
    status: 200,
    data: result,
    message: "Product registered successfully",
  });
};

const updateProduct = async (req, res) => {
  const result = await productUpdate(req.body);
  if (!result) {
    return makeResponse({ res, status: 500, message: "Update failed" });
  }
  if (result.status) {
    return makeResponse({ res, ...result });
  }
  return makeResponse({
    res,
    status: 200,
    data: result,
    message: "Product updated successfully",
  });
};

const getAllProducts = async (req, res) => {
  const result = await getProducts();
  if (!result) {
    return makeResponse({
      res,
      status: 500,
      message: "Error with getting data",
    });
  }
  if (result.status) {
    return makeResponse({ res, ...result });
  }
  return makeResponse({
    res,
    status: 200,
    data: result,
    message: "Products",
  });
};

const getOneProduct = async (req, res) => {
  const id = req.params.id;
  const result = await getProduct({ id });

  if (!result) {
    return makeResponse({
      res,
      status: 500,
      message: "Error with getting data",
    });
  }
  if (result.status) {
    return makeResponse({ res, ...result });
  }
  return makeResponse({
    res,
    status: 200,
    data: result,
    message: "Product",
  });
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  const result = await productDelete({ id });
  if (!result) {
    return makeResponse({ res, status: 500, message: "Delete failed" });
  }
  if (result.status) {
    return makeResponse({ res, ...result });
  }
  return makeResponse({
    res,
    status: 200,
    data: result,
    message: "Product deleted successfully",
  });
};

const getFavoriteProducts = async (req, res) => {
  const result = await productFavorite();
  if (!result) {
    return makeResponse({
      res,
      status: 500,
      message: "Error with getting data",
    });
  }
  if (result.status) {
    return makeResponse({ res, ...result });
  }
  return makeResponse({
    res,
    status: 200,
    data: result,
    message: "Favorite products",
  });
};

const getProductsByName = async (req, res) => {
  const name = req.query;
  const result = await productByName(name);
  if (!result) {
    return makeResponse({
      res,
      status: 500,
      message: "Error with getting data",
    });
  }
  if (result.status) {
    return makeResponse({ res, ...result });
  }
  return makeResponse({
    res,
    status: 200,
    data: result,
    message: "Products by name",
  });
}

module.exports = {
  addProduct,
  updateProduct,
  getAllProducts,
  getOneProduct,
  deleteProduct,
  getFavoriteProducts,
  getProductsByName,
};
