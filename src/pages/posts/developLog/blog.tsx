import Category from '../../../components/Category'
import Head from 'next/head'
import Layout from '../../../components/Content/contentLayout'
import MDLoader_Sort from '../../../components/MDLoader/MdLoader_blog'
import React from 'react'
import styled from 'styled-components'

interface D_Type {
    id : string,
    date : string,
    categories : string,
    detail? : string,
    title : string,
}

const categoryBlog = ({ allPostsData }) => {
    return (
        <Layout>
            <Head>
                <title>재한쓰의 공부용 블로그 😊 - 기록/blog</title>
                <meta property="og:title" content={'{재한쓰의 공부용 블로그 😃 - 기록/blog'} />
                <meta property="twitter:title" content={'{재한쓰의 공부용 블로그 😃 - 기록/blog'} />
                <meta property="og:url" content={'http://wisesaturn.github.io/study-blog/posts/developLog/blog'} />
                <meta property="twitter:url" content={'http://wisesaturn.github.io/study-blog/posts/developLog/blog'} />
            </Head>
            <DataWrap>
                <h2>Blog</h2>
                <ul>
                    {allPostsData.map ((Data: D_Type)  => {
                        return <Category key={Data.id} Data={Data} whatPage='developLog/blog'/>
                    })}
                </ul>
            </DataWrap>
        </Layout>
    )
}

// CSS ---------------------------------------------
const DataWrap = styled.div`
    margin : 0rem 1rem;

    h2 {  // 카테고리 제목
        font-size : 2rem;
        margin-bottom : 1rem;
        padding : 1rem 3rem;
        display: block;
        justify-content: space-between;
        font-weight: bold;
        color: var(--content-ft);
        border-bottom : .5px solid var(--bottom-line);
    }

    ul { list-style : none; }

    // 반응형 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @media only screen and (max-width : 425px) {
        // 모바일
        h2 {
            font-size : 1.4rem;
            padding : .6rem 1rem;
        }
    }
`

export default categoryBlog

// HTML Build 할 때 props를 불러옵니다.
export const getStaticProps = async () => {
    const allPostsData = MDLoader_Sort()

    return {
        props: {
            allPostsData,
        },
    }
}
