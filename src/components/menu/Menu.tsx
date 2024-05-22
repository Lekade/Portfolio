import React from 'react';
import styled from "styled-components";
import {Theme} from "../../assets/Theme";
import {Link} from "react-scroll";

export type MenuPropsType = {
    menuItems: {
        title:string,
        href:string
    }[]

}

export const Menu = (props:MenuPropsType) => {
    return (
        <StyledMenu>
            <MenuList>
                {props.menuItems.map((item, index:number) => <li key={index}>
                        <NavLink
                            activeClass="active"
                            to={item.href}
                            smooth={true}
                            spy={true}
                            offset={-90}
                        >{item.title}</NavLink>
                    </li>)}
            </MenuList>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  display: flex;
  align-items: center;
  max-width: 80%;
  @media ${Theme.media.medium}{
    display: none;
  }
`
const MenuList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  li {
    transition: 0.6s;
  }

  li:hover {
    transition: 0.6s;
    transform: scale(1.15);
  }

`

const NavLink = styled(Link)`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  &.active{
    color: #E29700;
  }
`