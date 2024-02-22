import styles from '@/styles/wrapper.module.css'
import { StarTrekMission } from '@/components/StarTrekMission'

export default function PalettePage() {
  return <main className={`${styles.wrapper}`}><StarTrekMission /></main>
}
