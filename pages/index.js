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
      <section className={styles.picture}> 
            <img src="/daniel.png" alt="my image" /> 
          </section> 
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.welcome}>I'm Daniel Ladwig</h1>
          <div className={styles.buttongroup}>
            <Button type="main" url="mailto:ladwig.daniel@icloud.com" title="Contact me "name="contact"/>
            <Button type="secondary" url="google.de" title="Download CV" name="cv"/>
          </div>
        </section>
        <footer className={styles.footer}>
        <ul className={styles.menu}>
          <li className={styles.item}><a href="#">Code</a></li>
          <li className={styles.item}><a href="http//:linkedin.ladwig.digital" target="_blank">Experience</a></li>
          <li className={styles.item}><a href="#">Music</a></li>
        </ul>
      </footer>
      </main>
    </div>
  )
}
