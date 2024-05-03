import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/container/Container";

export const Intro = () => {
    return (
        <IntroStyled>
            <Container>
                    <span>Hello</span>
                    <h1>I’m Denis <br/> Kasperovich</h1>
                    <p>I've been doing web design, front-end and back-end development
                        for a year now. Do you need a website design, site layout,
                        or maybe a turnkey website? Then contact me</p>
                    <button>Contact me</button>
            </Container>
        </IntroStyled>
    );
};


const IntroStyled = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #1E1E1E;
  padding:45vh 0 10vh;
  font-family: "NEXT ART", sans-serif;
  
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
      display: block;
      max-width: 450px;
      font-family: "Poppins", sans-serif;
      font-size: 21px;
      font-weight: 400;
      line-height: 28px;
    }
  }
  

`
