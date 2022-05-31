import React from "react";
import styled from "styled-components";
import github_logo from "../assets/github_logo.png"

const DevsContainer = styled.footer`
  min-height: 15vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background-color: white;
  box-shadow: 0px 5px 10px rgb(140 140 140 / 79%);
  margin-top: 1%;
  top: 50%;
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
  text-decoration: none;
  color: black;
`

const Footer = () => {
  return (
    <DevsContainer>
      <div>
        <a href="https://github.com/mattnorris1990" target="_blank"><Logo src={github_logo}/></a>
        <Link href="https://github.com/mattnorris1990" target="_blank">Matt</Link>
      </div>
      <div>
        <a href="https://github.com/JazzRose" target="_blank"><Logo src={github_logo}/></a>
        <Link href="https://github.com/JazzRose" target="_blank">Jazz</Link>
      </div>
      <div>
        <a href="https://github.com/drleafgreen88" target="_blank"><Logo src={github_logo}/></a>
        <Link href="https://github.com/drleafgreen88" target="_blank">Derek</Link>
      </div>
      <div>
        <a href="https://github.com/J-Rozas" target="_blank"><Logo src={github_logo}/></a>
        <Link href="https://github.com/J-Rozas" target="_blank">Emilio</Link>
      </div>
    </DevsContainer>
  )
}


export default Footer