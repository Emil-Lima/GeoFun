import React from 'react'
import CountryDetails from '../components/CountryDetails'
import Header from '../components/Header'
import SavedLocations from '../components/SavedLocations'
import Map from '../components/Map'

const AppContainer = ({countries, savedCountries, addSavedCountry, updateSelectedCountry}) => {
  return (
    <div>
      <Header/>
      <Map countries = {countries} addSavedCountry = {addSavedCountry} />
      <SavedLocations savedCountries = {savedCountries} updateSelectedCountry = {updateSelectedCountry}/>
      <CountryDetails countries = {countries}/>
    </div>
  )
}

export default AppContainer