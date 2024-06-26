import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import photo from "../../../../assets/images/project-1.webp"
import {Theme} from "../../../../assets/styles/Theme";

export const Project = () => {
    return (
                <StyledProject>
                    <ProjectImg src={photo} alt="project"/>
                    <ProjectInfo>
                        <h3>Project Tile goes here</h3>
                        <p>This is sample project description random things are here in description
                            This is sample project lorem ipsum generator for dummy content</p>
                        <span>Tech stack :</span><span>HTML , JavaScript, SASS, React</span>
                        <a href="#" className="projectLink">
                            <Icon id={'linkChain'} width={'20px'} height={'20px'}/>
                            <span>Live Preview</span>
                        </a>
                        <a href="#" className="projectLink">
                            <Icon id={'githubWhite'} width={'20px'} height={'20px'}/>
                            <span>View Code</span>
                        </a>
                    </ProjectInfo>
                </StyledProject>
    );
};

const StyledProject = styled.article`
  width: 100%;
  max-width: 373px;
  min-height: 567px;
  color: ${Theme.colors.font};
  border-radius: 20px;
  box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
  background: rgb(54, 54, 54);
  @media screen and (max-width: 830px){
    min-height: 500px;
    margin: 0 auto;
  }
`
const ProjectImg = styled.img`
  border-radius: 20px 20px 0 0;
  width: 100%;
  height: 260px;
  object-fit: cover;
  background-color: #CCCCCC;
  @media screen and (max-width: 830px){
    height: 200px;
  }
`

const ProjectInfo = styled.div`
  padding: 27px 28px 25px;
  color: #CCCCCC;
  h3{
    font-family: Poppins, sans-serif;
    font-size: 28px;
    font-weight: 500;
  }

  p{
    display: block;
    padding-top: 17px;
    font-family: Poppins, sans-serif;
    font-size: 18px;
    font-weight: 300;
    line-height: 26px;
    letter-spacing: 0;
  }

  span{
    display: inline-block;
    padding-top: 12px;
    font-family: Poppins, sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 26px;
    letter-spacing: 0;
  }

  a{
    margin-top: 21px;
    display: inline-block;
    color: ${Theme.colors.accent};
  }
  a + a {
    margin-left: 48px;

  }
  & > a > span{
    margin-left: 12px;
    text-decoration: underline;
    font-family: Poppins, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
  }
  @media screen and (max-width: 830px){
    padding: 10px 10px 10px 15px;
  }
`