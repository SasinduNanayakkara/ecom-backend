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
}

module.exports = {
  createProduct,
  getOneProject,
};
