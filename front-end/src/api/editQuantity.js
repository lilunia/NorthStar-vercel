import { BACK_END_URL } from '../constants/api'

export function editQuantity(cartItem, quantity) {
	fetch(`${BACK_END_URL}/cart/${cartItem.id}`, {
		method: 'PATCH',
		body: JSON.stringify(cartItem),
		headers: {
			'Content-Type': 'application/json',
		},
	}).then(res => {
		if (res.ok) {
			cartItem.quantity = Number(quantity)
		}
	})
}
