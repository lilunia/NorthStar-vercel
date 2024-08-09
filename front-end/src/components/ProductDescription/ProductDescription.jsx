import styles from './ProductDescription.module.css'
import ARROW from '../../assets/arrow.svg'
import { useState } from 'react'

export function ProductDescription({ infos }) {
	const [selectedInfo, setSelectedInfo] = useState(0)

	return (
		<ul className={styles.description}>
			{infos.map((info, index) => {
				return (
					<li key={info.title}>
						<div
							className={styles.descriptionHeader}
							onClick={() => {
								setSelectedInfo(index)

								if (selectedInfo === index) {
									setSelectedInfo(null)
								}
							}}
						>
							<p className={styles.descriptionTitle}>{info.title}</p>
							<img
								className={
									selectedInfo === index
										? styles.selected
										: styles.descriptionImg
								}
								src={ARROW}
							/>
						</div>

						{selectedInfo === index && <p className={styles.descriptionContent}>{info.content}</p>}
					</li>
				)
			})}
		</ul>
	)
}
