import React from 'react';
import {Container} from "../../../components/container/Container";
import {Title} from "../../../components/title/Title";
import {Subtitle} from "../../../components/subtitle/Subtitle";
import styled from "styled-components";
import {Project} from "./Project";

export const Projects = () => {
    return (
        <StyledProject>
            <Container>
                <Title content="Projects"/>
                <Subtitle content="Things I’ve built so far"/>
                <ul>
                    <li>
                        <Project/>
                    </li>
                    <li>
                        <Project/>
                    </li>
                    <li>
                        <Project/>
                    </li>
                    <li>
                        <Project/>
                    </li>
                    <li>
                        <Project/>
                    </li>
                    <li>
                        <Project/>
                    </li>
                </ul>
            </Container>
        </StyledProject>
    );
};

const StyledProject = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-bottom: 150px;
  background-color: blueviolet;
    ul{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      row-gap: 65px;
      padding-top: 113px;
    }
`
