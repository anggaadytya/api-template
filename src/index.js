const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());


const productController = require("./product/product.controller");
app.use("/product", productController);



app.listen(PORT, () => {
  console.log(`Express API running on port: ${PORT}`);
});
