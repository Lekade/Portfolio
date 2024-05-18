import React from 'react';
import styled from "styled-components";
import {Theme} from "../../assets/Theme";

export const Menu = (props:{menuItems:Array<string>}) => {
    return (
        <StyledMenu>
            <MenuList>
                {props.menuItems.map((item:string, index:number) => <li key={index}>
                        <a href="#">{item}</a>
                    </li>)}
            </MenuList>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  display: flex;
  align-items: center;
  max-width: 600px;
  @media ${Theme.media.large}{
    display: none;
  }
`
const MenuList  = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
  a{
    color: #fff;
    font-size: 20px;
    font-weight: 500;
  }
`