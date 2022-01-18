import React from 'react';
import styled from 'styled-components';
import { stuffMenu, search_active } from '../../state';
import { useRecoilState } from 'recoil';

const Navigator_Stuff = (props) => {
    const content_filter = stuffMenu.filter(d => d.key === props.content);
    const [active, setActive] = useRecoilState(search_active);

    const Click = () => { 
        props.Click === "Search" ? setActive(!active)
            : props.Click === "Home" ? setActive(false) : setActive(null);
        ;
    }

    return (
        <Stuff_wrap onClick={Click}>
            {content_filter[0].icon}
        </Stuff_wrap>
    );
}

const Stuff_wrap = styled.div`
    position : relative;
    left : 0;
    width : 4rem;
    height : 3rem;
    margin-bottom : 1rem;
    background-color : var(--stuff-bg);
    border-radius : 5px;
    box-shadow : 1px 3px 2px 1px var(--stuff-shadow);
    animation : Stuff_hover_before .3s ease-out forwards;

    svg {
        display : block;
        width : 1.8rem;
        height : 1.8rem;
        padding : .6rem;
    }

    &:hover {
        animation : Stuff_hover .3s ease-out forwards;
        cursor : pointer;
    }

    &:active {
        animation : Stuff_hover_active ease-out forwards;
    }
`


export default Navigator_Stuff