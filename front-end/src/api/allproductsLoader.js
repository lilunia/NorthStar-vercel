import { BACK_END_URL } from '../constants/api'

export function allproductsLoader() {
	return fetch(`${BACK_END_URL}/products`)
}



