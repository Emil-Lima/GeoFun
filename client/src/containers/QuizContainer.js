import React, {useEffect,useState} from 'react'
import Header from '../components/Header'
import styled from 'styled-components';
import GameStart from '../components/GameStart';


const Quiz = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    `

const Question = styled.div`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size:40px;
    margin-top:20px;
    color:#00afd2;
    `


const Button = styled.button`

width:400px;
font-size:40px;
font-family:Verdana, Geneva, Tahoma, sans-serif;
margin:10px;
background-color: #66124e;
color:white;
border:none;
    &:hover{
        text-decoration:underline;
        transform:translateY(4px);
        transition-duration: 0.2s;
    }
`
const Score = styled.h2`
color:#076d5d;
font-size:30px;
`
const ButtonFlex = styled.div`
display: flex;
flex-direction: column;
border:3px solid grey;
padding:30px;
`

const QuizContainer = ({profile , onHomeClick}) => {
    const questions = [{
        questionText: 'What is the capital of France?',
        answerOptions: [
            { answer: 'Riga', isCorrect: false },
            { answer: 'London', isCorrect: false },
            { answer: 'Paris', isCorrect: true },
            { answer: 'Dublin', isCorrect: false },
        ],
    },
    {
        questionText: 'Name a country that drives on the left.',
        answerOptions: [
            { answer: 'Poland', isCorrect: false },
            { answer: 'Croatia', isCorrect: false },
            { answer: 'United Kingdon', isCorrect: true },
            { answer: 'France', isCorrect: false },
        ],
    },
    {
        questionText: 'Which flag contains the colour blue?',
        answerOptions: [
            { answer: 'Belgium', isCorrect: false },
            { answer: 'Ireland', isCorrect: false },
            { answer: 'Austria', isCorrect: false },
            { answer: 'Greece', isCorrect: true },
        ],
    },
    {
        questionText: 'Which country has no coastline?',
        answerOptions: [
            { answer: 'Spain', isCorrect: false },
            { answer: 'Bosnia and Herzegovinia', isCorrect: false },
            { answer: 'Slovakia', isCorrect: true },
            { answer: 'Slovenia', isCorrect: false },
        ],
    },
    {
        questionText: 'What is the capital of Croatia?',
        answerOptions: [
            { answer: 'Zagreb', isCorrect: true },
            { answer: 'Madrid', isCorrect: false },
            { answer: 'Paris', isCorrect: false },
            { answer: 'Dofia', isCorrect: false },
        ],
    },
    {
        questionText: 'Name a country that drives on the right.',
        answerOptions: [
            { answer: 'Ireland', isCorrect: false },
            { answer: 'Cyprus', isCorrect: false },
            { answer: 'Andorra', isCorrect: true },
            { answer: 'Malta', isCorrect: false },
        ],
    },
    {
        questionText: 'Which flag does not contain the colour yellow?',
        answerOptions: [
            { answer: 'Armenia', isCorrect: false },
            { answer: 'Belgium', isCorrect: false },
            { answer: 'Romania', isCorrect: false },
            { answer: 'Estonia', isCorrect: true },
        ],
    },
    {
        questionText: 'Which country has no land borders?',
        answerOptions: [
            { answer: 'Netherlands', isCorrect: false },
            { answer: 'Germany', isCorrect: false },
            { answer: 'Finland', isCorrect: false },
            { answer: 'Iceland', isCorrect: true },
        ],
    },
    {
        questionText: 'What is the capital of Portugal?',
        answerOptions: [
            { answer: 'Stockholm', isCorrect: false },
            { answer: 'Berlin', isCorrect: false },
            { answer: 'Lisbon', isCorrect: true },
            { answer: 'Athens', isCorrect: false },
        ],
    },
    {
        questionText: 'What is the Population of Ukraine?',
        answerOptions: [
            { answer: '4134693', isCorrect: true },
            { answer: '413469', isCorrect: false },
            { answer: '5134693', isCorrect: false },
            { answer: '513469', isCorrect: false },
        ],
    },
    {
        questionText: 'Which flag contains the colour red?',
        answerOptions: [
            { answer: 'Belgium', isCorrect: false },
            { answer: 'Ireland', isCorrect: false },
            { answer: 'Iceland', isCorrect: true },
            { answer: 'Sweden', isCorrect: false },
        ],
    },
    {
        questionText: 'WWhich of these  does not speak German?',
        answerOptions: [
            { answer: 'Germany', isCorrect: false },
            { answer: 'Belgium', isCorrect: false },
            { answer: 'Luxembourg', isCorrect: false },
            { answer: 'Poland', isCorrect: true },
        ],
    },
    {
        questionText: 'What is the capital of Lithuania?',
        answerOptions: [
            { answer: 'Vilnius', isCorrect: true },
            { answer: 'Madrid', isCorrect: false },
            { answer: 'Paris', isCorrect: false },
            { answer: 'Dofia', isCorrect: false },
        ],
    },
    {
        questionText: 'Where is Skopje?',
        answerOptions: [
            { answer: 'Iceland', isCorrect: false },
            { answer: 'Bulgaria', isCorrect: false },
            { answer: 'North Mecedonia', isCorrect: true },
            { answer: 'Estonia', isCorrect: false },
        ],
    },
    {
        questionText: 'Which flag has a cross?',
        answerOptions: [
            { answer: 'Latvia', isCorrect: false },
            { answer: 'Russia', isCorrect: false },
            { answer: 'Austria', isCorrect: false },
            { answer: 'Switzerland', isCorrect: true },
        ],
    },
    {
        questionText: 'Which country has the smallest poulation?',
        answerOptions: [
            { answer: 'Licthenstein', isCorrect: true },
            { answer: 'Germany', isCorrect: false },
            { answer: 'Finland', isCorrect: false },
            { answer: 'Iceland', isCorrect: false },
        ],
    },
    {
        questionText: 'Which country has the largest poulation?',
        answerOptions: [
            { answer: 'Italy', isCorrect: true },
            { answer: 'Spain', isCorrect: false },
            { answer: 'Ukraine', isCorrect: false },
            { answer: 'Poland', isCorrect: false },
        ],
    },
    {
        questionText: 'Where do the residents speak Dutch?',
        answerOptions: [
            { answer: 'Ireland', isCorrect: false },
            { answer: 'Serbia', isCorrect: false },
            { answer: 'Netherlands', isCorrect: true },
            { answer: 'Denmark', isCorrect: false },
        ],
    },
    {
        questionText: 'Where is Warsaw?',
        answerOptions: [
            { answer: 'Italy', isCorrect: false },
            { answer: 'Norway', isCorrect: false },
            { answer: 'Poland', isCorrect: true },
            { answer: 'France', isCorrect: false },
        ],
    },
    {
        questionText: 'Where is Brussels?',
        answerOptions: [
            { answer: 'Portugal', isCorrect: false },
            { answer: 'Belgium', isCorrect: true },
            { answer: 'Bosnia and Herzegovina', isCorrect: false },
            { answer: 'Belarus', isCorrect: false },
        ],
    },
    {
        questionText: 'Where is Copenhagen?',
        answerOptions: [
            { answer: 'Malta', isCorrect: false },
            { answer: 'Finland', isCorrect: false },
            { answer: 'Greece', isCorrect: false },
            { answer: 'Denmark', isCorrect: true },
        ],
    },
    ];

    const [question,setQuestion] = useState(0)
    const [score,setScore] = useState(0)
    const [gameStarted,setGameStarted] = useState(false)
    const [runningScore,setRunningScore] = useState (0)


    const randomQuestions = questions.sort(() => Math.random() - 0.5).slice(0,10)

    const checkAnswer = (event) => {
        const correct = event.target.value
        const newScore = score +1
        if (correct === "true"){
         setScore(newScore) 
            }
        const next = question + 1
        if (next< randomQuestions.length) {
            setQuestion(next)}
        else{
            setRunningScore(score)
            startGame()
        }
            //need to add else statement that sets score as running score and the sets the game to started -> score to 0
        }
        
        const startGame = () =>{
        setGameStarted(!gameStarted)
        setScore(0)}

  return (

    <>
    <Header profile = {profile} onHomeClick = {onHomeClick}/>
    {gameStarted === true?<Quiz>
    <Question>{randomQuestions[question].questionText}</Question>
    <Score> {score}/{randomQuestions.length} </Score>
    <ButtonFlex>
	{randomQuestions[question].answerOptions.map((answerOption, index) => (
		<Button onClick = {checkAnswer} value = {answerOption.isCorrect}>{answerOption.answer}</Button>
	))}
    </ButtonFlex>
    </Quiz>:<GameStart startGame = {startGame} runningScore = {runningScore}/>}
    </>
  )
    }
export default QuizContainer
