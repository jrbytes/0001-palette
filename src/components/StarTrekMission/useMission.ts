import { useCallback, useState } from 'react'

export const useMission = () => {
  const [missionCount, setMissionCount] = useState(0)
  const sendMission = useCallback(() => {
    setMissionCount(missionCount + 1)
  }, [missionCount])
  return { missionCount, sendMission }
}