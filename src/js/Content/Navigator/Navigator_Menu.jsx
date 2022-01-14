import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { subMenu } from '../../state';

const Navigator_Menu = (props) => {
    const menu = [...subMenu];
    const [sub, setSub] = useState([]);

    const onClick = (e) => {
        for (let i = 0; i < menu.length ; i++) {
            if (e.target.id == menu[i].id) {   
                let temp = [...menu[i].content];
                setSub(temp);
            }
        }
    }

    const subList = sub.map((d) => 
        <li
            key={d}>
            {d}
        </li>
    );

    const visible = useEffect(() => {
        // visible 조건문, state에 visible를 추가해야 할 듯
        // visible 값이 오직 하나만 존재하게 하고 onClick할 때 visible=true하면 될 듯?
        // 1. 처음에 visible 전부 false 후, 2. onClick할 때 true 적용하면 될 듯?
    },[]);

    return (
        <Navigator_wrap>
            <li onClick={onClick} id={props.id}> {props.content} </li>
            <Navigator_sub_wrap visible={visible}>
                {subList}
            </Navigator_sub_wrap>
        </Navigator_wrap>
    );
}

const Navigator_wrap = styled.div`
    display : block;
    text-decoration : none;
    list-style : none;
   > li {
        padding : .5rem;
   }

    &:hover {
        cursor : pointer;
    }
`

const Navigator_sub_wrap = styled.div`
    display: ${(props) => (props.visible ? 'block' : 'none')};

    > li {
        padding : .5rem 1.5rem;
    }
`

export default Navigator_Menu;