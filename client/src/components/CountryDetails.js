import React from 'react'

const CountryDetails = ({selectedCountry, countries}) => {

  
  const countryLanguages = Object.values(selectedCountry.languages)
  const languageList = countryLanguages.toString()
  // const countryCode = selectedCountry.languages[0].toString()


  return (
    <div>
      <h1>{selectedCountry.name.common}</h1>
      {/* <h2>Native Name: {selectedCountry.name.nativeName[countryCode].common}</h2>    <<<< THIS DOESNT WORK BECAUSE THE CCA3 DOESNT ALWAYS MATCH */}
      <img src={selectedCountry.flags.png} />
      <p>Capital: {selectedCountry.capital}</p>
      <p>Population: {selectedCountry.population}</p>
      {selectedCountry.landlocked == true ? <p>Landlocked</p> : <p>Coastal</p>}
      <p>People in {selectedCountry.name.common} drive on the {selectedCountry.car.side} side of the road </p>
      <p>National Languages: {languageList}</p>
    </div>
  )
}

export default CountryDetails
