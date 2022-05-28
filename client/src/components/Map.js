import React from 'react'
import { MapContainer, TileLayer, Popup, GeoJSON } from 'react-leaflet'
import europeData from "../data/europe-info.json"

const Map = () => {
  return (
    <>
      <h1>Map testing</h1>

      <MapContainer center={[52.015670, 18.635115]} zoom={4} scrollWheelZoom={false} className="MapContainer">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      
      {
        europeData.features.map((country, index) => {

            return (
            <GeoJSON attribution="&copy; credits due..." data={country} key={index}>
              <Popup>
                <h3>{country.properties.name}</h3>
              </Popup>
            </GeoJSON>)

        })
      }


      </MapContainer>

  </>
  )
}

export default Map
