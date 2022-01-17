import React from 'react';
import styled from 'styled-components';
import { search_active } from '../../js/state';
import { useRecoilState } from 'recoil';

const Search_area = () => {
    const [active, setActive] = useRecoilState(search_active);

    return (
        <Search_area_wrap active={active}>
            여기는 검색 영역입니다.
        </Search_area_wrap>
    )
}

const Search_area_wrap = styled.div`
    display : ${ (props) => props.active ? 'block' : 'none' };
    position : relative;
    margin : 0 auto;
    top : 2rem;
    width : 30vw;
    padding : 1.2vh 3vw;
    border 1px solid var(--search-border);
    border-radius : 5px;

    animation : ${ (props) => props.active
                        ? 'Search_open .4s ease-out forwards'
                        : 'null' }
`

export default Search_area;