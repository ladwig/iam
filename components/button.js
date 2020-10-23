import styles from '../styles/Button.module.css'

export default function Button(props) {
    if(props.type == "secondary") {
        return (
              <a className={`${styles.button} ${styles.secondary}`} href={props.url}>{props.title}</a>
       
          )
    }
  return (
        <a className={`${styles.button} ${styles.main}`} href={props.url}>{props.title}</a>
  )
}
