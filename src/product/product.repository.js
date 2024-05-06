const prisma = require("../db");

const findProducts = async () => {
  const products = await prisma.product.findMany();
  return products;
};

const findProductsById = async (id) => {
  const product = await prisma.product.findUnique({
    where: {
      id: String(id),
    },
  });
  return product;
};

const insertDataProducts = async (data) => {
  const product = await prisma.product.create({
    data: {
      name: data.name,
      price: data.price,
      description: data.description,
      image: data.image,
    },
  });
  return product;
};

const updateDataProducts = async (id, data) => {
  const product = await prisma.product.update({
    where: {
      id: String(id),
    },
    data: {
      name: data.name,
      price: data.price,
      description: data.description,
      image: data.image,
    },
  });
  return product;
};

const deleteDataProducts = async (id) => {
  const product = await prisma.product.delete({
    where: {
      id: String(id),
    },
  });
  return product;
};

module.exports = {
  findProducts,
  findProductsById,
  insertDataProducts,
  updateDataProducts,
  deleteDataProducts,
};
