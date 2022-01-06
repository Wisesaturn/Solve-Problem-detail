import React from 'react';
import Level from './Level';
import '../css/Header.scss';

function Header() {
    return (
        <div className="Header">
            <h1>재한쓰 풀이 모음집 - 프로그래머스</h1>
            <Level />
        </div>
    );
}

export default Header;