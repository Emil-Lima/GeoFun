import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 400px;
  font-size: 40px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin: 10px;
  background-color: #ff6522;
  color: white;
  border: none;
  padding: 30px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    transform: translateY(4px);
    transition-duration: 0.2s;
  }
`;
const Title = styled.h1`
  font-size: 30px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #4e2f91;
`;
const QuizStartBox = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const P = styled.p`
  font-size: 200%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

const GameStart = ({ startGame, runningScore, numberOfQuestions }) => {
  const onStartClick = () => {
    startGame();
  };

  return (
    <QuizStartBox>
      <Title> Take our quiz and see how many points you can get!</Title>
      {runningScore === numberOfQuestions ? (
        <P>
          Your last score was {runningScore}. You got all {numberOfQuestions}{" "}
          questions right! Can you do it again?
        </P>
      ) : runningScore > 0 ? (
        <P>Your last score was {runningScore}. Can you beat it?</P>
      ) : (
        <P>You can do it!</P>
      )}
      <Button onClick={onStartClick}>Let's Go!</Button>
    </QuizStartBox>
  );
};

export default GameStart;
