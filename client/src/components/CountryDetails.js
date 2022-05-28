import React from 'react'

const CountryDetails = ({selectedCountry, countries}) => {
  
  const countryData = countries.filter((cou) => {
    return selectedCountry.properties.iso_a3 == cou.cca3
  })
  
  const countryCode = countryData[0].cca3

  
  const countryLanguages = Object.values(countryData[0].languages)
  const languageList = countryLanguages.toString()


  return (
    <div>
      <h1>{countryData[0].name.common}</h1>
      {/* <h2>Native Name: {countryData[0].name.nativeName[countryCode.toLowerCase()].common}</h2>  <<<< THIS DOESNT WORK BECAUSE THE CCA3 DOESNT ALWAYS MATCH */}
      <img src={countryData[0].flags.png} />
      <p>Capital: {countryData[0].capital}</p>
      <p>Population: {countryData[0].population}</p>
      {countryData[0].landlocked == true ? <p>Landlocked</p> : <p>Coastal</p>}
      <p>People in {countryData[0].name.common} drive on the {countryData[0].car.side} side of the road </p>
      <p>National Languages: {languageList}</p>
    </div>
  )
}

export default CountryDetails
