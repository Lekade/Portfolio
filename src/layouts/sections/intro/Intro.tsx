import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/container/Container";
import {CircleGlow} from "../../../assets/animations/Animation";
import myPhoto from "../../../assets/images/photo.png"

export const Intro = () => {
    return (
        <IntroStyled>
            <Container>
                    <span>Hello</span>
                    <h1>I’m Denis <br/> Kasperovich</h1>
                    <p>I've been doing web design, front-end and back-end development
                        for a year now. Do you need a website design, site layout,
                        or maybe a turnkey website? Then contact me</p>
                    <IntroBtn>Contact me</IntroBtn>
            </Container>
            <Circle>circle</Circle>
            <img src={myPhoto} alt="my photo"/>
        </IntroStyled>
    );
};


const IntroStyled = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #1E1E1E;
  padding:40vh 0 10vh;
  font-family: "NEXT ART", sans-serif;
  position: relative;
  
  img{
    width: 465.18px;
    height: 674px;
    position: absolute;
    bottom: 0;
    left:  58.5%;
  }
    
  ${Container}{
    span{
      font-size: 48px;
      font-weight: 600;
      line-height: 54px;
    }
    h1{
      font-size: 72px;
      font-weight: 700;
      line-height: 82px;
    }
    p{
      margin-top: 27px;
      display: block;
      max-width: 450px;
      font-family: "Poppins", sans-serif;
      font-size: 21px;
      font-weight: 400;
      line-height: 28px;
    }
  }
  
`
const IntroBtn = styled.button`
  margin-top: 27px;
  padding: 13.5px 41px 12.5px;
  background-color: #E2A100;
  font-family: NEXT ART, sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
`

const Circle = styled.div`
  width: 575px;
  height: 575px;
  position: absolute;
  left: 56%;
  bottom: 1%;
  background-color: transparent;
  border: 67px solid #03E9F4;
  border-radius: 50%;
  color: transparent;
  font-size: 0;
  box-shadow:
          0 0 4px rgba(3,233,244, 1),
          0 0 4px rgba(3,233,244, 1) inset,
          0 0 10px rgba(3,233,244, 1),
          0 0 10px rgba(3,233,244, 1) inset,
          0 0 20px rgba(3,233,244, 1),
          0 0 20px rgba(3,233,244, 1) inset;

  animation: ${CircleGlow} 4s ease-in-out infinite;
`
