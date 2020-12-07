import express from 'express';
const router = express.Router();
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

//instead of using try/catch each time we can use express-async-handler

//@desc Fetch all products
//@route GET /api/products
//@access public
router.get(
  '/',
  asyncHandler(async (req, res, next) => {
    const products = await Product.find();
    res.json(products);
  })
);

//@desc Fetch single product
//@route GET /api/products/:id
//@access public
router.get(
  '/:id',
  asyncHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'item not found' });
    }
  })
);

export default router;
