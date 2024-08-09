import styles from './NewArrivals.module.css'
import { Product } from '../Product/Product'

export function NewArrivals({ products }) {
	return (
		<>
			<h3>Discover NEW Arrivals</h3>
			<h4>Recently added</h4>
			<div className={styles.productsWrapper}>
				{products.map(product => {
					return <Product key={product.id} product={product} />
				})}
			</div>
		</>
	)
}
