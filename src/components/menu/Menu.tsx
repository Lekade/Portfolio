import React from 'react';
import styled from "styled-components";

export const Menu = (props:{menuItems:Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item:string, index:number) => <li key={index}>
                        <a href="#">{item}</a>
                    </li>)}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  display: flex;
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