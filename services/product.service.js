const {
  createProduct,
  getOneProject,
  updateProduct,
  getAllProducts,
  getOneProduct,
  deleteProduct,
  getFavoriteProducts,
  getProductsByName,
} = require("../repository/product.repository");
const productRegister = async ({
  name,
  price,
  description,
  image,
  sku,
  quantity,
}) => {
  const product = await getOneProject({ sku });
  if (product) {
    return { status: 409, message: "Product already exists" };
  }
  const productRegister = await createProduct({
    name,
    price,
    description,
    image,
    sku,
    quantity,
  });
  return productRegister;
};

const productUpdate = async ({
  name,
  price,
  description,
  image,
  sku,
  quantity,
  isFavorite,
}) => {
  const product = await getOneProject({ sku });
  if (!product) {
    return { status: 404, message: "Product not found" };
  }

  const update = await updateProduct({
    name,
    price,
    description,
    image,
    sku,
    quantity,
    isFavorite,
    _id: product._id,
  });
  return update;
};

const getProducts = async () => {
  const data = await getAllProducts();
  if (!data) {
    return { status: 404, message: "Products not found" };
  }
  return data;
};

const getProduct = async ({ id }) => {
  const data = await getOneProduct({ id });
  if (!data) {
    return { status: 404, message: "Product not found" };
  }
  return data;
};

const productDelete = async ({ id }) => {
  const result = await deleteProduct({ id });
  if (!result) {
    return { status: 404, message: "Product not found" };
  }
  return result;
};

const productFavorite = async () => {
  const result = await getFavoriteProducts();
  if (!result) {
    return { status: 404, message: "Product not found" };
  }
  return result;
};

const productByName = async (name) => {
  const result = await getProductsByName(name);
  if (!result) {
    return { status: 404, message: "Product not found" };
  }
  return result;
}

module.exports = {
  productRegister,
  productUpdate,
  getProducts,
  getProduct,
  productDelete,
  productFavorite,
  productByName,
};
