import React from 'react'
import { darkMode_state } from '../state';
import { useRecoilState } from 'recoil';
import DarkMode_button from './Darkmode';

const Menu = () => {
    return (
        <div className="MenuSpace_wrap">
            <div className="MenuSpace">
                방명록
            </div>
            <div className="MenuSpace">
                <DarkMode_button />
            </div>
        </div>
    );
}

export default Menu;