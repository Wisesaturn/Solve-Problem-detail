import Data from './Data'
import Navigator from './Navigator/Navigator'
import React from 'react'
import styled from 'styled-components'

interface Cprops {
    content : string
}

function Content(props: Cprops) {
    return (
        <ContentWrap>
            <Navigator content={props.content} />
            <Data content={props.content}/>
        </ContentWrap>
    )
}

const ContentWrap = styled.div`
    display: flex;
    flex: 1;
    height: calc(100vh - (20px + 80px + 80px));
    padding: 1.6rem 12rem;
}
`

export default Content
