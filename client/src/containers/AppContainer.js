import React from 'react'
import CountryDetails from '../components/CountryDetails'
import Header from '../components/Header'
import SavedLocations from '../components/SavedLocations'
import Map from '../components/Map'

const AppContainer = ({countries}) => {
  return (
    <div>
      <Header/>
      <Map countries = {countries}/>
      <SavedLocations/>
      <CountryDetails countries = {countries}/>
    </div>
  )
}

export default AppContainer