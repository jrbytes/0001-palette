import { motion } from 'framer-motion'
import s from './styles.module.css'
import { useRouter } from 'next/router'

const starTrekCrew = [
  'Kirk',
  'Spock',
  'McCoy',
  'Scotty',
  'Uhura',
  'Sulu',
  'Chekov',
  'Jr Bytes'
]

export function VariantsFramerMotion () {
  const router = useRouter()

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }
  
  return (
    <div className={s.wrapper}>
      <h2 className={s.h2}>Variants Framer Motion</h2>
      <motion.ul variants={container} initial="hidden" animate="visible" className={s.ul}>
        {starTrekCrew.map((name) => (
          <motion.li key={name} variants={item} className={s.li}>{name}</motion.li>
        ))}
      </motion.ul>
      <button onClick={() => router.reload()} className={s.button}>Restart</button>
    </div>
  )
}
