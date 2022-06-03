import React from "react";
import styled from "styled-components";

const SavedFlags = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  gap: 0;
`;
const Heading = styled.h2`
  text-align: center;
`;

const P = styled.h4`
  margin: 0;
  padding: 0;
`;

const FlagContainer = styled.div`
  margin: 0;
  padding: 0;
  max-width: 30%;
  text-align: center;
`;

const Flag = styled.img`
  border: 3px solid black;
  border-radius: 10px;
  width: 10vw;
  height: 5vw;
`;

const SavedLocations = ({
  savedCountries,
  savedCountryObjects,
  updateSelectedCountry,
  fetchCountryObjects,
  profile,
}) => {
  const savedCountryNodes = savedCountryObjects.map((country) => {
    const handleDetailClick = () => {
      updateSelectedCountry(country);
    };

    return (
      <FlagContainer key={country.cca3}>
        <P>{country.name.common}</P>
        <Flag src={country.flags.png} onClick={handleDetailClick} />
      </FlagContainer>
    );
  });

  return (
    <>
      <div>
        <Heading>{profile.name}'s saved locations</Heading>
        <SavedFlags>{savedCountryNodes}</SavedFlags>
      </div>
    </>
  );
};

export default SavedLocations;
