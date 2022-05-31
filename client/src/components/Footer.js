import React from "react";
import styled from "styled-components";
import github_logo from "../assets/github_logo.png"

const DevsContainer = styled.footer`
  background-color: red;
  height: 15vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`

const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 6vw;
`

const Link = styled.a`
  display: block;
  text-align: center;
  target: _blank;
`

const Footer = () => {
  return (
    <DevsContainer>
      <div>
        <Logo src={github_logo}/>
        <Link href="https://github.com/mattnorris1990" target="_blank">Matt</Link>
      </div>
      <div>
        <Logo src={github_logo}/>
        <Link href="https://github.com/JazzRose" target="_blank">Jazz</Link>
      </div>
      <div>
        <Logo src={github_logo}/>
        <Link href="https://github.com/drleafgreen88" target="_blank">Derek</Link>
      </div>
      <div>
        <Logo src={github_logo}/>
        <Link href="https://github.com/J-Rozas" target="_blank">Emilio</Link>
      </div>
    </DevsContainer>
  )
}


export default Footer