import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {FlexContainer} from "../../components/container/FlexContainer";
import styled from "styled-components";

export const Header = () => {
    return (
        <StyledHeader>
            <FlexContainer>
                <Logo/>
                <Menu/>
            </FlexContainer>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center;
  position: fixed;
  background-color: #1E1E1E;
  
  ${FlexContainer}{
    justify-content: space-between;
    
  }
`