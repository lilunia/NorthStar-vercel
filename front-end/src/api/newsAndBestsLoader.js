import { BACK_END_URL } from '../constants/api'

export async function newsAndBestsLoader() {

	const bestsellersUrl = fetch(`${BACK_END_URL}/bestsellers`)
	const newsUrl = fetch(`${BACK_END_URL}/news`)

	return Promise.all([newsUrl, bestsellersUrl])
		.then(ress => Promise.all(ress.map(res => res.json())))
		.then(products => {
			return products
		})

		
}
