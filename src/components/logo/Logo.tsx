import React from 'react';
import styled from "styled-components";

export const Logo = () => {
    return <a href="#">
        <LogoText>
            <span>L</span>
            ekade
        </LogoText>
    </a>
};

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
`
