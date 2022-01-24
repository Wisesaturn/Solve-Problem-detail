import { searchActive, stuffMenu } from '../../state'
import React from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'

type props_type = {
    content: string,
    Click: boolean | string
}

const Navigator_Stuff = (props: props_type) => {
    const content_filter = stuffMenu.filter(d => d.key === props.content) // state 데이터 속 key와 Component로 받은 content를 비교하여 데이터 filter
    const [active, setActive] = useRecoilState(searchActive)

    const Click = () => {
        props.Click === 'Search' ? setActive(!active)
            : props.Click === 'Home' ? setActive(false) : setActive(null)
        
    }

    return (
        <StuffWrap onClick={Click}>
            {content_filter[0].icon}
        </StuffWrap>
    )
}

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
