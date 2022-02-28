import React from "react";
import styled from "styled-components";
const Box = styled.ul`
  width: calc(10rem + 15vw);
  height: 25rem;
  color: ${(props) => props.theme.text};
  padding: 1.5rem 2rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.text};
  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
    border: 1px solid ${(props) => props.theme.body};
    
    .title{
      font-family: "Arcade_Out", sans-serif;
      font-weight: 100;
    }
    a:hover{
      color:white;
    }
    
  }
  
`;
const Title = styled.h2`
  font-size: calc(1em + 0.5vw);
`;

const Description = styled.h2`
  font-size: calc(0.8em + 0.3vw);
  font-family: "Karla", sans-serif;
  font-weight: 500;
`;
const Footer = styled.footer`
  border-top: 2px solid ${(props) => props.theme.text};
  display: flex;
  justify-content: space-between;
  ${Box}:hover & {
    border-top: 2px solid ${(props) => props.theme.body};
  }
`;
const Imagebox = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 540px;
  background-size: cover;
  border: 2px solid ${(props) => props.theme.text};
  background-position: center center;
  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.body};
  }
`;

const card = (props) => {
  const { id, name, description, src,tags,github } = props.data;
  return (
    <Box key={id}>
      <Imagebox img={src} />

      <Title className="title">{name}</Title>
      <Description>
        {description}
      </Description>

      <Footer>{tags+","}<a href={github}>Link</a></Footer>
    </Box>
 
    
  );
};

export default card;
