import React, { useState } from "react";
import Header from "../components/Header";
import { Chart } from "react-google-charts";
import styled from "styled-components";
import europeInfo from "../data/europe-info.json";

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  ${
    "" /* border-radius: 40px;
    border: 20px solid #7448d0;  */
  }
`;

const ButtonContainer = styled.div`
  margin-top: 3vh;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: 20vw;
  font-size: 30px;
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
// const StyledChart =

const PopulationsContainer = ({
  savedCountryObjects,
  profile,
  onHomeClick,
}) => {
  const [currentData, setCurrentData] = useState(europeInfo);
  const [whichData, setWhichData] = useState("europeInfo");

  const popChartData = (countryObjects) => {
    const data = [];

    if (whichData == "savedCountryObjects") {
      countryObjects.map((country) => {
        data.push([
          country.name.common,
          parseInt(country.population),
          "#7448d0",
        ]);
      });
    } else if (whichData == "europeInfo") {
      countryObjects.features.map((country) => {
        data.push([
          country.properties.name,
          country.properties.pop_est,
          "#7448d0",
        ]);
      });
    }

    data.sort(function (a, b) {
      return b[1] - a[1];
    });

    data.unshift(["Country", "Population", { role: "style" }]);

    return data;
  };

  const pieChartData = (countryObjects) => {
    const data = [];

    if (whichData == "savedCountryObjects") {
      countryObjects.map((country) => {
        const popPercent = parseInt(country.population);

        data.push([country.name.common, popPercent]);
      });
      const dataTotal = data.reduce((partialSum, a) => partialSum + a, 0);
      const remainderPop = 746400000 - parseInt(dataTotal);
      data.push(["other", remainderPop]);
      data.unshift(["Country", "Population"]);

      return data;
    } else if (whichData == "europeInfo") {
      countryObjects.features.map((country) => {
        const popPercent = parseInt(country.properties.pop_est);

        data.push([country.properties.name, popPercent]);
      });
      data.unshift(["Country", "Population"]);

      return data;
    }
  };

  const barOptions = {
    title: "COUNTRY POPULATIONS",
    legend: { position: "none" },
    backgroundColor: { fill: "transparent" },
  };

  const pieOptions = {
    title: "COUNTRY POPULATIONS AS PART OF EUROPE'S TOTAL POPULATION",
    legend: { position: "none" },
    backgroundColor: { fill: "transparent" },
  };

  const handleSavedClick = () => {
    setCurrentData(savedCountryObjects);
    setWhichData("savedCountryObjects");
  };

  const handleAllClick = () => {
    setCurrentData(europeInfo);
    setWhichData("europeInfo");
  };

  return (
    <>
      <Header profile={profile} onHomeClick={onHomeClick} />

      <ButtonContainer>
        <Button value={savedCountryObjects} onClick={handleSavedClick}>
          Saved Countries
        </Button>
        <Button value={europeInfo} onClick={handleAllClick}>
          All Countries
        </Button>
      </ButtonContainer>
      <ChartContainer>
        <Container>
          {savedCountryObjects ? (
            <Chart
              chartType="BarChart"
              data={popChartData(currentData)}
              className="population-graph"
              options={barOptions}
            />
          ) : null}
        </Container>
        <Container>
          {savedCountryObjects ? (
            <Chart
              chartType="PieChart"
              data={pieChartData(currentData)}
              className="population-graph"
              options={pieOptions}
            />
          ) : null}
        </Container>
      </ChartContainer>
    </>
  );
};

export default PopulationsContainer;
