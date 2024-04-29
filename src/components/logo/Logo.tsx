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
  letter-spacing: .2rem;
  font-size: 2rem;
  font-weight: 400;
  color: #fff;
  span{
    font-family: "NEXT ART", sans-serif;
    font-size: 4rem;
    font-weight: 600;
    color: #00C1EC;
  }
`
