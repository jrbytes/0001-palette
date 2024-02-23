import { useMemo, useState } from 'react'

export const useCrew = () => {
  const [enterpriseCrew, setEnterpriseCrew] = useState(['Picard', 'Riker', 'Data'])
  const [voyagerCrew, setVoyagerCrew] = useState(['Janeway', 'Chakotay', 'Tuvok'])
  const totalCrewCount = useMemo(() => enterpriseCrew.length + voyagerCrew.length, [enterpriseCrew, voyagerCrew])
  return { enterpriseCrew, voyagerCrew, setEnterpriseCrew, setVoyagerCrew, totalCrewCount }
}