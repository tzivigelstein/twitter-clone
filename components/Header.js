import { useContext, useState } from 'react'
import styles from './Header.module.css'
import styled from '@emotion/styled'
import authContext from 'context/auth/authContext'
import { AvatarPlaceholder } from 'components/onLoadAnimations/onLoadAnimations'
import { SearchIcon, StarIcon } from 'components/Icons'
import UserIcon from './UserIcon'
import Link from 'next/link'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  padding: 0 1rem;
  border-bottom: 1px solid rgb(61, 84, 102);
  background-color: rgb(21, 32, 43);
  position: sticky;
  top: 0;
  left: 0;
`

const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
`

const InputContainer = styled.div`
  display: flex;
  background-color: rgb(37, 51, 65);

  border-radius: 9999px;
  padding: 0.3rem;
  justify-content: space-around;
  align-items: center;
`

const IconContainer = styled.div`
  margin: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 15px;
  color: #fff;

  &::placeholder {
    color: #8899a6;
  }
`
const Header = ({ layoutConfig }) => {
  const { home, explore } = layoutConfig
  const { user } = useContext(authContext)

  const [focus, setFocus] = useState(false)

  return (
    <HeaderContainer>
      {user ? (
        <Link href={`/${user.username}`}>
          <a>
            <UserIcon user={user} />
          </a>
        </Link>
      ) : (
        <AvatarPlaceholder />
      )}
      {home && (
        <div>
          <Title>Home</Title>
        </div>
      )}
      {explore && (
        <InputContainer className={focus && styles.active_container}>
          <IconContainer>
            <SearchIcon fill={focus ? '#1da1f2' : '#8899a6'} width={18.75} />
          </IconContainer>
          <Input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            placeholder="Search Twitter"
            type="text"
          />
        </InputContainer>
      )}
      <StarIcon />
    </HeaderContainer>
  )
}
export default Header
