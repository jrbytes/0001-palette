import { motion } from 'framer-motion'
import s from './styles.module.css'
import { useRef } from 'react'
import { useFollowPointer } from './useFollowPointer'

export function FollowPointerFramerMotion () {
  const ref = useRef(null)
  const { x, y } = useFollowPointer(ref)
  
  return (
    <div className={s.wrapper}>
      <h2 className={s.h2}>Velocity Framer Motion</h2>
      <motion.div
        ref={ref}
        className={s.box}
        animate={{ x, y }}
        transition={{
          type: "spring",
          damping: 3,
          stiffness: 50,
          restDelta: 0.001
        }}
      />
    </div>
  )
}
