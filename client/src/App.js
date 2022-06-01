import './App.css';
import React, { useState, useEffect } from 'react';
import AppContainer from './containers/AppContainer';
import ProfileContainer from './containers/ProfileContainer';
import Footer from './components/Footer';
import styled from 'styled-components';
import { getUsers, postUser, patchUser } from './services/GeoFunServices';
import SelectCountry from './containers/SelectCountry';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import QuizContainer from './containers/QuizContainer';
import PopulationsContainer from './containers/PopulationsContainer';


const Wrapper = styled.body`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`

function App() {

  const [countries, setCountries] = useState([])
  const [savedCountries, setSavedCountries] = useState([])
  const [savedCountryObjects, setSavedCountryObjects] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [profile, setProfile] = useState(null)
  const [allProfiles, setAllProfiles] = useState([])

  useEffect(() => {
    getUsers()
      .then((res) => setAllProfiles(res))
  }, [])

  useEffect(() => {
    fetchCountries()
  }, [])


  const fetchCountries = () => {

    fetch("https://restcountries.com/v3.1/region/europe")
      .then((res) => res.json())
      .then((countries) => setCountries(countries))
  }


  const addSavedCountry = (id) => {
    const temp = [...savedCountries]
    const isOnList = temp.some((cou) => {
      return id == cou
    })

    if (!isOnList) {
      temp.push(id)
    }

    setSavedCountries(temp)
    fetchCountryObjects(temp)

    if (profile) {
      const tempProfile =
        { ...profile, savedCountries: temp }

      setProfile(tempProfile)
      patchUser(tempProfile)
    }


  }

  const fetchCountryObjects = (codes) => {
    if (codes.length > 0) {
      const url = "https://restcountries.com/v3.1/alpha?codes=" + codes
      fetch(url)
        .then((res) => res.json())
        .then((res) => setSavedCountryObjects(res))
    }

  }

  const updateSelectedCountry = (country) => {
    setSelectedCountry(country)
  }

  const addProfile = (profile) => {
    postUser(profile)
      .then(profileWithID => {
        const temp = [...allProfiles]
        temp.push(profileWithID)
        setAllProfiles(temp)
      })


  }

  const selectProfile = (pro) => {
    setProfile(pro)
    fetchCountryObjects(pro.savedCountries)
    setSavedCountries(pro.savedCountries)
  }

  const onHomeClick = () => {
    setProfile(null)
  }

  return (
    <Wrapper>
      <Router>
        <div>


          <Routes>
            <Route path="/" element=
              {profile ? <AppContainer countries={countries} savedCountries={savedCountries} selectedCountry={selectedCountry} addSavedCountry={addSavedCountry} updateSelectedCountry={updateSelectedCountry}  onHomeClick = {onHomeClick} fetchCountryObjects={fetchCountryObjects} profile={profile} savedCountryObjects={savedCountryObjects} /> : <ProfileContainer allProfiles={allProfiles} addProfile={addProfile} selectProfile={selectProfile}/>}
            />
            
            <Route path="/populations" element=
              {savedCountryObjects && profile? <PopulationsContainer savedCountryObjects={savedCountryObjects} profile={profile} onHomeClick = {onHomeClick}/> : <ProfileContainer allProfiles={allProfiles} addProfile={addProfile} selectProfile={selectProfile} fetchCountryObjects = {fetchCountryObjects} />}
            />

            <Route path="/quiz" element=
            { profile? <QuizContainer profile = {profile} onHomeClick = {onHomeClick}/> : <ProfileContainer allProfiles={allProfiles} addProfile={addProfile} selectProfile={selectProfile} fetchCountryObjects = {fetchCountryObjects} />} 
            />

            <Route path="/selectCountry" element={
              profile ? <SelectCountry profile={profile} onHomeClick = {onHomeClick}/> : <ProfileContainer allProfiles={allProfiles} addProfile={addProfile} selectProfile={selectProfile} />
              
            
            } />

          </Routes>
        </div>
      </Router>

      <Footer></Footer>
    </Wrapper>
  )
}

export default App;
