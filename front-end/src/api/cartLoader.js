
import { BACK_END_URL } from '../constants/api'

export function cartLoader() {
	return fetch(`${BACK_END_URL}/cart?_expand=product`)
}
