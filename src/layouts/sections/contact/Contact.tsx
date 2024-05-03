import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/container/Container";

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <ContactInfo>
                    <h2>Let’s<br/> Connect</h2>
                    <ul>
                        <li>
                            <a href="#">
                                <img src="" alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="" alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="" alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="" alt=""/>
                            </a>
                        </li>
                    </ul>
                </ContactInfo>
                <Form>
                    <label >
                        <span>Your name:</span>
                        <input type="text" placeholder="Name"/>
                    </label>
                    <label >
                        <span>Your email  address:</span>
                        <input type="email" placeholder="Mail"/>
                    </label>
                    <label >
                        <span>Tell about the project:</span>
                        <textarea placeholder="Message"/>
                        {/*<input type="text" placeholder="Message"/>*/}
                    </label>
                    <FormBtn><span>Send</span><img src="" alt="arrow"/></FormBtn>
                </Form>
            </Container>
        </StyledContact>
    );
};


const StyledContact = styled.section`
  width: 100%;
  padding: 100px 0;
  background-color: #000;
  ${Container}{
    display: flex;
    justify-content: space-between;
  }
`

const ContactInfo = styled.div`
  h2{
    font-family: "NEXT ART", sans-serif;
    font-size: 90px;
    font-weight: 700;
    line-height: 120%;
  }
  
  ul{
    padding-top: 30px;
    display: flex;
    li{
      width: 25px;
      height: 25px;
      background-color: #fff;
      border-radius: 50%;
    }
    li + li{
      margin-left: 60px;
    }
  }
`

const Form = styled.form`
  display: block;
  width: 100%;
  max-width: 500px;
  label{
    display: block;
    width: 100%;
  }
  label > span{
    display: block;
    font-family: Poppins, sans-serif;
    font-size: 30px;
    font-weight: 500;
    line-height: 120%;
  }
  
  input{
    width: 100%;
    padding-top: 30px;
    margin-bottom: 40px;
    background-color: transparent;
    color: #fff;
    border: none;
    border-bottom: 1px solid #fff;
    outline: 0 solid transparent;
    font-size: 25px;
    &::placeholder{
      color: transparent;
    }
  }
  
  textarea{
    width: 100%;
    min-height: 150px;
    margin-top: 20px;
    color: #fff;
    border: none;
    border-bottom: 1px solid #fff;
    background-color: transparent;
    outline: 0 solid transparent;
    font-size: 25px;
    &::placeholder{
      color: transparent;
    }
  }
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
`