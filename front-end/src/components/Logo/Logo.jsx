import styles from './Logo.module.css'
import STAR from '../../assets/star.svg'
import { NavLink } from 'react-router-dom'
export function Logo() {
	return (
		<NavLink to={'/'}>
			<h1 className={styles.h1}>
				NorthStar
				<img src={STAR} />{' '}
			</h1>
		</NavLink>
	)
}
