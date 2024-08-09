import styles from './FavouriteProduct.module.css'
import REMOVE from '../../assets/remove.svg'
import BAG from '../../assets/shopping-bag.svg'
import { Link, useFetcher } from 'react-router-dom'
import { Price } from '../Price/Price'
import { ENDPOINT_TO_PATH_MAPING_GENDER } from '../../constants/api'
import { useState } from 'react'

import { editQuantity } from '../../api/editQuantity'
export function FavouriteProduct({ favourite, currentCart }) {
	const product = favourite.product
	const [currentSize, setCurrentSize] = useState('S')
	const [quantity, setQuantity] = useState(1)
	const { Form } = useFetcher()
	const price = <Price product={product} />

	const changeSize = e => {
		setCurrentSize(e.target.value)
	}
	const checkACart = (id, size) => {
		currentCart.map(cartItem => {
			if (cartItem.productId === id && cartItem.size === size) {
				setCurrentSize('')
				setQuantity(cartItem.quantity++)
				editQuantity(cartItem, quantity)
			}
		})
	}

	return (
		<tr className={styles.favouriteProduct}>
			<Link
				to={`/shop/${ENDPOINT_TO_PATH_MAPING_GENDER[product.gender]}/${product.subcategory}/${
					product.id
				}`}
				className={styles.photo}
			>
				<td className={styles.photo}>
					<img src={product.photos[0]} alt='' />
					<h5>{product.productName}</h5>
				</td>
			</Link>
			<td className={styles.price}>
				<span>Price:</span>
				<p>{price}</p>
			</td>
			<td className={styles.size}>
				<span>Size:</span>
				<select name='Size' onChange={e => changeSize(e)}>
					<option value='XS'>XS</option>
					<option value='S' selected>
						S
					</option>
					<option value='M'>M</option>
					<option value='L'>L</option>
					<option value='XL'>XL</option>
				</select>
			</td>
			<td className={styles.manageFavourite}>
				<Form
					action={
						currentSize !== ''
							? `/add-to-cart/${product.id}/${currentSize}/${quantity}`
							: ''
					}
					method='POST'
					onClick={() => {
						checkACart(product.id, currentSize)
					}}
				>
					<button
						className={styles.addFavourite}
						disabled={currentSize === '' ? true : false}
					>
						<img className={styles.bag} src={BAG} alt='' />
						<p>Add to cart</p>
					</button>
				</Form>
				<Form action={`/delete-from-favourites/${favourite.id}`} method='DELETE'>
					<button>
						<img className={styles.removeProduct} src={REMOVE} />
					</button>
				</Form>
			</td>
		</tr>
	)
}
