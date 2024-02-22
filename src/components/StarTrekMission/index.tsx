import { useMission } from './useMission'
import s from './styles.module.css'

export function StarTrekMission () {
  const { missionCount, sendMission } = useMission()
  
  return (
    <div className={s.wrapper}>
      <h2 className={s.h2}>Star Trek Missions</h2>

      <div className={s.content}>
        <p>Missions sent: {missionCount}</p>
        <button onClick={sendMission}>Send Mission</button>
      </div>
    </div>
  )
}
