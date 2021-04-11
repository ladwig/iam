import Head from 'next/head'
import ReactFullpage from "@fullpage/react-fullpage";
import styles from '../styles/main.module.css'
import Navigation from "../components/navigation";
import Contact from "../components/contact";
import ArrowDown from "../components/arrowDown";

export default function Start() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Daniel </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Get to know Daniel Ladwig, student and digital native." />
      </Head>

        <ReactFullpage
            scrollOverflow={true}
            sectionsColor={["#eaeaea", "#000"]}
            render={comp =>
                 (
                    <ReactFullpage.Wrapper>
                        <div className="section">
                            <>
                            <Navigation></Navigation>
                            <div className={styles.intro}>
                                <h1>Hello, <br></br>I'm Daniel Ladwig</h1>
                                <h3 className={styles.description}>B.Sc. business informatics and passionate about the digital tomorrow </h3>
                            </div>
                                <ArrowDown></ArrowDown>
                            </>
                        </div>
                        <div className={"section" + ' ' + styles.contact}>
                              <> <Contact></Contact></>
                        </div>

                    </ReactFullpage.Wrapper>
                )
            }
        />
    </div>


  )
}
