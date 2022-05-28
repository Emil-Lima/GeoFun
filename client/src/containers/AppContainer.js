import React from 'react'
import CountryDetails from '../components/CountryDetails'
import Header from '../components/Header'
import SavedLocations from '../components/SavedLocations'
import Map from '../components/Map'

const AppContainer = ({countries, savedCountries, selectedCountry, addSavedCountry, updateSelectedCountry}) => {
  return (
    <div>
      <Header/>
      <Map countries = {countries} addSavedCountry = {addSavedCountry} />
      <SavedLocations savedCountries = {savedCountries} updateSelectedCountry = {updateSelectedCountry}/>
      {selectedCountry ? <CountryDetails countries = {countries} selectedCountry= {selectedCountry}/> : null }
    </div>
  )
}

export default AppContainer