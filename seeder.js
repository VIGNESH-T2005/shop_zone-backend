import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Product from './models/Product.js'

dotenv.config()

const products = [
  {
    name: "Wireless Headphones",
    price: 1299,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    description: "High quality sound with active noise cancellation and 30hr battery life.",
    rating: 4.5,
    countInStock: 10,
    numReviews: 0,
  },
  {
    name: "Running Shoes",
    price: 899,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    description: "Lightweight and breathable shoes for daily running.",
    rating: 4.2,
    countInStock: 15,
    numReviews: 0,
  },
  {
    name: "Smartphone Stand",
    price: 299,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400",
    description: "Adjustable aluminum stand for phones and tablets.",
    rating: 4.0,
    countInStock: 20,
    numReviews: 0,
  },
  {
    name: "Backpack",
    price: 749,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400",
    description: "Waterproof 30L backpack with laptop compartment.",
    rating: 4.3,
    countInStock: 8,
    numReviews: 0,
  },
  {
    name: "Bluetooth Speaker",
    price: 999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    description: "360 degree sound with 12hr playtime and waterproof body.",
    rating: 4.4,
    countInStock: 12,
    numReviews: 0,
  },
  {
    name: "Mechanical Keyboard",
    price: 1799,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
    description: "TKL layout with RGB backlight and tactile switches.",
    rating: 4.6,
    countInStock: 5,
    numReviews: 0,
  },
  {
    name: "Sunglasses",
    price: 499,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
    description: "UV400 polarized lens with lightweight frame.",
    rating: 4.1,
    countInStock: 25,
    numReviews: 0,
  },
  {
    name: "Water Bottle",
    price: 349,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
    description: "1L stainless steel insulated bottle, keeps cold 24hr.",
    rating: 4.3,
    countInStock: 30,
    numReviews: 0,
  },
]

const seedProducts = async () => {
  try {
    
    await mongoose.connect(process.env.MONGO_URI)
    console.log('MongoDB Connected...')

    
    await Product.deleteMany()
    console.log('Existing products deleted...')

   
    await Product.insertMany(products)
    console.log('Products seeded successfully ✅')

    process.exit()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

seedProducts()