import { AiOutlineEnter } from 'react-icons/ai'
import React from 'react'
import { searchActive } from '../state'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'

interface Sprops {
    content : string
}

const Search_area = (props: Sprops) => {
    const active = useRecoilValue<boolean | null>(searchActive)
    
    return (
        <SearchAreaWrap<any> active={active}>
            <input type="text" placeholder="검색어를 입력하세요"></input>
            <AiOutlineEnter id="enter" />
        </SearchAreaWrap>
    )
}

const SearchAreaWrap = styled.div`
// SearchArea CSS ---------------------------
    display : ${(props: any) => props.active ? 'flex' : 'none'};
    position : relative;
    margin : 0 auto;
    border 1px solid var(--search-border);
    border-radius : 5px;

    animation : ${(props: any) => props.active
        ? 'Search_open .4s ease-out forwards'
        : 'null'};
    
    > input {
        display : block;
        width : 30vw;
        padding : 1.2vh 3vw;
        background-color : inherit;
        color : inherit;
        border : none;
    }

    > #enter {
        position : relative;
        margin : auto 0;
        padding : 0 .7vw;
        display : block;
    }
`

export default Search_area
