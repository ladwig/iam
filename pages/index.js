import Head from 'next/head'
import Button from '../components/button'
import styles from '../styles/Start.module.css'

export default function Start() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>Daniel Ladwig</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
    
          <h1 className={styles.welcome}>I'm Daniel Ladwig</h1>
        <ul className={styles.menu}>
          <li className={styles.item}><a href="mailto:ladwig.daniel@icloud.com?subject=Hola!&body=How ya doin?">Contact</a></li>
          <li className={styles.item}><a href="http://code.ladwig.digital" target="_blank">Code</a></li>
          <li className={styles.item}><a href="http://linkedin.ladwig.digital" target="_blank">Experience</a></li>
    
        </ul>

      </main>
    </div>
  )
}
