import styles from '@/styles/wrapper.module.css'
import { StarTrekEnterprise } from '@/components/StarTrekEnterprise'

export default function StarTrekEnterprisePage() {
  return <main className={`${styles.wrapper}`}><StarTrekEnterprise /></main>
}
