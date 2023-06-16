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
        <title>Daniel Ladwig</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <meta name="description" content="Get to know Daniel Ladwig digital native & product mananger." />
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
                                <h3 className={styles.description}>Managing digital products @Enpal and building creative safespaces @QS1</h3>
                            </div>
                                <ArrowDown></ArrowDown>
                            </>
                        </div>
                        <div className={"section" + ' ' + styles.contact}>
                              <><Contact></Contact></>
                        </div>

                    </ReactFullpage.Wrapper>
                )
            }
        />
    </div>


  )
}
