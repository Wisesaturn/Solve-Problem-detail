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
