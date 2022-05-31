import React, {useEffect,useState} from 'react'
import Header from '../components/Header'

const QuizContainer = () => {

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
    <h1>{questions[question].questionText}</h1>
    <h2> {score} </h2>
    <div>
	{questions[question].answerOptions.map((answerOption, index) => (
		<button onClick = {checkAnswer} value = {answerOption.isCorrect}>{answerOption.answer}</button>
	))}
    </div>
    </>
  )
    }
export default QuizContainer
