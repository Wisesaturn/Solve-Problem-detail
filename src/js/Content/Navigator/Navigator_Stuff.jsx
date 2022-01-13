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
    width : 3rem;
    height : 4rem;
    margin-bottom : 1rem;
`


export default Navigator_Stuff