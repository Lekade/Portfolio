import React from 'react';
import styled from "styled-components";

export const MobileMenu = (props:{menuItems:Array<string>}) => {
    return (
        <StyledMobileMenu>
            <ul>
                {props.menuItems.map((item:string, index:number) => <li key={index}>
                    <a href="#">{item}</a>
                </li>)}
            </ul>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
  display: none;
  align-items: center;
  ul{
    display: flex;
    gap: 40px;
  }
  a{
    color: #fff;
    font-size: 20px;
    font-weight: 500;
  }
`