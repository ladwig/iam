import Head from 'next/head'
import ReactFullpage from "@fullpage/react-fullpage";
import styles from '../styles/main.module.css'
import Navigation from "../components/navigation";
import Contact from "../components/contact";

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
        <ReactFullpage
            scrollOverflow={true}
            sectionsColor={["#eaeaea", "#000"]}
            render={comp =>
                console.log("render prop change") || (
                    <ReactFullpage.Wrapper>
                        <div className="section">
                            <div className={styles.intro}>
                                <h1 className={styles.title}>Hello, <br></br> I'm Daniel Lad<span className={styles.thickLetter}>w</span>ig</h1>
                                <h4 className={styles.subtitle}>B.Sc. business informatics and passionate about the digital tomorrow </h4>
                            </div>
                        </div>
                        <div className="section">
                            <div className={styles.contact}>
                                <Contact></Contact>
                            </div>d
                        </div>

                    </ReactFullpage.Wrapper>
                )
            }
        />
    </div>


  )
}
