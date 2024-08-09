import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import { CenteredContent } from '../../components/CenteredContent/CenteredContent'
import { ExpandableMenu } from '../../components/ExpandableMenu/ExpandableMenu'
import { FlexContainer } from '../../components/FlexContainer/FlexContainer'
import { Products } from '../../components/Products/Products'
import { Pagination } from '../../components/Pagination/Pagination'
import { useLoaderData, useParams } from 'react-router-dom'
import { GENDERS } from '../../constants/categories'

export function ProductsList() {
	const { products, numberOfPages } = useLoaderData()
	const params = useParams()
	const foundGender = GENDERS.find(g => g.path === params.gender)

	let foundSubcategory

	if (params.subcategory) {
		foundSubcategory = foundGender.subcategories.find(sc => sc.path === params.subcategory)
	}

	return (
		<CenteredContent>
			<FlexContainer>
				<ExpandableMenu />
				<div style={{ width: '100%' }}>
					<Breadcrumbs />
					<Products
						headerText={
							foundSubcategory
								? foundSubcategory.categoryName
								: foundGender.categoryName
						}
						products={products}
					/>
					<Pagination numberOfPages={numberOfPages} />
				</div>
			</FlexContainer>
		</CenteredContent>
	)
}
