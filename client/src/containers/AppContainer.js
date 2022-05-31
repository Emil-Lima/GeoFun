import React from 'react'
import CountryDetails from '../components/CountryDetails'
import Header from '../components/Header'
import SavedLocations from '../components/SavedLocations'
import Map from '../components/Map'
import styled from "styled-components"
import QuizContainer from './QuizContainer'

const Details = styled.section`
display: flex;
justify-content: center;
gap: 10vw;
`

const AppContainer = ({countries, savedCountries, selectedCountry, addSavedCountry, updateSelectedCountry, profile}) => {
  return (
    <div>
      <Header profile = {profile}/>
      <Map countries = {countries} addSavedCountry = {addSavedCountry} />
      <Details>
        <SavedLocations savedCountries = {savedCountries} updateSelectedCountry = {updateSelectedCountry} profile = {profile}/>
        {selectedCountry ? <CountryDetails countries = {countries} selectedCountry= {selectedCountry}/> : null }
      </Details>
      <QuizContainer/>
    </div>
  )
}

export default AppContainer