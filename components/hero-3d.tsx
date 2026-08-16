"use client"

import { useEffect, useMemo, useRef, useState, type MutableRefObject } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

interface MouseRef {
  x: number
  y: number
}

function NeuralPoints() {
  const ref = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const count = 650
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 2.3 + Math.random() * 1.8
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [])

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.035
      ref.current.rotation.x += delta * 0.008
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#d6c9a8"
        size={0.022}
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

function WireSphere({ mouse }: { mouse: MutableRefObject<MouseRef> }) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    const mesh = ref.current
    if (!mesh) return
    mesh.rotation.y += delta * 0.02
    mesh.rotation.x += delta * 0.005

    const targetY = mouse.current.x * 0.3
    const targetX = -mouse.current.y * 0.2
    mesh.rotation.z = THREE.MathUtils.lerp(mesh.rotation.z, targetX, 0.03)
    mesh.position.x = THREE.MathUtils.lerp(mesh.position.x, targetY, 0.04)
  })

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[3.6, 1]} />
      <meshBasicMaterial color="#d6c9a8" wireframe transparent opacity={0.06} />
    </mesh>
  )
}

function Scene({ mouse }: { mouse: MutableRefObject<MouseRef> }) {
  return (
    <>
      <NeuralPoints />
      <WireSphere mouse={mouse} />
    </>
  )
}

function useWebGLSupport() {
  const [supported, setSupported] = useState<boolean | null>(null)

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas")
      setSupported(!!(canvas.getContext("webgl2") || canvas.getContext("webgl")))
    } catch {
      setSupported(false)
    }
  }, [])

  return supported
}

function FallbackBackground() {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: "radial-gradient(rgba(214,201,168,0.08) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 0%, transparent 100%)",
      }}
      aria-hidden
    />
  )
}

export default function Hero3D() {
  const mouse = useRef<MouseRef>({ x: 0, y: 0 })
  const [reduced, setReduced] = useState(false)
  const supported = useWebGLSupport()

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    return () => window.removeEventListener("pointermove", onMove)
  }, [])

  if (supported === null) return null
  if (supported === false) return <FallbackBackground />

  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        frameloop={reduced ? "demand" : "always"}
      >
        <Scene mouse={mouse} />
      </Canvas>
    </div>
  )
}
