import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { subMenu, subMenu_focus } from '../../state';

const Navigator_Menu = (props) => {
    const menu = [...subMenu]; // subMenu Swallow Copy
    const [sub, setSub] = useState([]); // extract loction
    const [focus, setFocus] = useState(false); // Is this active?
    const [now, setNow] = useRecoilState(subMenu_focus); // What's actually active.

    const onClick = (e) => {   
        let temp = [...menu[e.target.id-1]]; // When User Click on specific menu, copy on that's Sub.
        setSub(temp); // Select the submenu
        props.id === now ? setNow(0) : setNow(e.target.id); // if it's already open status, just close.
    }

    const subList = sub.map((d, index) => 
        <li
            key={index}>
                {d.icon}
                <span>{d.title}</span>
        </li>
    ); // Use map, make the <li> tags using menu array.

    useEffect( () => { (props.id === now ? setFocus(true) : setFocus(false)) },[now]);
    // detect when User click on other menu.

    return (
        <Navigator_wrap>
                <li onClick={onClick} id={props.id}> {props.content} </li>
            <Navigator_sub_wrap visible={focus} id={props.id}>
                {subList}
            </Navigator_sub_wrap>
        </Navigator_wrap>
    );
}

const Navigator_wrap = styled.div`
    display : flex;
    flex-direction : column;
    text-decoration : none;
    list-style : none;
    font-weight : bold;

   > li {
        padding : .5rem 1.5rem;
        background-color : var(--menu-bg);
        border-bottom : 1px solid var(--submenu-border);
        z-index : 1;
        box-shadow : 0px 1px 3px 1px var(--submenu-shadow);
   }

    &:hover {
        cursor : pointer;
        > li { animation : Subnav_menu_hover .3s ease-out forwards }
    }
`

const Navigator_sub_wrap = styled.div`
    display: ${(props) => (props.visible ? 'flex' : 'none')};
    flex-direction : column;
    position : relative;

    > li {
        background-color : var(--submenu-bg);
        padding : .5rem 1.5rem;
        font-size : .8rem;

        > span { font-size : inherit; }

        &:hover { animation : Subnav_hover .3s ease-out forwards }
        &:active { animation : Subnav_active .3s ease-out forwards }
    }
`

export default Navigator_Menu;