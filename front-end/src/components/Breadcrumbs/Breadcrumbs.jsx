import styles from './Breadcrumbs.module.css'
import ARROW from '../../assets/arrow-menu.svg'
import { NavLink, useParams } from 'react-router-dom'
import { CATEGORIES, GENDERS } from '../../constants/categories'

export function Breadcrumbs() {
	const { category, gender, subcategory } = useParams()

	const foundCategory = CATEGORIES.find(c => c.path === category)
	const foundGender = GENDERS.find(g => g.path === gender)

	const breadcrumbs = []
	if (foundCategory) {
		breadcrumbs.push(
			{
				categoryName: foundCategory.categoryName,
				path: `/${foundCategory.path}`,
			},
			{
				categoryName: foundGender.categoryName,
				path: `/${foundCategory.path}/${foundGender.path}`,
			}
		)
	}

	if (subcategory) {
		const foundSubcategory = foundGender.subcategories.find(sc => sc.path === subcategory)

		breadcrumbs.push({
			categoryName: foundSubcategory.categoryName,
			path: `/${foundCategory.path}/${foundGender.path}/${foundSubcategory.path}`,
		})
	}
	return (
		<ul className={styles.breadcrumbs}>
			{breadcrumbs.map(breadcrumb => {
				return (
					<li key={breadcrumb.path}>
						<NavLink
							end
							to={breadcrumb.path === '/shop' ? '/shop/woman' : breadcrumb.path}
						>
							{breadcrumb.categoryName}
							<img src={ARROW} />
						</NavLink>
					</li>
				)
			})}
		</ul>
	)
}
