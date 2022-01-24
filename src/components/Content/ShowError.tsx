import { MdOutlineError } from 'react-icons/md'
import React from 'react'
import styled from 'styled-components'

interface Eprops {
    content : string
}

const Show_Error = (props: Eprops) => {
    const ErrorContent = props.content === '404' ? 'block' : 'none'

    return (
        <ShowErrorWrap content={ErrorContent}>
            <MdOutlineError className="icon"/>
            <p>404 Pages</p>
            <p id="sub">잘못된 접근입니다.</p>
            <p id="back">(( 뒤로가기 버튼 ))</p>
        </ShowErrorWrap>
    )
}

const ShowErrorWrap = styled.div<{content : string}>`
    display: ${(props) =>{ return props.content }};
    width : 100%;

    >.icon {
        position : relative;
        text-align : center;
        width : 10rem; height : 10rem;
        left : 50%;
        top : 2%;
        transform: translateX(-50%);
        color : var(--Error-ft)
    }

    p {
        display : block;
        text-align : center;
        font-size : 5rem;
        font-weight : bold;

        &#sub {
            padding : 2rem 1rem;
            font-size : 2rem;
            font-weight : bold;
            text-align : center;
        }

        &#back {
            text-align : center;
            font-size : 2rem;
        }
    }
`

export default Show_Error
