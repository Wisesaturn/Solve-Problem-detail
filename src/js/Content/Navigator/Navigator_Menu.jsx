import React from 'react';
import styled from 'styled-components';

const Navigator_Menu = () => {
    return (
        <div className="Navigator_menu">
            <ul>
                <Navigator_Menu_li>홈 (아이콘)</Navigator_Menu_li>
                <Navigator_Menu_li>프로그래머스</Navigator_Menu_li>
            </ul>
        </div>
    );
}

const Navigator_Menu_li = styled.div`
    display : block;
    background-color : black;
    padding : 10px 15px;
`

export default Navigator_Menu;