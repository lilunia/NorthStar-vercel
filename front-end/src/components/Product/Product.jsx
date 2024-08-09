import styles from './Product.module.css'
import { Link, useFetcher } from 'react-router-dom'
import { BACK_END_URL, ENDPOINT_TO_PATH_MAPING_GENDER } from '../../constants/api'
import { Price } from '../Price/Price'
import { useState } from 'react'

export function Product({ product }) {
	const { Form } = useFetcher()
	const [isOnFavs, setIsOnFavs] = useState(false)
	let currentFavProducts

	async function currentFavs() {
		return fetch(`${BACK_END_URL}/favourites?_expand=product`)
			.then(res => res.json())
			.then(products => {
				currentFavProducts = products
				return products
			})
	}
	currentFavs()

	const checkAFavs = id => {
		currentFavProducts.map(favItem => {
			if (favItem.productId === id) {
				setIsOnFavs(true)
				console.log('You already have this item on your favList')
			} else setIsOnFavs(false)
		})
	}
	return (
		<Link
			to={`/shop/${ENDPOINT_TO_PATH_MAPING_GENDER[product.gender]}/${product.subcategory}/${
				product.id
			}`}
			className={styles.product}
		>
			<div className={styles.photoContainer}>
				<img src={product.photos[0]} />
			</div>
			<h4>{product.productName}</h4>
			<p>
				<Price product={product} />
			</p>
			<Form
				onClick={e => {
					e.stopPropagation()
					checkAFavs(product.id)
				}}
				method='POST'
				action={`/add-to-favourites/${product.id}`}
			>
				<button disabled={isOnFavs}>
					<div className={styles.heart}></div>
				</button>
			</Form>
		</Link>
	)
}
