import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {MobileMenu} from "../../components/menu/MenuMobail";
import {Container} from "../../components/container/Container";
import styled from "styled-components";
import {Theme} from "../../assets/Theme";

const menuItems:Array<string>  = ['Home', 'Tech Stack', 'Projects', 'Contact']

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Logo/>
                <Menu menuItems={menuItems}/>
            </Container>
                <MobileMenu menuItems={menuItems}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  width: 100%;
  min-height: 90px;
  padding: 20px 0;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: #1E1E1E;
  z-index: 999;
  @media ${Theme.media.large}{
    padding: 0;
    min-height: 70px;
  }
  
  ${Container}{
    display: flex;
    justify-content: space-between;
    z-index: 999;
    background-color: #1E1E1E;
    @media ${Theme.media.large}{
      position: relative;
      min-height: 70px;
    }
  }
`