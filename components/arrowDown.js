import styles from '../styles/main.module.css'
import Image from "next/image";

export default function ArrowDown(props) {
    return (
        <div className={styles.arrowDown}>
            <a onClick={() => fullpage_api.moveSectionDown()}><Image src="/arrow.svg" height={30} width={30} /></a>
        </div>
    )
}
