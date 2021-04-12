import styles from '../styles/main.module.css'

export default function Navigation(props) {
    return (
        <div className={styles.footer}>
          Daniel Ladwig - {new Date().getFullYear()}
        </div>
    )
}
