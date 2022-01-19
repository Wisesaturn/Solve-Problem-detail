import React from 'react';
import Image from 'next/image';
import Picture from '../../../resource/Profile-zepeto.png';
import styled from 'styled-components';
import { Link_Github, Link_Email } from '../../state';
import { AiOutlineMail, AiFillGithub } from 'react-icons/ai';

const Profile = () => {
    return (
        <Profile_wrap>
            <Picture_area />
            <Content_area>
                <p id="title">송재한</p>
                <p id="content">재한쓰의 공부용 블로그 😃</p>
                <Navi_Link_area>
                    <a href={Link_Github}><AiFillGithub size="28" /></a>
                    <a href={Link_Email}><AiOutlineMail size="28" /></a>
                </Navi_Link_area>
            </Content_area>
        </Profile_wrap>

    );
}

const Navi_Link_area = styled.div`
    display : block;
    padding : .5rem 1.5rem;
    > a { 
        margin-right : .5rem;
        text-decoration : none;
        color : inherit;
        &:hover { color : var(--normal-after);}
        &:active { color : var(--normal-active);}
    }
`

const Profile_wrap = styled.div`
    display : block;
    background-color : var(--profile-bg);
    height : 22rem;
    font-weight : bold;
    box-shadow : 0px 1px 3px 1px var(--submenu-shadow);
`

const Picture_area = styled.div`
    position : relative;
    display : inherit;
    width : 13rem;
    height : 13rem;
    margin : 1rem;
    
    background-color : none;
    background-image : url(${Picture});
    background-position : center;
    background-size : 13rem;
    background-color : var(--profile-picture-bg);
    background-repeat : no-repeat;
    border-radius : 6.5rem;
    box-shadow : 0px 1px 3px 2px var(--profile-picture-shadow);

    transition: .6s; -webkit-transition : .6s; -mos-transition : .6s;
`

const Content_area = styled.div`
    display : block;
    > p {
        padding : .5rem 1.5rem;
        &#title { 
            font-size : 1.2rem; 
        };
        &#content {font-size : .8rem; };
    }
`

export default Profile;