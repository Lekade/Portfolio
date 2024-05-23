import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../../../assets/styles/slider.css'
import {Project} from "../project/Project";


const items = [
    <Project/>,
    <Project/>,
    <Project/>,
    <Project/>,
    <Project/>,
];

export const Slider = () => (
    <AliceCarousel
        mouseTracking
        items={items}
    />
);