import Link from 'next/Link'
import MDLoader_Sort from '../../../components/MdLoader'
import React from 'react'

const categoriesPage = ({ allPostsData }) => {
    return (
        <>
            카테고리 페이지 입니다.
            {allPostsData.map ((Data) => {
                return (
                    <Link href="/posts/developLog/blog/[Data.id]" as={`/posts/developLog/blog/${Data.id}`}>
                        <p>
                            {Data.title}
                            <br />
                            {Data.id}
                            <br />
                            {Data.categories}
                            <br/>
                        </p>
                    </Link>
                )
            })}
        </>
    )
}
export default categoriesPage

// HTML Build 할 때 props를 불러옵니다.
export const getStaticProps = async () => {
    const allPostsData = MDLoader_Sort()

    return {
        props: {
            allPostsData,
        },
    }
}
