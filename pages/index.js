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
          <li className={styles.item}><a href="#">Contact</a></li>
          <li className={styles.item}><a href="#">Code</a></li>
          <li className={styles.item}><a href="http//:linkedin.ladwig.digital" target="_blank">Experience</a></li>
          <li className={styles.item}><a href="#">Music</a></li>
        </ul>

      </main>
    </div>
  )
}
