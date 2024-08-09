import { NavLink } from 'react-router-dom'
import { Button } from '../Button/Button'
import styles from './SpecialOffer.module.css'
export function SpecialOffer() {
	return (
		<div className={styles.specialOffer}>
			<div className={styles.specialInfo}>
				<p className={styles.specialHeader}>peace of mind</p>
				<p className={styles.specialText}>
					A one-stop platform for all your fashion needs, hassle-free. Buy with a peace of
					mind.
				</p>
				<NavLink to={'/shop/woman'}>
					<Button makeWhite={true}>buy now</Button>
				</NavLink>
			</div>
			<div className={styles.specialInfo}>
				<p className={styles.specialHeader}>Buy 2 Get 1 Free</p>
				<p className={styles.specialText}>
					End of season sale. Buy any 2 items of your choice and get 1 free.
				</p>
				<NavLink to={'/shop/woman'}>
					<Button makeWhite={true}>buy now</Button>
				</NavLink>
			</div>
		</div>
	)
}
