import Head from "next/head"
import Link from "next/link"
import { Blur1 } from "../components/Blur"
import styles from "../styles/Error.module.scss"

export default function Error() {

    return (
        <>
            <Head>
                <title>404 | NOT FOUND</title>
                <meta name="description" content="Page Not Found" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Blur1 left="-5%" top="20%" />
            <main id={styles.errorContainer}>
                <div className={styles.errorInner}>
                    <h2 className={styles.errorHeader}>404</h2>
                    <h1 className={styles.errorSubHeader}>Oops! Page not found</h1>
                    <p className={styles.errorParagraph}>This is probably because this page has been taken down or does not exist. <br />Please go back to the homepage by clicking the button below.</p>
                </div>
                <Link href={`/`}>
                    <a>
                        <button className={styles.goBack}>
                            <div className={styles.goBackInner}>
                                Go Back Home
                            </div>
                        </button>
                    </a>
                </Link>
            </main>

        </>
    )
}