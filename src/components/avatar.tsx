import React, { lazy, Suspense } from "react"
import Loading from "./loading"
import * as styles from "./avatar.module.scss"

const AvatarCanvas = lazy(() => import("../components/avatarCanvas"))

export default function Avatar() {
  const isSSR = typeof window === "undefined"

  return (
    !isSSR && (
      <Suspense fallback={<Loading />}>
        <div className={styles.scene}>
          <div className={styles.mover}>
            <AvatarCanvas />
          </div>
        </div>
      </Suspense>
    )
  )
}
