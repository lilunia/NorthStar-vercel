import { useLoaderData } from 'react-router-dom'
import { FavouriteList } from '../../components/FavouriteList/FavouriteList'
export function Favourites() {
	const favouriteProducts = useLoaderData()

	const favourites = favouriteProducts[0]
	const currentCart = favouriteProducts[1]
	return <FavouriteList favourites={favourites} currentCart={currentCart} />
}
