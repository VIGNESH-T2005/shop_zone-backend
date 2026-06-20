import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import authRoutes from './routes/authRoutes.js'
import productRoutes from './routes/productRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

// env variables
dotenv.config()

// mongo db
connectDB()

const app = express()

// middlewares
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://shop-zone-ecomm.vercel.app'
  ]
}))
app.use(express.json())

// routes
app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)
app.use('/api/orders', orderRoutes)

// base
app.get('/', (req, res) => {
  res.send('ShopZone API is running...')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})