import React from 'react';
import {Container} from "../../../components/container/Container";
import {Title} from "../../../components/title/Title";
import {Subtitle} from "../../../components/subtitle/Subtitle";
import styled from "styled-components";
import {Theme} from "../../../assets/styles/Theme";
import {Slider} from "./slider/Slider";
import ProjectTilt from "./project/ProjectTilt";

export const Projects = () => {
    return (
        <StyledProject id="projects">
            <Container>
                <Title content="Projects"/>
                <Subtitle content="Things I’ve built so far"/>
                <ProjectsList>
                    <ProjectTilt/>
                    <ProjectTilt/>
                    <ProjectTilt/>
                    <ProjectTilt/>
                    <ProjectTilt/>
                    <ProjectTilt/>
                </ProjectsList>
                <Slider/>
            </Container>
        </StyledProject>
    );
};

const StyledProject = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: ${Theme.section.paddingDesktop} 0;
  background-color: ${Theme.colors.secondaryBg};
  @media ${Theme.media.extra}{
    padding: ${Theme.section.paddingMobile} 0;
  }
`
const ProjectsList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 65px;
  padding-top: 113px;
  @media ${Theme.media.extra} {
    justify-content: space-around;
    padding-top: 80px;
  }
  @media screen and  (max-width: 820px ) {
    display: none;
  }
`

