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
      <p><b>Capital:</b> {selectedCountry.capital}</p>
      <p><b>Population:</b> {selectedCountry.population}</p>
      <p><b>National Languages: </b>{languageList}</p>
      {selectedCountry.landlocked == true ? <p><b>Landlocked</b></p> : <p><b>Coastal</b></p>}
      <p>People in {selectedCountry.name.common} drive on the {selectedCountry.car.side}.</p>
    </div>
  )
}

export default CountryDetails
