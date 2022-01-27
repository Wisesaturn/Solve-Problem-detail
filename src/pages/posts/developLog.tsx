import MDLoader_Sort from '../../components/MdLoader'
import React from 'react'

const categoriesPage = ({ allPostsData }) => {
    return (
        <>
            카테고리 페이지 입니다.
        </>
    )
}
export default categoriesPage

export const MDLoader_GetPosts = async () => {
    const allPostsData = MDLoader_Sort()

    return {
        props: {
            allPostsData,
        },
    }
}
