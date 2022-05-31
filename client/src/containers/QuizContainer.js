import React, {useEffect,useState} from 'react'
import Header from '../components/Header'
import styled from 'styled-components';


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
        transition-duration: 0.5s;
    }


`
const ButtonFlex = styled.div`
display: flex;
flex-direction: column;
`
const QuizContainer = ({profile}) => {

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
            { answer: 'Slovakia', isCorrect: false },
            { answer: 'Slovenia', isCorrect: true },
        ],
    },
    ];

    const [question,setQuestion] = useState(0)
    const [score,setScore] = useState(0)

    const checkAnswer = (event) => {
        const correct = event.target.value
        const newScore = score +1
        if (correct === "true"){
         setScore(newScore) 
            }
        const next = question + 1
        if (next< questions.length) {
            setQuestion(next)}

        }

  return (

    <>
    <Header profile = {profile}/>
    <Quiz>
    <Question>{questions[question].questionText}</Question>
    <h2> {score} </h2>
    <ButtonFlex>
	{questions[question].answerOptions.map((answerOption, index) => (
		<Button onClick = {checkAnswer} value = {answerOption.isCorrect}>{answerOption.answer}</Button>
	))}
    </ButtonFlex>
    </Quiz>
    </>
  )
    }
export default QuizContainer
