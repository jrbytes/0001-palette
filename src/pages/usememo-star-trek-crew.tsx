import styles from '@/styles/wrapper.module.css'
import { StarTrekCrew } from '@/components/StarTrekCrew'

export default function StarTrekCrewPage() {
  return <main className={`${styles.wrapper}`}><StarTrekCrew /></main>
}
