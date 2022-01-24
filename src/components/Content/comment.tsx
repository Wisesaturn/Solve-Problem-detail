import React from 'react'

interface commentProps {
    content : string
}

const comment = (props: commentProps) => {
    return (
        <div className="comment">
            여기에가다 댓글을 답니다.<br />
            내용이 궁금하시죠?<br />
            제작중이니깐 조금만 기달려주세요<br />
            😁
        </div>
    )
}

export default comment
