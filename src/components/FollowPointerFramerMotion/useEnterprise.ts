import { useEffect, useState } from 'react'

export const useEnterprise = () => {
  const [enterpriseCrew, setEnterpriseCrew] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const loadEnterpriseCrew = () => {
    setTimeout(() => { startEnterprise() }, 2000)
  }
  useEffect(() => {
    loadEnterpriseCrew()
  }, [loadEnterpriseCrew])
  const startEnterprise = () => {
    setIsLoading(false)
    const crew = ['Picard', 'Riker', 'Data', 'Geordi', 'Worf']
    setEnterpriseCrew(crew)
  }
  return { enterpriseCrew, isLoading }
}