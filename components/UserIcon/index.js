import Link from 'next/link'
import styles from './index.module.css'

export default function UserIcon({ user }) {
  return (
    <Link href={`/${user.username}`}>
      <img src={user.photoURL} className={styles.icon} />
    </Link>
  )
}
