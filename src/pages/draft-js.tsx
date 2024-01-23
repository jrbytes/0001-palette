import styles from '@/styles/wrapper.module.css'
import { DraftJS } from '@/components/Draft-js'

export default function DraftJSPage() {
  return <main className={`${styles.wrapper}`}><DraftJS /></main>
}
