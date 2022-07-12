import { Canvas } from "@react-three/fiber"
import React, { Suspense, useEffect, useState } from "react"
import Model from "../models/Model"
import * as styles from "./avatarCanvas.module.scss"

export default function AvatarCanvas() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    isMounted && (
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 2.2], fov: 15 }}
          className={styles.canvas}
        >
          <ambientLight intensity={0.3} />
          <directionalLight intensity={1} position={[0, 0, 2]} />¨
          <directionalLight intensity={1} position={[0, 2, -2]} />¨
          <Model position={[-0.05, -1.55, 0]} />
        </Canvas>
      </Suspense>
    )
  )
}
