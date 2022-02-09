import React, { useEffect, useState } from 'react'
import { subMenu, subMenuFocus } from '../../state'
import Link from 'next/Link'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'

type visible_type = {
    visible: boolean
}

type props_type = {
    content: string
    id: any
}

type e_type = {
    target: any
}

const Navigator_Menu = (props: props_type) => {
    const menu = [...subMenu] // subMenu Swallow Copy
    const [sub, setSub] = useState([]) // extract loction
    const [focus, setFocus] = useState(false) // Is this active?
    const [now, setNow] = useRecoilState(subMenuFocus) // What's actually active.

    const onClick = (e: e_type) => {
        let temp = [...menu[e.target.id - 1]] // When User Click on specific menu, copy on that's Sub.
        setSub(temp) // Select the submenu
        props.id === now ? setNow(0) : setNow(e.target.id) // if it's already open status, just close.
    }

    const subList = sub.map((d, index): any =>
        <Link href={`${d.path}`} as={`${d.path}`}>
            <li
                key={index}>
                {d.icon}
                <span>{d.title}</span>
            </li>
        </Link>,
    ) // Use map, make the <li> tags using menu array.

    useEffect(() => { (props.id === now ? setFocus(true) : setFocus(false)) }, [now])
    // detect when User click on other menu.

    return (
        <NavigatorWrap>      
                <li onClick={onClick} id={props.id}> {props.content} </li>
            <NavigatorSubWrap visible={focus} id={props.id}>
                {subList}
            </NavigatorSubWrap>
        </NavigatorWrap>
    )
}

const NavigatorWrap = styled.div`
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

const NavigatorSubWrap = styled.div`
    display: ${(props: visible_type) => (props.visible ? 'flex' : 'none')};
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

export default Navigator_Menu
