import React from 'react'

const SavedLocations = ({savedCountries, updateSelectedCountry}) => {
  
// When refactoring from savedCountries being objects into storing ids (cca3 from the api) and use this to render the CountryDetails component

  const savedCountryNodes = savedCountries.map((country) => {

    const handleDetailClick = () => {
      updateSelectedCountry(country)
    }

    return (
      <div key={country.properties.sov_a3}>
        <h1>{country.properties.name}</h1>
        <button onClick = {handleDetailClick}>More Details</button>
      </div>
    )
  })
  
  return (
    <div>
      <h2>My saved locations</h2>
      {savedCountryNodes}

      
    </div>
  )
}

export default SavedLocations
