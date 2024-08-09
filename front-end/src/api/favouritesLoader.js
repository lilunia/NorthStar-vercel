import { BACK_END_URL } from '../constants/api'

export async function favouritesLoader() {
	const favouriteUrl = fetch(`${BACK_END_URL}/favourites?_expand=product`)
	const cartUrl = fetch(`${BACK_END_URL}/cart?_expand=product`)

	return Promise.all([favouriteUrl, cartUrl])
		.then(ress => Promise.all(ress.map(res => res.json())))
		.then(products => {
			return products
		})
}