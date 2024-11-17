const mongoose = require('mongoose')

const cartItemSchema = new mongoose.Schema({
	productId: {
		type: Number,
		required: true,
	},
	size: {
		type: String,
		required: true,
	},
	quantity: {
		type: Number,
		default: 1,
	},
})

module.exports = mongoose.model('CartItem', cartItemSchema)
