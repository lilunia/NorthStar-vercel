import styles from './Photos.module.css'
import { useState } from 'react'

export function Photos({ product }) {
	const [activePhoto, setActivePhoto] = useState(product.photos[0])
	return (
		<div className={styles.photos}>
			<div className={styles.photoContainer}>
				<img className={styles.mainPhoto} src={activePhoto} />
			</div>
			<div className={styles.thumbnails}>
				{product.photos.map(photo => {
					return (
						<img
							onClick={() => setActivePhoto(photo)}
							key={photo}
							src={photo}
							className={activePhoto === photo ? styles.active : ''}
						/>
					)
				})}
			</div>
		</div>
	)
}
