import styles from '@/styles/wrapper.module.css'
import { ComponentsAndProps } from '@/components/ComponentsAndProps'
import male from '@/assets/male.jpg'
import female from '@/assets/female.jpg'
import Image from 'next/image'

export default function ComponentsAndPropsPage() {
  return (
    <main className={`${styles.wrapper}`}>
      <ComponentsAndProps
        id='1'
        firstName='Elijah'
        age='31'
        location='earth'
        beverage='coffee'
        image={<Image src={male} alt='Elijah' width={300} height={200} style={{ objectFit: 'cover' }} />}
      />
      <ComponentsAndProps
        id='2'
        firstName='Daniele'
        age='24'
        location='mars'
        beverage='water'
        image={<Image src={female} alt='Daniele' width={300} height={200} style={{ objectFit: 'cover' }} />}
      />
    </main>
  )
}
