import React from 'react';
import iconsSprite from '../../assets/images/icons-sprite.svg'

type IconsPropsType = {
    id: string,
    width?: string,
    height?: string
}



export const Icon = (props: IconsPropsType) => {
    return (
        <svg width={props.width || "80px"} height={props.height || "80px"} fill="none" xmlns="http://www.w3.org/2000/svg">
                <use   xlinkHref={`${iconsSprite}#${props.id}`}/>
        </svg>
    );
};
