const Product = require("../models/product");

const createProduct = async ({
  name,
  price,
  description,
  image,
  sku,
  quantity,
}) => {
  const result = await new Product({
    name,
    price,
    description,
    image,
    sku,
    quantity,
  }).save();

  return result;
};

const getOneProject = async ({ sku }) => {
  const result = await Product.findOne({ sku });
  if (!result) {
    return null;
  }
  return result;
};

const updateProduct = async ({
  name,
  price,
  description,
  image,
  sku,
  quantity,
  isFavorite,
  _id,
}) => {
  const result = await Product.findOneAndUpdate(
    { _id },
    {
      name,
      price,
      description,
      image,
      sku,
      quantity,
      isFavorite,
    }
  );
  return result;
};

const getAllProducts = async () => {
  const result = await Product.find();
  return result;
};

const getOneProduct = async ({ id }) => {
  const result = await Product.findById(id);
  return result;
};

const deleteProduct = async ({ id }) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

const getFavoriteProducts = async () => {
  const data = await Product.find({ isFavorite: true });
  return data;
};

const getProductsByName = async (name) => {
  const data = await Product.find(name);
  return data;
}

module.exports = {
  createProduct,
  getOneProject,
  updateProduct,
  getAllProducts,
  getOneProduct,
  deleteProduct,
  getFavoriteProducts,
  getProductsByName,
};
