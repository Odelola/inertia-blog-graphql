import Link from 'next/link'
import React from 'react'
import { InertiaIcon } from '../../images/icons'
import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer id={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerLogo}>
          <Link href={`/`}>
            <a>
              <InertiaIcon />
            </a>
          </Link>
        </div>
        <div className={styles.footerCredits}>
          <h2>Copyright &copy; <a href="http://www.odelolaoluwaseyi.com" target="_blank" rel="noreferrer">ODELOLA OLUWASEYI</a> | Color Pallete inspired by Webflow.io</h2>
        </div>
      </div>
    </footer>
  )
}

export default Footer