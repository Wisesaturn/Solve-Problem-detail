import React from 'react';
import '../css/Footer.scss';
import Profile from '../resource/profile.jpg';

function Footer() {
    return (
        <div className="Footer">
           © 2022 Wisesaturn. Powered by ReactJS <br/>
           Thanks to Myself by 맨 땅에 헤딩
            <img src={Profile} />
        </div>
    );
}

export default Footer;