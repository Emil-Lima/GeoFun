import React from 'react'
import CountryDetails from '../components/CountryDetails'
import Header from '../components/Header'
import SavedLocations from '../components/SavedLocations'
import Map from '../components/Map'
import styled from "styled-components"
import Footer from '../components/Footer'

const Details = styled.section`
display: flex;
justify-content: center;
gap: 10vw;
`

const AppContainer = ({countries, savedCountries, savedCountryObjects, selectedCountry, addSavedCountry, updateSelectedCountry, fetchCountryObjects, profile}) => {
  return (
    <div>
      <Header profile = {profile}/>
      <Map countries = {countries} addSavedCountry = {addSavedCountry} />
      <Details>
        <SavedLocations savedCountries = {savedCountries} savedCountryObjects = {savedCountryObjects} updateSelectedCountry = {updateSelectedCountry} fetchCountryObjects = {fetchCountryObjects} profile = {profile}/>
        {selectedCountry ? <CountryDetails countries = {countries} selectedCountry= {selectedCountry}/> : null }
      </Details>
      <Footer />
    </div>
  )
}

export default AppContainer