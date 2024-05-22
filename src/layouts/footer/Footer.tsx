import React from 'react';
import styled from "styled-components";

export const Footer = () => {
    return (
        <StyledFooter>
            <span>Created by <span>Lekade</span> | All Reserved!</span>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
  font-size: 20px;
  font-weight: 500;
  line-height: 180%;
  letter-spacing: 0.3px;
  background-color: #090909;
  color: #808080;
  span > span{
    color: #fff;
    font-weight: 700;
  }
`