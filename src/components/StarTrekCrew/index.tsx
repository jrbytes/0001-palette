import { useCrew } from './useCrew'
import s from './styles.module.css'

export function StarTrekCrew () {
  const { totalCrewCount, setEnterpriseCrew } = useCrew()
  
  return (
    <div className={s.wrapper}>
      <h2 className={s.h2}>Star Trek Crew</h2>

      <div className={s.content}>
        <p>Total Crew Count: {totalCrewCount}</p>
        <button onClick={() => setEnterpriseCrew((previous) => [...previous, 'Worf'])}>Add Worf to Enterprise</button>
      </div>
    </div>
  )
}
