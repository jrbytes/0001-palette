import { useIsLoading } from './isLoading'
import s from './styles.module.css'

export function AsyncButton () {
  const { isLoading, simulateAPI } = useIsLoading()
  
  return (
    <div className={s.wrapper}>
      <h2 className={s.h2}>Async Button: {isLoading ? 'Clicked' : 'To Click'}</h2>

      <button className={s.button} onClick={simulateAPI} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Click me!'}
      </button>
    </div>
  )
}
