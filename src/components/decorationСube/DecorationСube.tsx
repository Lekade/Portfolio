import React from 'react';
import {AnimateSurfaceCube, TurningShakingCube} from "../../assets/animations/Animation";
import styled from "styled-components";

export const DecorationCube = () => {
    return (
        <CubeBox>
            <Cube>
                <div>decoration cube</div>
            </Cube>
        </CubeBox>
    );
};


const CubeBox = styled.div`
  width: 100%;
  position: absolute;
  transform: rotate(-35deg);
  left: -2%;
  top:45%;
  z-index: 1;
  @media screen and (max-width: 600px){
    display: none;
  }
  
`
const Cube = styled.div`
  position: relative;
  left: -200px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% + 400px);
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0004);
  animation: ${AnimateSurfaceCube} 1.5s ease-in-out infinite;


  div{
    color: transparent;
    font-size: 0;
    position: relative;
    width: 200px;
    height: 200px;
    background: #03e9f4;
    box-shadow:  0 0 5px rgba(3, 233, 244, 1),
    0 0 25px rgba(3, 233, 244, 1),
    0 0 50px rgba(3, 233, 244, 1),
    0 0 100px rgba(3, 233, 244, 1),
    0 0 200px rgba(3, 233, 244, 0.5),
    0 0 300px rgba(3, 233, 244, 0.5);
    transform-origin: bottom right;
    animation: ${TurningShakingCube} 1.5s ease-in-out infinite;
    
  }
`