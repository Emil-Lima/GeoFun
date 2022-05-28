import './App.css';
import React, {useState, useEffect} from 'react';
import AppContainer from './containers/AppContainer';


function App() {

  const [countries, setCountries] = useState([])
  const [savedCountries, setSavedCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)

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



  return (
    <>
      {countries ? <AppContainer countries = {countries} savedCountries = {savedCountries} addSavedCountry={addSavedCountry} updateSelectedCountry = {updateSelectedCountry}/> : null}
      
    </>
    
  )
}

export default App;
