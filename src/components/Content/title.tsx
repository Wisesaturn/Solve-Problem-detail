import Link from 'next/link'
import React from 'react'

interface Tprops {
    content : string
}

const title = (props: Tprops) => {
    return (
        <div className="title_wrap">
            <div className="Category">
                <Link href="/Home">Home</Link> / <Link href="/Menu">Menu</Link> / <Link href="/Content">Content</Link>
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
