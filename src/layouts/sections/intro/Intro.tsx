import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/container/Container";
import {CircleGlow} from "../../../assets/animations/Animation";
import myPhoto from "../../../assets/images/myPhoto.png"
import myFacePhoto from "../../../assets/images/myFacePhoto.png"
import {Theme} from "../../../assets/styles/Theme";

export const Intro = () => {
    return (
        <IntroStyled id='home'>
            <Circle>
                <img src={myFacePhoto} alt="my face"/>
            </Circle>
            <Container>
                    <InfoTitleTop>Hello</InfoTitleTop>
                    <Title>I’m Denis <br/> Kasperovich</Title>
                    <IntroText>I've been doing web design, front-end and back-end development
                        for a year now. Do you need a website design, site layout,
                        or maybe a turnkey website? Then contact me</IntroText>
                    <IntroBtn>Contact me</IntroBtn>
            </Container>
            <MyPhoto src={myPhoto} alt="my photo"/>
        </IntroStyled>
    );
};


const IntroStyled = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${Theme.colors.primaryBg};
  font-family: "NEXT ART", sans-serif;
  position: relative;
  padding:calc(((100vh - 462px)/3*2) + 0px) 0 calc(((100vh - 462px)/3) - 0px);
  @media ${Theme.media.large} {
    padding: 20vh 0 50px;
    ${Container} {
      text-align: center;
    }
  }
  @media ${Theme.media.medium} and (max-height:889px) {
    padding: 15vh 0 25px;
  }
`
const InfoTitleTop = styled.span`
  font-size: 48px;
  font-weight: 600;
  line-height: 1.2;
  @media ${Theme.media.large}{
    font-size: 38px;
  }
  @media ${Theme.media.medium} and (max-height:889px) {
    font-size: 24px;
  }
`
const Title = styled.h1`
  font-size: 72px;
  font-weight: 700;
  line-height: 1.2;
  @media screen and (max-width: 1050px) {
    font-size: 68px;
  }
  @media ${Theme.media.large} {
    font-size: 38px;
  }
  @media ${Theme.media.medium} and (max-height: 889px) {
    font-size: 24px;
  }
`
const IntroText = styled.p`
  margin-top: 27px;
  display: block;
  max-width: 450px;
  font-family: "Poppins", sans-serif;
  font-size: 21px;
  font-weight: 400;
  line-height: 1.3;
  @media ${Theme.media.large}{
    max-width: 600px;
    margin: 30px auto 0;
    font-size: 20px;
  }
  @media ${Theme.media.medium} and (max-height:889px) {
    margin: 15px auto 0;
    font-size: 18px;
  }
  
`
const MyPhoto = styled.img`
  width: 450px;
  position: absolute;
  bottom: 0;
  left:  60.5%;
  @media screen and (max-height:860px) {
    width: 350px;
    left:  59.5%;
  }
  @media ${Theme.media.large}{
      display: none;
  }
`

const IntroBtn = styled.button`
  margin-top: 27px;
  padding: 13.5px 41px 12.5px;
  background-color: ${Theme.colors.accent2};
  box-shadow: 0 2px 13px 0 rgba(226, 158, 0, 0.48);
  border: 1px solid transparent;
  font-family: NEXT ART, sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;
  cursor: pointer;
  transition: 0.6s;
  &:hover{
    transition: 0.6s;
    border: 1px solid ${Theme.colors.accent2};
    background-color: transparent;
    color: ${Theme.colors.accent2};
  }

  @media ${Theme.media.large}{
    margin-top: 60px;
  }
  @media ${Theme.media.medium} and (max-height:840px) {
    margin-top: 10px;
  }
`

const Circle = styled.div`
  width: 670px;
  height: 670px;
  position: absolute;
  left: 56%;
  bottom: 4%;
  background-color: transparent;
  border: 67px solid ${Theme.colors.accent};
  border-radius: 50%;
  color: transparent;
  font-size: 0;
  box-shadow:
          0 0 4px ${Theme.colors.accent},
          0 0 4px ${Theme.colors.accent} inset,
          0 0 10px ${Theme.colors.accent},
          0 0 10px ${Theme.colors.accent} inset,
          0 0 40px ${Theme.colors.accent},
          0 0 40px ${Theme.colors.accent} inset;

  animation: ${CircleGlow} 4s ease-in-out infinite;

  img{
    display: none;
  }

  @media screen and (max-height: 860px) {
    width: 500px;
    height: 500px;
  }
  @media ${Theme.media.large}{
    width: 240px;
    height: 240px;
    position: static;
    margin: 0 auto 40px;
    border: 10px solid ${Theme.colors.accent};
    overflow: hidden;

    img{
      display: block;
      width: 205px;
    }
  }
`
