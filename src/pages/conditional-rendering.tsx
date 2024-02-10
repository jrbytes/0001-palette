import styles from '@/styles/wrapper.module.css'
import { ConditionalRendering, ConditionalRenderingProps } from '@/components/ConditionalRendering'
import { useState } from 'react'

export default function ConditionalRenderingPage() {
  const [spaceship, setSpaceship] = useState<ConditionalRenderingProps['spaceshipPicture']>('1')
  
  return (
    <main className={styles.wrapper}>
      <div style={{ display: 'flex', gap: '0.4rem' }}>
        <button style={{ fontSize: '11px' }} onClick={() => setSpaceship('1')}>SPACESHIP 1</button>
        <button style={{ fontSize: '11px' }} onClick={() => setSpaceship('2')}>SPACESHIP 2</button>
      </div>
      
      <ConditionalRendering spaceshipPicture={spaceship} />
    </main>
  )
}
