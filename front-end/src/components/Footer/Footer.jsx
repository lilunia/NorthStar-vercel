import styles from './Footer.module.css'
import img_masterCard from '../../icons/mastercard.jpg'
import img_payPal from '../../icons/payPal.jpg'
import img_visa from '../../icons/visa.jpg'
import img_visaElectron from '../../icons/visaElectron.jpg'
import ARROW from '../../assets/arrow.svg'
import { CenteredContent } from '../CenteredContent/CenteredContent'
import { NavLink } from 'react-router-dom'

const footerInfo2 = ['Tracking', 'Order Status', 'Delivery', 'Shipping Info', 'FAQ']
const footerInfo3 = ['Special Offers', 'Gift Cards', 'Advetising', 'Terms of Use']

export function Footer() {
	return (
		<div className={styles.footer}>
			<CenteredContent>
				<div className={styles.footerMainInfo}>
					<div className={styles.footerColumn}>
						<h5>Company info</h5>
						<NavLink to={'/about-us'}>About Us</NavLink>
						<NavLink to={'/'}>Latest Posts</NavLink>
						<NavLink to={'/contact'}>Contact Us</NavLink>
						<NavLink to={'/shop/woman'}>Shop</NavLink>
					</div>
					<div className={styles.footerColumn}>
						<h5>Help links</h5>

						{footerInfo2.map((info, index) => {
							return (
								<NavLink key={index} to={'/'}>
									{info}
								</NavLink>
							)
						})}
					</div>
					<div className={styles.footerColumn}>
						<h5>Useful links</h5>
						{footerInfo3.map((info, index) => {
							return (
								<NavLink key={index} to={'/'}>
									{info}
								</NavLink>
							)
						})}
					</div>
					<div className={styles.footerColumn}>
						<h5>Get in the know</h5>
						<div>
							<input
								className={styles.footerInput}
								type='text'
								placeholder='Enter email'
							/>
							<img src={ARROW} alt='' />
						</div>
					</div>
				</div>
			</CenteredContent>
			<hr />
			<CenteredContent>
				<div className={styles.footerAddInfo}>
					<div className={styles.footerPolicy}>
						<p>© 2024 NorthStar eCommerce</p>
						<p>Privacy Policy Terms & Conditions</p>
					</div>
					<div className={styles.footerCards}>
						<img src={img_masterCard} />
						<img src={img_visa} />
						<img src={img_visaElectron} />
						<img src={img_payPal} />
					</div>
				</div>
			</CenteredContent>
		</div>
	)
}
