import Image from 'next/image'
import Layout from '../components/Content/contentLayout'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const IndexPage = () => {
    return (
        <Layout>
                <Title>
                    <h2>재한쓰 스터디 블로그</h2>
                </Title>
                <Area>
                    <Link href='/posts/developLog/blog' passHref>
                        <div className="box">
                            <div className="imgbox">
                                <Image
                                    src='/resource/photo/write.jpg'
                                    width='200px'
                                    height='200px'
                                    layout='intrinsic' />
                            </div>
                            <div className="contentBox">
                                    <h2>Blog<br/><span>기록</span></h2>
                            </div>
                        </div>
                    </Link>
                </Area>
        </Layout>
    )
}

const Area = styled.div`
// 참고 : https://youtu.be/RPFfpG0SvV0
    display : flex;
    justify-content : center;
    align-items : center;
    flex-wrap : wrap;
    min-height : 30vh;

    .box {
        position : relative;
        width : 200px;
        height : 200px;
        display : flex;
        justify-content : center;
        align-items : center;
        margin : auto;
        transition : .5s;

        &:hover {
            height : 270px;
            cursor : pointer;

            > .imgbox {
                background-color : none;
                img {
                    opacity : 1;
                }
            }

            .contentBox {
                opacity : 1;
            }

        }

        &:active {
            cursor : wait;
        }

         &:before {
            content: '';
            position : absolute;
            top : -2px;
            left : -2px;
            right : -2px;
            bottom: -2px;
            background : #fff;
            z-index : 1;
        }

        &:after {
            content: '';
            position : absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background : #fff;
            z-index : 0;
            -webkit-filter : blur(10px);
        }

        &:before, &:after {
            background: linear-gradient(235deg,#71B280,#222,#38ef7d);
        }
        
        .imgbox {
            position : absolute;
            top : 0;
            left : 0;
            width : 100%;
            height : 100%;
            padding : 0;
            z-index : 2;
            background-color : #060c21;
            box-sizing : border-box;

            img {
                max-width : 100%;
                opacity : .1;
                transition : .5s;
                z-index : 2;
            }
        }

        .contentBox {
            position : absolute;
            left : 10px;
            right : 10px;
            bottom : 5px;
            height : 60px;
            background : rgba(0,0,0,.4);
            display : flex;
            justify-content : center;
            align-items : center;
            opacity: 0;
            z-index : 2;
            transition : .5s;

            h2 {
                font-size : 1.4rem;
                text-align : center;
                color : #fff;
                font-weight : 500;
                line-height : 20px;
                letter-spacing : 1px;

                span {
                    font-size : .8rem;
                    color : #71B280;
                    font-weight : 200;
                    letter-spacing : 2px;
                }
            }
        }
    }
`

const Title = styled.div`
    display : block;
    height : 30vh;
    h2 {
        font-size : 36px;
        text-align : center;
        margin-top : 5vh;
    }   
`

export default IndexPage
