import React from 'react';
import '../../css/Footer.scss';
import Github from '../../resource/Mark-Github.png';
import Naver from '../../resource/Mark-naverBlog.png';

function Footer() {
    return (
        <div className="Footer">
           © 2022 Wisesaturn All Rights Reserved. Powered by Github with ReactJS. <br/>
           Thanks to Myself by 맨 땅에 헤딩
           <div className="Wrap_SNS">
                <div className="SNS">
                    <img src={Github}
                        className="image"
                        alt="Github"
                        width="36"
                        height="36"/>
                </div>
                <div className="SNS">
                    <img src={Naver}
                        id="naver"
                        className="image"
                        alt="Naver"
                        width="29"
                        height="29" />
                </div>
                <div className="SNS">
                    포트폴리오
                </div>
            </div>
        </div>
    );
}

export default Footer;