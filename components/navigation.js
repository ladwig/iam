import styles from '../styles/main.module.css'

export default function Navigation(props) {
    return (
        <div className={styles.navbar}>
           <ul>
               <li>
                   <a onClick={() => fullpage_api.moveSectionDown()}>Contact</a>
               </li>
               <li>
                   <a href="http://code.ladwig.digital" rel="noreferrer" target="_blank">Code</a>
               </li>
               <li>
                   <a href="http://linkedin.ladwig.digital" rel="noreferrer" target="_blank">Experience</a>
               </li>
           </ul>


        </div>
    )
}
