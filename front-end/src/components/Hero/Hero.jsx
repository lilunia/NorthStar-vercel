import styles from './Hero.module.css'
import { CenteredContent } from '../CenteredContent/CenteredContent'
import { Button } from '../Button/Button'
import { NavLink } from 'react-router-dom'

export function Hero({ heroImage }) {
	return (
		<div className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
			<div className={styles.heroShadow}>
				<CenteredContent>
					<div className={styles.contentWrapper}>
						<h2>Stylist picks beat the heat</h2>
						<NavLink to={'/shop/woman'}>
							<Button makeWhite={true}>Shop now</Button>
						</NavLink>
					</div>
				</CenteredContent>
			</div>
		</div>
	)
}
