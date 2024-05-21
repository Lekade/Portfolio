import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/container/Container";
import {Icon} from "../../../components/icon/Icon";
import {ContactForm} from "./сontactForm/ContactForm";

const socialIcon:{id:string, width:string, height:string}[] = [
    {
        id: 'githubWhite',
        width: '25px',
        height: '25px'
    },
    {
        id: 'linkedin',
        width: '25px',
        height: '25px'
    },    {
        id: 'telegram',
        width: '25px',
        height: '25px'
    },    {
        id: 'instagram',
        width: '25px',
        height: '25px'
    }

]


export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <ContactInfo>
                    <h2>Let’s<br/> Connect</h2>
                    <SocialLinks>
                        <li>
                            <a href="#">
                                <Icon id={'githubWhite'} width={'25px'} height={'25px'}/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Icon id={'linkedin'} width={'25px'} height={'25px'}/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Icon id={'telegram'} width={'25px'} height={'25px'}/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Icon id={'instagram'} width={'25px'} height={'25px'}/>
                            </a>
                        </li>
                    </SocialLinks>
                </ContactInfo>
                <ContactForm/>
            </Container>
        </StyledContact>
    );
};


const StyledContact = styled.section`
  width: 100%;
  padding: 100px 0;
  background-color: #030303;
  ${Container}{
    display: flex;
    justify-content: space-between;
  }
  @media screen and (max-width: 1070px){
    flex-direction: column;
  }
`

const ContactInfo = styled.div`
  h2{
    font-family: "NEXT ART", sans-serif;
    font-size: 90px;
    font-weight: 700;
    line-height: 120%;
  }
`
const SocialLinks = styled.ul`
  padding-top: 30px;
  display: flex;
  li{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    cursor: pointer;
  }
  li + li{
    margin-left: 60px;
  }
`
