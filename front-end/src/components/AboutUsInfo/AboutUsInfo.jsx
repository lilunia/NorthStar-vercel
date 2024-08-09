import { CenteredContent } from '../CenteredContent/CenteredContent'
import WOMAN from '../../assets/woman.jpg'
import MAN from '../../assets/man.jpg'
import styles from './AboutUsInfo.module.css'

export function AboutUsInfo() {
	return (
		<CenteredContent>
			<h3>About us</h3>
			<p className={styles.aboutInfo}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam blanditiis itaque eum
				ea et, corrupti placeat, minus, eius sit minima aperiam aliquid. Corporis illo iusto at
				animi qui distinctio nesciunt veniam itaque commodi placeat recusandae explicabo,
				debitis fugiat dolorem. Odit.
			</p>
			<div className={styles.photos}>
				<div className={styles.man}>
					<img
						className={styles.womanImg}
						src={WOMAN}
						alt='woman with black hair and dark eyes - coowner of the shop NorthStar'
					/>
					<p className={styles.name}>Katerina</p>
					<p className={styles.aboutMan}>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam modi,
						eaque excepturi provident corporis tempore voluptate minus quia magnam
						porro possimus, deserunt eius facilis nostrum! Fugit laboriosam officia
						cupiditate ducimus.
					</p>
				</div>
				<div className={styles.man}>
					<img
						className={styles.manImg}
						src={MAN}
						alt='man with dark blond hair and blue eyes - coowner of the shop NorthStar'
					/>
					<p className={styles.name}>Martin</p>
					<p className={styles.aboutMan}>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam modi,
						eaque excepturi provident corporis tempore voluptate minus quia magnam
						porro possimus, deserunt eius facilis nostrum! Fugit laboriosam officia
						cupiditate ducimus.
					</p>
				</div>
			</div>
		</CenteredContent>
	)
}
