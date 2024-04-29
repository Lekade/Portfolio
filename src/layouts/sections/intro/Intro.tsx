import React from 'react';
import styled from "styled-components";
import {FlexContainer} from "../../../components/container/FlexContainer";

export const Intro = () => {
    return (
        <IntroStyled>
            <FlexContainer>
                <IntroContent>
                    <span>Hello</span>
                    <h1>I’m Denis <br/> Kasperovich</h1>
                    <p>I've been doing web design, front-end and back-end development
                        for a year now. Do you need a website design, site layout,
                        or maybe a turnkey website? Then contact me</p>
                    <button>Contact me</button>
                </IntroContent>
            </FlexContainer>
        </IntroStyled>
    );
};


const IntroStyled = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #1E1E1E;
`

const IntroContent = styled.div`
  padding-top: 40rem;
  max-width: 44.7rem;
  font-family: "NEXT ART", sans-serif;
  
    span{
      font-size: 4.8rem;
      font-weight: 600;
    }
    h1{
      font-size: 7.2rem;
      font-weight: 700;
    }
    p{
      font-family: "Poppins", sans-serif;
      font-size: 1.8rem;
      font-weight: 400;
    }
`
