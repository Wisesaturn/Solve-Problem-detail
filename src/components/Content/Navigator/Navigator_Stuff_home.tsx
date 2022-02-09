import { AiFillHome } from 'react-icons/ai'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const Navigator_Stuff = () => {
    return (
        <StuffWrap>
            <Link href='/' passHref>
                <AiFillHome />
            </Link>
        </StuffWrap>
    )
} // passHref : 자식에게 강제로 'href' props 전달

const StuffWrap = styled.div`
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
