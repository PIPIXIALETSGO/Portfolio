import React from "react";
import styled, { keyframes } from "styled-components";
import Gameboy from "../Assets/Gameboy.gif";
// import Dino from "../Assets/Dino.gif";
const show = keyframes`
from{
  opacity: 0;
}
to {

  opacity: 1;
}
`;
const Box = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  height: 55vh;
  display: flex;
  background: linear-gradient(to right, White 50%, Black 50%) bottom,
    linear-gradient(to right, White 50%, Black 50%) top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid White;
  border-right: 2px solid Black;
  z-index: 1;
  animation: 5s ${show};
`;
const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  .pic {
    position: absolute;
    top: 30px;
    left: 17%;
    width: 60%;
    height: 90%;
  }
  .pic1 {
    position: absolute;
    top: 120px;
    left: 24%;
    width: 31%;
    height: 31%;
  }
`;
const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: White;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  .text {
    font-family: "Arcade_In", san-serif;
    font_size: 100%;
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      duration: 1.5,
      delay: 0.5,
    },
  },
};
const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
const Intro = () => {
  return (
    <Box variants={container} initial="hidden" animate="show">
      <SubBox>
        <Text variants={item}>
          <h1>Hi !</h1>
          <h3>I'm John Wu.</h3>
          <h6>I design, code and game</h6>
        </Text>
      </SubBox>
      <SubBox>
        <img className="pic" src={Gameboy} alt="Gameboy pic" />
        {/* <img className="pic1" src={Dino} alt="Dino pic" /> */}
      </SubBox>
    </Box>
  );
};

export default Intro;
