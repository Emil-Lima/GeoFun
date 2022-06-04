import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import logo from "../assets/cbbc logo.png";

const NavContainer = styled.nav`
  display: flex;
  justify-content: stretch;
  align-items: center;
  padding-left: 3vw;
  padding-right: 3vw;
  position: sticky;
  top: 0;
  background-color: white;
  box-shadow: 0px 5px 10px rgba(140, 140, 140, 0.79);
  z-index: 1;
  height: 12vh;
`;

const ProfileInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2vw;
  width: 30%;
`;

const LogoApp = styled.img`
  max-height: 12vh;
  width: auto;
  cursor: pointer;
`;

const ProfileText = styled.h3`
  font-size: 1rem;
`

const Header = ({ profile, onHomeClick }) => {
  const handleHomeClick = () => {
    onHomeClick();
  };

  return (
    <NavContainer>
      <LogoApp onClick={handleHomeClick} src={logo} height="100" />

      <NavBar />

      <ProfileInfo>
        <ProfileText>Welcome, {profile.name}!</ProfileText>
        <img src={`../img/${profile.avatar}.png`} height="75" />
      </ProfileInfo>
    </NavContainer>
  );
};

export default Header;
