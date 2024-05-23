import React from 'react';
import styled from "styled-components";

type TitleTextPropsType = {
    content: string
}

export const Subtitle = (props:TitleTextPropsType) => {
    return (
        <StyledTitleText>
            {props.content}
        </StyledTitleText>
    );
};

const StyledTitleText = styled.span`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  margin: auto;
  font-family: Poppins, sans-serif;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  color: #E2A100;
`
