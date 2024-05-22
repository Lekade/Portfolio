import React from 'react';
import styled from "styled-components";
import {Theme} from "../../assets/Theme";
import {animateScroll as scroll} from 'react-scroll';

export const Logo = () => {
    return <StyledLogo>
        <LogoText  onClick={() => {scroll.scrollToTop()}}>
            <span>L</span>
            ekade
        </LogoText>
    </StyledLogo>
};



const StyledLogo = styled.a`
  display: flex;
  align-items: center;
  z-index: 999;
  cursor: pointer;
`

const LogoText = styled.span`
  font-family: "Poppins", sans-serif;
  letter-spacing: 2px;
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  span{
    font-family: "NEXT ART", sans-serif;
    font-size: 40px;
    font-weight: 600;
    color: #03E9F4;
  }
  @media ${Theme.media.medium}{
    font-size: 15px;
    span{
      font-size: 35px;
    }
  }
`
