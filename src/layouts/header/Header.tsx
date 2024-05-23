import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {MobileMenu} from "../../components/menu/MenuMobail";
import {Container} from "../../components/container/Container";
import styled from "styled-components";
import {Theme} from "../../assets/styles/Theme";

const menuItems  = [
    {title: 'Home', href: 'home'},
    {title: 'Tech Stack', href: 'techStack'},
    {title: 'Projects', href: 'projects'},
    {title: 'Contacts', href: 'contacts'}
]

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
  background-color: ${Theme.colors.primaryBg};
  z-index: 999;
  @media ${Theme.media.medium}{
    padding: 0;
    min-height: 70px;
  }
  
  ${Container}{
    display: flex;
    justify-content: space-between;
    z-index: 999;
    background-color: ${Theme.colors.primaryBg};
    @media ${Theme.media.medium}{
      position: relative;
      min-height: 70px;
    }
  }
`