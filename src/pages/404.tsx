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
    }

    #back {
        width : 3vw;
        height : 3vh;
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
`
export default ErrorPages
