import React from 'react'

const CountryDetails = ({selectedCountry, countries}) => {
  
  const countryData = countries.filter((cou) => {
    return selectedCountry.properties.iso_a3 == cou.cca3
  })[0]
  
  const countryCode = countryData.cca3

  
  const countryLanguages = Object.values(countryData.languages)
  const languageList = countryLanguages.toString()


  return (
    <div>
      <h1>{countryData.name.common}</h1>
      {/* <h2>Native Name: {countryData[0].name.nativeName[countryCode.toLowerCase()].common}</h2>  <<<< THIS DOESNT WORK BECAUSE THE CCA3 DOESNT ALWAYS MATCH */}
      <img src={countryData.flags.png} />
      <p>Capital: {countryData.capital}</p>
      <p>Population: {countryData.population}</p>
      {countryData.landlocked == true ? <p>Landlocked</p> : <p>Coastal</p>}
      <p>People in {countryData.name.common} drive on the {countryData.car.side} side of the road </p>
      <p>National Languages: {languageList}</p>
    </div>
  )
}

export default CountryDetails
