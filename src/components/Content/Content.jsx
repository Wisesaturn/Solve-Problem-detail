import React from 'react';
import Navigator from './Navigator/Navigator';
import Data from './Data';
import { useRecoilValue } from 'recoil';
import { Sitebar_state } from '../state';

function Content() {
    const check = useRecoilValue(Sitebar_state);

    return (
        <div className="Content">
            <Navigator visible={false ? { check } : undefined} />
            <Data />
        </div>
    );
}

export default Content;

// attribute 오류 수정
// 그냥 visible={check}로 넣으면 type이 안 정해져 있어서 오류 남!