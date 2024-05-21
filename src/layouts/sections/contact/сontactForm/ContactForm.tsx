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
`
const FormBtn = styled.button`
  margin-top: 50px;
  font-family: Poppins, sans-serif;
  font-size: 30px;
  font-weight: 500;
  line-height: 120%;
  background-color: transparent;
  border: none;
  color: #00C1EC;
  cursor: pointer;
  span{
    margin-right: 40px;
    transition: 1s;
  }
  &:hover{
    span{
      animation: ${btnFormAnimation} 1s ease-in-out infinite;
    }
  }
`