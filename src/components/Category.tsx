import Date from '../components/Date'
import Link from 'next/Link'
import styled from 'styled-components'

interface Cate_type {
    Data : {
        id : string, 
        date : string, 
        title : string,
        categories : string,
        detail ? : string,
    }
    whatPage : string
}

const Category = ({ Data, whatPage } : Cate_type) => {
    return (
        <Link href={`/posts/${whatPage}/${Data.id}`} as={`/posts/${whatPage}/${Data.id}`}>
            <CateWrap>
                <li key={Data.id}>
                    <div className="sub">
                        <h3> {Data.title} </h3> <Date dateString={Data.date} theme="category" />
                    </div>
                    <span>{Data.detail}</span>
                </li>
            </CateWrap>
        </Link>
    )
}

const CateWrap = styled.div`
    display : block;
    padding : .2rem 1.2rem;

    h3 {
        font-size: 1.4rem;
        font-size : bold;
    }

    li {
        padding : 1rem 1rem;
        margin-bottom : .2rem;
        height : 7rem;
        border-bottom : 1px solid var(--bottom-line);

        span {
            display : -webkit-box;
            padding : .7rem .2rem .1rem;
            text-align : justify;
            overflow: hidden;  
            text-overflow: ellipsis;  
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }

        > .sub {
            display : flex;
            align-items : center;
            justify-content : space-between;
        }

        &:hover {
            cursor : pointer;
            text-shadow : 3px 4px 3px var(--category-bg);
            background-color : var(--category-hover);
        }
    }
`

export default Category
