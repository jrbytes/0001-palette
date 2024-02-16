import { useCallback, useState } from 'react'

export const useIsLoading = () => {
  const [isLoading, setIsLoading] = useState(false)
  const simulateAPI = useCallback(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])
  return { isLoading, setIsLoading, simulateAPI }
}