import React, { useState } from 'react';
import Profile from './Profile';
import Search from './Search';
import '../css/Navigator.scss';
import { useRecoilState } from 'recoil';
import { Sitebar_state } from './state';

const Navigator = () => {
    const [check, setCheck] = useRecoilState(Sitebar_state);
    const Sitebar_style = { display: `${check ? 'flex' : 'none'}` }

    return (
        <div className="Navigator_Wrap"
            visible= {false ? {check} : undefined}
            // attribute 오류 수정
            // 그냥 visible={check}로 넣으면 type이 안 정해져 있어서 오류 남!
            style={Sitebar_style}>
            
            <Profile />
            <Search />
            <div className="Navigator">    
                <li>목록 1</li>
                <li>목록 2</li>
                <li>목록 3</li>
                <li>목록 4</li>
                <li>목록 5</li>
                <li>목록 6</li>
                <li>목록 7</li>
                <li>목록 8</li>
                <li>목록 9</li>
                <li>목록 10</li>
                <li>목록 5</li>
                <li>목록 6</li>
                <li>목록 7</li>
                <li>목록 8</li>
                <li>목록 9</li>
                <li>목록 10</li>
                <li>목록 5</li>
                <li>목록 6</li>
                <li>목록 7</li>
                <li>목록 8</li>
                <li>목록 9</li>
                <li>목록 10</li>
                <li>목록 5</li>
                <li>목록 6</li>
                <li>목록 7</li>
                <li>목록 8</li>
                <li>목록 9</li>
                <li>목록 끝-----</li>
            </div>
        </div>
    )
}


export default Navigator;