import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/container/Container";
import {Icon} from "../../../components/icon/Icon";
import {ContactForm} from "./сontactForm/ContactForm";
import {Theme} from "../../../assets/styles/Theme";

const socialIcon:{id:string, link:string, width:string, height:string}[] = [
    {
        id: 'githubWhite',
        link: 'https://github.com/Lekade',
        width: '25px',
        height: '25px'
    },
    {
        id: 'linkedin',
        link: 'https://www.linkedin.com/in/lekade/',
        width: '25px',
        height: '25px'
    },    {
        id: 'telegram',
        link: 'https://t.me/Dkaspii',
        width: '25px',
        height: '25px'
    },    {
        id: 'instagram',
        link: 'https://www.instagram.com/de_kaspii/',
        width: '25px',
        height: '25px'
    }

]


export const Contacts = () => {
    return (
        <StyledContact id="contacts">
            <Container>
                <ContactInfo>
                    <Slogan>Let’s<br/> Connect</Slogan>
                    <SocialLinks>
                        {socialIcon.map((item, i) =>
                            <li key={i}>
                                <a href={item.link} target="_blank">
                                    <Icon id={item.id} width={item.width} height={item.height}/>
                                </a>
                            </li>
                        )}
                    </SocialLinks>
                </ContactInfo>
                <ContactForm/>
            </Container>
        </StyledContact>
    );
};


const StyledContact = styled.section`
  width: 100%;
  min-height: 90vh;
  padding: ${Theme.section.paddingDesktop} 0;
  background-color: ${Theme.colors.tertiary};
  ${Container}{
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 1070px){
      flex-direction: column;
    }
  }
  @media ${Theme.media.medium}{
    padding: ${Theme.section.paddingMobile} 0;
  }
`

const ContactInfo = styled.div`
  @media screen and (max-width: 1070px){
    width: 100%;
    max-width: 500px;
    margin: 0 auto 100px;
  }
  @media screen and (max-width: 540px){
    max-width: 360px;
    margin: 0 auto 60px;
  }  
`
const Slogan = styled.span`
  font-family: "NEXT ART", sans-serif;
  font-size: 90px;
  font-weight: 700;
  line-height: 120%;
  @media screen and (max-width: 540px){
    font-size: 62px;
  }
`

const SocialLinks = styled.ul`
  padding-top: 30px;
  display: flex;
  @media screen and (max-width: 1070px){
    justify-content: space-between;
    padding-right: 40px;
  }
  li{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    cursor: pointer;
    transition:0.6s;
    :hover{
      transform: scale(1.6);
      transition:0.6s;
    }
  }
  li + li{
    margin-left: 60px;
  }
  
  a{
    color:${Theme.colors.accent2};
  }
`
