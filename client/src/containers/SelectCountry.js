import React, { useState } from "react";
import { MapContainer, TileLayer, GeoJSON, Popup } from "react-leaflet";
import europeData from "../data/europe-info.json"
import Header from "../components/Header"; 
import styled from "styled-components";
import getGoodAnswers from "../data/good-answers";
import getBadAnswers from "../data/bad-answers";

const Button = styled.button`

width:200px;
font-size:20px;
font-family:Verdana, Geneva, Tahoma, sans-serif;
margin:5px;
background-color: #FF6522;
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
flex-direction: column;
width:50vw;
margin:auto;
justify-content: space-between;
align-items: center;
`
const QuestionContainer = styled.div`
display: flex;
gap: 2vw;
`
const Title = styled.h2`
font-family:Verdana, Geneva, Tahoma, sans-serif;
color: #076d5d;
`

const P = styled.p`
font-size: 150%;
`

const SelectCountry = ({profile, onHomeClick}) => {

  const [mysteryCountry, setMysteryCountry] = useState(null);
  const [userSelection, setUserSelection] = useState(null);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);
  const [goodAnswer, setGoodAnswer] = useState(null);
  const [badAnswer, setBadAnswer] = useState(null);

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

    const listOfGoodAnswers = getGoodAnswers(profile.name, userChoice, mysteryCountry);
    const listOfBadAnswers = getBadAnswers(profile.name, userChoice, mysteryCountry);

    setBadAnswer(listOfBadAnswers[Math.floor(Math.random()*listOfBadAnswers.length)]);
    setGoodAnswer(listOfGoodAnswers[Math.floor(Math.random()*listOfGoodAnswers.length)]);

    checkIfCorrect(userChoice);
  }

  const checkIfCorrect = (userChoice) => {
    if (mysteryCountry === null) {
      setUserSelection(null);
    } else {
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
    <Title>Guess the country!</Title>
    <Button onClick={playGame}>Play Game</Button>
    <QuestionContainer>
      {mysteryCountry === null ? null : <p>Find {mysteryCountry} on the map!</p>}
    </QuestionContainer>
    </PlayGame>
    
    <MapContainer center={[52.015670, 18.635115]} zoom={4} scrollWheelZoom={false} className="MapContainerGame" >
      <TileLayer
       attribution='&copy; <a href="Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
          url="https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
      />

      {
        europeData.features.map((country, index) => {

          listOfCountries.push(country.properties.name)
          
          return (
            <GeoJSON attribution="&copy; credits due..." data={country} key={index} value={country.properties.name} eventHandlers={{click: getUserChoice}}>
              <Popup>{isCorrectAnswer === null ? null : isCorrectAnswer === true ? <P>{goodAnswer}</P> : <P> {badAnswer}</P>}</Popup>
            </GeoJSON>)       
        })
      }
    </MapContainer>
    </div>
  )
}

export default SelectCountry;