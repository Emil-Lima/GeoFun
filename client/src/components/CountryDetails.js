import React from 'react'

const CountryDetails = ({selectedCountry, countries}) => {
  
  const countryData = countries.filter((cou) => {
    return selectedCountry.properties.iso_a3 == cou.cca3
  })
  
  const countryCode = countryData[0].cca3


  return (
    <div>
      <h1>{countryData[0].name.common}</h1>
      {/* <h2>Native Name: {countryData[0].name.nativeName[countryCode.toLowerCase()].common}</h2>  <<<< THIS DOESNT WORK BECAUSE THE CCA3 DOESNT ALWAYS MATCH */}
      <img src={countryData[0].flags.png} />
      <p>Capital: {countryData[0].capital}</p>
      <p>Population: {countryData[0].population}</p>

    </div>
  )
}

export default CountryDetails
