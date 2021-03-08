import styled from '@emotion/styled'
import styles from 'components/onLoadAnimations/styles.module.css'

export const AvatarPlaceholder = ({ width = '32px' }) => {
  const Avatar = styled.div`
    width: ${width};
    height: ${width};
  `
  return <Avatar className={styles.avatar}></Avatar>
}
