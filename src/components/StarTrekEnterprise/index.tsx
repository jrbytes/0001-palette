import { useEnterprise } from './useEnterprise'
import s from './styles.module.css'

export function StarTrekEnterprise () {
  const { isLoading, enterpriseCrew } = useEnterprise()
  
  return (
    <div className={s.wrapper}>
      <h2 className={s.h2}>Star Trek Crew</h2>

      {isLoading ? (
        <p className={s.p}>Loading crew information...</p>
      ) : (
        <ul className={s.ul}>
          {enterpriseCrew.map((member, index) => (
            <li key={index} className={s.li}>{member}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
