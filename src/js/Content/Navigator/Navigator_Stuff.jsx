import React from 'react';
import styled from 'styled-components';

const Navigator_Stuff = ({content}) => {
    return (
        <Stuff_wrap>
            {content}
        </Stuff_wrap>
    );
}

const Stuff_wrap = styled.div`
    position : relative;
    left : 0;
    width : 4rem;
    height : 4rem;
    margin-bottom : 1rem;
    background-color : purple;
    animation : Stuff_hover_before .3s ease-out forwards;

    &:hover {
        animation : Stuff_hover .3s ease-out forwards;
        cursor : pointer;
    }
`


export default Navigator_Stuff