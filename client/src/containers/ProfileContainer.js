import React from "react"
import Profile from "../components/Profile"
import styled from "styled-components"

const Avatars = styled.div`
display: flex;
justify-content: center;
gap: 2vw;
`

const ProfileContainer = ({profile, allProfiles, setProfile}) => {

    const profileNodes = allProfiles.map((pro, index) => {
        return <Profile profile = {pro}/>
    })

    return (
        <>
        <Avatars>
            {profileNodes}
        </Avatars>
        </>
    )
}

export default ProfileContainer