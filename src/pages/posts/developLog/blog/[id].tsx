import { MDLoader_Path, MDLoader_PostData } from '../../../../components/MDLoader/MdLoader_blog'
import Date from '../../../../components/Date'
import Head from 'next/head'
import Layout from '../../../../components/Content/contentLayout'
import Link from 'next/link'
import React from 'react'
import Utterance from '../../../../components/utterance'
import { darkModeState } from '../../../../components/state'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'

const Posts = ({ postData }) => {
    const whatPage = 'developLog/blog'
    const darkMode = useRecoilValue(darkModeState)

    return (
        <Layout>
            <Head>
                <title>재한쓰의 공부용 블로그 😊 - {postData.id}</title>
                <meta property="og:title" content={`{재한쓰의 공부용 블로그 😃 - ${postData.id}`} />
                <meta property="twitter:title" content={`{재한쓰의 공부용 블로그 😃 - ${postData.id}`} />
                <meta property="og:url" content={`http://wisesaturn.github.io/study-blog/posts/${whatPage}/${postData.id}`} />
                <meta property="twitter:url" content={`http://wisesaturn.github.io/study-blog/posts/${whatPage}/${postData.id}`} />
                
            </Head>
            <Post>
                <div className="postCategory">
                    <Link href="/">Home</Link> / <Link href={`/posts/${whatPage}`}> blog </Link> / {postData.id}
                </div>
                <div className="titleArea">
                    <span id="title">{postData.title}</span>
                    <span id="date"><Date dateString={postData.date} theme="post" /> </span>
                </div>
                <div className="content" id={`${ darkMode ? 'dark' : 'light'}`} dangerouslySetInnerHTML={{ __html: postData.contentHTML }} />
                <div className="tag">{postData.tags}</div>
                <div className="countComment"><Utterance /></div>
            </Post>
        </Layout>
    )
}

const Post = styled.div`

    .postCategory { // 카테고리 영역
        padding : 1.6rem;
        padding-bottom : 0;
        font-size : 14px;

        > a { // 카테고리 링크
            font-size : 14px;
            text-decoration : none;
            color : var(--normal-ft);

            &:hover {
                color : var(--normal-after)
            }
         }
    }

    .titleArea { // 타이틀 영역 (제목, 날짜)
        display : flex;
        padding : 1.6rem;
        padding-top : .8rem;
        border-bottom : 2px solid var(--bottom-line);
        justify-content : space-between;

        #title { // 제목 영역
            font-size: 28px;
            font-weight: bold;
            color: var(--content-ft);
        }

        #date, #date>time { // 날짜 영역
            font-size: 16px;
            font-weight: normal;
            color: var(--normal-ft);
            margin-top : auto;
        }
    }

    .tag { // 태그
        padding : 1.6rem 1.2rem;
        border-bottom : 2px solid var(--bottom-line);
    }

    /*
    // 반응형 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        $boundary0: 1280px; // Laptop ~ Desktop
        $boundary1: 1024px; // Laptop
        $boundary2: 768px; // Tablet
        $boundary3: 425px; // Mobile
    */

    @media only screen and (max-width: 768px) {
        // 모바일 ~ 태블릿
        .postCategory {
            padding : .8rem;
        }

        .titleArea {
            padding : .8rem;
            flex-direction : column;

            #title {
                font-size : 1.3rem;
            }

            #date, #date>time { // 날짜 영역
                font-size: .8rem;
                margin-top : .3rem;
            }
        }
    }
`

export const getStaticPaths = async () => {
    const paths = MDLoader_Path()

    return {
        paths,
        fallback : false,
        // fallback이 false라면 이 함수 안에서 반환되지 않은 path는 404 페이지를 반환한다.
    }
}

export const getStaticProps = async ({ params }) => {
    const postData = await MDLoader_PostData(params.id)
    
    return {
        props: {
            postData,
        },
    }
}

export default Posts
