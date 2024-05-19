import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {Theme} from "../../assets/Theme";

export const MobileMenu = (props:{menuItems:Array<string>}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <StyledMobileMenu>
            <BurgerButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}><span>button menu</span></BurgerButton>

            <MenuListPopup isOpen={isOpen}>
                {props.menuItems.map((item:string, index:number) => <li key={index}>
                    <a href="#">{item}</a>
                </li>)}
            </MenuListPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
  display: none;
  align-items: center;
  @media ${Theme.media.medium}{
    display: block;
  }
`
const MenuListPopup  = styled.ul<{isOpen: boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 40px;
  
  background-color: rgba(30,30,30, 0.98);
  
  position: fixed;
  top: -150%;
  bottom: 100%;
  right: 0;
  left: 0;
  z-index: 99;
  transition: 0.6s;

  ${props => props.isOpen && css<{isOpen: boolean}>`
    top: 0;
    bottom: 0;
    z-index: 99;
    transition: 0.6s;
  `}
    
  
  a{
    color: #fff;
    font-size: 30px;
    font-weight: 500;
  }
`
const BurgerButton = styled.button<{isOpen: boolean}>`
  width: 70px;
  height: 70px;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  
  border: none;
  background-color: transparent;
  cursor: pointer;
  
  span{
    position: relative;
    display: inline-block;  
    width: 30px;
    height: 3px;
    background-color: #fff;
    color: transparent;
    font-size: 0;

    ${props => props.isOpen && css<{isOpen: boolean}>`
      background-color: rgba(255, 255, 255, 0);
  `}
       
    &::after{
      content: "";
      display: block;
      width: 30px;
      height: 3px;
      
      background-color: #fff;
      position: absolute;    
      transform: translateY(-10px);
      transition: 0.3s;

      ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: rotate(45deg) translateY(0);
        transition: 0.3s;
      `}      
    }
    &::before{
      content: "";
      width: 30px;
      height: 3px;
      display: block;
      
      background-color: #fff;
      position: absolute;
      transform: translateY(10px);
      transition: 0.3s;
      
      ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: rotate(-45deg) translateY(0);
        transition: 0.3s;
      `}
      
    }
  }
  

  
  
`