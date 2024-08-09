import styles from './MenuList.module.css'
import { NavLink } from 'react-router-dom'
import { CATEGORIES, GENDERS } from '../../constants/categories'
import { useEffect, useState } from 'react'

export function MenuList({ setIsMenuShowed }) {
	const [shopActive, setShopactive] = useState(false)
	const [genderActive, setGenderActive] = useState('woman')
	const [scroll, setScroll] = useState(0)

	useEffect(() => {
		if (window.scrollY !== 0) {
			setScroll(window.scrollY)
		}
	}, [scroll])

	return (
		<div
			className={styles.menuBackground}
			style={{ top: `${scroll + 70}px` }}
			onClick={() => {
				setIsMenuShowed(prev => !prev)
			}}
		>
			<ul className={styles.menuList}>
				{CATEGORIES.map(category => {
					return (
						<li key={category.path}>
							<NavLink
								to={
									category.path === 'shop'
										? `/${category.path}/woman`
										: category.path
								}
								onMouseOver={() => {
									if (category.path === 'shop') {
										setShopactive(prev => !prev)
									}
								}}
								className={styles.highlight}
							>
								{category.categoryName}
							</NavLink>
							{shopActive && category.path === 'shop' && (
								<ul>
									{GENDERS.map(gender => {
										return (
											<li key={gender.path}>
												<NavLink
													to={`/${category.path}/${gender.path}`}
													onMouseOver={() => {
														setGenderActive(
															gender.path
														)
														if (
															gender.path ===
															genderActive
														) {
															setGenderActive(
																''
															)
														}
													}}
												>
													{
														gender.categoryName
													}
												</NavLink>
												{genderActive ===
													gender.path && (
													<ul>
														{gender.subcategories.map(
															subcategory => {
																return (
																	<li
																		key={
																			subcategory.path
																		}
																	>
																		<NavLink
																			to={`/${category.path}/${gender.path}/${subcategory.path}`}
																		>
																			{
																				subcategory.categoryName
																			}
																		</NavLink>
																	</li>
																)
															}
														)}
													</ul>
												)}
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
