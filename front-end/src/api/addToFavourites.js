import { BACK_END_URL } from '../constants/api'

export function addToFavourites({ params: { productId, size } }) {
	return fetch(`${BACK_END_URL}/favourites`, {
		method: 'POST',
		body: JSON.stringify({
			productId: Number(productId),
			size: size,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	})
}
