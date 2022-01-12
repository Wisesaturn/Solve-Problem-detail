import React from 'react'
import '../css/Menu.scss';

const Menu = () => {
    return (
        <div className="MenuSpace_wrap">
            <div className="MenuSpace">
                홈
            </div>
            <div className="MenuSpace">
                방명록
            </div>
            <div className="MenuSpace">
                다크모드 ON/OFF
            </div>
        </div>
    );
}

export default Menu;