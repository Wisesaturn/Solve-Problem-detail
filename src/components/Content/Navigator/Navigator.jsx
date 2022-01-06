import React, { useEffect } from 'react';
import Profile from './Profile';
import Navigator_Menu from './Navigator_Menu';
import Navigator_Stuff from './Navigator_Stuff';
import { useRecoilState } from 'recoil';
import { Sitebar_state, subMenu_focus } from '../../state';

const Navigator = ({visible}) => {
    const [push, setPush] = useRecoilState(Sitebar_state);
    const [focus, setFocus] = useRecoilState(subMenu_focus);
    useEffect(() => { setFocus(0) }, [push]);

    return (
        <div className={`${push ? 'Navigator_all_wrap' : 'Navigator_all_wrap_off'}`} >
            <div className="Navigator_stuff_wrap" >
                <Navigator_Stuff content="Home" Click="Home" />
                <Navigator_Stuff content="Search" Click="Search" />
            </div>
            <div className="Navigator_wrap">
                    <Profile />
                    <Navigator_Menu content="메뉴1" id="1" />
                    <Navigator_Menu content="메뉴2" id="2" />
                    <Navigator_Menu content="메뉴3" id="3" />
            </div>
        </div>
    );
}

export default Navigator;