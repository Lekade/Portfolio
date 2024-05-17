import React from 'react';
import {Title} from "../../../components/title/Title";
import styled from "styled-components";
import {Container} from "../../../components/container/Container";
import {AnimateSurfaceCube, TurningShakingCube} from "../../../assets/animations/Animation";
import {Icon} from "../../../components/icon/Icon";


type skillsType = {
    id: string,
    heading: string,

}

const skillsLeft  = [
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
const skillsRight = [
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
        <StyledTechStack>
                <Title content={"My Tech Stack"}/>
            <Container>
                <Icons>
                    {skillsLeft.map((skill, index) => <li key={index}>
                        <Icon id={skill.id} />
                        <h4>{skill.heading}</h4>
                    </li>)}
                </Icons>
                <CubeBox>
                    <Cube>
                        <div>cube</div>
                    </Cube>
                </CubeBox>
                <Icons>
                    {skillsRight.map(skill => <li>
                        <Icon id={skill.id} />
                        <h4>{skill.heading}</h4>
                    </li>)}
                </Icons>
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
`

const Icons = styled.ul`
  padding-top: 150px;
  max-width: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  z-index: 2;
  li{
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    cursor: pointer;
    webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    transition: .6s;
    h4{
      margin-top: 15px;
      font-family: The Nautigal, cursive;
      font-size: 27px;
      text-transform: capitalize;
    }
    &:hover{
      webkit-filter: grayscale(0%);
      filter: grayscale(0%);
      webkit-transform: scale(1.6);
      transform: scale(1.6);
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