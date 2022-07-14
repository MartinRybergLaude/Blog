import React, { lazy, Suspense } from "react"
import Loading from "./loading"
import * as styles from "./avatar.module.scss"
import ClientOnly from "./clientOnly"

const AvatarCanvas = lazy(() => import("../components/avatarCanvas"))

export default function Avatar() {
  return (
    <ClientOnly>
      <Suspense fallback={<Loading />}>
        <div className={styles.scene}>
          <div className={styles.mover}>
            <AvatarCanvas />
          </div>
        </div>
      </Suspense>
    </ClientOnly>
  )
}
