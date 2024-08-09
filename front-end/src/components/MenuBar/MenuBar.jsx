import styles from './MenuBar.module.css'
import MENU from '../../assets/menu.svg'
export function MenuBar({ setIsMenuShowed }) {
	return (
		<div
			onClick={() => {
				setIsMenuShowed(prev => !prev)
			}}
			className={styles.menuBar}
		>
			<img src={MENU} alt='' />
		</div>
	)
}
