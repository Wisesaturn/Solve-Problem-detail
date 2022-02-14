import Date from '../components/Date'
import Link from 'next/Link'
import { checkEnv } from '../components/state'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'

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
    const ENV = useRecoilValue(checkEnv)

    return (
        <Link href={`${ENV}posts/${whatPage}/${Data.id}`} passHref>
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

    li { // 목록 전체
        padding : 1rem 1rem;
        margin-bottom : .2rem;
        height : 7rem;
        border-bottom : 1px solid var(--bottom-line);

        span { // 목록의 설명 영역
            display : -webkit-box;
            padding : .7rem .2rem .1rem;
            text-align : justify;
            overflow: hidden;  
            text-overflow: ellipsis;  
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }

        > .sub { // 목록의 제목 영역
            display : flex;
            align-items : center;
            justify-content : space-between;

                h3 { // 목록의 제목
                    font-size: 1.4rem;
                    font-size : bold;
                }
        }

        &:hover {
            cursor : pointer;
            text-shadow : 3px 4px 3px var(--category-bg);
            background-color : var(--category-hover);
        }
    }
 
    /*
    // 반응형 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        $boundary0: 1280px; // Laptop ~ Desktop
        $boundary1: 1024px; // Laptop
        $boundary2: 768px; // Tablet
        $boundary3: 425px; // Mobile
    */

    @media only screen and (max-width: 768px) {
        // 모바일 ~ 태블릿
        li {
            padding : .2rem 0;
            height : 4.8rem;

            span {
                font-size : .7rem;
                padding : .7rem .2rem 0;
            }

            > .sub {
                h3 {
                    font-size : 1rem;
                }
            }
        }
    }

    @media only screen and (max-width: 375px) {
        // 모바일 이하 (갤럭시 폴더 등)
        li {
            padding : .1rem 0;
            height : 4rem;

            span {
                font-size : .4rem;
                padding : .5rem .2rem 0;
            }

            > .sub {
                white-space : nowrap;
                h3 {
                    font-size : .7rem;
                }
                time {
                    font-size : .7rem;
                }
            }
        }
    }
`

export default Category
