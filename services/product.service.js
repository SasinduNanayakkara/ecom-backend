const {createProduct, getOneProject} = require('../repository/product.repository');
const productRegister = async ({name, price, description, image, sku, quantity}) => {
    const product = await getOneProject({sku});
    if (product) {
        return {status: 409, message: 'Product already exists'};
    }
    const productRegister = await createProduct({name, price, description, image, sku, quantity});
    return productRegister;
}

module.exports = {
    productRegister,
}