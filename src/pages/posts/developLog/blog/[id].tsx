import { MDLoader_Path, MDLoader_PostData } from '../../../../components/MDLoader/MdLoader_blog'
import Date from '../../../../components/Date'
import Layout from '../../../../components/Content/contentLayout'
import Link from 'next/link'
import React from 'react'
import { darkModeState } from '../../../../components/state'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'

const Posts = ({ postData }) => {
    const whatPage = 'developLog/blog'
    const darkMode = useRecoilValue(darkModeState)

    return (
        <Layout>
            <Post>
                <div className="postCategory">
                    <Link href="/">Home</Link> / <Link href={`/posts/${whatPage}`}> blog </Link> / {postData.id}
                </div>
                <div className="titleArea">
                    <span id="title">{postData.title}</span>
                    <span id="date"><Date dateString={postData.date} theme="post" /> </span>
                </div>
                <div className="content" id={`${ darkMode ? 'dark' : 'light'}`} dangerouslySetInnerHTML={{ __html: postData.contentHTML }} />
            </Post>
        </Layout>
    )
}

const Post = styled.div`

    .postCategory {
        padding : 1.6rem;
        padding-bottom : 0;
        font-size : 14px;

        > a {
            font-size : 14px;
            text-decoration : none;
            color : var(--normal-ft);

            &:hover {
                color : var(--normal-after)
            }
         }
    }

    .titleArea { 
        display : flex;
        padding : 1.6rem;
        padding-top : .8rem;
        border-bottom : 2px solid var(--bottom-line);
        justify-content : space-between;

        #title {
            font-size: 28px;
            font-weight: bold;
            color: var(--content-ft);
        }

        #date, #date>time {
            font-size: 16px;
            font-weight: normal;
            color: var(--normal-ft);
            margin-top : auto;
        }
    }

    .content {
        padding : 1.2rem 1.2rem 0 1.2rem;
        line-height: 1.6rem;
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
