import styled from '@emotion/styled'
import { HomeIcon, SearchIcon, BellIcon, MailIcon } from 'components/Icons'

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
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`
const Icon = styled.img`
  width: 12px;
`

const Nav = () => {
  return (
    <NavContainer>
      <IconContainer>
        <HomeIcon />
      </IconContainer>
      <IconContainer>
        <SearchIcon />
      </IconContainer>
      <IconContainer>
        <BellIcon />
      </IconContainer>
      <IconContainer>
        <MailIcon />
      </IconContainer>
    </NavContainer>
  )
}

export default Nav
