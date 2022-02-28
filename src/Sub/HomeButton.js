
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { HomeBtn } from '../Components/svg'
const rotate=keyframes`
from{
    transform:rotate(0);
}
to{
    transform:rotate(360deg);
}`
const Container = styled.button`
position: absolute;
top: 3rem;
left:48.5%;
border-radius:50%;
width:45px;
height: 45px;
display: flex;
justify-content: center;
background-color:transparent;
align-items:center;
z-index:3;
cursor: pointer;
animation:${rotate} infinite 1.5s linear;



`
const HomeButton = (props) => {
    return (
        <Container>
        <NavLink to="/">
        <HomeBtn  width={50} height={50} fill={props.color}  />
        </NavLink>
        </Container>
    )
}

export default HomeButton