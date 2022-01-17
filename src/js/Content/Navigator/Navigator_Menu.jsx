import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { subMenu, subMenu_focus } from '../../state';

const Navigator_Menu = (props) => {
    const menu = [...subMenu];
    const [sub, setSub] = useState([]);
    const [focus, setFocus] = useState(false);
    const [now, setNow] = useRecoilState(subMenu_focus);

    const onClick = (e) => {   
        let temp = [...menu[e.target.id-1]];
        setSub(temp);
        setNow(e.target.id);
    }

    const subList = sub.map((d, index) => 
        <li
            key={index}>
                {d.icon}
                <span>{d.title}</span>
        </li>
    );

    useEffect( () => { (props.id == now ? setFocus(true) : setFocus(false)) },[now]);
    
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

   > li {
        padding : .5rem;
   }

    &:hover {
        cursor : pointer;
        > li { padding-left : 1rem; }
    }
`

const Navigator_sub_wrap = styled.div`
    display: ${(props) => (props.visible ? 'flex' : 'none')};
    flex-direction : column;
    position : relative;

    > li {
        background-color : #ddd;
        padding : .5rem 1.5rem;

        &:hover { padding-left : 2rem; }
    }
`

export default Navigator_Menu;