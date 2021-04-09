import Head from 'next/head'
import styles from '../styles/main.module.css'

export default function Start() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Daniel </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Get to know Daniel Ladwig, student and digital native." />
      </Head>
      <main className={styles.background}>

          <div className={styles.dot + ' ' + styles.one}></div>
          <div className={styles.dot + ' ' + styles.two}></div>
          <div className={styles.dot + ' ' + styles.three}></div>
      </main>
    </div>
  )
}
