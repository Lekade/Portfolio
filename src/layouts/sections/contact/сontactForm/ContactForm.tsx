import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {btnFormAnimation} from "../../../../assets/animations/Animation";
import styled from "styled-components";
import {Field} from "./field/Field";



export const ContactForm = () => {
    return (
        <StyledContactForm>
            <Field fieldTitle={'Your name:'} fieldTeg={'input'} fieldType={'text'} placeholder={'Name'}/>
            <Field fieldTitle={'Your email  address:'} fieldTeg={'input'} fieldType={'email'} placeholder={'Mail'}/>
            <Field fieldTitle={'Tell about the project:'} fieldTeg={'textarea'} placeholder={'Message'}/>
            <FormBtn><span>Send</span><Icon id={'buttonArrow'} width={'20px'} height={'18px'} /></FormBtn>
        </StyledContactForm>
    );
};

const StyledContactForm = styled.form`
  display: block;
  width: 100%;
  max-width: 500px;
  @media screen and (max-width: 1070px){
    margin: 0 auto;
  }
`
const FormBtn = styled.button`
  width: 140px;
  margin-top: 40px;
  padding: 12px 10px 12px 0;
  position: relative;
  font-family: Poppins, sans-serif;
  font-size: 30px;
  font-weight: 500;
  line-height: 120%;
  background-color: transparent;
  border: none;
  color: #03E9F4;
  cursor: pointer;
  span{
    display: block;
    text-align: start;
    margin-right: 40px;
  }
  svg{
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    animation: ${btnFormAnimation} 1s ease-in-out infinite;
    transition: 0.6s;
  }
  &:hover{
    svg{
      transition: 0.6s;
      transform: translateY(-50%) rotate(180deg);
    }
  }
`