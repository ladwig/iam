import styles from '../styles/Button.module.css'

export default function button() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Daniel Ladwig</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.welcome}>I'm Daniel Ladwig</h1>
          <div className={styles.picture}> 
          <img src="/daniel.png" alt="my image" /> 
        </div> 
        </section>
      </main>

      <footer className={styles.footer}>
      
      </footer>
    </div>
  )
}