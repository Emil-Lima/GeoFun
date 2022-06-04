import React, { useState } from "react";
import { MapContainer, TileLayer, Popup, GeoJSON } from "react-leaflet";
import europeData from "../data/europe-info.json";
import styled from "styled-components";

const Button = styled.button`
  width: 5vw;
  font-size: 15px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin: 10px;
  background-color: #008aaa;
  color: white;
  border: none;
  &:hover {
    text-decoration: underline;
    transform: translateY(4px);
    transition-duration: 0.2s;
  }
`;

const Map = ({ countries, addSavedCountry }) => {
  return (
    <MapContainer
      center={[52.01567, 18.635115]}
      zoom={4}
      scrollWheelZoom={false}
      className="MapContainer"
    >
      <TileLayer
        attribution='&copy; <a href="Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
        url="https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
      />

      {europeData.features.map((country, index) => {
        let currentData = "";

        const countryCode = country.properties.iso_a3;

        for (let cou of countries) {
          if (cou.cca3 == countryCode) {
            currentData = cou;
          }
        }

        const handleClick = () => {
          addSavedCountry(currentData.cca3);
        };

        return (
          <GeoJSON
            attribution="&copy; credits due..."
            data={country}
            key={index}
          >
            <Popup>
              <h3>
                {country.properties.name} {currentData.flag}
              </h3>
              <h4>{currentData.subregion}</h4>

              <Button onClick={handleClick}>Save</Button>
            </Popup>
          </GeoJSON>
        );
      })}
    </MapContainer>
  );
};

export default Map;
