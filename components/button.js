import styles from '../styles/Button.module.css'

export default function Button(props) {
    if(props.type == "secondary") {
        return (
            <div className={`${styles.button} ${styles.secondary}`}>
              <a href={props.url}>{props.title}</a>
            </div>
          )
    }
  return (
    <div>
        <a className={`${styles.button} ${styles.main}`} href={props.url}>{props.title}</a>
    </div>
  )
}
