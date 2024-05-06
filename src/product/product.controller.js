// Layer Handle Request and Response
// Validate Body

const express = require("express");
const router = express.Router();
const prisma = require("../db");
const {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("./product.services");

router.get("/", async (req, res) => {
  const products = await getAllProducts();

  res.status(200).send({ message: "Success", status: 200, data: products });
});

router.get("/:id", async (req, res) => {
  try {
    const productId = req.params.id;

    const product = await getProductById(productId);

    res.status(200).send({ message: "Success", status: 200, data: product });
  } catch (error) {
    res.status(400).send({ message: error.message, status: 400 });
  }
});

router.post("/", async (req, res) => {
  try {
    const productData = req.body;

    const product = await createProduct(productData);

    res.status(201).send({ message: "Success", status: 201, data: product });
  } catch (error) {
    res.status(400).send({ message: error.message, status: 400 });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const productData = req.body;

    if (
      !productData.name ||
      !productData.price ||
      !productData.description ||
      !productData.image
    ) {
      res.status(400).send({ message: "Field Missing", status: 400 });
      return;
    }

    const product = await updateProduct(productId, productData);

    res.status(200).send({ message: "Success", status: 200, data: product });
  } catch (error) {
    res.status(400).send({ message: error.message, status: 400 });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const productData = req.body;

    const product = await updateProduct(productId, productData);

    res.status(200).send({ message: "Success", status: 200, data: product });
  } catch (error) {
    res.status(400).send({ message: error.message, status: 400 });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const productId = req.params.id;

    const product = await deleteProduct(productId);

    res.status(200).send({ message: "Success", status: 200, data: product });
  } catch (error) {
    res.status(400).send({ message: error.message, status: 400 });
  }
});

module.exports = router;
