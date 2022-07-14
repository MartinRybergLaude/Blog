import { Canvas } from "@react-three/fiber"
import React from "react"
import Model from "../models/Model"
import * as styles from "./avatarCanvas.module.scss"

export default function AvatarCanvas() {
  return (
    <div className={styles.scene}>
      <div className={styles.mover}>
        <Canvas camera={{ position: [0, 0, 2.4], fov: 15 }}>
          <ambientLight intensity={0.5} color="#ffd5b5" />
          <directionalLight
            intensity={1}
            position={[-1, 0, 1]}
            color="#ffc5c5"
          />
          ¨
          <directionalLight intensity={1} position={[1, 2, 1]} color="#fff" />
          ¨
          <Model position={[0.05, -1.56, 0]} />
        </Canvas>
      </div>
    </div>
  )
}
