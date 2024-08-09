import { NavLink } from 'react-router-dom'
import { Button } from '../Button/Button'
import { Footer } from '../Footer/Footer'
import { Logo } from '../Logo/Logo'
import { TopBar } from '../TopBar/TopBar'
import styles from '../Error/Error.module.css'

export const Error = () => {
	return (
		<>
			<TopBar>
				<Logo />
			</TopBar>
			<div className={styles.error}>
				<h3>Page not found 😕</h3>
				<NavLink to='/'>
					<Button border={true}>Go back to shop</Button>
				</NavLink>
			</div>
			<Footer />
		</>
	)
}
