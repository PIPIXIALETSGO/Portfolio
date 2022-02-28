import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import Partical from '../Sub/particalComonent'
import LogoComponent from '../Sub/LogoComponent'
import Homebtn from "../Sub/HomeButton"
const Box = styled.div`
background-color: white;
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`
const Main = styled.div`
border: 2px solid Black;
color: Black;
background-color: White;
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
cursor: pointer;
font-family: 'Ubuntu Mono',monospace;
// display: flex;
flex-direction: column;
justify-content: space-between;
p{
  line-height: 1.3  ;
  font-size:18px;
}
&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
    .title{
      font-family: "Arcade_Out", sans-serif;
      font-weight: 100;
    }
}
`
function Myskills () {
  return (
    <Box>
      <ThemeProvider theme={lightTheme}>
      <Homebtn color="black"/>
      <LogoComponent color="black"/>
      <Partical theme='light' />

      <Main>
        <h2 className='title'>About me</h2>
        <p>-I'm programmer, and interested in website design, scene design and 3d modeling </p>
        <p>-2 years work experience of Arduino, Microbit, javascript and web design  </p>
        <p>-I'm curious about all new techlonogy, and like to play around all kinds electronics(including tear them apart)</p>
          <h2 className='title'> Work   Experience</h2>
        <p>From 2019 to 2021, I worked as programmer, teacher and curriculum developer at ZhongXi, a company based in Chengdu, China that focuses on project-based STEM education for students aged 8-18</p>
      </Main>
     
     
      </ThemeProvider>
      </Box>
  )
}

export default Myskills 