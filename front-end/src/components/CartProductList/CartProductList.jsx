import { NavLink } from 'react-router-dom'
import { Button } from '../Button/Button'
import { CartProduct } from '../CartProduct/CartProduct'
import styles from '../CartProductList/CartProductList.module.css'

export function CartProductList({ cartProducts }) {
	return (
		<>
			<h3>Cart</h3>
			<table className={styles.favouriteList}>
				<thead style={{ width: '100%' }}>
					<tr>
						<th className={styles.productName}>Product</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Total</th>
						<th></th>
					</tr>
				</thead>
				<tbody className={styles.favouriteProducts}>
					{cartProducts.map(cartProduct => {
						return <CartProduct key={cartProduct.id} cartProduct={cartProduct} />
					})}
				</tbody>
			</table>
			{cartProducts.length === 0 && (
				<div className={styles.emptyCart}>
					<p>Your cart is empty ...</p>
					<NavLink to={'/shop/woman'}>
						<Button border={true}>Go shopping</Button>
					</NavLink>
				</div>
			)}
		</>
	)
}
