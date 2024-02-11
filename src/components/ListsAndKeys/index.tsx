import styles from './styles.module.css'

export interface ListsAndKeysProps {
  users: {
    id: number;
    name: string;
    role: string;
  }[];
}

export function ListsAndKeys ({
  users
}: ListsAndKeysProps) {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.ul}>
        {users.map(user => (
          <li key={user.id} aria-label={user.name} className={styles.li}>
            <p>
              <span className={styles.blue}>Name:</span> {user.name}.
              <br />
              <span className={styles.blue}>Role:</span> {user.role}.
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}