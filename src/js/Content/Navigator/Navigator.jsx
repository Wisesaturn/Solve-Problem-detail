import React from 'react';
import "../../../css/Navigator.scss";
import Profile from './Profile';
import Navigator_Menu from './Navigator_Menu';
import Navigator_Stuff from './Navigator_Stuff';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { Sitebar_state } from '../../state';

const Navigator = ({visible}) => {
    const [push, setPush] = useRecoilState(Sitebar_state);;

    return (
        <div className={`${push ? 'Navigator_wrap' : 'Navigator_wrap_off'}`} >
            <div className="Navigator_stuff_wrap" >
                <Navigator_Stuff content="Home" />
                <Navigator_Stuff content="Search" />
            </div>
            <div className="Navigator">
                <Profile />
                <div className="Navigator_menu_wrap">
                    <Navigator_Menu content="메뉴1" id="1" />
                    <Navigator_Menu content="메뉴2" id="2" />
                    <Navigator_Menu content="메뉴3" id="3" />
                </div>
            </div>
        </div>
    );
}

export default Navigator;