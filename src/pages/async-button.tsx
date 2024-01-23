import styles from '@/styles/wrapper.module.css'
import { AsyncButton as AsyncButtonComponent } from '@/components/AsyncButton'

export default function AsyncButton() {
  return <main className={`${styles.wrapper}`}><AsyncButtonComponent /></main>
}
