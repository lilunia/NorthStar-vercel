// index.js
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cartRoutes = require('../routes/cart') // cart routes
const jsonServer = require('json-server') // to products
const path = require('path')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

// // connection with MongoDB for cart
// mongoose.connect('mongodb://localhost:27017/shopDB')
// 	.then(() => console.log('Connected to MongoDB'))
// 	.catch(err => console.error('Could not connect to MongoDB...', err))

// json-server configuration for products
const productRouter = jsonServer.router(path.join(__dirname, 'db.json'))
const productMiddlewares = jsonServer.defaults()

// Setting the /api/products path to read from db.json
app.use('/products', productMiddlewares, productRouter)

// // Setting the /api/cart path for MongoDB
// app.use('/cart', cartRoutes)

// Starting the server
const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})
