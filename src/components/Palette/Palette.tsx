import { useCallback, useState } from 'react'
import s from './styles.module.css'

const primaryColors = [
  {
    css: s.primary,
    hex: '#285D66'
  },
  {
    css: s.primaryLight,
    hex: '#387079'
  },
  {
    css: s.primaryDark,
    hex: '#0B404B'
  },
]

const secondaryColors = [
  {
    css: s.secondary,
    hex: '#40C4B8'
  },
  {
    css: s.secondaryLight,
    hex: '#6DE6DC'
  },
  {
    css: s.secondaryDark,
    hex: '#0B8A7C'
  },
]

export function Palette () {
  const [color, setColor] = useState('')

  const copyToClipboard = useCallback((color: string) => {
    navigator.clipboard.writeText(color)
    setColor(color)
    console.log(color.split('#')[1])
  }, [])

  return (
    <div className={s.wrapper}>
      <span className={s.titlePrimary}>Primary Color</span>

      <div className={s.wrapperColors}>
        {primaryColors.map((data) => (
          <div
            key={data.hex}
            className={data.css}
            onClick={() => copyToClipboard(`PrimaryColor: ${data.hex}`)}
          />
        ))}
      </div>

      <br />

      <span className={s.titleSecondary}>Secondary Color</span>
      <div className={s.wrapperColors}>
        {secondaryColors.map((data) => (
          <div
            key={data.hex}
            className={data.css}
            onClick={() => copyToClipboard(`SecondaryColor: ${data.hex}`)}
          />
        ))}
      </div>

      {color && (
        <>
          <br />

          <span
            style={{
              color: `#${color.split('#')[1]}`
            }}
          >
            {color}
          </span>
        </>
      )}
    </div>
  )
}
