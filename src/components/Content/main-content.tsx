import React from 'react'
import styled from 'styled-components'

interface Mprops {
    content: string
}

const main_content = (props: Mprops) => {
    return (
        <MainContentWrap>
            게시물 내용입니다.<br/>
            <br/>
            <br/>
            <br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/>
            <div className="Tag">
                <div className="Tag_Title">Tags</div>
                <div className="Tag_List">List 1</div>
            </div>
        </MainContentWrap>
    )
}

const MainContentWrap = styled.div`
    display : block;
`

export default main_content
