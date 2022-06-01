import React from 'react'
import CountryDetails from '../components/CountryDetails'
import Header from '../components/Header'
import SavedLocations from '../components/SavedLocations'
import Map from '../components/Map'
import styled from "styled-components"
import QuizContainer from './QuizContainer'
import Footer from '../components/Footer'

const Details = styled.div`
display: flex;
justify-content: center;
gap: 5vw;
margin: 0;
`

const SavedContainer = styled.div`
  max-width: 30vw;
  min-width: 30vw;
`

const SelectedContainer = styled.div`
  min-width: 30vw;
  max-width: 30vw;
`

const AppContainer = ({countries, savedCountries, savedCountryObjects, selectedCountry, addSavedCountry, updateSelectedCountry, fetchCountryObjects, profile, onHomeClick}) => {

  return (
    <div>
      <Header profile = {profile} onHomeClick={onHomeClick}/>
      <Map countries = {countries} addSavedCountry = {addSavedCountry} />
      
      <Details>
        <SavedContainer>
          <SavedLocations savedCountries = {savedCountries} savedCountryObjects = {savedCountryObjects} updateSelectedCountry = {updateSelectedCountry} fetchCountryObjects = {fetchCountryObjects} profile = {profile}/>
        </SavedContainer>
        <SelectedContainer>
          {selectedCountry ? <CountryDetails countries = {countries} selectedCountry= {selectedCountry}/> : null }
        </SelectedContainer>
      </Details>
    </div>
  )
}

export default AppContainer