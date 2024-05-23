import React from 'react';
import {Title} from "../../../components/title/Title";
import styled from "styled-components";
import {Container} from "../../../components/container/Container";
import Skills from "./skills/Skills";
import {Theme} from "../../../assets/styles/Theme";
import {DecorationCube} from "../../../components/decorationСube/DecorationСube";



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
                <DecorationCube/>
                <Skills skillsItems={skillsRight} />
            </Container>
        </StyledTechStack>
    );
};

const StyledTechStack = styled.section`
  display: block;
  width: 100%;
  padding:${Theme.section.paddingDesktop} 0;
  background-color: ${Theme.colors.secondaryBg};
  ${Container}{
    width: 100%;
    max-width: 100%;
    position: relative;
    display: flex;
    justify-content: space-around;
  }
  @media ${Theme.media.extra}{
    padding: ${Theme.section.paddingMobile} 0;
  }
  
  @media screen and (max-width: 600px){
    ${Container}{
      display: inline-flex;
      flex-direction: column;
    }
  }
`

