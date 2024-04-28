import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";

export const Header = () => {
    return (
        <header>
            <Logo/>
            <Menu/>
        </header>
    );
};