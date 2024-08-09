import styles from './Button.module.css'
export function Button({ children, onClick, makeWhite, border, fullWidth, disabled }) {
	return (
		<button
			className={`${styles.button} ${makeWhite ? styles.white : ''} ${border ? styles.border : ''} ${fullWidth ? styles.fullWidth : ''}`}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	)
}
