import Content from '../../src/components/Content/Content'
import MDLoader_Sort from '../components/MdLoader'
import React from 'react'

const IndexPage = ({ allPostsData }) => {
    return (
        <>
            <Content content="Index" /> 
        </>
    )
}
export default IndexPage

export const MDLoader_GetPosts = async () => {
    const allPostsData = MDLoader_Sort()

    return {
        props: {
            allPostsData,
        },
    }
}
