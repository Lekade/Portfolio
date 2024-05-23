import React from 'react';
import styled from "styled-components";
import {Theme} from "../../assets/styles/Theme";

type TitlePropsType = {
    content: string
}

export const Title = (props: TitlePropsType) => {
    return (
        <StyledTitle>
            {props.content}
        </StyledTitle>
    );
};

const StyledTitle = styled.h2`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  font-family: Poppins, sans-serif;
  font-size: 48px;
  font-weight: 400;
  color: ${Theme.colors.font};

  @media ${Theme.media.medium}{
    font-size: 38px;
  }
`