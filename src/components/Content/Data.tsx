import Comment from './comment'
import MainContent from './main-content'
import React from 'react'
import SearchArea from './Search_area'
import Title from './title'

const Data = () => {
    return (
        <div className="Data">
            <SearchArea />
            <Title />
            <MainContent />
            <Comment />
        </div>
    )
}

export default Data
