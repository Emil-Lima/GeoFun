import React from "react";
import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: scale(1.2);
    transition-duration: 0.5s;
  }
`;
const H3 = styled.h3`
  text-align: center;
  color: #3a2279;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;
  font-size: 140%;
`;

const Profile = ({ profile, selectProfile }) => {
  const handleProfileSelect = () => {
    selectProfile(profile);
  };

  return (
    <ProfileContainer>
      <img
        src={`../img/${profile.avatar}.png`}
        width="200"
        onClick={handleProfileSelect}
      />
      <H3>{profile.name}</H3>
    </ProfileContainer>
  );
};

export default Profile;
