import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const NavBar = () => {
  return (
    <>
       <nav>
          <ul>
            <li>
              <Link to="/">Map</Link>
            </li>
            <li>
              <Link to="/populations">Populations</Link>
            </li>
            <li>
              <Link to="/quiz">Quiz</Link>
            </li>
            <li>
              <Link to="/selectCountry">Select country</Link>
            </li>
          </ul>
        </nav>
    </>
  )
}

export default NavBar
