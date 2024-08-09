import styles from './FlexCenter.module.css'
export function FlexCenter ({children}){
    return (
        <div className={styles.flexCenter}>{children}</div>
    )
}