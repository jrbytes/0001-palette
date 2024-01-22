import s from './styles.module.css'
import { MyEditor } from './MyEditor'

export function DraftJS() {
  return (
    <div className={s.wrapper}>
      <MyEditor />
    </div>
  )
}
