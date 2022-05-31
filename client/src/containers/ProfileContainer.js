import React, {useState} from "react"
import Profile from "../components/Profile"
import styled from "styled-components"
import monster_1 from "../assets/monster_1.png"
import monster_2 from "../assets/monster_2.png"
import monster_3 from "../assets/monster_3.png"
import monster_4 from "../assets/monster_4.png"
import monster_5 from "../assets/monster_5.png"
import monster_6 from "../assets/monster_6.png"
import Footer from "../components/Footer"

const Avatars = styled.div`
display: flex;
justify-content: center;
gap: 2vw;
`

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1vw;
`

const AvatarSelect = styled.div`
    display: flex;
    gap: 2vw;
    
`



const ProfileContainer = ({ allProfiles, addProfile, selectProfile }) => {

    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [avatar, setAvatar] = useState("")

    const handleNameChange = (event) => {
        setName(event.target.value)

    }

    const handleAgeChange = (event) => {
        setAge(event.target.value)

    }

    const handleAvatarChange = (event) => {
        setAvatar(event.target.value)

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addProfile({"name": name, "age": age, "avatar": avatar, saved_countries: []})
        setName("")
        setAge(0)
        event.target.reset()
    }

    
    const profileNodes = allProfiles.map((pro, index) => {
        return <Profile profile={pro} selectProfile = {selectProfile} key={index}/>
    })


    return (
        <>
            <Avatars>
                {profileNodes}
            </Avatars>

            <FormContainer onSubmit = {handleSubmit}>
                <input type="text" placeholder="Your Name" onChange = {handleNameChange} />

                <input type="number" placeholder="Your Age" onChange = {handleAgeChange} />

                <label>Choose Your Avatar</label>
                <AvatarSelect>

                    <label>
                        <input type="radio" name="avatar" value={monster_1} onChange= {handleAvatarChange} />
                        <img src={monster_1} height="70" width="70" />
                    </label>

                    <label>
                        <input type="radio" name="avatar" value={monster_2} onChange= {handleAvatarChange} />
                        <img src={monster_2} height="70" width="70" />
                    </label>

                    <label>
                        <input type="radio" name="avatar" value={monster_3} onChange= {handleAvatarChange} />
                        <img src={monster_3} height="70" width="70" />
                    </label>

                    <label>
                        <input type="radio" name="avatar" value={monster_4} onChange= {handleAvatarChange} />
                        <img src={monster_4} height="70" width="70" />
                    </label>

                    <label>
                        <input type="radio" name="avatar" value={monster_5} onChange= {handleAvatarChange} />
                        <img src={monster_5} height="70" width="70" />
                    </label>

                    <label>
                        <input type="radio" name="avatar" value={monster_6} onChange= {handleAvatarChange} />
                        <img src={monster_6} height="70" width="70" />
                    </label>

                    <input type = "submit" value = "submit"/>

                </AvatarSelect>
            </FormContainer>
        </>
    )
}

export default ProfileContainer