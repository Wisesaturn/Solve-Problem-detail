import React from 'react';
import styled from 'styled-components';
import { search_active } from '../state';
import { useRecoilValue } from 'recoil';
import { AiOutlineEnter } from 'react-icons/ai'

const Search_area = () => {
    const active = useRecoilValue(search_active);

    return (
        <Search_area_wrap active={active}>
            <input type="text" placeholder="검색어를 입력하세요"></input>
            <AiOutlineEnter id="enter"/>
        </Search_area_wrap>
    )
}

const Search_area_wrap = styled.div`
    display : ${ (props) => props.active ? 'flex' : 'none' };
    position : relative;
    margin : 0 auto;
    border 1px solid var(--search-border);
    border-radius : 5px;

    animation : ${ (props) => props.active
                        ? 'Search_open .4s ease-out forwards'
                        : 'null' };
    
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

export default Search_area;