import './App.css';
import React, { useState, useEffect } from 'react';
import AppContainer from './containers/AppContainer';
import ProfileContainer from './containers/ProfileContainer';
import Footer from './components/Footer';
import styled from 'styled-components';
import { getUsers, postUser, patchUser } from './services/GeoFunServices';

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

  useEffect(() => {
    if (profile) {
      setSavedCountries(profile.savedCountries)
    }
  }, [profile])


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
      {...profile, savedCountries: temp}

      setProfile(tempProfile)
      patchUser(tempProfile)
    }


  }

  const fetchCountryObjects = (codes) => {
    if (savedCountries.length > 0) {
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
  }



  return (
    <Wrapper>
      {profile ? <AppContainer countries = {countries} savedCountries = {savedCountries} selectedCountry = {selectedCountry} addSavedCountry={addSavedCountry} updateSelectedCountry = {updateSelectedCountry} fetchCountryObjects = {fetchCountryObjects} profile = {profile} savedCountryObjects = {savedCountryObjects}/> : <ProfileContainer allProfiles = {allProfiles} addProfile = {addProfile} selectProfile = {selectProfile}/>}
      <Footer></Footer>
    </Wrapper>
  )
}

export default App;
