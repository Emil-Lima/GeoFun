import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import styled from "styled-components";

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
	${'' /* box-shadow:inset 0px 1px 0px 0px #efdcfb; */}
	${'' /* background:linear-gradient(to bottom, #FFE513 5%, #bc80ea 100%); */}
  background-color: white;
	${'' /* background-color:#dfbdfa; */}
	${'' /* border-radius:6px; */}
	${'' /* border:1px solid #c584f3; */}
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	${'' /* padding:10px 27px; */}
	text-decoration:none;
	text-shadow:0px 1px 0px #7d29c2;
  width: 15vw;
  height: 100px;
  border: none;

  &:hover{
  ${'' /* background:linear-gradient(to bottom, #bc80ea 5%, #dfbdfa 100%); */}
  ${'' /* background:linear-gradient(to bottom, #bc80ea 5%, #dfbdfa 100%); */}
	${'' /* background-color:#FFE513; */}
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
            <Link style={{textDecoration: 'none'}} to="/">Map</Link>
          </Button>
        </LI>
        <LI>
          <Button>
            <Link style={{textDecoration: 'none'}} to="/populations">Populations</Link>
          </Button>
        </LI>
        <LI>
          <Button>
            <Link style={{textDecoration: 'none'}} to="/quiz">Quiz</Link>
          </Button>
        </LI>
        <LI>
          <Button>
            <Link style={{textDecoration: 'none'}} to="/selectCountry">Game</Link>
          </Button>
        </LI>
      </UL>
    </nav>
  )
}

export default NavBar
