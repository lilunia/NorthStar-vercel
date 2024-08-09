import styles from './IconMenu.module.css'
import BAG_ICON from '../../assets/shopping-bag.svg'
import HEART from '../../assets/heart.svg'
import { Link } from 'react-router-dom'


export function IconMenu({noOfProductsInCart}) {


	return (
		<ul className={styles.iconMenu}>
			<li>
				<Link className={styles.heart} to='/favourites'>
					<img src={HEART} />
				</Link>
			</li>
			<li>
				<Link to='/cart'>
					<img src={BAG_ICON} />
                    <div className={styles.numberOfItems}>{noOfProductsInCart}</div>
				</Link>
			</li>
		</ul>
	)
}
