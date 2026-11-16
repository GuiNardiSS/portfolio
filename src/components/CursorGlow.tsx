import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CursorGlow() {
  const x = useMotionValue(-600)
  const y = useMotionValue(-600)
  const springX = useSpring(x, { stiffness: 90, damping: 22, mass: 0.6 })
  const springY = useSpring(y, { stiffness: 90, damping: 22, mass: 0.6 })

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX)
      y.set(event.clientY)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [x, y])

  return <motion.div className="cursor-glow" style={{ x: springX, y: springY }} aria-hidden="true" />
}
