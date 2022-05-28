import React, {useState} from 'react'
import { MapContainer, TileLayer, Popup, GeoJSON } from 'react-leaflet'
import europeData from "../data/europe-info.json"

const Map = ({countries}) => {

  const [currentData, setCurrentData] = useState(null);

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
            const currentData = null

            console.log(country)

            const countryCode = country.properties.sov_a3

            for (let cou of countries) {
              if (cou.cca3 == countryCode) {
                setCurrentData(cou)
              }
            }


            return (
            <GeoJSON attribution="&copy; credits due..." data={country} key={index}>
              <Popup>
              {currentData.name.common}
              </Popup>
            </GeoJSON>)

        })
      }


      </MapContainer>

  </>
  )
}

export default Map
