import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import LogoComponent from "../Sub/LogoComponent";
import { NavLink } from "react-router-dom";
import Intro from "./Intro";
import { DarkTheme } from "../Components/Themes";
import Dino from "../Assets/Dino.gif"

const slide = keyframes`
0% {
  transform: translateY(-100%);
}
100% {
  transform: translateX(0);
}
`;
const show = keyframes`
from{
  opacity: 0;
}
to {
  opacity: 1;
}
`;
const MainContainer = styled.div`
  background: White;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  position: relative;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Arcade_Out", sans-serif;
    font-weight: 500;
  }
`;
const Container = styled.div`
  padding: 2rem;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  .projects{
    animation: 1.5s ${show};

  }
 
`;

const About = styled(NavLink)`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
  padding-left: 20px;
  padding-right: 20px;
  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;
const Project = styled(NavLink)`
  padding-left: 20px;
  padding-right: 20px;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  text-decoration: none;
  z-index: 1;
  &:hover {
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.body};
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #000;
  bottom: 0;
  right: 50%;
  width: 50%;
  height: 100%;
  z-index: 1;
  animation: 1s ease-out 0s 1 ${slide};
`;

const Main = () => {
  return (
    <MainContainer>
      <DarkDiv />
     
      <ThemeProvider theme={DarkTheme}>
        <Container>
          <LogoComponent color="white" />

          <BottomBar>
            <About  to="/about">
              <h3>About</h3>
            </About>
            <Project  to="/projects">
              <h3>Projects</h3>
            </Project>
            <img style={{position:'absolute',right:'1%',height:'80px', width:'80px'}}className="dino" src={Dino} alt="Dino gif"/>
          </BottomBar>
        </Container>
      </ThemeProvider>
      <Intro />
    </MainContainer>
  );
};

export default Main;
