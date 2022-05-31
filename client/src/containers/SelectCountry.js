import React from "react";
import { MapContainer, TileLayer, Popup, GeoJSON } from "react-leaflet";
import europeData from "../data/europe-info.json"

const SelectCountry = () => {

  const listOfCountries = [];

  const playGame = () => {
    const mysteryCountry = listOfCountries[Math.floor(Math.random()*listOfCountries.length)];
    console.log(mysteryCountry)
    return mysteryCountry;
  }

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
            <GeoJSON attribution="&copy; credits due..." data={country} key={index}>
              <Popup>
                <h1>{country.properties.name}</h1>
              </Popup>
            </GeoJSON>)
            
        })
      }
    </MapContainer>
    <button onClick={playGame}>Play game</button>
    </div>
  )
}

export default SelectCountry;