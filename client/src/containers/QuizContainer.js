import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import GameStart from "../components/GameStart";

const Quiz = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Question = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 40px;
  margin-top: 20px;
  color: #00afd2;
`;

const Button = styled.button`
  width: 400px;
  font-size: 40px;
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
const Score = styled.h2`
  color: #076d5d;
  font-size: 30px;
`;
const ButtonFlex = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid grey;
  padding: 30px;
`;

const QuizContainer = ({ profile, onHomeClick }) => {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answer: "Riga", isCorrect: false },
        { answer: "London", isCorrect: false },
        { answer: "Paris", isCorrect: true },
        { answer: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Name a country that drives on the left.",
      answerOptions: [
        { answer: "Poland", isCorrect: false },
        { answer: "Croatia", isCorrect: false },
        { answer: "United Kingdom", isCorrect: true },
        { answer: "France", isCorrect: false },
      ],
    },
    {
      questionText: "Which flag contains the colour blue?",
      answerOptions: [
        { answer: "Belgium", isCorrect: false },
        { answer: "Ireland", isCorrect: false },
        { answer: "Austria", isCorrect: false },
        { answer: "Greece", isCorrect: true },
      ],
    },
    {
      questionText: "Which country has no coastline?",
      answerOptions: [
        { answer: "Spain", isCorrect: false },
        { answer: "Bosnia and Herzegovinia", isCorrect: false },
        { answer: "Slovakia", isCorrect: true },
        { answer: "Slovenia", isCorrect: false },
      ],
    },
    {
      questionText: "What is the capital of Croatia?",
      answerOptions: [
        { answer: "Zagreb", isCorrect: true },
        { answer: "Madrid", isCorrect: false },
        { answer: "Paris", isCorrect: false },
        { answer: "Sofia", isCorrect: false },
      ],
    },
    {
      questionText: "Name a country that drives on the right.",
      answerOptions: [
        { answer: "Ireland", isCorrect: false },
        { answer: "Cyprus", isCorrect: false },
        { answer: "Andorra", isCorrect: true },
        { answer: "Malta", isCorrect: false },
      ],
    },
    {
      questionText: "Which flag does not contain the colour yellow?",
      answerOptions: [
        { answer: "Armenia", isCorrect: false },
        { answer: "Belgium", isCorrect: false },
        { answer: "Romania", isCorrect: false },
        { answer: "Estonia", isCorrect: true },
      ],
    },
    {
      questionText: "Which country has no land borders?",
      answerOptions: [
        { answer: "Netherlands", isCorrect: false },
        { answer: "Germany", isCorrect: false },
        { answer: "Finland", isCorrect: false },
        { answer: "Iceland", isCorrect: true },
      ],
    },
    {
      questionText: "What is the capital of Portugal?",
      answerOptions: [
        { answer: "Stockholm", isCorrect: false },
        { answer: "Berlin", isCorrect: false },
        { answer: "Lisbon", isCorrect: true },
        { answer: "Athens", isCorrect: false },
      ],
    },
    {
      questionText: "What is the approximate population of Spain?",
      answerOptions: [
        { answer: "40,000,000", isCorrect: true },
        { answer: "60,000,000", isCorrect: false },
        { answer: "50,000,000", isCorrect: false },
        { answer: "30,000,000", isCorrect: false },
      ],
    },
    {
      questionText: "Which flag contains the colour red?",
      answerOptions: [
        { answer: "Belgium", isCorrect: false },
        { answer: "Ireland", isCorrect: false },
        { answer: "Iceland", isCorrect: true },
        { answer: "Sweden", isCorrect: false },
      ],
    },
    {
      questionText: "Which of these does not speak German?",
      answerOptions: [
        { answer: "Germany", isCorrect: false },
        { answer: "Belgium", isCorrect: false },
        { answer: "Luxembourg", isCorrect: false },
        { answer: "Poland", isCorrect: true },
      ],
    },
    {
      questionText: "What is the capital of Lithuania?",
      answerOptions: [
        { answer: "Vilnius", isCorrect: true },
        { answer: "Madrid", isCorrect: false },
        { answer: "Paris", isCorrect: false },
        { answer: "Sofia", isCorrect: false },
      ],
    },
    {
      questionText: "Where is Skopje?",
      answerOptions: [
        { answer: "Iceland", isCorrect: false },
        { answer: "Bulgaria", isCorrect: false },
        { answer: "North Mecedonia", isCorrect: true },
        { answer: "Estonia", isCorrect: false },
      ],
    },
    {
      questionText: "Which flag has a cross?",
      answerOptions: [
        { answer: "Latvia", isCorrect: false },
        { answer: "Russia", isCorrect: false },
        { answer: "Austria", isCorrect: false },
        { answer: "Switzerland", isCorrect: true },
      ],
    },
    {
      questionText: "Which country has the smallest population?",
      answerOptions: [
        { answer: "Licthenstein", isCorrect: true },
        { answer: "Germany", isCorrect: false },
        { answer: "Finland", isCorrect: false },
        { answer: "Iceland", isCorrect: false },
      ],
    },
    {
      questionText: "Which country has the largest population?",
      answerOptions: [
        { answer: "Italy", isCorrect: true },
        { answer: "Spain", isCorrect: false },
        { answer: "Ukraine", isCorrect: false },
        { answer: "Poland", isCorrect: false },
      ],
    },
    {
      questionText: "Where do the residents speak Dutch?",
      answerOptions: [
        { answer: "Ireland", isCorrect: false },
        { answer: "Serbia", isCorrect: false },
        { answer: "Netherlands", isCorrect: true },
        { answer: "Denmark", isCorrect: false },
      ],
    },
    {
      questionText: "Where is Warsaw?",
      answerOptions: [
        { answer: "Italy", isCorrect: false },
        { answer: "Norway", isCorrect: false },
        { answer: "Poland", isCorrect: true },
        { answer: "France", isCorrect: false },
      ],
    },
    {
      questionText: "Where is Brussels?",
      answerOptions: [
        { answer: "Portugal", isCorrect: false },
        { answer: "Belgium", isCorrect: true },
        { answer: "Bosnia and Herzegovina", isCorrect: false },
        { answer: "Belarus", isCorrect: false },
      ],
    },
    {
      questionText: "Where is Copenhagen?",
      answerOptions: [
        { answer: "Malta", isCorrect: false },
        { answer: "Finland", isCorrect: false },
        { answer: "Greece", isCorrect: false },
        { answer: "Denmark", isCorrect: true },
      ],
    },
  ];

  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [runningScore, setRunningScore] = useState(0);
  const [randomQuestions, setRandomQuestions] = useState([]);

  const getRandomQuestions = () => {
    return questions.sort(() => Math.random() - 0.5).slice(0, 5);
  };

  useEffect(() => {
    if (gameStarted === false) {
      setRandomQuestions(getRandomQuestions);
    }
  }, [gameStarted]);

  const checkAnswer = (event) => {
    const correct = event.target.value;
    let newScore = score;
    if (correct === "true") {
      newScore++;
      setScore(newScore);
    }
    const next = question + 1;
    if (next < randomQuestions.length) {
      setQuestion(next);
    } else {
      // Have to use newScore here because the score state does not update fast enough
      setRunningScore(newScore);
      startGame();
    }
  };

  const startGame = () => {
    setQuestion(0);
    setGameStarted(!gameStarted);
    setScore(0);
  };

  return (
    <>
      <Header profile={profile} onHomeClick={onHomeClick} />
      {gameStarted === true && randomQuestions != [] ? (
        <Quiz>
          <Question>{randomQuestions[question].questionText}</Question>
          <Score>
            {" "}
            {score}/{randomQuestions.length}{" "}
          </Score>
          <ButtonFlex>
            {randomQuestions[question].answerOptions.map(
              (answerOption, index) => (
                <Button
                  onClick={checkAnswer}
                  value={answerOption.isCorrect}
                  key={index}
                >
                  {answerOption.answer}
                </Button>
              )
            )}
          </ButtonFlex>
        </Quiz>
      ) : (
        <GameStart startGame={startGame} runningScore={runningScore} />
      )}
    </>
  );
};
export default QuizContainer;
