import React from "react"
import styled from "styled-components"

const ProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    &:hover {
        transform: scale(1.2);
        transition-duration: 0.5s;
    }
`

const Profile = ({profile, selectProfile}) => {
    
    const handleProfileSelect = () => {
        selectProfile(profile)
    }

    return (
        <>
        <ProfileContainer>
            <img src={profile.avatar} width="200" onClick = {handleProfileSelect}/>
            <h3>{profile.name}</h3>
        </ProfileContainer>
        </>
    )
}

export default Profile