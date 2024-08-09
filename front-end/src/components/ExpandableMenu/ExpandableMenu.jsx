import styles from './ExpandableMenu.module.css'
import { GENDERS } from '../../constants/categories'
import { NavLink, useParams } from 'react-router-dom'
import ARROW from '../../assets/arrow-menu.svg'

export function ExpandableMenu() {
	const params = useParams()

	const activePath = params.gender

	return (
		<div className={styles.expandableMenu}>
			<p>Shop</p>
			<ul>
				{GENDERS.map(gender => {
					return (
						<li key={gender.path}>
							<NavLink to={`/${params.category}/${gender.path}`}>
								{gender.categoryName}
								<img
									src={ARROW}
									className={
										activePath === gender.path
											? styles.expanded
											: ''
									}
								/>
							</NavLink>
							{activePath === gender.path && (
								<ul>
									{gender.subcategories.map(subcategory => {
										return (
											<li key={subcategory.path}>
												<NavLink
													to={`/${params.category}/${params.gender}/${subcategory.path}`}
												>
													{
														subcategory.categoryName
													}
												</NavLink>
											</li>
										)
									})}
								</ul>
							)}
						</li>
					)
				})}
			</ul>
		</div>
	)
}
