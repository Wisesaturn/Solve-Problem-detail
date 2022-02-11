import { AiFillHome } from 'react-icons/ai'
import Layout from '../components/Content/contentLayout'
import Link from 'next/link'
import { MdOutlineError } from 'react-icons/md'
import React from 'react'
import styled from 'styled-components'

const ErrorPages = (): React.ReactElement => {
    return (
        <Layout>
            <ShowErrorWrap>
                <MdOutlineError className="icon"/>
                <p>Page Not Found</p>
                <p id="sub">페이지를 찾을 수 없습니다. 😂</p>
                <Link href="/" passHref><AiFillHome size="48" className="icon" id="back"/></Link>
            </ShowErrorWrap>
        </Layout>
    )
}

const ShowErrorWrap = styled.div`
    .icon {
        position : relative;
        text-align : center;
        width : 10rem; height : 10rem;
        left : 50%;
        top : 2%;
        transform: translateX(-50%);
        color : var(--Error-ft);
        padding-bottom : 2rem;
    }

    p {
        display : block;
        text-align : center;
        font-size : 3.5rem;
        font-weight : bold;

        &#sub {
            padding : 1.5rem 1rem;
            font-size : 1.6rem;
            font-weight : bold;
            text-align : center;
        }
    }

    #back {
        width : 4vw;
        height : 4vw;
        margin-top : 10vh;
        color : var(--normal-ft);
        padding : .8rem 1.2rem;
        border-radius : 10px;
        box-shadow : 1px 1px 1px var(--header-shadow);
        background-color : var(--menu-bg);

        &:hover {
            cursor : pointer;
            color : var(--normal-after);
            background-color : var(--stuff-after);
            transition : .4s;
        }

        &:active {
            cursor : wait;
            color : var(--normal-active);
            background-color : var(--stuff-active);
            transition : none;
        }
    }

    // 반응형 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @media only screen and (max-width : 768px) {
        // 모바일 ~ 태블릿
        .icon {
            padding-bottom : 5vw;
            width : 20vw;
            height : 20vw;
        }
        p {
            font-size : 5vw;
            &#sub {
                font-size : 3vw;
                padding : 1rem;
            }
        }

        #back {
            margin-top : 5vh;
            padding : 2vw 4vw;
            width : 5vw;
            height : 5vw;
        }
    }
`
export default ErrorPages
