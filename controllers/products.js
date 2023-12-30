const Product = require("../models/products");
const NotFoundError = require("../errors/not-found")

const getAllProducts = async (req, res, next) => {
  const { company, search, sort, fields } = req.query;

  const queryObject = {};

  if (search) {
    queryObject.name = {
      $regex: search,
      $options: "i",
    };
  }

  if (company) {
    queryObject.company = company;
  }

  let result = Product.find(queryObject);

  if (fields) {
    const fieldsList = fields.split(",").join(" ");
    result = result.select(fieldsList);
  }

  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit)

  try {
    const products = await result;
    const totalResult = await Product.countDocuments()
    res.json({ products, totalResult });
  } catch (error) {
    next(error)
  }
};

const getSingleProduct = async (req, res, next) => {
  const productId = req.params.id;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      throw new NotFoundError(`no product found with id ${productId}`)
    }
    res.json(product);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProducts,
  getSingleProduct,
};
