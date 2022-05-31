import React, { useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import europeData from "../data/europe-info.json"

const SelectCountry = () => {

  const [mysteryCountry, setMysteryCountry] = useState(null);
  const [userSelection, setUserSelection] = useState(null);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);
  const listOfCountries = [];

  const playGame = () => {
    const newMysteryCountry = listOfCountries[Math.floor(Math.random()*listOfCountries.length)];
    setMysteryCountry(newMysteryCountry);
    setUserSelection(null);
    setIsCorrectAnswer(null);
  }

  const getUserChoice = (country) => {
    setUserSelection(country.target.options.value)

    const userChoice = country.target.options.value;

    checkIfCorrect(userChoice);


  }

  const checkIfCorrect = (userChoice) => {
    if (mysteryCountry === null) {
      console.log("Mystery country is empty");
      setUserSelection(null);
    } else {
      console.log("Mystery country is",mysteryCountry);
      if (userChoice === mysteryCountry) {
        setIsCorrectAnswer(true);
      } else {
        setIsCorrectAnswer(false);
      }
      
    }
  }

  return (
    <div>
    <h2>Guess the country!</h2>
    <MapContainer center={[52.015670, 18.635115]} zoom={4} scrollWheelZoom={false} className="MapContainer" >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {
        europeData.features.map((country, index) => {

          listOfCountries.push(country.properties.name)
          
          return (
            <GeoJSON attribution="&copy; credits due..." data={country} key={index} value={country.properties.name} eventHandlers={{click: getUserChoice}}>
            </GeoJSON>)       
        })
      }
    </MapContainer>
    <button onClick={playGame}>Play game</button>
    {mysteryCountry === null ? null : <p>Find {mysteryCountry} in the map!</p>}
    {isCorrectAnswer === null ? null : isCorrectAnswer === true ? <p>Correct, you have found {mysteryCountry}!</p> : <p>Nope, that is {userSelection}</p>}
    </div>
  )
}

export default SelectCountry;