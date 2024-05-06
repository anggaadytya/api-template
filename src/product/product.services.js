const prisma = require("../db");
const {
  findProducts,
  findProductsById,
  updateDataProducts,
  insertDataProducts,
  deleteDataProducts,
} = require("./product.repository");

const getAllProducts = async () => {
  const products = await findProducts();

  return products;
};

const getProductById = async (id) => {
  if (typeof id !== "string") {
    throw Error("ID must be a string");
  }
  const product = await findProductsById(id);

  if (!product) {
    throw Error("Product not found");
  }

  return product;
};

const createProduct = async (productData) => {
  if (typeof productData !== "object") {
    throw Error("Product Data must be an object");
  }

  if (
    !productData.name ||
    !productData.description ||
    !productData.price ||
    !productData.image
  ) {
    throw Error("Product Field Missing");
  }

  const product = await insertDataProducts(productData);

  if (!product) {
    throw Error("Product not created");
  }
  return product;
};

const updateProduct = async (id, productData) => {
  if (typeof id !== "string") {
    throw Error("ID must be a string");
  }

  const product = await updateDataProducts(id, productData);

  if (!product) {
    throw Error("Product not updated");
  }

  return product;
};

const deleteProduct = async (id) => {
  const product = await deleteDataProducts(id);

  if (!product) {
    throw Error("Product not deleted");
  }

  return product;
};

module.exports = {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
