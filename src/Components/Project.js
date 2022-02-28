import React from "react";
import styled, { ThemeProvider } from "styled-components";
import {lightTheme } from "./Themes";
import LogoComponent from "../Sub/LogoComponent";
import Card from "../Sub/Card";
import { ProjectsData } from "../Assets/ProjectsData";
import Homebtn from "../Sub/HomeButton";

import Partical from '../Sub/particalComonent'


const Main = styled.div`
  padding-top: 10vh;
  position: relative;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
 
  color: ${(props) => props.theme.text};
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
`;
function ProjectPage() {
  return (
    
      <ThemeProvider theme={lightTheme}>
        <Homebtn color="black"/>
        <Partical theme='dark' />
        <Main>
            <LogoComponent color="black" />
          <Grid>
            {ProjectsData.map((a) => (
              <Card key={a.id} data={a} />
              ))}
          </Grid>
        </Main>
      
    </ThemeProvider>
             
  );
}

export default ProjectPage;
