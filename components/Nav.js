import styled from '@emotion/styled'
import { HomeIcon, SearchIcon, BellIcon, MailIcon } from 'components/Icons'
import Link from 'next/link'

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 53px;
  background-color: rgb(21, 32, 43);
  border-top: 1px solid rgb(56, 68, 77);

  @media (min-width: 501px) {
    display: none;
  }
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const Nav = ({ layoutConfig }) => {
  const { home, explore, notifications, directs } = layoutConfig
  return (
    <NavContainer>
      <Link href="/home">
        <IconContainer>
          <HomeIcon fill={home ? '#1da1f2' : '#8899a6'} width={26} />
        </IconContainer>
      </Link>
      <Link href="/explore">
        <IconContainer>
          <SearchIcon fill={explore ? '#1da1f2' : '#8899a6'} width={26} />
        </IconContainer>
      </Link>
      <Link href="/">
        <IconContainer>
          <BellIcon fill={notifications ? '#1da1f2' : '#8899a6'} width={26} />
        </IconContainer>
      </Link>
      <Link href="/">
        <IconContainer>
          <MailIcon fill={directs ? '#1da1f2' : '#8899a6'} width={26} />
        </IconContainer>
      </Link>
    </NavContainer>
  )
}

export default Nav
