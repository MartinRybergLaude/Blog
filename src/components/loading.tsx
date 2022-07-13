import React from "react"
import * as styles from "./loading.module.scss"

export default function Loading() {
  return (
    <div className={styles.container}>
      <span className={styles.loader}></span>
    </div>
  )
}
