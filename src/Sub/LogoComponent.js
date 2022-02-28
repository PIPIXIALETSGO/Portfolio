import React from 'react'
import styled from 'styled-components'
const Logo=styled.h1`
display:inline-block;
color:  ${props => props.color};
font-family:"Arcade_Out", serif;
position: fixed;
left: 2rem;
top: 2rem;
z-index:3;
`
const LogoComponent=(props) => {
  return (
    <Logo color={props.color}>JW</Logo>
  )
}

export default LogoComponent