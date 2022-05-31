import React, { useState } from "react";
import { MapContainer, TileLayer, Popup, GeoJSON } from "react-leaflet";
import europeData from "../data/europe-info.json"

const SelectCountry = () => {

  const [mysteryCountry, setMysteryCountry] = useState(null);
  const [userSelection, setUserSelection] = useState(null);
  const listOfCountries = [];

  const playGame = () => {
    const newMysteryCountry = listOfCountries[Math.floor(Math.random()*listOfCountries.length)];
    console.log(mysteryCountry);
    setMysteryCountry(newMysteryCountry);

    if (userSelection != null) {
      setUserSelection(null);
    }
  }

  const getUserChoice = (country) => {
    setUserSelection(country.target.options.value)
  }

  // const checkIfCorrect = (country) => {
    
  // }

  return (
    <div>
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
              {/* <Popup>
                <h1>{country.properties.name}</h1>
              </Popup> */}
            </GeoJSON>)
            
        })
      }
    </MapContainer>
    <button onClick={playGame}>Play game</button>
    {mysteryCountry === null ? null : <p>Find {mysteryCountry} in the map!</p>}
    {userSelection != null && userSelection == mysteryCountry ? <p>Yes, it is {userSelection}</p> : <p>You are wrong</p>}
    </div>
  )
}

export default SelectCountry;