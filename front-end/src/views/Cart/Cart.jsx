import { useState } from 'react'
import { CartProductList } from '../../components/CartProductList/CartProductList'
import { CartSummary } from '../../components/CartSummary/CartSummary'
import { CenteredContent } from '../../components/CenteredContent/CenteredContent'
import { useLoaderData } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'

export function Cart() {
	const cartProducts = useLoaderData()
	const [qty, setQty] = useState(false)

	return (
		<CartContext.Provider value={[qty, setQty]}>
			<CenteredContent>
				<CartProductList cartProducts={cartProducts} />
				<CartSummary cartProducts={cartProducts} />
			</CenteredContent>
		</CartContext.Provider>
	)
}
