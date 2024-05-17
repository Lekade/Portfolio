import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {MobileMenu} from "../../components/menu/MenuMobail";
import {Container} from "../../components/container/Container";
import styled from "styled-components";

const menuItems:Array<string>  = ['Home', 'Tech Stack', 'Projects', 'Contact']

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Logo/>
                <Menu menuItems={menuItems}/>
                <MobileMenu menuItems={menuItems}/>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  width: 100%;
  min-height: 90px;
  display: flex;
  align-items: center;
  position: fixed;
  background-color: #1E1E1E;
  z-index: 3;
  
  ${Container}{
    display: flex;
    justify-content: space-between;
  }
`