import React from "react";
import styled from "styled-components";

const ProfileInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    transition-duration: 0.5s;
  }
`;

const ProfileAvatar = styled.img`
  height: 14vh;
  width: auto;
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
    <ProfileInfo>
      <ProfileAvatar
        src={`../img/${profile.avatar}.png`}
        onClick={handleProfileSelect}
      />
      <H3>{profile.name}</H3>
    </ProfileInfo>
  );
};

export default Profile;
