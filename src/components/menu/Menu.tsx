import React from 'react';
import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About me</a>
                </li>
                <li>
                    <a href="#">Tech Stack</a>
                </li>
                <li>
                    <a href="#">Projects</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  display: flex;
  align-items: center;
  ul{
    display: flex;
    gap: 4rem;
  }
  a{
    color: #fff;
    font-size: 2rem;
    font-weight: 500;
  }
`