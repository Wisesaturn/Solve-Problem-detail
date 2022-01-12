import React from 'react';
import '../css/Footer.scss';
import Profile from '../resource/profile.jpg';

function Footer() {
    return (
        <div className="Footer">
           © 2022 Wisesaturn. Powered by Github with ReactJS <br/>
           Thanks to Myself by 맨 땅에 헤딩
           <div className="Wrap_SNS">
                <div className="SNS">
                    깃허브
                </div>
                <div className="SNS">
                    블로그
                </div>
                <div className="SNS">
                    포트폴리오
                </div>
            </div>
        </div>
    );
}

export default Footer;