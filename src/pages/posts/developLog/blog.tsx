import MDLoader_Sort from '../../../components/MdLoader'
import React from 'react'

const categoriesPage = ({ allPostsData }) => {
    return (
        <>
            카테고리 페이지 입니다.
            {allPostsData.map ((Data) => {
                return (
                    <p>
                        {Data.title}
                        <br />
                        {Data.id}
                        <br />
                        {Data.categories}
                        <br/>
                    </p>
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
