import React from 'react'

interface Tprops {
    content : string
}

const title = (props: Tprops) => {
    return (
        <div className="title_wrap">
            <div className="Category">
                <a href="Home">Home</a> / <a href="Menu">Menu</a> / <a href="Content">Content</a>
            </div>
            <div className="title">
                제목입니다.
                <div className="Date">
                    20XX.00.00 06:00
                </div>
            </div>
        </div>
    )
}

export default title
