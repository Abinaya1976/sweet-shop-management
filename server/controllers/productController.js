const Product = require("../models/Product");

// ==========================
// Add Product
// ==========================
const addProduct = async (req, res) => {
  try {
    const { name, price, description, category } = req.body;

    // Check required fields
    if (!name || !price) {
      return res.status(400).json({
        message: "Name and Price are required",
      });
    }

    // Check if product already exists
    const existingProduct = await Product.findOne({ name });

    if (existingProduct) {
      return res.status(400).json({
        message: "Product already exists",
      });
    }

    // Create product
    const product = await Product.create({
      name,
      price,
      description,
      category,
    });

    res.status(201).json({
      message: "Product Added Successfully",
      product,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// Get All Products
// ==========================
const getProducts = async (req, res) => {
  try {

    const products = await Product.find();

    res.status(200).json(products);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// Get Product By ID
// ==========================
const getProductById = async (req, res) => {
  try {

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(product);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// Update Product
// ==========================
const updateProduct = async (req, res) => {
  try {

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product Updated Successfully",
      product,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// Delete Product
// ==========================
const deleteProduct = async (req, res) => {
  try {

    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product Deleted Successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};