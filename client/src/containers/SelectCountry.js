import React, { useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import europeData from "../data/europe-info.json"
import Header from "../components/Header"; 
import styled from "styled-components";

const Button = styled.button`

width:300px;
font-size:30px;
font-family:Verdana, Geneva, Tahoma, sans-serif;
margin:10px;
background-color: #00af2d;
color:white;
border:none;
    &:hover{
        text-decoration:underline;
        transform:translateY(4px);
        transition-duration: 0.2s;
    }
`
const PlayGame = styled.div`
display: flex;
flex-direction: row;
width:50%;
margin:auto;
justify-content: space-between;
`

const SelectCountry = ({profile, onHomeClick}) => {

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
    <Header profile={profile} onHomeClick = {onHomeClick}></Header>
    <PlayGame>
    <h2>Guess the country!</h2>
    <Button onClick={playGame}>Play game</Button>
    </PlayGame>
    {mysteryCountry === null ? null : <p>Find {mysteryCountry} in the map!</p>}
    {isCorrectAnswer === null ? null : isCorrectAnswer === true ? <p>Correct, you have found {mysteryCountry}!</p> : <p>Nope, that is {userSelection}</p>}
    <MapContainer center={[52.015670, 18.635115]} zoom={4} scrollWheelZoom={false} className="MapContainer" >
      <TileLayer
       attribution='&copy; <a href="Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
          url="https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
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
    </div>
  )
}

export default SelectCountry;