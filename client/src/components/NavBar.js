import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGamepad,
  faQuestion,
  faChartPie,
  faMap,
} from "@fortawesome/free-solid-svg-icons";

const Bar = styled.nav`
  height: 100%;
  width: 100%;
`

const Icon = styled(FontAwesomeIcon)`
  display: block;
  margin: auto;
  height: 3vh;
`;

const UL = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0px;
  width: 100%;
  height: 100%;
  margin: 0;
`;

const LI = styled.li`
  list-style: none;
  height: 100%;
  width: 100%;
`;

const Button = styled.button`
  background-color: white;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  text-decoration: none;
  text-shadow: 0px 1px 0px #7d29c2;
  width: 100%;
  height: 100%;
  border: none;
  padding: 0;
  padding-bottom: 5%;


  &:hover {
    background-color: #ededed;
    border-bottom: 4px solid #29c5fe;
  }

  &:visited {
    text-decoration: none;
  }
`;

const LinkText = styled.p`
  color: #551b8c;
  margin-bottom: 1%;
`

const NavBar = () => {
  return (
    <Bar>
      <UL>
        <LI>
          <Link style={{ textDecoration: "none" }} to="/">
            <Button>
              <LinkText>Map</LinkText>
              <Icon icon={faMap} style={{ color: "#f73500" }} />
            </Button>
          </Link>
        </LI>
        <LI>
          <Link style={{ textDecoration: "none" }} to="/populations">
            <Button>
              <LinkText>Population</LinkText>
              <Icon icon={faChartPie} style={{ color: "#008aaa" }} />
            </Button>
          </Link>
        </LI>
        <LI>
            <Link style={{ textDecoration: "none" }} to="/quiz">
          <Button>
              <LinkText>Quiz</LinkText>
            <Icon icon={faQuestion} style={{ color: "#a0e600" }} />
          </Button>
            </Link>
        </LI>
        <LI>
            <Link style={{ textDecoration: "none" }} to="/selectCountry">
          <Button>
              <LinkText>Game</LinkText>
            <Icon icon={faGamepad} style={{ color: "#d51c6f" }} />
          </Button>
            </Link>
        </LI>
      </UL>
    </Bar>
  );
};

export default NavBar;
