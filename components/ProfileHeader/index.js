import { HeaderContainer } from 'components/Header'
import { useRouter } from 'next/router'

export default function ProfileHeader({ user }) {
  const router = useRouter()

  return (
    <HeaderContainer>
      <button onClick={() => router.back()}>Back</button>
      <span>{user?.displayName ?? 'Stranger'}</span>
    </HeaderContainer>
  )
}
