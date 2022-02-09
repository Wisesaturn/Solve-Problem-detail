import { AiOutlineEnter } from 'react-icons/ai'
import React from 'react'
import { searchActive } from '../state'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'

const Search_area = () => {
    const active = useRecoilValue<boolean | null>(searchActive) // Did you Push the Search Button?
    
    return (
        <Wrap<any> active={active}>
            <SearchAreaWrap<any> active={active}>
                <input type="text" placeholder="검색어를 입력하세요"></input>
                <AiOutlineEnter id="enter" />
            </SearchAreaWrap>
            <div className="dim" />
        </Wrap>
    )
}

const SearchAreaWrap = styled.div`
// SearchArea CSS ---------------------------
    display : ${(props: any) => props.active ? 'flex' : 'none'};
    position: fixed;
    left: 50vw;
    transform: translateX(-50%);
    margin : 90vh auto 0;
    background-color : var(--normal-bg);

    border : 1px solid var(--search-border);
    border-radius : 5px;
    z-index : 1000;

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

const Wrap = styled.div`
    // Search 전체 영역
    .dim {
        opacity : ${(props: any) => props.active ? '1' : '0'};
        z-index : ${(props: any) => props.active ? '999' : '-1'};
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.4);
        width: 100%;
        height: 100%;
        transition: 0.5s;
    }
`

export default Search_area
