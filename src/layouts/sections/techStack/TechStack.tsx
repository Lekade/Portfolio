import React from 'react';
import {Title} from "../../../components/title/Title";
import styled from "styled-components";
import {Container} from "../../../components/container/Container";

export const TechStack = () => {
    return (
        <StyledTechStack>
                <Title content={"My Tech Stack"}/>
                {/*<TitleText content={"Technologies I’ve been working with recently"}/>*/}
            <Container>
                <IconsLeft>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </IconsLeft>

                <CubeBox>
                    <Cube>
                        <div>cube</div>
                    </Cube>
                </CubeBox>

                <IconsRight>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </IconsRight>
            </Container>
        </StyledTechStack>
    );
};

const StyledTechStack = styled.section`
  display: block;
  width: 100%;
  padding-bottom: 150px;
  background-color: black;
  ${Container}{
    width: 100%;
    max-width: 1440px;
    position: relative;
    display: flex;
    justify-content: space-between;
  }
`

const IconsLeft = styled.ul`
  padding-top: 150px;
  max-width: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  
  li{
    width: 150px;
    height: 150px;
    background-color: #000;
    border: 1px solid #fff;
  }
`
const IconsRight = styled.ul`
  padding-top: 150px;
  width: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  li{
    display: block;
    width: 150px;
    height: 150px;
    background-color: #000;
    border: 1px solid #fff;
  }
`

const CubeBox = styled.div`
  width: 35%;
  height: 35%;
  position: absolute;
  transform: rotate(-35deg);
  left:calc(55% - 24%);
  top:calc(50% - 5%);
`
const Cube = styled.div`
  position: relative;
  left: -150px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% + 300px);
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0004);
  animation: animateSurface 1.5s ease-in-out infinite;

  @keyframes animateSurface {
    0%{
      transform: translateX(0);
    }
    100%{
      transform: translateX(-150px);
    }
  }
  div{
    color: transparent;
    font-size: 0;
    position: relative;
    width: 150px;
    height: 150px;
    background: #03e9f4;
    box-shadow:  0 0 4px rgba(0,193,236, 1),
    0 0 15px rgba(0,193,236, 1),
    0 0 30px rgba(0,193,236, 1),
    0 0 60px rgba(0,193,236, 1),
    0 0 80px rgba(0,193,236, 0.5),
    0 0 120px rgba(0,193,236, 0.5);
    transform-origin: bottom right;
    animation: animate 1.5s ease-in-out infinite;

    @keyframes animate {
      0%{
        transform: rotate(0deg);
      }
      60%{
        transform: rotate(90deg);
      }
      65%{
        transform: rotate(85deg);
      }
      70%{
        transform: rotate(90deg);
      }
      75%{
        transform: rotate(87.5deg);
      }
      80%,100%{
        transform: rotate(90deg);
      }
    }
  }
`