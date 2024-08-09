import { redirect } from 'react-router-dom'
import { BACK_END_URL, PATH_TO_ENDPOINT_MAPING_GENDER } from '../constants/api'
import { GENDERS } from '../constants/categories'

export function productListLoader({ params: { gender, subcategory }, request }) {
	const foundParamsGender = GENDERS.find(g => g.path === gender)
	const foundGender = PATH_TO_ENDPOINT_MAPING_GENDER[gender]
	const foundSubcategory = subcategory

	const pageUrl = new URL(request.url)
	const page = pageUrl.searchParams.get('page') || 1

	if (foundParamsGender) {
		let url = `${BACK_END_URL}/products/?gender=${foundGender}`

		if (subcategory) {
			const foundParamsSubcategory = foundParamsGender.subcategories.find(
				sc => sc.path === subcategory
			)
			if (foundParamsSubcategory) {
				url = `${url}&subcategory=${foundSubcategory}`
			} else {
				redirect('/shop')
			}
		}

		url = `${url}&_limit=8&_page=${page}`

		return fetch(url).then(response => {
			const numberOfPages = Math.ceil(Number(response.headers.get('X-Total-Count')) / 8)

			return response.json().then(products => {
				return { products, numberOfPages }
			})
		})
	} else {
		redirect('/shop')
	}
}
