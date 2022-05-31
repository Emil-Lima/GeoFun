import React from "react";
import styled from "styled-components";
import github_logo from "../assets/github_logo.png"

const DevsContainer = styled.footer`
  background-color: red;
  height: 10vh;
`

const Logo = styled.img`
  width: 10vh;
`

const Footer = () => {
  return (
    <DevsContainer>
      <div>
        <Logo src={github_logo}/>
        <a href="https://github.com/mattnorris1990">Matt</a>
      </div>
      <div>
        <Logo src={github_logo}/>
        <a href="https://github.com/JazzRose">Jazz</a>
      </div>
      <div>
        <Logo src={github_logo}/>
        <a href="https://github.com/drleafgreen88">Derek</a>
      </div>
      <div>
        <Logo src={github_logo}/>
        <a href="https://github.com/J-Rozas">Emilio</a>
      </div>
    </DevsContainer>
  )
}


export default Footer