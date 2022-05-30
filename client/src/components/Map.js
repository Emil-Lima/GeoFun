import React, {useState} from 'react'
import { MapContainer, TileLayer, Popup, GeoJSON } from 'react-leaflet'
import europeData from "../data/europe-info.json"

const Map = ({countries, addSavedCountry}) => {
  

  return (
    <>
      <MapContainer center={[52.015670, 18.635115]} zoom={4} scrollWheelZoom={false} className="MapContainer" >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      
      {
        europeData.features.map((country, index) => {
            let currentData = ""

            const countryCode = country.properties.iso_a3

            for (let cou of countries) {
              if (cou.cca3 == countryCode) {
                currentData = cou
              }
            }

            const handleClick = () => {
              addSavedCountry(country)
            }


            return (
            <GeoJSON attribution="&copy; credits due..." data={country} key={index}>
                <Popup>
                  <h1>{country.properties.name}</h1>
                  <h2>{currentData.population}</h2>
                  <button onClick = {handleClick}>
                    + Save
                  </button>
                </Popup>
            </GeoJSON>)

        })
      }


      </MapContainer>

  </>
  )
}

export default Map
