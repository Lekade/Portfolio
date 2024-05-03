import React from 'react';
import styled from "styled-components";

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
  padding-top: 100px;
  margin: 0 auto;
  font-family: Poppins, sans-serif;
  font-size: 48px;
  font-weight: 400;
  color: #fff;
`