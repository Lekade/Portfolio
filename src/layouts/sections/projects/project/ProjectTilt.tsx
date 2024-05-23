import React from 'react';
import {Project} from "./Project";
import Tilt from 'react-parallax-tilt';

export const ProjectTilt = () => {
    return (
        <li>
            <Tilt glareEnable={true}
                  glareMaxOpacity={0.8}
                  glareColor="#ffffff"
                  glarePosition="bottom"
                  glareBorderRadius="20px"
            >
                <Project/>
            </Tilt>
        </li>
    )
};

export default ProjectTilt;