import React from 'react'

const SavedLocations = ({ savedCountries, savedCountryObjects, updateSelectedCountry, fetchCountryObjects, profile }) => {

  
  const savedCountryNodes = savedCountryObjects.map((country) => {

    const handleDetailClick = () => {
      updateSelectedCountry(country)
    }

    return (
      <div key={country.cca3}>
        <h1>{country.name.common}</h1>
        <button onClick={handleDetailClick}>More Details</button>
      </div>

    )
  })


  return (
    <>
      <div>
        <h2>{profile.name}'s saved locations</h2>
        {savedCountryNodes}


      </div>
    </>
  )
}

export default SavedLocations
