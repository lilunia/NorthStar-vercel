import { CATEGORIES } from '../../constants/categories'
import styles from './MainMenu.module.css'
import { NavLink } from 'react-router-dom'

export function MainMenu({ setIsShopHovering }) {
	const handleMouseOver = categoryName => {
		if (categoryName === 'Shop') {
			setIsShopHovering(true)
		} else {
			setIsShopHovering(false)
		}
	}
	return (
		<ul className={styles.mainMenu}>
			{CATEGORIES.map(category => {
				return (
					<li
						key={category.path}
						onMouseOver={() => {
							handleMouseOver(category.categoryName)
						}}
					>
						<NavLink
							to={
								category.path === 'shop'
									? `/${category.path}/woman`
									: category.path
							}
						>
							{category.categoryName}
						</NavLink>
					</li>
				)
			})}
		</ul>
	)
}
