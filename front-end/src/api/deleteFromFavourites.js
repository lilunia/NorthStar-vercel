import { BACK_END_URL } from '../constants/api'

export function deleteFromFavourites({ params }) {
	return fetch(`${BACK_END_URL}/favourites/${params.favouriteId}`, {
		method: 'DELETE',
	})
}
