import express from "express";
const router = express.Router();
//import products from '../data/products.js';
import asyncHandler from "./middleware/asyncHandler.js";
import Product from "../models/productModel.js";

//Old ones its doesnt break with these but breaks with the asyncHandler import

// router.get("/",  async (req, res) => {  
//   res.json(products);
// });

// router.get("/:id", (req, res) => {
//     const product = products.find((p) => p._id === req.params.id);
//   return res.json(product);
// });

router.get("/", asyncHandler (async (req, res) => {
  const products = await Product.find({});
  res.json(products);
}));

router.get("/:id", asyncHandler (async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    return res.json(product);
  }

  res.status(404).json({message: "Product nto found"});

}));


export default router;