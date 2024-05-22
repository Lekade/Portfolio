import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {Theme} from "../../../../assets/Theme";

type propsSkillsType = {
    skillsItems: {
        id: string,
        heading: string
    }[]
}

const Skills = (props: propsSkillsType) => {
    return (
        <StyledSkills>
            {props.skillsItems.map((skill, index) => <li key={index}>
                <Icon id={skill.id} />
                <h4>{skill.heading}</h4>
            </li>)}
        </StyledSkills>
    );
};

export default Skills;



const StyledSkills = styled.ul`
  padding-top: 150px;
  max-width: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  z-index: 2;
  li{
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    cursor: pointer;
    webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    transition: .6s;
    h4{
      margin-top: 15px;
      font-family: The Nautigal, cursive;
      font-size: 27px;
      text-transform: capitalize;
    }
    &:hover{
      webkit-filter: grayscale(0%);
      filter: grayscale(0%);
      webkit-transform: scale(1.6);
      transform: scale(1.6);
    }
  }
  
  @media ${Theme.media.medium}{
    max-width: 100%;
    padding-top: 100px;
    li{
      width: 130px;
      height: 130px;
    }
  }

  @media screen and (max-width: 600px){
    gap: 15px;
    &:last-child{
      padding-top: 20px;
    }
    li{
      webkit-filter: grayscale(0%);
      filter: grayscale(0%);
    }
  }

  @media screen and (max-width: 465px){
    gap: 15px;
    li{
      width: 100px;
    }
  }

  @media screen and (max-width: 369px){
    gap: 15px;
    li{
      width: 80px;
    }
  }
`