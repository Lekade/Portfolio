import React from 'react';
import styled from "styled-components";

export const Project = () => {
    return (
        <StyledProject>
            <img src="" alt=""/>
            <div>
                <h3>Project Tile goes here</h3>
                <p>This is sample project description random things are here in description
                    This is sample project lorem ipsum generator for dummy content</p>
                <span>Tech stack :</span><span>HTML , JavaScript, SASS, React</span>
                <a href="#" className="projectLink">
                    <img src="" alt="link"/>
                    <span>Live Preview</span>
                </a>
                <a href="#" className="projectLink">
                    <img src="" alt="link"/>
                    <span>View Code</span>
                </a>
            </div>
        </StyledProject>
    );
};

const StyledProject = styled.article`
  width: 100%;
  max-width: 373px;
  min-height: 567px;
  background-color: black;
  color: #fff;
  img{
    width: 100%;
    height: 260px;
  }
  div{
    padding: 27px 45px 25px 30px;
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
      color: #fff;
    }
    a + a {
      margin-left: 48px;
      
    }
    a > span{
      text-decoration: underline;
    }
  }
`