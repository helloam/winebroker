import express from 'express'
import dotenv from 'dotenv'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
    res.send('API is running')
})

app.use('/api/products', productRoutes)

//Custom error handling for invalid routes
app.use(notFound)

//Custom error handling to get back json data with a message and stack trace (if we're not in production) instead of an HTML file
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))