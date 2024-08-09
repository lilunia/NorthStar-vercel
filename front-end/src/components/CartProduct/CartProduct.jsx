import styles from './CartProduct.module.css'
import REMOVE from '../../assets/remove.svg'

import { Price } from '../Price/Price'
import { useContext, useState } from 'react'
import { useFetcher, Link } from 'react-router-dom'
import { ENDPOINT_TO_PATH_MAPING_GENDER } from '../../constants/api'
import { CurrencyContext } from '../../contexts/CurrencyContext'
import { CURRENCIES, CURRENCY_SIGN } from '../../constants/currencies'
import { editQuantity } from '../../api/editQuantity'
import { CartContext } from '../../contexts/CartContext'

export function CartProduct({ cartProduct }) {
	const product = cartProduct.product
	const [currency] = useContext(CurrencyContext)
	const [quantity, setQuantity] = useState(cartProduct.quantity)
	const [, setQty] = useContext(CartContext)

	const price = <Price product={product} />
	const { Form } = useFetcher()

	const priceToCount = currency === CURRENCIES.EUR ? product.priceEUR : product.priceUSD
	const totalPrice = priceToCount * quantity

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
					<div>
						<h5>{product.productName}</h5>
						<p>size: {cartProduct.size} </p>
					</div>
				</td>
			</Link>

			<td className={styles.price}>
				<span>Price:</span>
				<p>{price}</p>
			</td>
			<td className={styles.quantity}>
				<span>Quantity:</span>
				<Form
					method='PATCH'
					action='edit-item-quantity'
					onChange={e => {
						setQuantity((cartProduct.quantity = Number(e.target.value)))
						editQuantity(cartProduct, e.target.value)
						setQty(prev => !prev)
					}}
				>
					<input
						type='number'
						className={styles.quantityNumber}
						onChange={e => {
							setQuantity(e.target.value)
						}}
						value={quantity}
						min={1}
					/>
				</Form>
			</td>
			<td className={styles.totalPrice}>
				<span>Total price:</span>
				<p>
					{totalPrice}
					{CURRENCY_SIGN[currency]}
				</p>
			</td>
			<td className={styles.manageFavourite}>
				<Form action={`/delete-from-cart/${cartProduct.id}`} method='DELETE'>
					<button>
						<img className={styles.removeProduct} src={REMOVE} />
					</button>
				</Form>
			</td>
		</tr>
	)
}
