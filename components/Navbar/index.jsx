import Link from "next/link"
import { useRouter } from "next/router"
import { InertiaIcon } from "../../images/icons"
import styles from "./Navbar.module.scss"

const Navbar = () => {
    const router = useRouter();
    const {pathname, route } = router;
    const onHomePage = pathname === "/" || route === "/";

    return (
        <nav id={styles.navigation}>
            <div className={styles.navInner}>
                <div className={styles.navLogo}>
                    <Link href={`/`}>
                        <a>
                            {onHomePage ? <h2>Latest Articles</h2> : <InertiaIcon />}
                        </a>
                    </Link>

                </div>
                <div className={styles.navButtonContainer}>
                    <a href="#0" className={styles.navButton}>All</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;