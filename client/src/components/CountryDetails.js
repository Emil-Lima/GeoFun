import React from "react";
import styled from "styled-components";

const Img = styled.img`
  border: 5px solid black;
  border-radius: 20px;
`;

const DetailContainer = styled.div`
  margin-top: 3vh;
  background-color: rgba(255, 255, 255, 0.84);
  padding: 1vw;
  border: 5px solid black;
  border-radius: 30px;
`;

const FlagContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CountryDetails = ({ selectedCountry, countries }) => {
  const countryLanguages = Object.values(selectedCountry.languages);
  const languageList = countryLanguages.toString();
  // const countryCode = selectedCountry.languages[0].toString()

  return (
    <DetailContainer>
      <h1>{selectedCountry.name.common}</h1>
      {/* <h2>Native Name: {selectedCountry.name.nativeName[countryCode].common}</h2>    <<<< THIS DOESNT WORK BECAUSE THE CCA3 DOESNT ALWAYS MATCH */}
      <FlagContainer>
        <Img src={selectedCountry.flags.png} />
      </FlagContainer>
      <p>
        <b>Capital:</b> {selectedCountry.capital}
      </p>
      <p>
        <b>Population:</b> {selectedCountry.population.toLocaleString("en-US")}
      </p>
      <p>
        <b>National Languages: </b>
        {languageList}
      </p>
      {selectedCountry.landlocked == true ? (
        <p>
          <b>Landlocked</b>
        </p>
      ) : (
        <p>
          <b>Coastal</b>
        </p>
      )}
      <p>
        People in {selectedCountry.name.common} drive on the{" "}
        {selectedCountry.car.side}.
      </p>
    </DetailContainer>
  );
};

export default CountryDetails;
