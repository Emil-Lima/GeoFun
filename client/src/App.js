import './App.css';
import React, {useState, useEffect} from 'react';
import AppContainer from './containers/AppContainer';
import ProfileContainer from './containers/ProfileContainer';
import monster_1 from "./assets/monster_1.png"
import monster_2 from "./assets/monster_2.png"
import monster_3 from "./assets/monster_3.png"
import monster_4 from "./assets/monster_4.png"
import monster_5 from "./assets/monster_5.png"
import monster_6 from "./assets/monster_6.png"


function App() {

  const [countries, setCountries] = useState([])
  const [savedCountries, setSavedCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [profile, setProfile] = useState(null)
  const [allProfiles, setAllProfiles] = useState(
    [{ 
      _id: 1,
      name: "Matt",
      age: 10,
      avatar: monster_1,
      saved_countries: []  
    },

    { 
      _id: 2,
      name: "Jazz",
      age: 9,
      avatar: monster_2,
      saved_countries: []  
    },
    { 
      _id: 3,
      name: "Emilio",
      age: 11,
      avatar: monster_3,
      saved_countries: []  
    },
    { 
      _id: 4,
      name: "Derek",
      age: 8,
      avatar: monster_4,
      saved_countries: []  
    }
  ]
  )

  useEffect(() => {
    fetchCountries()
  }, [])

  const fetchCountries = () => {

    fetch("https://restcountries.com/v3.1/region/europe")
    .then((res) => res.json())
    .then((countries) => setCountries(countries))
}


  const addSavedCountry = (country) => {
    const temp = [... savedCountries]
    const isOnList = temp.some((cou) => {
      return country.properties.sov_a3 == cou.properties.sov_a3
    } )

    if (!isOnList){
      temp.push(country)
    }
    setSavedCountries(temp)
  }

  const updateSelectedCountry = (country) => {
    setSelectedCountry(country)
  }

  const addProfile = (profile) => {
    const temp = [... allProfiles]
    temp.push(profile)

    setAllProfiles(temp)
    
  }

  const selectProfile = (prof) => {
    setProfile(prof)
  }



  return (
    <>
      {profile ? <AppContainer countries = {countries} savedCountries = {savedCountries} selectedCountry = {selectedCountry} addSavedCountry={addSavedCountry} updateSelectedCountry = {updateSelectedCountry} profile = {profile}/> : <ProfileContainer allProfiles = {allProfiles} addProfile = {addProfile} selectProfile = {selectProfile}/>}
      
    </>
    
  )
}

export default App;
