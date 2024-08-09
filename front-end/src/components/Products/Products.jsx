import styles from './Products.module.css'
import { CenteredContent } from '../CenteredContent/CenteredContent'
import { Product } from '../Product/Product'

export function Products({ products, headerText, textInfo }) {
	return (
		<CenteredContent>
			<h3>{headerText}</h3>
			<h4>{textInfo}</h4>
			<div className={styles.productsWrapper}>
				{products.map(product => {
					return <Product key={product.id} product={product} />
				})}
			</div>
		</CenteredContent>
	)
}
