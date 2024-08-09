import { BACK_END_URL } from '../constants/api'

export function addToCart({ params: { productId, size, quantity = '1' } }) {
	return fetch(`${BACK_END_URL}/cart`, {
		method: 'POST',
		body: JSON.stringify({
			productId: Number(productId),
			size: size,
			quantity: Number(quantity),
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	})
}
