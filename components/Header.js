import React from 'react'
import styled from '@emotion/styled'
import { StarIcon } from './Icons'

const Header = () => {
  const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    width: 100%;
    padding: 0 1rem;
    border-bottom: 1px solid rgb(61, 84, 102);
    background-color: rgb(21, 32, 43);
    position: absolute;
    top: 0;
    left: 0;
  `

  const UserIcon = styled.img`
    width: 28px;
    border-radius: 50%;
  `

  const Title = styled.span`
    font-size: 18px;
    font-weight: bold;
  `

  return (
    <HeaderContainer>
      <UserIcon src="/resources/user.jpg" />
      <div>
        <Title>Home</Title>
      </div>
      <StarIcon />
    </HeaderContainer>
  )
}
export default Header
