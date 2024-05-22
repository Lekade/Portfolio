import React from 'react';
import {Title} from "../../../components/title/Title";
import styled from "styled-components";
import {Container} from "../../../components/container/Container";
import {AnimateSurfaceCube, TurningShakingCube} from "../../../assets/animations/Animation";
import Skills from "./skills/Skills";
import {Theme} from "../../../assets/Theme";



const skillsLeft: { id: string; heading: string }[]  = [
    {
        id: 'html',
        heading: 'html'
    },
    {
        id:'css',
        heading:'css'
    },
    {
        id:'js',
        heading:'javaScript'
    },
    {
        id: 'figma',
        heading: 'figma'
    },
    {
        id:'githubColored',
        heading:'github'
    },
    {
        id:'materialUi',
        heading:'material ui'
    },
    {
        id: 'axios',
        heading: 'axios'
    },
    {
        id:'hook',
        heading:'hooks'
    },
    {
        id:'npm',
        heading:'npm'
    },
]
const skillsRight:{ id: string; heading: string }[] = [
    {
        id: 'react',
        heading: 'react'
    },
    {
        id:'redux',
        heading:'redux'
    },
    {
        id:'ts',
        heading:'typeScript'
    },
    {
        id: 'styledComponents',
        heading: 'styled components'
    },
    {
        id:'git',
        heading:'git'
    },
    {
        id:'unitTesting',
        heading:'unit testing'
    },
    {
        id: 'websocket',
        heading: 'web Socket'
    },
    {
        id:'yarn',
        heading:'yarn'
    },
    {
        id:'restApi',
        heading:'rest Api'
    },
]

export const TechStack = () => {
    return (
        <StyledTechStack id="techStack">
                <Title content={"My Tech Stack"}/>
            <Container>
                <Skills skillsItems={skillsLeft}/>
                <CubeBox>
                    <Cube>
                        <div>cube</div>
                    </Cube>
                </CubeBox>
                <Skills skillsItems={skillsRight} />
            </Container>
        </StyledTechStack>
    );
};

const StyledTechStack = styled.section`
  display: block;
  width: 100%;
  padding-bottom: 150px;
  background-color: #101010;
  ${Container}{
    width: 100%;
    max-width: 100%;
    position: relative;
    display: flex;
    justify-content: space-around;
  }
  @media ${Theme.media.large}{
    padding-bottom: 100px;
  }
  @media screen and (max-width: 600px){
    ${Container}{
      display: inline-flex;
      flex-direction: column;
    }

  }
`

const CubeBox = styled.div`
  width: 100%;
  position: absolute;
  transform: rotate(-35deg);
  left: -2%;
  top:45%;
  z-index: 1;
  @media screen and (max-width: 600px){
    display: none;
  }
  
`
const Cube = styled.div`
  position: relative;
  left: -200px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% + 400px);
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0004);
  animation: ${AnimateSurfaceCube} 1.5s ease-in-out infinite;


  div{
    color: transparent;
    font-size: 0;
    position: relative;
    width: 200px;
    height: 200px;
    background: #03e9f4;
    box-shadow:  0 0 5px rgba(3, 233, 244, 1),
    0 0 25px rgba(3, 233, 244, 1),
    0 0 50px rgba(3, 233, 244, 1),
    0 0 100px rgba(3, 233, 244, 1),
    0 0 200px rgba(3, 233, 244, 0.5),
    0 0 300px rgba(3, 233, 244, 0.5);
    transform-origin: bottom right;
    animation: ${TurningShakingCube} 1.5s ease-in-out infinite;
    
  }
`