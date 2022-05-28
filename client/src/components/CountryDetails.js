import React from 'react'

const CountryDetails = ({selectedCountry, countries}) => {
  console.log(selectedCountry)

  return (
    <div>
      <h1>{selectedCountry.properties.name}</h1>
    </div>
  )
}

export default CountryDetails
