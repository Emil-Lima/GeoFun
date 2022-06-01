import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faQuestion, faChartPie, faMap} from '@fortawesome/free-solid-svg-icons'

const Icon = styled(FontAwesomeIcon)`
  display: block;
  margin: auto;
  height: 3vh;
`

const UL = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0px;
  width: 40vw;
  height: 100%;
  margin: 0;
`
const LI = styled.li`
  list-style: none;
  height: 100%;
`

const Button = styled.button`
  background-color: white;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	text-decoration:none;
	text-shadow:0px 1px 0px #7d29c2;
  width: 15vw;
  height: 100px;
  border: none;

  &:hover{
  background-color: #ededed;
  border-bottom: 4px solid #29c5fe;
  }

  &:visited{
    text-decoration: none;
  }
`

const NavBar = () => {
  return (
    <nav>
      <UL>
        <LI>
          <Button className="button-yellow">
            <Link style={{ textDecoration: 'none' }} to="/">Map</Link>
            <Icon icon={faMap} style={{ color: "#f73500"}}/>
          </Button>
        </LI>
        <LI>
          <Button>
            <Link style={{ textDecoration: 'none' }} to="/populations">Populations</Link>
            <Icon icon={faChartPie} style={{ color: "#008aaa"}}/>
          </Button>
        </LI>
        <LI>
          <Button>
            <Link style={{ textDecoration: 'none' }} to="/quiz">Quiz</Link>
            <Icon icon={faQuestion} style={{ color: "#a0e600" }}/>
          </Button>
        </LI>
        <LI>
          <Button>
            <Link style={{ textDecoration: 'none' }} to="/selectCountry">Game</Link>
            <Icon icon={faGamepad} style={{ color: "#d51c6f"}} />
          </Button>
        </LI>
      </UL>
    </nav>
  )
}

export default NavBar
