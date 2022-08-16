import { HeaderContainer } from 'components/Header'
import { ArrowLeftIcon } from 'components/Icons'
import { useRouter } from 'next/router'
import styles from './index.module.css'

export default function ProfileHeader({ user }) {
  const router = useRouter()

  return (
    <HeaderContainer>
      <button className={styles.backButton} onClick={() => router.back()}>
        <ArrowLeftIcon />
      </button>
      <span className={styles.userDisplayName}>{user?.displayName ?? 'Stranger'}</span>
    </HeaderContainer>
  )
}
