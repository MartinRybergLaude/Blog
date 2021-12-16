import React from "react"
import * as styles from "./footer.module.scss"
export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <p className={styles.random}>
        Hello! 👋 Welcome to Martin's little site.
      </p>
      <p className={styles.copyright}>Copyright ©</p>
      <p className={styles.rights}>All rights reserved.</p>
    </footer>
  )
}
