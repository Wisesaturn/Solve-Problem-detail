import React from 'react'

interface Tprops {
    content : string
}

const title = (props: Tprops) => {
    return (
        <div className="title_wrap">
            <div className="Category">
                카데고리 영역입니다.
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
