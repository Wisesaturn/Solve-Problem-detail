import { AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import { Link_Email, Link_Github } from '../../state'
import React from 'react'
import styled from 'styled-components'

const Profile = () => {
    return (
        <ProfileWrap>
            <PictureArea />
            <ContentArea>
                <p id="title">송재한</p>
                <p id="content">재한쓰의 공부용 블로그 😃</p>
                <NaviLinkArea>
                    <a href={Link_Github}><AiFillGithub size="28" /></a>
                    <a href={Link_Email}><AiOutlineMail size="28" /></a>
                </NaviLinkArea>
            </ContentArea>
        </ProfileWrap>

    )
}

const NaviLinkArea = styled.div`
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

const ProfileWrap = styled.div`
    display : block;
    background-color : var(--profile-bg);
    height : 22rem;
    font-weight : bold;
    box-shadow : 0px 1px 3px 1px var(--submenu-shadow);
`

const PictureArea = styled.div`
    position : relative;
    display : inherit;
    width : 13rem;
    height : 13rem;
    margin : 1rem;
    
    background-color : none;
    background-image : url(/resource/Profile-zepeto.png);
    background-position : center;
    background-size : 13rem;
    background-color : var(--profile-picture-bg);
    background-repeat : no-repeat;
    border-radius : 6.5rem;
    box-shadow : 0px 1px 3px 2px var(--profile-picture-shadow);

    transition: .6s; -webkit-transition : .6s; -mos-transition : .6s;
`

const ContentArea = styled.div`
    display : block;
    > p {
        padding : .5rem 1.5rem;
        &#title { 
            font-size : 1.2rem; 
        };
        &#content {font-size : .8rem; };
    }
`

export default Profile
