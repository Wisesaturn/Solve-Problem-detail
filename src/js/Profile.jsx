import React from 'react';
import { AiOutlineCaretLeft } from 'react-icons/ai';
import '../css/Profile.scss';
import { useRecoilState } from 'recoil';
import { Sitebar_state } from './state';

const Profile = () => {
    const [check, setCheck] = useRecoilState(Sitebar_state);

    return (
        <div className="Profile">
            <div className="Profile_Content">
                프로필 영역입니다.
            </div>
            <AiOutlineCaretLeft size="36" onClick={ () => {setCheck(!check)} }/>
        </div>
    );
}
// 나가는 버튼 따로 png로 만들 예정

export default Profile;