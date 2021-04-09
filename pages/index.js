import Head from 'next/head'
import styles from '../styles/main.module.css'
import Navigation from "../components/navigation";
export default function Start() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Daniel </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Get to know Daniel Ladwig, student and digital native." />
      </Head>

{/*      <div className={styles.background}>
          <div className={styles.dot + ' ' + styles.one}></div>
          <div className={styles.dot + ' ' + styles.two}></div>
          <div className={styles.dot + ' ' + styles.three}></div>
      </div>*/}
      <Navigation></Navigation>
    <div className={styles.intro}>
        <h1 className={styles.title}>Hello, <br></br> I'm Daniel Lad<span className={styles.thickLetter}>w</span>ig</h1>
        <h4 className={styles.subtitle}>B.Sc. business informatics and passionate about the digital tomorrow </h4>
    </div>
        <div className={styles.contact}>

        </div>
    </div>
  )
}
