import React from 'react'
import styled from "styled-components"
import NavBar from './NavBar'
import logo from '../assets/cbbc logo.png'

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 3vw;
  padding-right: 3vw;
  padding-top: 1vh;
  padding-bottom: 1vh;
  position: sticky;
  top: 0;
  background-color: white;
  box-shadow: 0px 5px 10px rgba(140, 140, 140, 0.79);
  z-index: 1001;

`

const ProfileInfo = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2vw;
`

const Logo = styled.div`

`

const Header = ({ profile }) => {
  return (
    <NavContainer>
      <Logo>
        <img src={logo} height = "100"/>
      </Logo>

      <NavBar />


      <ProfileInfo>
        <h2>Welcome {profile.name}!</h2>
        <img src={profile.avatar} height="75" />
      </ProfileInfo>
    </NavContainer>
  )
}

export default Header
