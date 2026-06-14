import Product from '../models/Product.js'


const getProducts = async (req, res) => {
  try {
    const products = await Product.find({})
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}


const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)

    if (product) {
      res.json(product)
    } else {
      res.status(404).json({ message: 'Product not found' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}


const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      image,
      countInStock,
      rating,
    } = req.body

    const product = await Product.create({
      name,
      description,
      price,
      category,
      image,
      countInStock,
      rating,
    })

    res.status(201).json(product)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}


const updateProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      image,
      countInStock,
      rating,
    } = req.body

    const product = await Product.findById(req.params.id)

    if (product) {
      product.name = name || product.name
      product.description = description || product.description
      product.price = price || product.price
      product.category = category || product.category
      product.image = image || product.image
      product.countInStock = countInStock || product.countInStock
      product.rating = rating || product.rating

      const updatedProduct = await product.save()
      res.json(updatedProduct)
    } else {
      res.status(404).json({ message: 'Product not found' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}


const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)

    if (product) {
      await product.deleteOne()
      res.json({ message: 'Product removed' })
    } else {
      res.status(404).json({ message: 'Product not found' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
}