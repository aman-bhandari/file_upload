const Product = require('../models/Product')
const { StatusCodes } = require('http-status-codes')

const createProduct = (req, res) => {
  res.send('create product')
}

const getAllProduct = (req, res) => {
  res.send('get all product')
}

module.exports = {
  createProduct,
  getAllProduct,
}
