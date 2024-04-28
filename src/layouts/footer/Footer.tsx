import React from 'react';
import {Menu} from "../../components/menu/Menu";

export const Footer = () => {
    return (
        <footer>
            <Menu/>
            <div className="contact">
                <span>Contact:</span>
                <span>Email: notitanic33@gmail.com</span>
                <span>Inst: notitanic33</span>
                <span>Calls: +7 (900) - 121 - 54 -54</span>
            </div>
            <div className="logo">Lekade</div>
            <span>Copyright © 2024, Notitanic</span>
        </footer>
    );
};