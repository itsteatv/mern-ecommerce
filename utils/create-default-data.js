const Product = require("../models/products");
const productsJson = require("../products.json");

const createDefaultData = async (data) => {
  const products = await Product.find();
  if (products.length === 0) {
    await Product.create(productsJson);
  }
};

module.exports = createDefaultData;
