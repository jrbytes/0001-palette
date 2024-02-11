import styles from '@/styles/wrapper.module.css'
import { ListsAndKeys, ListsAndKeysProps } from '@/components/ListsAndKeys'
import Image from 'next/image'
import spaceshipCorridor from '@/assets/futuristic-spaceship-corridor.jpg'

const data: ListsAndKeysProps = {
  users: [
    { id: 1, name: 'James T. Kirk', role: 'captain' },
    { id: 2, name: 'Spock', role: 'scientist' },
    { id: 3, name: 'Uhura', role: 'communication' },
  ]
}

export default function ListsAndKeysPage() {
  return (
    <main className={styles.wrapper}>
      <Image
        src={spaceshipCorridor}
        alt="Spaceship corridor"
        width={550}
        height={350}
        style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
      />
      <ListsAndKeys users={data.users} />
    </main>
  )
}
