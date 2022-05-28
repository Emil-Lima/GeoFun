import React from 'react'
import CountryDetails from '../components/CountryDetails'
import Header from '../components/Header'
import SavedLocations from '../components/SavedLocations'
import Map from '../components/Map'

const AppContainer = () => {
  return (
    <div>
      <Header/>
      <Map/>
      <SavedLocations/>
      <CountryDetails/>
    </div>
  )
}

export default AppContainer