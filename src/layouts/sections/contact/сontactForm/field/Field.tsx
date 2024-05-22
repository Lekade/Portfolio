import React from 'react';
import styled from "styled-components";

export type FieldPropsType = {
    fieldTitle: string,
    fieldTeg:   'input' | 'textarea',
    fieldType?: 'text' | 'email',
    placeholder?: string
}

export const Field = ({fieldTitle, fieldTeg, fieldType, placeholder}:FieldPropsType) => {
    return (
        <StyledField >
            <span>{fieldTitle}</span>
            { fieldTeg === 'input'
                ? <input type={fieldType} placeholder={placeholder}/>
                : <textarea placeholder={placeholder}/>
            }
        </StyledField>
    );
};

const StyledField = styled.label`
    display: block;
    width: 100%;
    
  & > span{
    display: block;
    font-family: Poppins, sans-serif;
    font-size: 30px;
    font-weight: 500;
    line-height: 120%;
    @media screen and (max-width: 540px){
      font-size: 24px;
    }
  }

  input{
    width: 100%;
    padding-top: 30px;
    margin-bottom: 40px;
    background-color: transparent;
    color:  rgba(255, 255, 255, 0.70);
    border: none;
    border-bottom: 1px solid #fff;
    outline: 0 solid transparent;
    font-size: 25px;
    &::placeholder{
      color: transparent;
    }
    &:focus{
      border-bottom: 1px solid #03E9F4;
    }
  }

  textarea{
    width: 100%;
    min-height: 150px;
    margin-top: 20px;
    color:  rgba(255, 255, 255, 0.70);
    border: none;
    border-bottom: 1px solid #fff;
    background-color: transparent;
    outline: 0 solid transparent;
    font-size: 25px;
    resize: none;
    transition: 0.6s;
    &::placeholder{
      color: transparent;
    }
    &:focus{
      border-bottom: 1px solid #03E9F4;
      transition: 0.6s;
    }
  }
`