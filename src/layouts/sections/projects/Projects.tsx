import React from 'react';
import {Container} from "../../../components/container/Container";
import {Title} from "../../../components/title/Title";
import {Subtitle} from "../../../components/subtitle/Subtitle";
import styled from "styled-components";
import {Project} from "./Project";
import {Theme} from "../../../assets/Theme";

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
  background-color: #101010;
    ul{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      column-gap: 20px;
      row-gap: 65px;
      padding-top: 113px;
    }
  @media ${Theme.media.extra}{
    ul{
      justify-content: space-around;
      padding-top: 80px;
    }
  }

`
