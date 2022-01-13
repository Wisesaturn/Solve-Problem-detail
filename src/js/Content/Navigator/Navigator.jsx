import React from 'react';
import "../../../css/Navigator.scss";
import Profile from './Profile';
import Navigator_Menu from './Navigator_Menu';
import Navigator_Stuff from './Navigator_Stuff';

const Navigator = ({visible}) => {
    return (
        <div className="Navigator_wrap" >
            <div className="Navigator_stuff_wrap">
                <Navigator_Stuff content="Home" />
                <Navigator_Stuff content="Search" />
            </div>
            <div className="Navigator">
                <Profile />
                <div className="Navigator_menu_wrap">
                    <Navigator_Menu content="메뉴1" />
                    <Navigator_Menu content="메뉴2" />
                    <Navigator_Menu content="메뉴3" />
                </div>
            </div>
        </div>
    );
}

export default Navigator;