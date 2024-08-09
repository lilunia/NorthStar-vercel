
import { useLayoutEffect } from 'react'
import styles from './Pagination.module.css'
import { NavLink, useLocation } from 'react-router-dom'

export function Pagination({ numberOfPages }) {
	const pages = Array(numberOfPages).fill(null)
	const location = useLocation()

	useLayoutEffect(() => {
		document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'instant' })
	}, [location.search])


	return (
		<ul className={styles.pagination}>
			{pages.map((page, index) => {
				return (
					<li key={index}>
						<NavLink
							className={
								location.search === `?page=${index + 1}`
									? styles.selected
									: ''
							}
							to={`?page=${index + 1}`}
						>
							{index + 1}
						</NavLink>
					</li>
				)
			})}
		</ul>
	)
}
