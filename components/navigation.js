import styles from '../styles/navigation.module.css'

export default function Navigation(props) {
    return (
        <div className={styles.navbar}>
           <ul>
               <li>
                   <a onClick={() => fullpage_api.moveSectionDown()}>Contact</a>
               </li>
               <li>
                   <a href="https://github.com/ladwig" rel="noreferrer" target="_blank">Code</a>
               </li>
               <li>
                   <a href="https://www.linkedin.com/in/daniel-ladwig-10a22715b/" rel="noreferrer" target="_blank">Experience</a>
               </li>
           </ul>
        </div>
    )
}
