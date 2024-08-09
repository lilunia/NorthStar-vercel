import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import { CenteredContent } from '../../components/CenteredContent/CenteredContent'
import { ProductDetails } from '../../components/ProductDetails/ProductDetails'
import { ExpandableMenu } from '../../components/ExpandableMenu/ExpandableMenu'
import { FlexContainer } from '../../components/FlexContainer/FlexContainer'
import { Photos } from '../../components/Photos/Photos'
import { FlexCenter } from '../../components/FlexCenter/FlexCenter'
import { useLoaderData } from 'react-router-dom'

export function SingleProduct() {
	const product = useLoaderData()
	const singleProduct = product[0]
	const currentCart = product[1]
	const currentFavs = product[2]

	return (
		<CenteredContent>
			<FlexContainer>
				<ExpandableMenu />
				<div style={{ width: '100%' }}>
					<Breadcrumbs />
					<FlexCenter>
						<Photos product={singleProduct} />
						<ProductDetails
							currentCart={currentCart}
							currentFavs={currentFavs}
							product={singleProduct}
						/>
					</FlexCenter>
				</div>
			</FlexContainer>
		</CenteredContent>
	)
}
