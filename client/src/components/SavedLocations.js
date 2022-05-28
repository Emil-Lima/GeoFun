import React from 'react'

const SavedLocations = ({savedCountries}) => {
  
  const savedCountryNodes = savedCountries.map((country) => {
    return (
      <>
        <h1>{country.properties.name}</h1>
      </>
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
