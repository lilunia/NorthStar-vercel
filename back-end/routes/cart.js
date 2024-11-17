// routes/cart.js

const express = require('express');
const router = express.Router();
const CartItem = require('../models/CartItem');

// adding product to cart
router.post('/', async (req, res) => {
    try {
        const { productId, size, quantity } = req.body;
        const newCartItem = new CartItem({ productId, size, quantity });
        await newCartItem.save();
        res.status(201).json(newCartItem);
    } catch (error) {
        res.status(500).json({ message: 'Error adding item to cart' });
    }
});

// getting products from cart
router.get('/', async (req, res) => {
    try {
        const cartItems = await CartItem.find();
        res.json(cartItems);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching cart items' });
    }
});

module.exports = router;
