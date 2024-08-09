import styles from './FavouriteList.module.css'
import { CenteredContent } from '../CenteredContent/CenteredContent'
import { FavouriteProduct } from '../FavouriteProduct/FavouriteProduct'
import { NavLink } from 'react-router-dom'
import { Button } from '../Button/Button'

export function FavouriteList({ favourites, currentCart }) {
	return (
		<CenteredContent>
			<h3>Favourites</h3>
			<div className={styles.favouriteList}>
				<tr>
					<th className={styles.productName}>Product</th>
					<th>Price</th>
					<th>Size</th>
					<th></th>
				</tr>
				<div className={styles.favouriteProducts}>
					{favourites.map(favourite => {
						return (
							<FavouriteProduct
								key={favourite.id}
								favourite={favourite}
								currentCart={currentCart}
							/>
						)
					})}
				</div>
			</div>
			{favourites.length === 0 && (
				<div className={styles.emptyList}>
					<p>Your favourites list is empty ...</p>
					<NavLink to={'/shop/woman'}>
						<Button border={true}>Go shopping</Button>
					</NavLink>
				</div>
			)}
		</CenteredContent>
	)
}
